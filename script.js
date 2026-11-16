(function () {
  var BEATS = [
    { id: 'top', label: 'Top Stories', page: 'top-stories.html', dot: 'news' },
    { id: 'tech', label: 'Tech &amp; Science', page: 'tech-science.html', dot: 'science' },
    { id: 'business', label: 'Business', page: 'business.html', dot: 'politics' },
    { id: 'arts', label: 'Arts &amp; Culture', page: 'arts-culture.html', dot: 'ent' },
    { id: 'sports', label: 'Sports', page: 'sports.html', dot: 'sport' }
  ];
  var stories = window.STORIES || [];
  var site = window.SITE || {};
  var pageBeat = document.body.getAttribute('data-beat');

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function beatInfo(id) {
    for (var i = 0; i < BEATS.length; i++) { if (BEATS[i].id === id) return BEATS[i]; }
    return BEATS[0];
  }
  function byBeat(id) { return stories.filter(function (s) { return s.beat === id; }); }
  function meta(s) {
    return 'By ' + esc(site.author || '') + ' · ' + esc(s.date) + ' · ' + esc(s.readTime);
  }
  function card(s) {
    var b = beatInfo(s.beat);
    var media = s.image
      ? '<div class="card__media"><img src="' + esc(s.image) + '" alt="' + esc(s.imageAlt || s.title) + '" loading="lazy"' +
        (s.imagePosition ? ' style="object-position:' + esc(s.imagePosition) + '"' : '') + '></div>'
      : '';
    return '<article class="card"><a href="' + esc(s.url) + '">' + media +
      '<div class="card__body"><span class="tag tag--' + b.dot + '">' + b.label + '</span>' +
      '<h3 class="card__title">' + esc(s.title) + '</h3>' +
      '<p class="card__dek">' + esc(s.dek) + '</p>' +
      '<p class="card__meta">' + meta(s) + '</p></div></a></article>';
  }

  // Story pages take their category from stories.js, so renaming a category never breaks old pages
  var file = location.pathname.split('/').pop();
  for (var k = 0; k < stories.length; k++) {
    if (stories[k].url === file) {
      pageBeat = stories[k].beat;
      var tagEl = document.querySelector('.article-head .tag');
      if (tagEl) { var sb = beatInfo(pageBeat); tagEl.className = 'tag tag--' + sb.dot; tagEl.innerHTML = sb.label; }
      break;
    }
  }

  // Logo badge in the top-left corner and browser-tab icon
  var logoGroup = document.querySelector('.logo-group');
  if (logoGroup) {
    var badgeLink = document.createElement('a');
    badgeLink.href = 'index.html';
    badgeLink.className = 'logo-badge-link';
    badgeLink.setAttribute('aria-label', 'ClearView News home');
    var badgeImg = document.createElement('img');
    badgeImg.src = 'clearview-logo.jpg';
    badgeImg.alt = 'ClearView News logo';
    badgeImg.className = 'logo-badge';
    badgeImg.width = 44; badgeImg.height = 44;
    badgeLink.appendChild(badgeImg);
    logoGroup.insertBefore(badgeLink, logoGroup.firstChild);
  }
  var tabIcon = document.createElement('link');
  tabIcon.rel = 'icon';
  tabIcon.href = 'clearview-logo.jpg';
  document.head.appendChild(tabIcon);

  var active = BEATS.filter(function (b) { return byBeat(b.id).length > 0; });

  // Menu: only categories that have stories
  var nav = document.querySelector('.nav');
  if (nav) {
    nav.innerHTML = active.map(function (b) {
      return '<a href="' + b.page + '" class="nav__link"' + (b.id === pageBeat ? ' aria-current="page"' : '') +
        '><span class="dot dot--' + b.dot + '"></span>' + b.label + '</a>';
    }).join('');
  }

  // Headline strip: real stories only
  var ticker = document.getElementById('ticker');
  var track = document.getElementById('ticker-track');
  if (ticker && track && stories.length) {
    track.innerHTML = stories.map(function (s) {
      return '<a class="ticker__item" href="' + esc(s.url) + '"><span class="dot dot--' + beatInfo(s.beat).dot + '"></span>' + esc(s.title) + '</a>';
    }).join('');
    ticker.hidden = false;
  }

  // Footer
  var fb = document.getElementById('footer-beats');
  if (fb) {
    if (active.length) {
      fb.innerHTML = '<span>Categories</span>' + active.map(function (b) {
        return '<a href="' + b.page + '">' + b.label + '</a>';
      }).join('');
    } else { fb.hidden = true; }
  }
  var fc = document.getElementById('footer-contact');
  if (fc) {
    var h = '<span>Get in touch</span>';
    if (site.email) h += '<a href="mailto:' + esc(site.email) + '">' + esc(site.email) + '</a>';
    if (site.phone) h += '<a href="tel:' + esc(site.phone) + '">' + esc(site.phoneDisplay || site.phone) + '</a>';
    if (site.facebookUrl) {
      h += '<a href="' + esc(site.facebookUrl) + '" target="_blank" rel="noopener">Facebook: ClearView News</a>';
    } else {
      h += '<span class="footer__text">Facebook: ClearView News</span>';
    }
    fc.innerHTML = h;
  }

  var about = document.querySelector('.footer__about');
  if (about && site.about) about.textContent = site.about;

  // Homepage: lead story + one section per category that has stories
  var hero = document.getElementById('hero');
  if (hero) {
    var lead = null;
    for (var i = 0; i < stories.length; i++) { if (stories[i].featured) { lead = stories[i]; break; } }
    lead = lead || stories[0];
    if (lead) {
      var lb = beatInfo(lead.beat);
      hero.innerHTML = '<p class="eyebrow"><span class="dot dot--' + lb.dot + '"></span>Featured — ' + lb.label + '</p>' +
        '<h1 class="headline">' + esc(lead.title) + '</h1>' +
        '<p class="dek">' + esc(lead.heroDek || lead.dek) + '</p>' +
        '<p class="meta">' + meta(lead) + '</p>' +
        '<a href="' + esc(lead.url) + '" class="btn">Read the full report →</a>';
      var wrap = document.createElement('div');
      wrap.className = 'hero-wrap';
      hero.parentNode.insertBefore(wrap, hero);
      wrap.appendChild(hero);
    } else { hero.parentNode.removeChild(hero); }
  }
  var home = document.getElementById('home-sections');
  if (home) {
    home.innerHTML = active.map(function (b) {
      return '<section class="section container"><div class="section__head">' +
        '<h2 class="section__title"><span class="dot dot--' + b.dot + '"></span>' + b.label + '</h2>' +
        '<a href="' + b.page + '" class="section__link">View all ' + b.label.toLowerCase() + ' →</a></div>' +
        '<div class="grid">' + byBeat(b.id).slice(0, 3).map(card).join('') + '</div></section>';
    }).join('');
  }

  // Category pages: every story in that category
  var grid = document.getElementById('beat-grid');
  if (grid) {
    var list = byBeat(pageBeat);
    if (list.length) {
      grid.innerHTML = list.map(card).join('');
    } else {
      grid.className = '';
      grid.innerHTML = '<p class="dek" style="margin:0">No reports here yet. New stories will appear soon.</p>';
    }
  }

  // Mobile menu button
  var toggle = document.querySelector('.nav-toggle');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 700 && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
