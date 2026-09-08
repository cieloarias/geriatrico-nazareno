/* ==========================================================================
   SONAR GRID — vanilla-JS port of a React/Canvas "sonar" dot-field effect
   (originally a shadcn/Tailwind/TypeScript component). Reimplemented here
   with no framework or build step so it drops straight into Nazareno's
   static site. Same rendering algorithm and behavior — idles when no ring
   is alive, pauses off-screen and in hidden tabs, respects
   prefers-reduced-motion, and adapts to the site's own CSS colors.

   Used sparingly as a subtle "signal / vital sign" texture (the ripple
   reads like a gentle pulse, fitting for a care-focused site) — not as
   decoration everywhere.

   Usage:
     new SonarGrid(document.getElementById('sonarHost'), { pingEvery: 3.2 });
   ========================================================================== */

class SonarGrid {
  constructor(host, options){
    this.host = host;
    if (!host) return;
    const o = Object.assign({
      spacing: 30,
      dotRadius: 1.4,
      baseOpacity: 0.16,
      color: null,          // null = read from canvas's computed `color` (CSS-controlled)
      pingEvery: 3.2,
      speed: 220,
      ringWidth: 110,
      amplitude: 2.0,
      interactive: true,
      maxRings: 5,
      seedPing: true,
      pingArea: [0.1, 0.15, 0.9, 0.85]
    }, options || {});
    this.o = o;

    this.rings = [];
    this.width = 0;
    this.height = 0;
    this.raf = 0;
    this.timer = 0;
    this.visible = true;
    this.seeded = false;
    this.stroke = "rgba(0,0,0,0.3)";
    this.nextPing = performance.now() + o.pingEvery * 1000;
    this.reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const canvas = document.createElement("canvas");
    canvas.className = "sonar-canvas";
    canvas.setAttribute("aria-hidden", "true");
    if (o.color) canvas.style.color = o.color;
    host.classList.add("sonar-host");
    host.insertBefore(canvas, host.firstChild);
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this._bind();
    this._start();
  }

  _readColor(){
    this.stroke = getComputedStyle(this.canvas).color;
  }

  addRing(x, y, born){
    this._readColor();
    this.rings.push({ x, y, born });
    while (this.rings.length > this.o.maxRings) this.rings.shift();
  }

  _draw(now){
    const { ctx, o } = this;
    const w = this.width, h = this.height;
    const lifetime = (Math.hypot(w, h) + o.ringWidth) / o.speed;
    this.rings = this.rings.filter(r => (now - r.born) / 1000 < lifetime);
    const live = this.rings.map(r => {
      const age = (now - r.born) / 1000;
      const radius = age * o.speed;
      return { x: r.x, y: r.y, radius, reach: radius + o.ringWidth, fade: 1 - age / lifetime };
    });

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = this.stroke;

    const cols = Math.ceil(w / o.spacing) + 1;
    const rows = Math.ceil(h / o.spacing) + 1;
    const offsetX = (w - (cols - 1) * o.spacing) / 2;
    const offsetY = (h - (rows - 1) * o.spacing) / 2;

    const hot = [];
    ctx.globalAlpha = o.baseOpacity;
    ctx.beginPath();
    for (let i = 0; i < cols; i++){
      const cx = offsetX + i * o.spacing;
      for (let j = 0; j < rows; j++){
        const cy = offsetY + j * o.spacing;
        let energy = 0;
        for (const r of live){
          if (Math.abs(cx - r.x) > r.reach || Math.abs(cy - r.y) > r.reach) continue;
          const dist = Math.abs(Math.hypot(cx - r.x, cy - r.y) - r.radius);
          if (dist >= o.ringWidth) continue;
          const t = 1 - dist / o.ringWidth;
          const k = t * t * (3 - 2 * t) * r.fade;
          if (k > energy) energy = k;
        }
        if (energy < 0.01){
          ctx.moveTo(cx + o.dotRadius, cy);
          ctx.arc(cx, cy, o.dotRadius, 0, Math.PI * 2);
        } else {
          hot.push(cx, cy, energy);
        }
      }
    }
    ctx.fill();

    for (let k = 0; k < hot.length; k += 3){
      const energy = hot[k + 2] || 0;
      ctx.globalAlpha = o.baseOpacity + (1 - o.baseOpacity) * energy;
      ctx.beginPath();
      ctx.arc(hot[k], hot[k + 1], o.dotRadius * (1 + o.amplitude * energy), 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  _resize(){
    const rect = this.host.getBoundingClientRect();
    this.width = Math.max(1, Math.round(rect.width));
    this.height = Math.max(1, Math.round(rect.height));
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = Math.round(this.width * dpr);
    this.canvas.height = Math.round(this.height * dpr);
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!this.seeded){
      this.seeded = true;
      const [x0, y0, x1, y1] = this.o.pingArea;
      if (this.o.seedPing && !this.reduceMotion.matches){
        this.addRing(this.width * (x0 + (x1 - x0) * 0.6), this.height * (y0 + (y1 - y0) * 0.4), performance.now() - 600);
      }
    }
    this._draw(performance.now());
  }

  _scheduleIdle(delay){
    window.clearTimeout(this.timer);
    this.timer = window.setTimeout(() => this._tick(performance.now()), Math.max(16, delay));
  }

  _tick(now){
    this.raf = 0;
    if (!this.visible || document.hidden) return;
    if (this.reduceMotion.matches){
      this.rings = [];
      this._draw(now);
      return;
    }
    const o = this.o;
    if (o.pingEvery > 0 && now >= this.nextPing){
      const [x0, y0, x1, y1] = o.pingArea;
      this.addRing(this.width * (x0 + Math.random() * (x1 - x0)), this.height * (y0 + Math.random() * (y1 - y0)), now);
      this.nextPing = now + o.pingEvery * 1000;
    }
    this._draw(now);
    if (this.rings.length > 0) this.raf = requestAnimationFrame(t => this._tick(t));
    else if (o.pingEvery > 0) this._scheduleIdle(this.nextPing - now);
  }

  wake(){
    if (!this.raf){
      window.clearTimeout(this.timer);
      this.raf = requestAnimationFrame(t => this._tick(t));
    }
  }

  _bind(){
    this._onDown = (e) => {
      if (!this.o.interactive || this.reduceMotion.matches) return;
      const rect = this.host.getBoundingClientRect();
      const x = (e.clientX !== undefined ? e.clientX : e.touches?.[0]?.clientX) - rect.left;
      const y = (e.clientY !== undefined ? e.clientY : e.touches?.[0]?.clientY) - rect.top;
      this.addRing(x, y, performance.now());
      this.wake();
    };
    this._onVisibility = () => { if (!document.hidden) this.wake(); };
    this._onReduceChange = () => this.wake();

    this.ro = new ResizeObserver(() => this._resize());
    this.io = new IntersectionObserver(([entry]) => {
      this.visible = entry ? entry.isIntersecting : true;
      if (this.visible) this.wake();
    }, { threshold: 0 });
  }

  _start(){
    if (this.o.interactive) this.host.classList.add("sonar-interactive");
    this._readColor();
    this._resize();
    this.ro.observe(this.host);
    this.io.observe(this.host);
    this.host.addEventListener("pointerdown", this._onDown);
    document.addEventListener("visibilitychange", this._onVisibility);
    this.reduceMotion.addEventListener("change", this._onReduceChange);
    this.wake();
  }

  destroy(){
    this.ro?.disconnect();
    this.io?.disconnect();
    this.host.removeEventListener("pointerdown", this._onDown);
    document.removeEventListener("visibilitychange", this._onVisibility);
    this.reduceMotion.removeEventListener("change", this._onReduceChange);
    cancelAnimationFrame(this.raf);
    window.clearTimeout(this.timer);
    this.canvas.remove();
  }
}

/* Auto-init any [data-sonar] host found on the page. */
function initSonarGrids(){
  document.querySelectorAll("[data-sonar]").forEach(host => {
    if (host._sonarInstance) return;
    host._sonarInstance = new SonarGrid(host, {});
  });
}
