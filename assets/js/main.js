/* ==========================================================================
   MAIN — header scroll state, mobile nav, scroll reveals, lightbox,
   service-card expand, testimonial rotation. All motion respects
   prefers-reduced-motion (see CSS + the guard below).
   ========================================================================== */

const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---- Sticky header ----
   On the homepage, the header also carries a transparent "on-hero" state
   (see styles.css) while the full-bleed video hero is still on screen. */
function initHeaderScroll(){
  const header = document.getElementById("site-header");
  if (!header) return;
  const hasHero = !!document.querySelector(".hero-cinematic");
  function onScroll(){
    const scrolled = window.scrollY > 24;
    header.classList.toggle("is-scrolled", scrolled);
    if (hasHero) header.classList.toggle("on-hero", !scrolled);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---- Mobile nav drawer ---- */
function initMobileNav(){
  const toggle = document.querySelector(".nav-toggle:not(.drawer-close)");
  const drawer = document.getElementById("mobileDrawer");
  const header = document.getElementById("site-header");
  if (!toggle || !drawer) return;
  function open(){
    drawer.classList.add("is-open");
    header?.classList.add("backdrop-off");
    toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }
  function close(){
    drawer.classList.remove("is-open");
    header?.classList.remove("backdrop-off");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
  toggle.addEventListener("click", open);
  drawer.querySelector(".drawer-close")?.addEventListener("click", close);
  drawer.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
}

/* ---- Scroll reveal ----
   Powered by GSAP + ScrollTrigger.batch (gsap-scrolltrigger skill): one
   batched observer for every [data-reveal] element instead of a bespoke
   IntersectionObserver, with GSAP's easing doing the actual motion. Falls
   back to an IntersectionObserver if the GSAP CDN script didn't load, and
   to "just show everything" under prefers-reduced-motion. Safe to call
   repeatedly (e.g. after a dynamic re-render on language change) — only
   elements not yet marked `data-revealed` are touched. */
function initReveal(){
  document.querySelectorAll("[data-reveal-stagger]").forEach(group => {
    Array.from(group.children).forEach(child => {
      if (!child.hasAttribute("data-reveal")) child.setAttribute("data-reveal", "");
    });
  });
  const pending = Array.from(document.querySelectorAll("[data-reveal]:not([data-revealed])"));
  if (!pending.length) return;
  pending.forEach(el => el.setAttribute("data-revealed", ""));

  if (REDUCED_MOTION) return; // leave elements in their natural, fully-visible state

  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined"){
    // Fallback: no GSAP available — reveal on intersection with a plain CSS transition.
    pending.forEach(el => {
      el.style.transition = "opacity .6s ease, transform .6s ease";
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          entry.target.style.opacity = "1";
          entry.target.style.transform = "none";
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    pending.forEach(el => io.observe(el));
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.batch(pending, {
    start: "top 88%",
    once: true,
    onEnter: (batch) => gsap.from(batch, {
      opacity: 0, y: 20, duration: .7, ease: "power2.out",
      stagger: 0.09
    })
  });

  // Eyebrow rule: the little horizontal line grows left-to-right, then
  // its label fades up right after — tied to the same scroll trigger as
  // the container's own reveal above, not a generic fadeIn. Animates a
  // CSS custom property (--line-scale) that the ::before rule reads, so
  // no DOM is touched and it survives language-switch re-renders.
  pending.forEach(container => {
    const eyebrows = container.matches(".eyebrow")
      ? [container]
      : Array.from(container.querySelectorAll(".eyebrow"));
    eyebrows.forEach(eyebrow => {
      if (eyebrow.hasAttribute("data-line-bound")) return;
      eyebrow.setAttribute("data-line-bound", "");
      const label = eyebrow.querySelector(".eyebrow-label");
      gsap.set(eyebrow, { "--line-scale": 0 });
      if (label) gsap.set(label, { opacity: 0, x: -4 });
      ScrollTrigger.create({
        trigger: container,
        start: "top 88%",
        once: true,
        onEnter: () => {
          const tl = gsap.timeline();
          tl.to(eyebrow, { "--line-scale": 1, duration: .45, ease: "power2.out" }, 0);
          if (label) tl.to(label, { opacity: 1, x: 0, duration: .35, ease: "power2.out" }, .22);
        }
      });
    });
  });
}

/* ---- Heading line-by-line masked reveal ----
   Splits section headings (never the hero's own headline, which has its
   own word-level entrance in playHeroEntrance) into lines via SplitText,
   wraps each in an overflow-hidden mask, and slides each line up into
   view as its section scrolls in — layered on top of initReveal's
   container fade rather than replacing it. Runs once per heading (guarded
   by data-line-split) and is skipped entirely under reduced-motion. */
function initHeadingReveal(){
  if (REDUCED_MOTION) return;
  if (typeof gsap === "undefined" || typeof SplitText === "undefined" || typeof ScrollTrigger === "undefined") return;
  gsap.registerPlugin(SplitText, ScrollTrigger);

  document.querySelectorAll("h1:not(#heroHeadline):not([data-line-split]), h2:not(#heroHeadline):not([data-line-split])").forEach(h2 => {
    if (!h2.textContent.trim()) return; // not yet populated (e.g. i18n hasn't run) — skip safely
    h2.setAttribute("data-line-split", "");

    const split = new SplitText(h2, { type: "lines", linesClass: "hr-line" });
    split.lines.forEach(line => {
      const mask = document.createElement("span");
      mask.className = "hr-line-mask";
      line.parentNode.insertBefore(mask, line);
      mask.appendChild(line);
    });
    gsap.set(split.lines, { yPercent: 108 });

    ScrollTrigger.create({
      trigger: h2,
      start: "top 90%",
      once: true,
      onEnter: () => gsap.to(split.lines, {
        yPercent: 0, duration: .85, ease: "expo.out", stagger: .08
      })
    });
  });
}

/* ---- Service card expand (accordion-style, but multi-open) ----
   Guards against double-binding if called again after a re-render. */
function initServiceCards(){
  document.querySelectorAll(".service-card:not([data-bound])").forEach(card => {
    card.setAttribute("data-bound", "");
    card.addEventListener("click", () => card.classList.toggle("is-open"));
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " "){ e.preventDefault(); card.classList.toggle("is-open"); }
    });
  });
}

/* ---- Lightbox for gallery ----
   Rebuilds from scratch each call so it stays in sync after the gallery
   grid is re-rendered (e.g. captions changing on language switch). */
function initLightbox(){
  document.querySelector(".lightbox")?.remove();
  // Matches both the compact CSS-columns gallery grid and the asymmetric
  // mosaic grid — excludes any tile that isn't a plain photo (e.g. a
  // mixed-media video tile), since there's nothing to zoom into there.
  const figures = Array.from(document.querySelectorAll(".gallery-grid figure, .life-mosaic figure"))
    .filter(fig => fig.querySelector("img"));
  if (!figures.length) return;

  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.innerHTML = `
    <button class="lightbox-close" aria-label="Cerrar">${ICONS_LB_CLOSE}</button>
    <button class="lightbox-nav prev" aria-label="Anterior">${ICONS_LB_PREV}</button>
    <img alt="">
    <button class="lightbox-nav next" aria-label="Siguiente">${ICONS_LB_NEXT}</button>
  `;
  document.body.appendChild(lb);
  const img = lb.querySelector("img");
  let current = 0;

  function show(i){
    current = (i + figures.length) % figures.length;
    const fig = figures[current];
    const src = fig.querySelector("img").getAttribute("src");
    const alt = fig.querySelector("img").getAttribute("alt") || "";
    img.setAttribute("src", src);
    img.setAttribute("alt", alt);
  }
  function open(i){
    show(i);
    lb.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  function close(){
    lb.classList.remove("is-open");
    document.body.style.overflow = "";
  }
  figures.forEach((fig, i) => fig.addEventListener("click", () => open(i)));
  lb.querySelector(".lightbox-close").addEventListener("click", close);
  lb.querySelector(".prev").addEventListener("click", () => show(current - 1));
  lb.querySelector(".next").addEventListener("click", () => show(current + 1));
  lb.addEventListener("click", e => { if (e.target === lb) close(); });
  document.addEventListener("keydown", e => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") show(current + 1);
    if (e.key === "ArrowLeft") show(current - 1);
  });
}
const ICONS_LB_CLOSE = '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6 6 18"/></svg>';
const ICONS_LB_PREV = '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 6l-6 6 6 6"/></svg>';
const ICONS_LB_NEXT = '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg>';

/* ---- Floating WhatsApp button ---- */
function initWhatsappFloat(){
  if (document.querySelector(".wa-float")) return;
  const a = document.createElement("a");
  a.className = "wa-float";
  a.href = SITE_DATA.brand.whatsapp.info;
  a.target = "_blank";
  a.rel = "noopener";
  a.setAttribute("aria-label", "WhatsApp");
  a.innerHTML = ICONS.whatsapp;
  document.body.appendChild(a);
}

/* ---- Contact form (front-end only — no backend wired up) ---- */
function initContactForm(){
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", function(e){
    e.preventDefault();
    const successEl = document.getElementById("contactSuccess");
    form.hidden = true;
    if (successEl) successEl.hidden = false;
  });
}

/* ---- Hero entrance sequence (GSAP timeline) ----
   Plays once, on load, on whichever page has a .hero-cinematic (currently
   just the homepage). Sequence matches the brief exactly: nav -> eyebrow
   -> headline (word-by-word via SplitText) -> supporting copy -> CTAs ->
   ambient video zoom-settle -> trust badges. Under prefers-reduced-motion,
   this is skipped entirely and every element is simply visible already
   (nothing here is hidden by CSS by default — see the hero-overlay rules). */
function playHeroEntrance(){
  const hero = document.getElementById("heroSection");
  if (!hero || REDUCED_MOTION || typeof gsap === "undefined") return;

  const header = document.getElementById("site-header");
  const eyebrow = document.getElementById("heroEyebrow");
  const headline = document.getElementById("heroHeadline");
  const lede = document.getElementById("heroLede");
  const actions = document.getElementById("heroActions");
  const badges = document.getElementById("heroBadges");
  const video = document.getElementById("heroVideo");

  let words = headline;
  if (typeof SplitText !== "undefined" && headline){
    gsap.registerPlugin(SplitText);
    words = new SplitText(headline, { type: "words", wordsClass: "word" }).words;
  }

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  tl.from(video, { scale: 1.12, duration: 2.2, ease: "power2.out" }, 0)
    .from(header, { y: -18, opacity: 0, duration: .6 }, 0.05)
    .from(eyebrow, { y: 14, opacity: 0, duration: .55 }, 0.25)
    .from(words, { y: 28, opacity: 0, duration: .8, stagger: .06, ease: "expo.out" }, 0.4)
    .from(lede, { y: 16, opacity: 0, duration: .6 }, 0.85)
    .from(Array.from(actions.children), { y: 14, opacity: 0, duration: .5, stagger: .08 }, 1.05)
    .from(Array.from(badges.children), { y: 14, opacity: 0, duration: .55, stagger: .07 }, 1.25);
}

/* ---- Hero scroll-out transition ----
   As the hero scrolls past (its own height's worth of scroll), the video
   settles into a very slight extra scale and a plain opacity scrim darkens
   over it — a refined "the story continues" handoff into the next section
   rather than an abrupt cut. Scrubbed 1:1 to scroll position (no easing
   lag), and skipped entirely under reduced-motion. */
function initHeroScrollTransition(){
  const hero = document.getElementById("heroSection");
  const video = document.getElementById("heroVideo");
  const scrim = document.getElementById("heroExitScrim");
  if (!hero || !video || !scrim || REDUCED_MOTION) return;
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  gsap.timeline({
    scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true }
  })
    .to(video, { scale: 1.06, ease: "none" }, 0)
    .to(scrim, { opacity: .55, ease: "none" }, 0);
}

/* Boot order matters: header/footer (partials.js) mount on DOMContentLoaded,
   then this runs — but page-specific content (services grid, gallery, etc.)
   is rendered by an inline <script> at the bottom of each page's <body>,
   which executes before DOMContentLoaded fires. So by the time this handler
   runs, all dynamic content already exists and is safe to bind against. */
document.addEventListener("DOMContentLoaded", function(){
  initHeaderScroll();
  initMobileNav();
  initWhatsappFloat();
  initContactForm();
  playHeroEntrance();
  initHeroScrollTransition();
  refreshInteractive(); // initServiceCards + initReveal + initLightbox (render.js)
  initHeadingReveal(); // must run after i18n + render.js have populated real heading text
});
