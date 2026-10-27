/* Builds the page from data.js and runs the animations.
   You normally do NOT need to edit this file. Edit data.js instead. */
(() => {
  const D = PORTFOLIO;
  const $ = (s, r = document) => r.querySelector(s);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const ICON = {
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    in: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11.5H3zM9.5 9.75h3.8v1.6h.06c.53-1 1.84-2.06 3.8-2.06 4.06 0 4.84 2.67 4.84 6.14v5.82h-4v-5.16c0-1.23-.02-2.82-1.72-2.82-1.72 0-1.98 1.34-1.98 2.73v5.25h-4z"/></svg>',
    gh: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
    dl: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0-4-4m4 4 4-4M4 21h16"/></svg>',
    cert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="6"/><path d="m8.5 14 -1.5 8 5-3 5 3-1.5-8"/></svg>'
  };

  /* ---------- Fill in the page ---------- */
  document.title = `${D.name} | ${D.title}`;
  $('#brand').textContent = D.initials || D.name;
  $('#heroName').textContent = D.name;
  $('#heroTitle').textContent = D.heroTitle || D.name.toUpperCase();
  $('#tagline').textContent = D.tagline;
  $('#subTitle').textContent = D.title;
  $('#subLoc').textContent = D.location;
  $('#footerText').textContent = `© ${new Date().getFullYear()} ${D.name}. Built with HTML, CSS & JavaScript.`;

  // Hero buttons
  const cta = [];
  cta.push(`<a class="btn primary" href="#projects">View my work</a>`);
  if (D.resume) cta.push(`<a class="btn ghost" href="${esc(D.resume)}" download>${ICON.dl} Resume</a>`);
  cta.push(`<a class="btn ghost" href="#contact">Contact</a>`);
  $('#cta').innerHTML = cta.join('');

  // Photo (falls back to initials if the picture is missing)
  const ph = $('#photo');
  ph.innerHTML = `<div class="photo-inner"><span class="initials">${esc(D.initials)}</span></div>`;
  if (D.photo) {
    const img = new Image();
    img.alt = D.name;
    img.onload = () => $('.photo-inner', ph).appendChild(img);
    img.src = D.photo;
  }

  // About + stats
  $('#aboutText').innerHTML = D.about.map(p => `<p>${esc(p)}</p>`).join('');
  $('#stats').innerHTML = D.stats.map(s =>
    `<div class="stat"><b data-to="${s.value}" data-dec="${s.decimals || 0}">0</b><span>${esc(s.label)}</span></div>`).join('');

  // Skills
  $('#skillGrid').innerHTML = D.skills.map((g, i) =>
    `<div class="card reveal" style="--d:${i * .08}s"><h3>${esc(g.group)}</h3>
      <div class="chips">${g.items.map(t => `<span class="chip">${esc(t)}</span>`).join('')}</div></div>`).join('');

  // Projects
  $('#projectGrid').innerHTML = D.projects.map((p, i) =>
    `<article class="card project reveal" style="--d:${i * .1}s">
      <div class="top"><span class="num">${String(i + 1).padStart(2, '0')}</span>${p.status ? `<span class="badge">${esc(p.status)}</span>` : ''}</div>
      <h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p>
      <div class="chips">${(p.tags || []).map(t => `<span class="chip">${esc(t)}</span>`).join('')}</div>
      ${p.link ? `<a class="link" href="${esc(p.link)}" target="_blank" rel="noopener">View project →</a>` : ''}
    </article>`).join('');

  // Timelines
  const tl = list => list.map((e, i) =>
    `<div class="tl-item reveal" style="--d:${i * .1}s"><div class="tl-date">${esc(e.date)}</div>
      <div class="tl-role">${esc(e.role)}</div><div class="tl-org">${esc(e.org)}</div>
      <ul>${(e.points || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>`).join('');
  $('#expList').innerHTML = tl(D.experience);
  $('#eduList').innerHTML = tl(D.education);

  // Certifications
  $('#certGrid').innerHTML = D.certifications.map((c, i) =>
    `<div class="card cert reveal" style="--d:${i * .08}s"><div class="ic">${ICON.cert}</div>
      <h3>${esc(c.name)}</h3><p>${esc(c.by)}</p></div>`).join('');

  // Contact
  const cl = [];
  if (D.email) cl.push(`<a class="btn primary" href="mailto:${esc(D.email)}">${ICON.mail} ${esc(D.email)}</a>`);
  if (D.phone) cl.push(`<a class="btn ghost" href="tel:${esc(D.phone.replace(/\s/g, ''))}">${ICON.phone} ${esc(D.phone)}</a>`);
  if (D.linkedin) cl.push(`<a class="btn ghost" href="${esc(D.linkedin)}" target="_blank" rel="noopener">${ICON.in} LinkedIn</a>`);
  if (D.github) cl.push(`<a class="btn ghost" href="${esc(D.github)}" target="_blank" rel="noopener">${ICON.gh} GitHub</a>`);
  $('#contactLinks').innerHTML = cl.join('');

  /* ---------- Intro animation: letters tumble in ---------- */
  const intro = $('#intro');
  const startPage = () => { document.body.classList.add('ready'); typeLoop(); };
  let seen = false;
  try { seen = sessionStorage.getItem('introSeen') === '1'; } catch (e) {}

  if (reduce || seen) {
    intro.remove(); startPage();
  } else {
    const word = $('.intro-word');
    const text = 'HELLO !';
    word.innerHTML = [...text].map(ch => `<span>${ch}</span>`).join('');
    const spans = [...word.children];
    spans.forEach((s, i) => {
      s.animate([
        { transform: `translate(${(Math.random() - .5) * 400}px, -90vh) rotate(${(Math.random() - .5) * 540}deg)`, opacity: 0 },
        { transform: 'translate(0,0) rotate(0)', opacity: 1 }
      ], { duration: 1100, delay: i * 110, easing: 'cubic-bezier(.2,.9,.3,1.25)', fill: 'both' });
    });
    const total = 1100 + spans.length * 110 + 500;
    const finish = () => {
      if (!intro.isConnected || intro.classList.contains('done')) return;
      intro.classList.add('done');
      try { sessionStorage.setItem('introSeen', '1'); } catch (e) {}
      startPage();
      setTimeout(() => intro.remove(), 800);
    };
    setTimeout(finish, total);
    intro.addEventListener('click', finish);   // click to skip
  }

  /* ---------- Typing effect ---------- */
  function typeLoop() {
    const el = $('#typed'); const roles = D.roles && D.roles.length ? D.roles : [D.title];
    if (reduce) { el.textContent = roles[0]; return; }
    let r = 0, c = 0, del = false;
    (function tick() {
      const word = roles[r];
      el.textContent = word.slice(0, c);
      if (!del && c === word.length) { del = true; return setTimeout(tick, 1600); }
      if (del && c === 0) { del = false; r = (r + 1) % roles.length; }
      c += del ? -1 : 1;
      setTimeout(tick, del ? 35 : 75);
    })();
  }

  /* ---------- Scroll reveal + stat counters ---------- */
  const countUp = el => {
    const to = parseFloat(el.dataset.to), dec = +el.dataset.dec, t0 = performance.now(), dur = 1400;
    (function f(t) {
      const p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
      el.textContent = (to * e).toFixed(dec);
      if (p < 1) requestAnimationFrame(f);
    })(t0);
  };
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('show');
    e.target.querySelectorAll('[data-to]').forEach(countUp);
    io.unobserve(e.target);
  }), { threshold: .15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  if (reduce) document.querySelectorAll('[data-to]').forEach(el => el.textContent = (+el.dataset.to).toFixed(+el.dataset.dec));

  /* ---------- Nav: mobile menu, active link, progress bar ---------- */
  const burger = $('#burger'), links = $('#links');
  burger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  links.addEventListener('click', e => { if (e.target.closest('a')) { links.classList.remove('open'); burger.setAttribute('aria-expanded', false); } });

  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.querySelectorAll('a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('section[id]').forEach(s => spy.observe(s));

  const bar = $('.progress');
  const onScroll = () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------- Mouse effects: glow + card spotlight ---------- */
  if (matchMedia('(pointer:fine)').matches) {
    const glow = $('.cursor-glow'); let raf = 0, gx = 0, gy = 0;
    addEventListener('mousemove', e => {
      gx = e.clientX; gy = e.clientY;
      if (!raf) raf = requestAnimationFrame(() => { glow.style.setProperty('--gx', gx + 'px'); glow.style.setProperty('--gy', gy + 'px'); raf = 0; });
    });
    document.addEventListener('mousemove', e => {
      const card = e.target.closest && e.target.closest('.card');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', e.clientX - r.left + 'px');
      card.style.setProperty('--my', e.clientY - r.top + 'px');
    });
  }

  /* ---------- Starfield background ---------- */
  const cv = $('#stars'), ctx = cv.getContext('2d');
  let W, H, stars = [], mx = 0, my = 0;
  const init = () => {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    W = innerWidth; H = innerHeight;
    cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round((W * H) / 5500);
    stars = Array.from({ length: n }, () => ({
      x: Math.random() * W, y: Math.random() * H, z: Math.random() * .9 + .1,
      r: Math.random() * 1.2 + .25, tw: Math.random() * 6.28, sp: Math.random() * .02 + .005
    }));
  };
  init(); addEventListener('resize', init);
  addEventListener('mousemove', e => { mx = (e.clientX / W - .5); my = (e.clientY / H - .5); });
  let off = 0;
  const frame = () => {
    ctx.clearRect(0, 0, W, H);
    off += .12;
    for (const s of stars) {
      s.tw += s.sp;
      const a = (.35 + .65 * Math.abs(Math.sin(s.tw))) * (.4 + s.z * .6);
      const x = (s.x - mx * 40 * s.z + W) % W;
      const y = (s.y + off * s.z + my * -40 * s.z) % H;
      ctx.globalAlpha = a; ctx.fillStyle = '#fff';
      ctx.beginPath(); ctx.arc(x, y < 0 ? y + H : y, s.r * s.z + .2, 0, 6.283); ctx.fill();
    }
    if (!reduce) requestAnimationFrame(frame);
  };
  frame();
})();
