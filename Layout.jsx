/* global React */
/* Shared chrome for the Namami site: fixed charcoal sidebar nav, footer,
   the signature ellipse, first-visit BCI disclaimer modal, page-transition
   curtain, custom cursor, corner registration marks, magnetic buttons, and
   shared layout constants. Loaded on every page; exposes globals via window. */
const { useState, useEffect, useRef } = React;

const SECTION = { position: 'relative', padding: '88px 7vw', overflow: 'hidden' };
const H2 = { fontSize: 'clamp(2rem,3.6vw,3.2rem)', fontWeight: 600, letterSpacing: '-.025em',
  lineHeight: 1.04, margin: '14px 0 0', color: 'var(--color-charcoal)', maxWidth: '20ch' };
const PD = { color: 'var(--color-saffron)' };
const DESKTOP_FINE = '(hover: hover) and (pointer: fine)';

function Ellipse({ pos = 'tr' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !el.parentElement) return;
    let raf = null;
    const tick = () => {
      raf = null;
      const rect = el.parentElement.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const offset = (window.innerHeight / 2 - center) * 0.07;
      el.style.transform = 'translate3d(0,' + offset.toFixed(1) + 'px,0)';
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick); };
    tick();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  const map = {
    tr: { top: '-180px', right: '-120px' },
    bl: { bottom: '-180px', left: '-120px' },
    br: { bottom: '-160px', right: '-100px' },
    tl: { top: '-160px', left: '-100px' },
  };
  return <div ref={ref} style={{ position: 'absolute', width: 520, height: 520, borderRadius: '50%',
    background: 'var(--ellipse-glow)', pointerEvents: 'none', zIndex: 0, willChange: 'transform', ...map[pos] }} />;
}

/* Large, faint brand-mark watermark — decorative, reinforces the mark without stock imagery. */
function MarkWatermark({ side = 'right' }) {
  return (
    <img src="../assets/mark-saffron.png" alt="" aria-hidden="true" style={{
      position: 'absolute', [side]: 'clamp(-140px,-6vw,-40px)', top: '50%', transform: 'translateY(-50%)',
      width: 'clamp(340px,32vw,560px)', opacity: .05, pointerEvents: 'none', zIndex: 0,
    }} />
  );
}

/* Magnetic hover wrapper — nudges its child toward the cursor within its bounds. Desktop only. */
function Magnetic({ children, strength = 16 }) {
  const ref = useRef(null);
  const fine = useRef(false);
  useEffect(() => { fine.current = window.matchMedia(DESKTOP_FINE).matches; }, []);
  const onMove = (e) => {
    if (!fine.current || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) / r.width;
    const y = (e.clientY - r.top - r.height / 2) / r.height;
    ref.current.style.transform = 'translate(' + (x * strength).toFixed(1) + 'px,' + (y * strength).toFixed(1) + 'px)';
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = 'translate(0,0)'; };
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ display: 'inline-block', transition: 'transform .3s cubic-bezier(.2,.8,.2,1)' }}>
      {children}
    </div>
  );
}

/* Custom cursor dot — mix-blend-mode:difference reads on both charcoal and cream. Desktop only. */
function Cursor() {
  const dotRef = useRef(null);
  useEffect(() => {
    if (!window.matchMedia(DESKTOP_FINE).matches) return;
    document.documentElement.classList.add('nm-has-cursor');
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target = { x: pos.x, y: pos.y };
    let hover = false;
    let raf = null;
    const move = (e) => { target.x = e.clientX; target.y = e.clientY; };
    const over = (e) => { hover = !!e.target.closest('a, button, input, select, textarea, [role="button"]'); };
    const loop = () => {
      pos.x += (target.x - pos.x) * 0.2;
      pos.y += (target.y - pos.y) * 0.2;
      if (dotRef.current) {
        dotRef.current.style.transform = 'translate(' + pos.x.toFixed(1) + 'px,' + pos.y.toFixed(1) + 'px) translate(-50%,-50%) scale(' + (hover ? 2.6 : 1) + ')';
      }
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      if (raf) cancelAnimationFrame(raf);
      document.documentElement.classList.remove('nm-has-cursor');
    };
  }, []);
  return <div ref={dotRef} className="nm-cursor" aria-hidden="true" />;
}

/* Fixed print-registration corner ticks — a quiet nod to the brand's blueprint/ink motif. */
function CornerMarks() {
  const tick = (style, rot) => (
    <div style={{ position: 'fixed', width: 18, height: 18, zIndex: 1900, pointerEvents: 'none',
      mixBlendMode: 'difference', ...style }}>
      <svg width="18" height="18" style={{ transform: 'rotate(' + rot + 'deg)' }}>
        <path d="M1 13 L1 1 L13 1" stroke="#F9F5EF" strokeWidth="1.3" fill="none" />
      </svg>
    </div>
  );
  return (
    <React.Fragment>
      {tick({ top: 16, left: 16 }, 0)}
      {tick({ top: 16, right: 16 }, 90)}
      {tick({ bottom: 16, right: 16 }, 180)}
      {tick({ bottom: 16, left: 16 }, 270)}
    </React.Fragment>
  );
}

/* Page-transition curtain — wipes open on load, wipes closed before any internal navigation. */
function Curtain() {
  const [phase, setPhase] = useState('covered'); // covered -> open ; open -> closing (on nav)
  const pending = useRef(null);
  const ref = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setPhase('open'), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest('a[href]');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
      if (a.target && a.target !== '_self') return;
      if (a.hasAttribute('download')) return;
      let url;
      try { url = new URL(href, location.href); } catch (err) { return; }
      if (url.origin !== location.origin) return;
      if (url.pathname === location.pathname && url.search === location.search) return;
      e.preventDefault();
      pending.current = url.href;
      setPhase('closing');
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  window.nmGo = (href) => {
    pending.current = href;
    setPhase('closing');
  };

  const onTransitionEnd = () => {
    if (phase === 'closing' && pending.current) location.href = pending.current;
  };

  return (
    <div ref={ref} onTransitionEnd={onTransitionEnd}
      className={'nm-curtain' + (phase === 'open' ? ' nm-open' : phase === 'closing' ? ' nm-closing' : '')} />
  );
}

function Sidebar({ active }) {
  const [open, setOpen] = useState(false);
  const nav = (
    <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {window.NAV.map(([href, label], i) => (
        <a key={href} href={href}
          style={{
            textDecoration: 'none', fontFamily: 'var(--font-grotesk)', fontSize: '1.4rem',
            fontWeight: 600, letterSpacing: '-.02em', padding: '6px 0',
            color: active === href ? 'var(--color-saffron)' : 'var(--color-cream)',
            transition: 'color .2s, padding-left .2s', display: 'flex', alignItems: 'baseline', gap: 10,
          }}
          onMouseEnter={(e) => { e.currentTarget.style.paddingLeft = '8px'; if (active !== href) e.currentTarget.style.color = 'var(--color-gold)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.paddingLeft = '0'; if (active !== href) e.currentTarget.style.color = 'var(--color-cream)'; }}
        >
          {label}
        </a>
      ))}
    </nav>
  );
  return (
    <React.Fragment>
      {/* Mobile top bar */}
      <div className="nm-mobile-bar">
        <a href="index.html" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="../assets/wordmark-reversed.png" alt="Namami Law Offices" style={{ height: 26 }} />
        </a>
        <button aria-label="Menu" onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none',
          color: 'var(--color-cream)', fontSize: '1.6rem', cursor: 'pointer', lineHeight: 1 }}>
          {open ? '×' : '☰'}
        </button>
      </div>
      <aside className="nm-sidebar" style={{
        position: 'sticky', top: 0, alignSelf: 'flex-start',
        width: 320, minWidth: 320, height: '100vh',
        background: 'var(--color-charcoal)', color: 'var(--color-cream)',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        padding: '40px 34px', boxSizing: 'border-box', zIndex: 20,
      }}>
        <div>
          <a href="index.html" style={{ display: 'block', transition: 'opacity .2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '.82'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}>
            <img src="../assets/wordmark-reversed.png" alt="Namami Law Offices"
              style={{ width: 200, display: 'block', marginBottom: 6 }} />
          </a>
          <div style={{ fontSize: '.62rem', letterSpacing: '.28em', textTransform: 'uppercase',
            color: 'rgba(249,245,239,.45)', fontWeight: 600, paddingLeft: 2 }}>
            IP · Media · Entertainment
          </div>
        </div>
        {nav}
        <div style={{ fontSize: '.66rem', letterSpacing: '.1em', textTransform: 'uppercase',
          color: 'rgba(249,245,239,.4)', lineHeight: 1.9 }}>
          Mayur Vihar, New Delhi<br />namaste@namamilaw.com
        </div>
      </aside>
      {open && (
        <div className="nm-mobile-drawer" style={{ position: 'fixed', inset: '52px 0 0 0', zIndex: 19,
          background: 'var(--color-charcoal)', padding: '30px 34px', overflowY: 'auto' }}>
          {nav}
        </div>
      )}
    </React.Fragment>
  );
}

function Footer({ onDisclaimer }) {
  return (
    <footer style={{ background: 'var(--color-charcoal)', color: 'rgba(249,245,239,.6)',
      padding: '54px 7vw 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 32 }}>
        <div>
          <img src="../assets/wordmark-reversed.png" alt="Namami" style={{ width: 170, marginBottom: 14 }} />
          <p style={{ fontSize: '.82rem', fontWeight: 300, lineHeight: 1.7, margin: 0 }}>
            Namami Law Offices LLP<br />S 210, Atlantic Plaza, Mayur Vihar,<br />New Delhi 110091<br />
            <a href="mailto:namaste@namamilaw.com" style={{ color: 'var(--color-saffron)', textDecoration: 'none' }}>namaste@namamilaw.com</a>
          </p>
        </div>
        <div>
          <div style={{ fontSize: '.66rem', letterSpacing: '.2em', textTransform: 'uppercase',
            color: 'var(--color-saffron)', fontWeight: 600, marginBottom: 14 }}>Explore</div>
          {window.NAV.map(([href, label]) => (
            <a key={href} href={href} style={{ display: 'block', fontSize: '.86rem', fontWeight: 300,
              color: 'rgba(249,245,239,.7)', textDecoration: 'none', padding: '4px 0' }}>{label}</a>
          ))}
        </div>
        <div>
          <div style={{ fontSize: '.66rem', letterSpacing: '.2em', textTransform: 'uppercase',
            color: 'var(--color-saffron)', fontWeight: 600, marginBottom: 14 }}>Follow</div>
          {[['LinkedIn', 'https://www.linkedin.com/company/namamilawoffices/'],
            ['Instagram', 'https://www.instagram.com/namamilawoffices']].map(([l, h]) => (
            <a key={l} href={h} style={{ display: 'block', fontSize: '.86rem', fontWeight: 300,
              color: 'rgba(249,245,239,.7)', textDecoration: 'none', padding: '4px 0' }}>{l}</a>
          ))}
          <button onClick={onDisclaimer} style={{ display: 'block', fontSize: '.86rem', fontWeight: 300,
            color: 'rgba(249,245,239,.7)', textDecoration: 'none', padding: '4px 0', background: 'none',
            border: 'none', cursor: 'pointer', fontFamily: 'var(--font-grotesk)', textAlign: 'left' }}>Disclaimer</button>
        </div>
      </div>
      <p style={{ fontSize: '.72rem', fontWeight: 300, fontStyle: 'italic', color: 'rgba(249,245,239,.42)',
        marginTop: 40, paddingTop: 22, borderTop: '1px solid var(--line-on-dark)', lineHeight: 1.7, maxWidth: '90ch' }}>
        The Bar Council of India does not permit advertisement or solicitation by advocates. The contents of
        this site are for general information only and do not constitute advertisement, solicitation, or legal
        advice. © 2026 Namami Law Offices LLP.
      </p>
    </footer>
  );
}

function DisclaimerModal({ onClose }) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'center',
      justifyContent: 'center', padding: 24 }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(28,28,30,.72)' }} />
      <div style={{ position: 'relative', width: 'min(560px,94vw)', background: 'var(--color-cream)',
        borderRadius: 'var(--radius-md)', borderTop: '3px solid var(--color-saffron)',
        padding: '38px 40px', boxShadow: '0 30px 80px rgba(0,0,0,.4)', boxSizing: 'border-box' }}>
        <div style={{ fontSize: '.66rem', letterSpacing: '.2em', textTransform: 'uppercase',
          fontWeight: 700, color: 'var(--color-gold)', marginBottom: 14 }}>Bar Council of India — Notice</div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, letterSpacing: '-.02em', margin: 0,
          color: 'var(--color-charcoal)', lineHeight: 1.2 }}>
          Please read before entering<span style={PD}>.</span>
        </h2>
        <p style={{ fontSize: '.94rem', fontWeight: 300, lineHeight: 1.65, color: '#3a3a3c', marginTop: 18 }}>
          The Bar Council of India does not permit advertisement or solicitation by advocates. By
          proceeding, you acknowledge that this website is for general information only, that no
          advocate-client relationship is created by your use of it, and that nothing here constitutes
          legal advice or a guarantee of outcomes. You are entering this website of your own accord,
          with no solicitation by the firm.
        </p>
        <div style={{ marginTop: 26 }}>
          <button onClick={onClose} style={{
            fontFamily: 'var(--font-grotesk)', fontSize: '.92rem', fontWeight: 600, cursor: 'pointer',
            background: 'var(--color-charcoal)', color: 'var(--color-cream)', border: 'none',
            borderRadius: 'var(--radius-sm)', padding: '13px 26px',
          }}>I understand — enter site</button>
        </div>
      </div>
    </div>
  );
}

/* Page shell: curtain + cursor + corner marks + mobile bar + sidebar + content + footer + disclaimer gate. */
function Shell({ active, children }) {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  useEffect(() => {
    if (!sessionStorage.getItem('nm-disclaimer-ack')) setShowDisclaimer(true);
  }, []);
  useEffect(() => {
    const els = document.querySelectorAll('.nm-reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('nm-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  const ack = () => { sessionStorage.setItem('nm-disclaimer-ack', '1'); setShowDisclaimer(false); };
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <Curtain />
      <Cursor />
      <CornerMarks />
      <Sidebar active={active} />
      <main style={{ flex: 1, minWidth: 0 }}>
        {children}
        <Footer onDisclaimer={() => setShowDisclaimer(true)} />
      </main>
      {showDisclaimer && <DisclaimerModal onClose={ack} />}
    </div>
  );
}

Object.assign(window, { SECTION, H2, PD, Ellipse, MarkWatermark, Magnetic, Sidebar, Footer, Shell, DisclaimerModal });
