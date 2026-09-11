/* ==========================================================================
   PARTIALS — shared header + footer, injected on every page so nav/footer
   only need to be maintained in one place. Uses SITE_DATA for real contact
   info/links. Active nav link is set from body[data-page].
   ========================================================================== */

const ICONS = {
  phone: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.9c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .7-.2 1L6.6 10.8Z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.6.1-.2.3-.7 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5C10 9 9.5 7.8 9.3 7.3c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3ZM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5C8.3 21.5 10.1 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2Zm0 18c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3 .9.9-2.9-.2-.3C3.9 15 3.3 13.5 3.3 12c0-4.8 3.9-8.7 8.7-8.7s8.7 3.9 8.7 8.7-3.9 8.7-8.7 8.7Z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M13.5 21v-7.5H16l.4-3H13.5V8.4c0-.9.2-1.5 1.5-1.5H16.5V4.2C16.2 4.2 15.2 4 14 4c-2.4 0-4 1.5-4 4.1v2.4H7.5v3H10V21h3.5Z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="3.6"/><circle cx="17.2" cy="6.8" r="1"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M14.7 3h2.4c.2 1.4 1.1 2.7 2.6 3.2 .5.2 1 .3 1.6.3v2.5c-1.4 0-2.7-.4-3.9-1.2v6.4c0 3.1-2.5 5.6-5.6 5.6S6.2 17.3 6.2 14.2c0-3 2.3-5.4 5.2-5.6v2.5c-1.6.2-2.8 1.5-2.8 3.1 0 1.7 1.4 3.1 3.1 3.1s3.1-1.4 3.1-3.1V3Z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
};

function renderHeader(active){
  const b = SITE_DATA.brand;
  const links = [
    ["index.html","nav.inicio","inicio"],
    ["nosotros.html","nav.nosotros","nosotros"],
    ["servicios.html","nav.servicios","servicios"],
    ["residencias.html","nav.residencias","residencias"],
    ["staff.html","nav.staff","staff"],
    ["galeria.html","nav.galeria","galeria"],
    ["blog.html","nav.blog","blog"],
    ["contacto.html","nav.contacto","contacto"]
  ];
  const navHtml = links.map(function(l){
    return `<a href="${l[0]}" data-i18n="${l[1]}" class="${active===l[2]?'is-active':''}"${active===l[2]?' aria-current="page"':''}></a>`;
  }).join("");

  return `
  <div class="nav-inner container">
    <a href="index.html" class="brand" aria-label="${b.name} — inicio">
      <img src="${b.logo}" alt="${b.name}">
      <span class="sr-only">${b.name}</span>
    </a>
    <nav class="nav-links" aria-label="Principal">${navHtml}</nav>
    <div class="nav-right">
      <div class="lang-switch" role="group" aria-label="Idioma / Language"><span class="lang-thumb" aria-hidden="true"></span>
        <button type="button" data-lang="es" aria-pressed="true">ES</button>
        <button type="button" data-lang="en" aria-pressed="false">EN</button>
      </div>
      <a class="btn btn-primary btn-sm nav-cta" href="${b.whatsapp.agendar}" target="_blank" rel="noopener" data-i18n="nav.agendar"></a>
      <button class="nav-toggle" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobileDrawer">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>`;
}

/* The mobile drawer used to be nested inside #site-header's own markup —
   but .site-header has backdrop-filter, and backdrop-filter (like
   transform/filter/perspective) creates a new containing block for any
   position:fixed descendant. That silently broke "position:fixed; inset:0"
   on the drawer: instead of covering the viewport, it was being sized to
   the HEADER's own small box (just its height), so the drawer's real
   background only covered a thin strip and its overflowing nav links
   rendered with no backdrop behind them — visible bleed-through over
   whatever was under the header (worst on iOS Safari, but a real bug
   everywhere). Fix: render the drawer as its own top-level element,
   appended directly to <body>, never nested inside anything with
   backdrop-filter/filter/transform. */
function renderMobileDrawer(){
  const b = SITE_DATA.brand;
  const links = [
    ["index.html","nav.inicio","inicio"],
    ["nosotros.html","nav.nosotros","nosotros"],
    ["servicios.html","nav.servicios","servicios"],
    ["residencias.html","nav.residencias","residencias"],
    ["staff.html","nav.staff","staff"],
    ["galeria.html","nav.galeria","galeria"],
    ["blog.html","nav.blog","blog"],
    ["contacto.html","nav.contacto","contacto"]
  ];
  return `
  <div class="mobile-drawer" id="mobileDrawer">
    <div class="drawer-topbar flex items-center gap-2" style="justify-content:space-between">
      <div class="lang-switch" role="group" aria-label="Idioma / Language"><span class="lang-thumb" aria-hidden="true"></span>
        <button type="button" data-lang="es" aria-pressed="true">ES</button>
        <button type="button" data-lang="en" aria-pressed="false">EN</button>
      </div>
      <button class="nav-toggle drawer-close" aria-label="Cerrar menú">
        <span style="transform:rotate(45deg) translate(1px,1px)"></span>
        <span style="opacity:0"></span>
        <span style="transform:rotate(-45deg) translate(1px,-1px)"></span>
      </button>
    </div>
    <nav>${links.map(function(l){ return `<a href="${l[0]}" data-i18n="${l[1]}"></a>`; }).join("")}</nav>
    <div class="drawer-actions">
      <a class="btn btn-primary" href="${b.whatsapp.agendar}" target="_blank" rel="noopener" data-i18n="cta.agendarVisita"></a>
      <a class="btn btn-outline" href="${b.telHref}" data-i18n="cta.llamar"></a>
    </div>
  </div>`;
}

function renderFooter(){
  const b = SITE_DATA.brand;
  const sedesHtml = SITE_DATA.sedes.map(function(s){
    return `<li><span data-i18n-target="sede-${s.slug}">${s.es.name}</span><br><span class="text-muted" style="font-size:.85rem">${s.address}</span></li>`;
  }).join("");

  return `
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="${b.logo}" alt="${b.name}">
        <p data-i18n="footer.tagline"></p>
        <div class="footer-social">
          <a href="${b.social.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${ICONS.facebook}</a>
          <a href="${b.social.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.instagram}</a>
          <a href="${b.social.tiktok}" target="_blank" rel="noopener" aria-label="TikTok">${ICONS.tiktok}</a>
        </div>
      </div>
      <div>
        <h4 data-i18n="footer.linksTitle"></h4>
        <ul>
          <li><a href="nosotros.html" data-i18n="nav.nosotros"></a></li>
          <li><a href="servicios.html" data-i18n="nav.servicios"></a></li>
          <li><a href="staff.html" data-i18n="nav.staff"></a></li>
          <li><a href="galeria.html" data-i18n="nav.galeria"></a></li>
          <li><a href="blog.html" data-i18n="nav.blog"></a></li>
        </ul>
      </div>
      <div>
        <h4 data-i18n="footer.sedesTitle"></h4>
        <ul>${sedesHtml}</ul>
      </div>
      <div>
        <h4 data-i18n="footer.contactTitle"></h4>
        <ul>
          <li><a href="${b.whatsapp.info}" target="_blank" rel="noopener">WhatsApp: ${b.phoneDisplay}</a></li>
          <li><a href="${b.telHref}">${b.phoneSecondary}</a></li>
          <li><a href="contacto.html" data-i18n="nav.contacto"></a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; <span id="year"></span> ${b.name}. <span data-i18n="footer.rights"></span></span>
      <div class="flex gap-2" style="flex-wrap:wrap">
        <a href="${b.legal.libroReclamaciones}" target="_blank" rel="noopener" data-i18n="footer.libro"></a>
        <a href="${b.legal.privacidad}" target="_blank" rel="noopener" data-i18n="footer.privacidad"></a>
        <a href="${b.legal.proteccionDatos}" target="_blank" rel="noopener" data-i18n="footer.datos"></a>
      </div>
    </div>
  </div>`;
}

function mountPartials(){
  const active = document.body.getAttribute("data-page");
  const headerEl = document.getElementById("site-header");
  const footerEl = document.getElementById("site-footer");
  if (headerEl){ headerEl.innerHTML = renderHeader(active); }
  if (footerEl){ footerEl.innerHTML = renderFooter(); }
  // Appended directly to <body> — must NOT be nested inside #site-header
  // (or anything else with backdrop-filter/filter/transform), see the
  // comment on renderMobileDrawer for why.
  if (!document.getElementById("mobileDrawer")){
    document.body.insertAdjacentHTML("beforeend", renderMobileDrawer());
  }
  const yearEl = document.getElementById("year");
  if (yearEl){ yearEl.textContent = new Date().getFullYear(); }

  // Lang-switch buttons live inside the header we just injected, so they
  // must be bound here (i18n.js's own DOMContentLoaded listener fires
  // before this markup exists and would find nothing to bind to).
  document.querySelectorAll(".lang-switch button").forEach(function(btn){
    btn.addEventListener("click", function(){ setLang(btn.getAttribute("data-lang")); });
  });

  applyI18n(getLang());
}

document.addEventListener("DOMContentLoaded", mountPartials);
