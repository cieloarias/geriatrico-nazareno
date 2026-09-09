/* ==========================================================================
   RENDER — builds bilingual content components (services, sedes, staff,
   testimonials, certifications, gallery, blog) from SITE_DATA into page
   containers, and re-renders them when the language changes.
   ========================================================================== */

const SERVICE_ICONS = {
  home: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9a1 1 0 0 0 1 1h4v-6h2v6h4a1 1 0 0 0 1-1v-9"/></svg>',
  cross: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 4v16M4 12h16"/></svg>',
  pulse: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 12h4l2 6 4-14 2 8h6"/></svg>',
  clipboard: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1M9 11h6M9 15h6"/></svg>',
  meal: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 3v7a2 2 0 0 0 4 0V3M8 10v11M18 3c-2 1-3 3-3 6s1 3 3 3v9"/></svg>',
  therapy: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="5" r="2.4"/><path d="M6 21l3-7 3 2 3-2 3 7M9 14l-2-5 4-2 4 2-2 5"/></svg>',
  laundry: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="12" cy="13" r="4.2"/><path d="M8 6h.01M11 6h.01"/></svg>'
};

const RENDERERS = [];
function registerRender(fn){ RENDERERS.push(fn); fn(); }

function refreshInteractive(){
  initServiceCards();
  initReveal();
  // Rebuilds the lightbox against fresh <figure> nodes whenever the
  // gallery grid was just re-rendered (e.g. captions changing on
  // language switch) — a no-op if there's no gallery on this page.
  if (document.querySelector(".gallery-grid, .life-mosaic")) initLightbox();
}

document.addEventListener("langchange", function(){
  RENDERERS.forEach(fn => fn());
  refreshInteractive();
});

/* ---- Services ---- */
function renderServices(containerId, opts){
  const el = document.getElementById(containerId);
  if (!el) return;
  opts = opts || {};
  const lang = getLang();
  el.innerHTML = SITE_DATA.services.map(function(s, i){
    const d = s[lang] || s.es;
    return `
      <div class="service-card" data-reveal style="--i:${i}">
        <div class="row-top">
          <span class="ico">${SERVICE_ICONS[s.icon] || ""}</span>
          <h3 class="mt-0">${d.title}</h3>
          <span class="chev">${ICONS.arrow}</span>
        </div>
        <p class="more">${d.short}</p>
      </div>`;
  }).join("");
}

/* ---- Sedes ---- */
function renderSedes(containerId){
  const el = document.getElementById(containerId);
  if (!el) return;
  const lang = getLang();
  el.innerHTML = SITE_DATA.sedes.map(function(s, i){
    const d = s[lang] || s.es;
    const tags = SITE_DATA.services.map(function(sv){ return `<span class="sede-tag">${(sv[lang]||sv.es).title}</span>`; }).join("");
    return `
    <article class="sede-card" data-reveal style="--i:${i}" id="sede-${s.slug}">
      <div class="sede-media"><img src="${s.photo}" alt="${d.name}" loading="lazy"></div>
      <div class="sede-body">
        <h3>${d.name}</h3>
        <p class="text-muted" style="margin-top:.5rem">${d.desc}</p>
        <div class="flex items-center gap-2" style="margin-top:1.2rem"><span class="icon-sm">${ICONS.pin}</span><span style="font-size:.92rem">${s.address}</span></div>
        <div class="flex items-center gap-2" style="margin-top:.6rem"><span class="icon-sm">${ICONS.phone}</span><span style="font-size:.92rem">${s.phones.join(" · ")}</span></div>
        <div class="sede-services">${tags}</div>
        <div class="sede-actions">
          <a class="btn btn-primary btn-sm" href="${SITE_DATA.brand.whatsapp.agendar}" target="_blank" rel="noopener" data-i18n="cta.agendarVisita"></a>
          <a class="btn btn-outline btn-sm" href="${s.mapImage}" target="_blank" rel="noopener" data-i18n="cta.verMapa"></a>
        </div>
      </div>
    </article>`;
  }).join("");
  applyI18n(lang);
}

/* ---- Staff ---- */
function renderStaff(containerId){
  const el = document.getElementById(containerId);
  if (!el) return;
  const lang = getLang();
  el.innerHTML = SITE_DATA.staff.map(function(m, i){
    const d = m[lang] || m.es;
    const formation = d.formation.map(f => `<li>${f}</li>`).join("");
    return `
    <article class="staff-card" data-reveal style="--i:${i}">
      <div class="staff-media"><img src="${m.photo}" alt="${m.name}" loading="lazy"></div>
      <div class="staff-body">
        <div class="eyebrow"><span class="eyebrow-label">${m.cmp}</span></div>
        <h3>${m.name}</h3>
        <dl class="staff-meta">
          <div><dt data-i18n="staff.specialty"></dt><dd>${d.specialty}</dd></div>
          <div><dt data-i18n="staff.attention"></dt><dd>${d.attention}</dd></div>
          <div><dt data-i18n="staff.location"></dt><dd>${d.location}</dd></div>
          <div><dt data-i18n="staff.interest"></dt><dd>${d.interest}</dd></div>
        </dl>
        <div>
          <dt style="font-size:.72rem;text-transform:uppercase;letter-spacing:.08em;color:var(--color-ink-soft)" data-i18n="staff.formation"></dt>
          <ul class="staff-list" style="margin-top:.5rem">${formation}</ul>
        </div>
        <a class="btn btn-outline btn-sm" style="align-self:flex-start;margin-top:.4rem" href="${SITE_DATA.brand.whatsapp.agendar}" target="_blank" rel="noopener" data-i18n="cta.agendarVisita"></a>
      </div>
    </article>`;
  }).join("");
  applyI18n(lang);
}

/* ---- Staff — full editorial profile (dedicated staff.html page) ----
   Each real doctor gets a full split-editorial profile (photo + complete
   credentials), alternating which side the photo sits on so the two
   profiles don't read as identical repeated cards. Reuses the same
   .staff-meta/.staff-list pieces as the compact renderStaff() card so
   the two stay visually consistent. */
function renderStaffEditorial(containerId){
  const el = document.getElementById(containerId);
  if (!el) return;
  const lang = getLang();
  el.innerHTML = SITE_DATA.staff.map(function(m, i){
    const d = m[lang] || m.es;
    const formation = d.formation.map(f => `<li>${f}</li>`).join("");
    const photo = `<figure class="split-editorial-media"><img src="${m.photo}" alt="${m.name}" loading="lazy" style="object-position: top center"></figure>`;
    const info = `
      <div class="split-editorial-intro">
        <div class="eyebrow"><span class="eyebrow-label">${m.cmp}</span></div>
        <h2 style="margin-top:.6rem">${m.name}</h2>
        <dl class="staff-meta" style="margin-top:1.2rem">
          <div><dt data-i18n="staff.specialty"></dt><dd>${d.specialty}</dd></div>
          <div><dt data-i18n="staff.attention"></dt><dd>${d.attention}</dd></div>
          <div><dt data-i18n="staff.location"></dt><dd>${d.location}</dd></div>
          <div><dt data-i18n="staff.interest"></dt><dd>${d.interest}</dd></div>
        </dl>
        <div style="margin-top:.6rem">
          <dt style="font-size:.72rem;text-transform:uppercase;letter-spacing:.08em;color:var(--color-ink-soft)" data-i18n="staff.formation"></dt>
          <ul class="staff-list" style="margin-top:.5rem">${formation}</ul>
        </div>
        <a class="btn btn-outline btn-sm" style="align-self:flex-start;margin-top:1.2rem" href="${SITE_DATA.brand.whatsapp.agendar}" target="_blank" rel="noopener" data-i18n="cta.agendarVisita"></a>
      </div>`;
    // Even profiles: photo left. Odd profiles: photo right (reversed) —
    // alternation is purely visual (DOM order), no content difference.
    const body = i % 2 === 0 ? photo + info : info + photo;
    return `<div class="split-editorial staff-profile" data-reveal>${body}</div>`;
  }).join("");
  applyI18n(lang);
}

/* ---- Testimonials ---- */
/* Real hierarchy, not decoration: the testimonial with the most substance
   (Patricia Boza's, by far the longest and most detailed) is featured in
   a large light card; the two short, quotable ones sit as translucent
   secondary cards. All three are the real, unedited testimonials. */
/* Elegant, calm carousel through all the real testimonials (there are
   only 3 — every one gets shown, in the order they exist in SITE_DATA,
   not just "featured + 2 others"). Quote/name crossfade and the counter
   updates on each step; arrows wrap around. No star ratings — the
   source site never published any, so showing them would be a
   fabricated trust signal. */
function renderTestimonials(containerId){
  const el = document.getElementById(containerId);
  if (!el) return;
  const lang = getLang();
  const items = SITE_DATA.testimonials;
  function initials(name){ return name.split(" ").map(w => w[0]).slice(0, 2).join(""); }

  el.innerHTML = `
    <div class="testi-carousel-quote">
      <p data-role="quote"></p>
      <div class="testi-who">
        <span class="testi-avatar" data-role="avatar"></span>
        <strong data-role="name"></strong>
      </div>
    </div>
    <div class="testi-carousel-nav">
      <span class="testi-carousel-counter" data-role="counter"></span>
      <div class="testi-carousel-arrows">
        <button type="button" data-dir="-1" aria-label="Anterior">
          <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 6l-6 6 6 6"/></svg>
        </button>
        <button type="button" data-dir="1" aria-label="Siguiente">
          <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg>
        </button>
      </div>
    </div>`;

  const quoteEl = el.querySelector('[data-role="quote"]');
  const avatarEl = el.querySelector('[data-role="avatar"]');
  const nameEl = el.querySelector('[data-role="name"]');
  const counterEl = el.querySelector('[data-role="counter"]');
  let current = 0;

  function show(i){
    current = (i + items.length) % items.length;
    const t = items[current];
    const quote = t[lang] || t.es;
    const applyText = () => {
      quoteEl.textContent = quote;
      avatarEl.textContent = initials(t.name);
      nameEl.textContent = t.name;
      counterEl.textContent = `${String(current + 1).padStart(2, "0")} / ${String(items.length).padStart(2, "0")}`;
    };
    if (typeof gsap !== "undefined" && !REDUCED_MOTION){
      gsap.to([quoteEl, nameEl, avatarEl], {
        opacity: 0, y: 6, duration: .16, ease: "power1.in",
        onComplete: () => {
          applyText();
          gsap.fromTo([quoteEl, nameEl, avatarEl], { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: .35, stagger: .03, ease: "power2.out" });
        }
      });
    } else {
      applyText();
    }
  }
  show(0);

  el.querySelectorAll(".testi-carousel-arrows button").forEach(btn => {
    btn.addEventListener("click", () => show(current + Number(btn.getAttribute("data-dir"))));
  });
}

/* ---- Certifications ---- */
function renderCertifications(containerId){
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = SITE_DATA.certifications.map(function(c){
    return `<img src="${c.img}" alt="${c.alt}" loading="lazy">`;
  }).join("");
}

/* ---- Gallery ---- */
function renderGallery(containerId, opts){
  const el = document.getElementById(containerId);
  if (!el) return;
  opts = opts || {};
  const lang = getLang();
  const items = opts.limit ? SITE_DATA.gallery.slice(0, opts.limit) : SITE_DATA.gallery;
  el.innerHTML = items.map(function(g){
    const cap = g[lang] || g.es;
    return `<figure><img src="${g.img}" alt="${cap}" loading="lazy"><figcaption>${cap}</figcaption></figure>`;
  }).join("");
}

/* ---- Gallery mosaic — the full, immersive asymmetric version of the
   gallery (used on galeria.html). Reuses the same .life-mosaic/.life-tile
   system as "Vida en Nazareno" for a consistent visual language, adds one
   mixed-media video tile (the real hero footage) partway through, and
   feeds the same lightbox used elsewhere (video tile excluded from it —
   see initLightbox's `img` filter). */
function renderGalleryMosaic(containerId){
  const el = document.getElementById(containerId);
  if (!el) return;
  const lang = getLang();
  const items = SITE_DATA.gallery;
  const videoTile = `
    <figure class="life-tile span-wide">
      <video autoplay muted loop playsinline preload="metadata" poster="${SITE_DATA.brand.heroVideo.poster}" aria-label="Video de la sede San Borja">
        <source src="${SITE_DATA.brand.heroVideo.mp4}" type="video/mp4">
      </video>
    </figure>`;
  const tiles = items.map(function(g, i){
    const cap = g[lang] || g.es;
    const spanClass = g.span === "wide" ? " span-wide" : g.span === "tall" ? " span-tall" : "";
    const num = String(i + 1).padStart(2, "0");
    return `<figure class="life-tile${spanClass}"><span class="life-tile-num">${num}</span><img src="${g.img}" alt="${cap}" loading="lazy"><figcaption>${cap}</figcaption></figure>`;
  });
  // Insert the video moment after the fourth tile so it reads as part of
  // the story rather than bolted on at the start or end.
  tiles.splice(4, 0, videoTile);
  el.innerHTML = tiles.join("");
}

/* ---- Blog ---- */
/* Lean editorial card, not a boxed component: image, a thin hairline
   (not a full border/background/shadow box), then compact type. */
function blogCardHtml(post, lang, i){
  const d = post[lang] || post.es;
  const href = post.body ? `blog-articulo.html?post=${post.slug}` : post.externalUrl;
  const external = !post.body;
  const linkAttr = external ? 'target="_blank" rel="noopener"' : "";
  return `
  <article class="blog-card-lean" data-reveal style="--i:${i}">
    <a class="blog-card-lean-media" href="${href}" ${linkAttr}>
      <img src="${post.image}" alt="${d.title}" loading="lazy">
    </a>
    <div class="blog-card-lean-body">
      <h3><a href="${href}" ${linkAttr}>${d.title}</a></h3>
      <p>${d.dek}</p>
      <a class="read-more" href="${href}" ${linkAttr}>
        <span data-i18n="cta.leerMas"></span> ${ICONS.arrow}
      </a>
    </div>
  </article>`;
}

function renderBlog(containerId, opts){
  const el = document.getElementById(containerId);
  if (!el) return;
  opts = opts || {};
  const lang = getLang();
  let items = SITE_DATA.blog;
  if (opts.slugs) items = opts.slugs.map(s => SITE_DATA.blog.find(p => p.slug === s)).filter(Boolean);
  else if (opts.limit) items = items.slice(0, opts.limit);
  if (opts.exclude) items = items.filter(p => !opts.exclude.includes(p.slug));
  el.innerHTML = items.map((p, i) => blogCardHtml(p, lang, i)).join("");
  applyI18n(lang);
}

/* ---- Blog — featured article (dedicated blog.html page only). Uses the
   one real post whose full body we captured, so "Leer más" goes to a real
   in-site article page rather than an external link. ---- */
function renderBlogFeatured(containerId){
  const el = document.getElementById(containerId);
  if (!el) return;
  const lang = getLang();
  const post = SITE_DATA.blog.find(p => p.body) || SITE_DATA.blog[0];
  const d = post[lang] || post.es;
  el.innerHTML = `
    <a class="blog-featured-media" href="blog-articulo.html?post=${post.slug}">
      <img src="${post.image}" alt="${d.title}" loading="eager">
    </a>
    <div class="blog-featured-body">
      <span class="blog-tag" data-i18n="blog.featuredTag"></span>
      <h3><a href="blog-articulo.html?post=${post.slug}">${d.title}</a></h3>
      <p>${d.dek}</p>
      <a class="link-arrow" href="blog-articulo.html?post=${post.slug}"><span data-i18n="cta.leerMas"></span>${ICONS.arrow}</a>
    </div>`;
  applyI18n(lang);
  return post.slug;
}

/* ---- Single blog article (blog-articulo.html) ---- */
function renderBlogArticle(){
  const container = document.getElementById("articleContainer");
  if (!container) return;
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("post");
  const post = SITE_DATA.blog.find(p => p.slug === slug) || SITE_DATA.blog.find(p => p.body);
  const lang = getLang();
  const d = post[lang] || post.es;
  const paragraphs = (post.body[lang] || post.body.es).map(p => `<p>${p}</p>`).join("");
  container.innerHTML = `
    <div class="breadcrumb"><a href="blog.html" data-i18n="nav.blog"></a> / <span>${d.title}</span></div>
    <div class="eyebrow"><span class="eyebrow-label" data-i18n="blog.eyebrow"></span></div>
    <h1>${d.title}</h1>
    <div class="card-media" style="aspect-ratio:16/9;border-radius:var(--radius-lg);margin:2rem 0">
      <img src="${post.image}" alt="${d.title}" style="width:100%;height:100%;object-fit:cover">
    </div>
    <div class="article-body lede" style="max-width:70ch">${paragraphs}</div>
    <a class="link-arrow" href="blog.html" style="margin-top:2rem;display:inline-flex">
      <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>
      <span data-i18n="blog.backToBlog"></span>
    </a>
    <div id="articleRelated" style="margin-top:3.5rem"></div>
    <div class="cta-band cta-band-photo" style="margin-top:3rem">
      <img src="assets/images/gallery/navidad1.jpg" alt="" aria-hidden="true">
      <div>
        <h2 data-i18n="home.ctaBandTitle"></h2>
        <p class="text-muted" style="color:rgba(255,255,255,.8)" data-i18n="home.ctaBandLede"></p>
      </div>
      <div class="actions">
        <a class="btn btn-accent" href="${SITE_DATA.brand.whatsapp.agendar}" target="_blank" rel="noopener" data-i18n="cta.agendarVisita"></a>
      </div>
    </div>`;
  applyI18n(lang);
  document.title = d.title + " | Geriátrico Señor de Nazareno";

  const relatedEl = document.getElementById("articleRelated");
  if (relatedEl){
    relatedEl.innerHTML = `<h3 data-i18n="blog.relatedTitle" style="margin-bottom:1.6rem"></h3><div class="grid grid-3" id="articleRelatedGrid"></div>`;
    applyI18n(lang);
    renderBlog("articleRelatedGrid", { exclude: [post.slug], limit: 3 });
  }
}

/* ---- Services explorer (legacy, still used by nothing directly but kept
   available) — superseded on all three pages by renderServicesEditorial
   below, which is the "biggest upgrade" version: a compact icon tab strip
   instead of a tall accordion list, a floating detail card over a large
   photo, and numbered pagination. Same underlying SITE_DATA.services. ---- */
function renderServicesExplorer(containerId){
  const el = document.getElementById(containerId);
  if (!el) return;
  const lang = getLang();
  const rows = SITE_DATA.services.map(function(s, i){
    const d = s[lang] || s.es;
    return `
      <button type="button" class="service-row${i === 0 ? ' is-active' : ''}" data-index="${i}" aria-expanded="${i === 0 ? 'true' : 'false'}">
        <span class="num">0${i + 1}</span>
        <span>
          <h3 class="mt-0">${d.title}</h3>
          <span class="desc">${d.long || d.short}</span>
        </span>
        <span class="arrow-ico">${ICONS.arrow}</span>
      </button>`;
  }).join("");
  const images = SITE_DATA.services.map(function(s, i){
    const d = s[lang] || s.es;
    return `<img class="${i === 0 ? 'is-active' : ''}" data-index="${i}" src="${s.image}" alt="${d.title}" loading="${i === 0 ? 'eager' : 'lazy'}">`;
  }).join("");

  el.innerHTML = `
    <div class="services-list" role="tablist" aria-label="Servicios">${rows}</div>
    <div class="services-visual">${images}<span class="visual-label" id="${containerId}-label">${(SITE_DATA.services[0][lang] || SITE_DATA.services[0].es).title}</span></div>`;

  const rowEls = el.querySelectorAll(".service-row");
  const imgEls = el.querySelectorAll(".services-visual img");
  const label = el.querySelector(".visual-label");
  function activate(i){
    rowEls.forEach(r => {
      const on = r.getAttribute("data-index") === String(i);
      r.classList.toggle("is-active", on);
      r.setAttribute("aria-expanded", on ? "true" : "false");
    });
    imgEls.forEach(img => img.classList.toggle("is-active", img.getAttribute("data-index") === String(i)));
    const svc = SITE_DATA.services[i];
    if (svc && label) label.textContent = (svc[lang] || svc.es).title;
  }
  rowEls.forEach(row => {
    const i = row.getAttribute("data-index");
    row.addEventListener("mouseenter", () => activate(i));
    row.addEventListener("click", () => activate(i));
    row.addEventListener("focus", () => activate(i));
  });
}

/* ---- Services editorial — compact icon tab strip + a large photo with a
   floating numbered detail card, plus a numeral pagination row. Switching
   services crossfades the photo and text-reveals the card via GSAP (falls
   back to an instant swap if GSAP isn't available or reduced-motion is on). */
function renderServicesEditorial(containerId){
  const el = document.getElementById(containerId);
  if (!el) return;
  const lang = getLang();
  const services = SITE_DATA.services;

  const tabs = services.map(function(s, i){
    const d = s[lang] || s.es;
    return `
      <button type="button" class="service-tab${i === 0 ? ' is-active' : ''}" data-index="${i}" role="tab" aria-selected="${i === 0}" aria-label="${d.title}">
        <span class="ico">${SERVICE_ICONS[s.icon] || ""}</span>
        <span>${d.title}</span>
      </button>`;
  }).join("");

  const images = services.map(function(s, i){
    const d = s[lang] || s.es;
    return `<img class="${i === 0 ? 'is-active' : ''}" data-index="${i}" src="${s.image}" alt="${d.title}" loading="${i === 0 ? 'eager' : 'lazy'}">`;
  }).join("");

  const pagination = services.map(function(s, i){
    return `<button type="button" class="${i === 0 ? 'is-active' : ''}" data-index="${i}" aria-label="${i + 1}">${String(i + 1).padStart(2, "0")}</button>`;
  }).join("");

  const first = services[0][lang] || services[0].es;
  el.innerHTML = `
    <div class="services-editorial-intro">
      <div class="eyebrow"><span class="eyebrow-label" data-i18n="home.servicesEyebrow"></span></div>
      <h2 data-i18n-html="home.servicesTitleHtml"></h2>
      <p class="lede" data-i18n="home.servicesLede"></p>
      <a class="link-arrow" href="servicios.html"><span data-i18n="cta.verServicios"></span>${ICONS.arrow}</a>
      <div class="services-tabstrip" role="tablist" aria-label="Servicios">${tabs}</div>
    </div>
    <div class="services-editorial-visual">
      <div class="services-editorial-media">${images}</div>
      <div class="services-editorial-card">
        <div class="row-top">
          <span class="section-num" data-role="num">01</span>
          <h3 data-role="title">${first.title}</h3>
          <span class="arrow-ico">${ICONS.arrow}</span>
        </div>
        <p data-role="desc">${first.long || first.short}</p>
      </div>
      <div class="services-editorial-pagination">${pagination}</div>
    </div>`;
  applyI18n(lang);

  const tabEls = el.querySelectorAll(".service-tab");
  const imgEls = el.querySelectorAll(".services-editorial-media img");
  const pagEls = el.querySelectorAll(".services-editorial-pagination button");
  const numEl = el.querySelector('[data-role="num"]');
  const titleEl = el.querySelector('[data-role="title"]');
  const descEl = el.querySelector('[data-role="desc"]');

  function activate(i){
    i = String(i);
    tabEls.forEach(t => {
      const on = t.getAttribute("data-index") === i;
      t.classList.toggle("is-active", on);
      t.setAttribute("aria-selected", on ? "true" : "false");
    });
    imgEls.forEach(img => img.classList.toggle("is-active", img.getAttribute("data-index") === i));
    pagEls.forEach(p => p.classList.toggle("is-active", p.getAttribute("data-index") === i));
    const svc = services[Number(i)];
    if (!svc) return;
    const d = svc[lang] || svc.es;
    const applyText = () => {
      numEl.textContent = String(Number(i) + 1).padStart(2, "0");
      titleEl.textContent = d.title;
      descEl.textContent = d.long || d.short;
    };
    if (typeof gsap !== "undefined" && !REDUCED_MOTION){
      gsap.to([numEl, titleEl, descEl], {
        opacity: 0, y: 6, duration: .18, ease: "power1.in",
        onComplete: () => {
          applyText();
          gsap.fromTo([numEl, titleEl, descEl], { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: .35, stagger: .04, ease: "power2.out" });
        }
      });
    } else {
      applyText();
    }
  }
  tabEls.forEach(tab => {
    const i = tab.getAttribute("data-index");
    tab.addEventListener("mouseenter", () => activate(i));
    tab.addEventListener("click", () => activate(i));
    tab.addEventListener("focus", () => activate(i));
  });
  pagEls.forEach(btn => {
    const i = btn.getAttribute("data-index");
    btn.addEventListener("click", () => activate(i));
  });
}

/* ---- Services — full editorial chapters (dedicated servicios.html) ----
   Every real service gets its own full chapter: a large photo and its
   complete (real, not truncated) description, alternating which side the
   photo sits on so seven chapters don't read as seven identical rows. */
function renderServicesChapters(containerId){
  const el = document.getElementById(containerId);
  if (!el) return;
  const lang = getLang();
  const chapters = SITE_DATA.services.map(function(s, i){
    const d = s[lang] || s.es;
    const num = String(i + 1).padStart(2, "0");
    const photo = `<figure class="split-editorial-media"><img src="${s.image}" alt="${d.title}" loading="lazy"></figure>`;
    const info = `
      <div class="split-editorial-intro">
        <div class="service-chapter-head">
          <span class="section-num">${num}</span>
          <h2>${d.title}</h2>
        </div>
        <p class="lede">${d.long || d.short}</p>
      </div>`;
    const body = i % 2 === 0 ? photo + info : info + photo;
    return `<article class="split-editorial service-chapter" data-reveal>${body}</article>`;
  });
  // Seven identical alternating image/text chapters in a row reads as
  // templated — a real pull-quote breaks the rhythm partway through
  // instead of adding an 8th invented layout.
  const t = SITE_DATA.testimonials.find(x => x.name === "Liz Palomino") || SITE_DATA.testimonials[0];
  const quote = `
    <div class="service-chapter-quote" data-reveal>
      <p>&ldquo;${t[lang] || t.es}&rdquo;</p>
      <span>— ${t.name}</span>
    </div>`;
  chapters.splice(3, 0, quote);
  el.innerHTML = chapters.join("");
}

/* ---- Residencias — large architectural cards in the dark immersive
   section: a real "sede principal / segunda residencia" badge (taken
   directly from the existing description copy, not invented), the photo,
   address/phone, and a single persistent circular action button (always
   visible — not hover-only, so it works on touch) instead of a pair of
   pill buttons competing for attention. ---- */
function renderResidenceBig(containerId){
  const el = document.getElementById(containerId);
  if (!el) return;
  const lang = getLang();
  el.innerHTML = SITE_DATA.sedes.map(function(s, i){
    const d = s[lang] || s.es;
    const badge = s.badge ? (s.badge[lang] || s.badge.es) : "";
    const media = s.video
      ? `<video src="${s.video}" poster="${s.videoPoster || ""}" autoplay muted loop playsinline aria-label="${d.name}"></video>`
      : `<img src="${s.photo}" alt="${d.name}" loading="lazy">`;
    return `
    <article class="residence-big" data-reveal style="--i:${i}" id="sede-${s.slug}">
      ${media}
      ${badge ? `<span class="pill-label residence-badge">${badge}</span>` : ""}
      <a class="residence-arrow-btn" href="${SITE_DATA.brand.whatsapp.agendar}" target="_blank" rel="noopener" aria-label="${(I18N[lang] && I18N[lang]["cta.agendarVisita"]) || "Agendar visita"}">${ICONS.arrow}</a>
      <div class="residence-big-body">
        <h3>${d.name}</h3>
        <p>${d.desc}</p>
        <div class="residence-big-meta">
          <span><span class="icon-sm" style="width:15px;height:15px;color:#fff">${ICONS.pin}</span>${s.address}</span>
          <span><span class="icon-sm" style="width:15px;height:15px;color:#fff">${ICONS.phone}</span>${s.phones[0]}</span>
        </div>
      </div>
    </article>`;
  }).join("");
}

/* ---- Residencias — full architectural chapters (dedicated
   residencias.html). Each sede gets a full-width media moment (its own
   real photo, or Sede Salvador Dalí's real video) followed by its real
   address/phone/description — not the compact side-by-side cards used
   everywhere else. The two chapters invert their vertical order (media
   then text / text then media) so they read as complementary, not
   identical, moments. No amenities are invented beyond what SITE_DATA
   actually holds for each sede. */
function renderResidenceChapters(containerId){
  const el = document.getElementById(containerId);
  if (!el) return;
  const lang = getLang();
  el.innerHTML = SITE_DATA.sedes.map(function(s, i){
    const d = s[lang] || s.es;
    const badge = s.badge ? (s.badge[lang] || s.badge.es) : "";
    const num = String(i + 1).padStart(2, "0");
    const media = s.video
      ? `<video src="${s.video}" poster="${s.videoPoster || ""}" autoplay muted loop playsinline aria-label="${d.name}"></video>`
      : `<img src="${s.photo}" alt="${d.name}" loading="lazy">`;
    const mediaBlock = `<figure class="residence-chapter-media">${media}</figure>`;
    const bodyBlock = `
      <div class="residence-chapter-body">
        ${badge ? `<div class="eyebrow"><span class="eyebrow-label">${badge}</span></div>` : ""}
        <div class="service-chapter-head" style="margin-top:.6rem">
          <span class="section-num">${num}</span>
          <h2>${d.name}</h2>
        </div>
        <p class="lede">${d.desc}</p>
        <div class="flex items-center gap-2" style="margin-top:1.2rem"><span class="icon-sm">${ICONS.pin}</span><span style="font-size:.92rem">${s.address}</span></div>
        <div class="flex items-center gap-2" style="margin-top:.6rem"><span class="icon-sm">${ICONS.phone}</span><span style="font-size:.92rem">${s.phones.join(" · ")}</span></div>
        <a class="btn btn-accent" style="margin-top:1.6rem" href="${SITE_DATA.brand.whatsapp.agendar}" target="_blank" rel="noopener" data-i18n="cta.agendarVisita"></a>
      </div>`;
    const body = i % 2 === 0 ? mediaBlock + bodyBlock : bodyBlock + mediaBlock;
    return `<div class="residence-chapter" id="sede-${s.slug}" data-reveal>${body}</div>`;
  }).join("");
  applyI18n(lang);
}

/* ---- Residencias — interactive switcher (the dedicated page's signature
   interaction). Left: numbered selector (01 San Borja / 02 Salvador Dalí)
   + the active sede's real address/phone/description. Right: one large
   architectural frame that crossfades between the sede's real photo and
   Sede Salvador Dalí's real video — never both cards shown at once, so
   switching genuinely means "now exploring the other place" rather than
   just visually re-styling a static pair. A two-segment progress line
   (a restrained nod to "continuity of care" rather than a literal medical
   motif) tracks which sede is active. ---- */
function renderResidenceSwitcher(containerId){
  const el = document.getElementById(containerId);
  if (!el) return;
  const lang = getLang();
  const sedes = SITE_DATA.sedes;

  const tabs = sedes.map(function(s, i){
    const d = s[lang] || s.es;
    const num = String(i + 1).padStart(2, "0");
    return `
      <button type="button" class="residence-switch-tab${i === 0 ? ' is-active' : ''}" data-index="${i}" role="tab" aria-selected="${i === 0}">
        <span class="section-num">${num}</span>
        <span>${d.name}</span>
      </button>`;
  }).join("");

  const media = sedes.map(function(s, i){
    const d = s[lang] || s.es;
    return s.video
      ? `<video class="${i === 0 ? 'is-active' : ''}" data-index="${i}" src="${s.video}" poster="${s.videoPoster || ''}" autoplay muted loop playsinline aria-label="${d.name}"></video>`
      : `<img class="${i === 0 ? 'is-active' : ''}" data-index="${i}" src="${s.photo}" alt="${d.name}" loading="eager">`;
  }).join("");

  const progress = sedes.map(function(s, i){
    return `<span class="residence-switch-bar${i === 0 ? ' is-active' : ''}" data-index="${i}"></span>`;
  }).join("");

  const first = sedes[0];
  const firstD = first[lang] || first.es;
  const firstBadge = first.badge ? (first.badge[lang] || first.badge.es) : "";

  el.innerHTML = `
    <div class="residence-switch-intro">
      <div class="eyebrow"><span class="eyebrow-label" data-i18n="sedes.eyebrow"></span></div>
      <h2 style="margin-top:.6rem" data-i18n-html="home.sedesTitleHtml"></h2>
      <div class="residence-switch-tabs" role="tablist" aria-label="Residencias">${tabs}</div>
      <div class="residence-switch-details">
        <span class="pill-label" data-role="badge">${firstBadge}</span>
        <p class="lede" style="margin-top:.9rem" data-role="desc">${firstD.desc}</p>
        <div class="flex items-center gap-2" style="margin-top:1.1rem"><span class="icon-sm">${ICONS.pin}</span><span style="font-size:.92rem" data-role="address">${first.address}</span></div>
        <div class="flex items-center gap-2" style="margin-top:.6rem"><span class="icon-sm">${ICONS.phone}</span><span style="font-size:.92rem" data-role="phones">${first.phones.join(" · ")}</span></div>
        <a class="btn btn-accent" style="margin-top:1.5rem" href="${SITE_DATA.brand.whatsapp.agendar}" target="_blank" rel="noopener" data-i18n="cta.agendarVisita"></a>
      </div>
    </div>
    <div class="residence-switch-visual">
      <div class="residence-switch-media">${media}</div>
      <div class="residence-switch-progress">${progress}</div>
    </div>`;
  applyI18n(lang);

  const tabEls = el.querySelectorAll(".residence-switch-tab");
  const mediaEls = el.querySelectorAll(".residence-switch-media > *");
  const barEls = el.querySelectorAll(".residence-switch-bar");
  const badgeEl = el.querySelector('[data-role="badge"]');
  const descEl = el.querySelector('[data-role="desc"]');
  const addressEl = el.querySelector('[data-role="address"]');
  const phonesEl = el.querySelector('[data-role="phones"]');

  function activate(i){
    i = String(i);
    tabEls.forEach(t => {
      const on = t.getAttribute("data-index") === i;
      t.classList.toggle("is-active", on);
      t.setAttribute("aria-selected", on ? "true" : "false");
    });
    barEls.forEach(b => b.classList.toggle("is-active", b.getAttribute("data-index") === i));

    const outgoing = Array.from(mediaEls).find(m => m.classList.contains("is-active"));
    const incoming = Array.from(mediaEls).find(m => m.getAttribute("data-index") === i);
    if (incoming && incoming !== outgoing){
      if (typeof gsap !== "undefined" && !REDUCED_MOTION){
        // Directional wipe: moving to a higher index arrives from the
        // right, moving back arrives from the left — spatially consistent
        // with the tab order, not just an arbitrary crossfade.
        const outIndex = outgoing ? Number(outgoing.getAttribute("data-index")) : -1;
        const forward = Number(i) > outIndex;
        gsap.set(incoming, { clipPath: forward ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)" });
        incoming.style.zIndex = 2;
        if (outgoing) outgoing.style.zIndex = 1;
        incoming.classList.add("is-active");
        gsap.to(incoming, { clipPath: "inset(0 0 0 0%)", duration: .75, ease: "power3.inOut" });
        if (outgoing){
          const prevOutgoing = outgoing;
          gsap.delayedCall(.75, () => prevOutgoing.classList.remove("is-active"));
        }
      } else {
        mediaEls.forEach(m => m.classList.toggle("is-active", m === incoming));
      }
    }

    const s = sedes[Number(i)];
    if (!s) return;
    const d = s[lang] || s.es;
    const badge = s.badge ? (s.badge[lang] || s.badge.es) : "";
    const applyText = () => {
      if (badgeEl) badgeEl.textContent = badge;
      descEl.textContent = d.desc;
      addressEl.textContent = s.address;
      phonesEl.textContent = s.phones.join(" · ");
    };
    if (typeof gsap !== "undefined" && !REDUCED_MOTION){
      gsap.to([descEl, addressEl, phonesEl], {
        opacity: 0, y: 6, duration: .16, ease: "power1.in",
        onComplete: () => {
          applyText();
          gsap.fromTo([descEl, addressEl, phonesEl], { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: .32, stagger: .04, ease: "power2.out" });
        }
      });
    } else {
      applyText();
    }
  }

  tabEls.forEach(tab => {
    const i = tab.getAttribute("data-index");
    tab.addEventListener("click", () => activate(i));
  });
}

/* ---- Life at Nazareno — legacy mosaic, still used by the full Galería
   page. Superseded on the homepage by renderLifeEditorial below. ---- */
function renderLifeMosaic(containerId){
  const el = document.getElementById(containerId);
  if (!el) return;
  const lang = getLang();
  el.innerHTML = SITE_DATA.lifeAtNazareno.map(function(item){
    const cap = item[lang] || item.es;
    const spanClass = item.span === "wide" ? " span-wide" : item.span === "tall" ? " span-tall" : "";
    return `<figure class="life-tile${spanClass}"><img src="${item.img}" alt="${cap}" loading="lazy"><figcaption>${cap}</figcaption></figure>`;
  }).join("");
}

/* ---- Life at Nazareno — editorial filmstrip. One real photo (a warm,
   human moment) as the large anchor image, the rest of the real photos in
   a horizontally-scrollable strip alongside a real testimonial reused as
   a pull-quote (not a new/invented quote). ---- */
function renderLifeEditorial(containerId){
  const el = document.getElementById(containerId);
  if (!el) return;
  const lang = getLang();
  const items = SITE_DATA.lifeAtNazareno;

  const stripItems = items.map(function(item, i){
    const cap = item[lang] || item.es;
    // Editorial story strip, not a grid: the first frame is the large
    // establishing shot; the rest are narrower portrait frames.
    const sizeClass = i === 0 ? "" : " is-tall";
    return `<figure class="life-strip-item${sizeClass}" data-index="${i}"><img src="${item.img}" alt="${cap}" loading="${i === 0 ? 'eager' : 'lazy'}"><figcaption>${cap}</figcaption></figure>`;
  }).join("");

  el.innerHTML = `
    <div class="life-editorial-intro">
      <div class="eyebrow"><span class="eyebrow-label" data-i18n="home.lifeEyebrow"></span></div>
      <h2 data-i18n-html="home.lifeTitleHtml" style="margin-top:.6rem"></h2>
      <p class="lede" data-i18n="home.lifeLede"></p>
      <a class="link-arrow" href="galeria.html"><span data-i18n="cta.verGaleria"></span>${ICONS.arrow}</a>
      <div class="life-editorial-controls">
        <span class="life-editorial-counter" data-role="counter">01 / ${String(items.length).padStart(2, "0")}</span>
        <div class="life-strip-nav">
          <button type="button" class="prev" aria-label="Anterior"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 6l-6 6 6 6"/></svg></button>
          <button type="button" class="next" aria-label="Siguiente"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg></button>
        </div>
      </div>
    </div>
    <div class="life-strip">${stripItems}</div>`;
  applyI18n(lang);

  const strip = el.querySelector(".life-strip");
  const figures = Array.from(el.querySelectorAll(".life-strip-item"));
  const counter = el.querySelector('[data-role="counter"]');
  let current = 0;

  function updateCounter(i){
    current = i;
    counter.textContent = String(i + 1).padStart(2, "0") + " / " + String(items.length).padStart(2, "0");
  }
  function goTo(i){
    i = Math.max(0, Math.min(items.length - 1, i));
    figures[i]?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    updateCounter(i);
  }
  el.querySelector(".prev")?.addEventListener("click", () => goTo(current - 1));
  el.querySelector(".next")?.addEventListener("click", () => goTo(current + 1));

  // Keep the counter honest if the visitor scrolls the strip directly
  // (touch/trackpad) rather than using the arrows.
  if (typeof IntersectionObserver !== "undefined"){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.6){
          const i = Number(entry.target.getAttribute("data-index"));
          if (!Number.isNaN(i)) updateCounter(i);
        }
      });
    }, { root: strip, threshold: [0.6] });
    figures.forEach(fig => io.observe(fig));
  }

  // Keyboard support: the strip is a real navigable region, not just a
  // scroll container. Left/Right step through frames the same as the
  // arrow buttons.
  strip.setAttribute("tabindex", "0");
  strip.setAttribute("role", "region");
  strip.setAttribute("aria-label", (I18N[lang] && I18N[lang]["home.lifeEyebrow"]) || "Vida en Nazareno");
  strip.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight"){ e.preventDefault(); goTo(current + 1); }
    if (e.key === "ArrowLeft"){ e.preventDefault(); goTo(current - 1); }
  });

  // Desktop mouse drag with momentum — touch/pen keep native OS scrolling
  // (which already has better momentum than anything hand-rolled here).
  // Emil Kowalski's momentum pattern: track release velocity, decay it
  // each frame instead of requiring a hard drag-distance threshold.
  if (typeof window !== "undefined" && "PointerEvent" in window){
    let dragging = false, startX = 0, startScroll = 0, lastX = 0, lastT = 0, velocity = 0, raf = null;

    function stopMomentum(){ if (raf){ cancelAnimationFrame(raf); raf = null; } }

    strip.addEventListener("pointerdown", (e) => {
      if (e.pointerType !== "mouse") return;
      stopMomentum();
      dragging = true;
      strip.classList.add("is-dragging");
      startX = e.clientX; startScroll = strip.scrollLeft;
      lastX = e.clientX; lastT = performance.now();
      velocity = 0;
      strip.setPointerCapture(e.pointerId);
    });
    strip.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      strip.scrollLeft = startScroll - (e.clientX - startX);
      const now = performance.now();
      const dt = now - lastT;
      if (dt > 0) velocity = (e.clientX - lastX) / dt;
      lastX = e.clientX; lastT = now;
    });
    function endDrag(){
      if (!dragging) return;
      dragging = false;
      strip.classList.remove("is-dragging");
      let v = velocity;
      function decay(){
        if (Math.abs(v) < 0.02){ raf = null; return; }
        strip.scrollLeft -= v * 16;
        v *= 0.93;
        raf = requestAnimationFrame(decay);
      }
      raf = requestAnimationFrame(decay);
    }
    strip.addEventListener("pointerup", endDrag);
    strip.addEventListener("pointerleave", endDrag);
    strip.addEventListener("pointercancel", endDrag);
  }
}
