/* global React */
/* Individual Practice Area template — rendered as a slide-over "page" from
   practice.html. Mirrors the wireframe's per-area structure: Hero, What We
   Handle, Who This Is For, Why Namami, Services, Related Insights (auto-fed
   by tag), FAQs, Recognition, CTA. */
const { useState, useEffect } = React;
const { Eyebrow, Button, Badge } = window.NamamiLawOfficesDesignSystem_f396ce;

function relatedInsights(areaName) {
  return window.INSIGHTS.filter((i) => i.practices.includes(areaName))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);
}

const TYPE_CTA = { Article: 'Read', Podcast: 'Listen', 'Video Explainer': 'Watch', 'Case Study': 'Read', Guide: 'Read' };

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid var(--line-on-light)' }}>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer',
        padding: '16px 0', display: 'flex', justifyContent: 'space-between', gap: 12,
        fontFamily: 'var(--font-grotesk)', fontSize: '1rem', fontWeight: 500, color: 'var(--color-charcoal)',
      }}>
        <span>{q}</span>
        <span style={{ color: 'var(--color-saffron)', fontWeight: 700, flex: 'none' }}>{open ? '−' : '+'}</span>
      </button>
      {open && <p style={{ margin: '0 0 18px', fontSize: '.94rem', fontWeight: 300, lineHeight: 1.62, color: '#3a3a3c', maxWidth: '62ch' }}>{a}</p>}
    </div>
  );
}

function PracticeDetail({ area, onClose, onJump }) {
  const { SECTION, H2, PD } = window;
  const [related, setRelated] = useState([]);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    setRelated(relatedInsights(area.name));
    return () => { document.body.style.overflow = ''; };
  }, [area]);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', justifyContent: 'flex-end' }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(28,28,30,.6)',
        backdropFilter: 'blur(2px)', animation: 'nm-fade .25s ease' }} />
      <article style={{ position: 'relative', width: 'min(760px, 96vw)', height: '100%', overflowY: 'auto',
        background: 'var(--color-cream)', boxShadow: '-24px 0 70px rgba(28,28,30,.35)',
        animation: 'nm-slide .32s cubic-bezier(.2,.7,.2,1)', boxSizing: 'border-box' }}>

        <div style={{ position: 'relative', background: 'var(--color-charcoal)', color: 'var(--color-cream)',
          padding: '40px 48px 44px', overflow: 'hidden' }}>
          <window.Ellipse pos="tr" />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Eyebrow tone="saffron">Practice Area</Eyebrow>
              <button onClick={onClose} aria-label="Close" style={{ background: 'none', border: 'none',
                cursor: 'pointer', fontSize: '1.7rem', lineHeight: 1, color: 'var(--color-cream)' }}>×</button>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.2vw,2.6rem)', fontWeight: 600, letterSpacing: '-.025em',
              lineHeight: 1.06, margin: '14px 0 0' }}>{area.name}<span style={PD}>.</span></h2>
            <p style={{ fontSize: '1.05rem', fontWeight: 300, color: 'rgba(249,245,239,.78)', lineHeight: 1.55, marginTop: 14, maxWidth: '58ch' }}>{area.intro}</p>
          </div>
        </div>

        <div style={{ padding: '40px 48px 64px' }}>

          <h3 style={{ fontSize: '.7rem', letterSpacing: '.2em', textTransform: 'uppercase',
            fontWeight: 600, color: 'var(--color-gold)' }}>What We Handle</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: '14px 0 0' }}>
            {area.handle.map((w) => (
              <li key={w} style={{ display: 'flex', gap: 12, padding: '10px 0',
                borderBottom: '1px solid var(--line-on-light)', fontSize: '.96rem', fontWeight: 300,
                lineHeight: 1.5, color: '#3a3a3c' }}>
                <span style={{ color: 'var(--color-saffron)', fontWeight: 700 }}>—</span>{w}
              </li>
            ))}
          </ul>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 30, marginTop: 34 }}>
            <div>
              <h3 style={{ fontSize: '.7rem', letterSpacing: '.2em', textTransform: 'uppercase',
                fontWeight: 600, color: 'var(--color-gold)' }}>Who This Is For</h3>
              <p style={{ fontSize: '.98rem', fontWeight: 300, lineHeight: 1.6, color: '#3a3a3c', marginTop: 12 }}>{area.whoFor}</p>
            </div>
            <div>
              <h3 style={{ fontSize: '.7rem', letterSpacing: '.2em', textTransform: 'uppercase',
                fontWeight: 600, color: 'var(--color-gold)' }}>Why Namami</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0' }}>
                {area.why.map((w) => (
                  <li key={w} style={{ fontSize: '.96rem', fontWeight: 300, lineHeight: 1.55, color: '#3a3a3c', marginTop: 8 }}>{w}</li>
                ))}
              </ul>
            </div>
          </div>

          <h3 style={{ fontSize: '.7rem', letterSpacing: '.2em', textTransform: 'uppercase',
            fontWeight: 600, color: 'var(--color-gold)', marginTop: 34 }}>Our Services in {area.name} Include</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9, marginTop: 14 }}>
            {area.services.map((s) => (
              <span key={s} style={{ border: '1px solid var(--line-on-light)', borderRadius: 'var(--radius-pill)',
                padding: '8px 16px', fontSize: '.84rem', fontWeight: 400, color: 'var(--color-charcoal)' }}>{s}</span>
            ))}
          </div>

          {related.length > 0 && (
            <div style={{ marginTop: 40 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 8 }}>
                <h3 style={{ fontSize: '.7rem', letterSpacing: '.2em', textTransform: 'uppercase',
                  fontWeight: 600, color: 'var(--color-gold)' }}>Related Insights</h3>
                <a href={'insights.html?practice=' + encodeURIComponent(area.name)} style={{
                  fontSize: '.82rem', fontWeight: 600, color: 'var(--color-gold)', textDecoration: 'none' }}>
                  View all {area.name} Insights →
                </a>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 16, marginTop: 16 }}>
                {related.map((r) => (
                  <a key={r.slug} href={'insights.html?item=' + r.slug} style={{ textDecoration: 'none' }}>
                    <div style={{ border: '1px solid var(--line-on-light)', borderTop: '3px solid var(--color-charcoal)',
                      borderRadius: 'var(--radius-sm)', padding: '18px 18px', height: '100%', boxSizing: 'border-box' }}>
                      <Badge tone={r.type === 'Podcast' ? 'dark' : 'accent'}>{r.type}</Badge>
                      <div style={{ fontSize: '.98rem', fontWeight: 600, letterSpacing: '-.01em', marginTop: 12, lineHeight: 1.3 }}>{r.title}</div>
                      <p style={{ fontSize: '.82rem', fontWeight: 300, color: '#4a4a4c', lineHeight: 1.5, margin: '8px 0 10px' }}>{r.desc}</p>
                      <span style={{ fontSize: '.78rem', fontWeight: 600, color: 'var(--color-gold)' }}>{TYPE_CTA[r.type]} →</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginTop: 40 }}>
            <h3 style={{ fontSize: '.7rem', letterSpacing: '.2em', textTransform: 'uppercase',
              fontWeight: 600, color: 'var(--color-gold)' }}>Frequently Asked Questions</h3>
            <div style={{ marginTop: 8 }}>
              {area.faqs.map(([q, a]) => <FAQItem key={q} q={q} a={a} />)}
            </div>
          </div>

          <div style={{ marginTop: 32, border: '1px solid var(--line-on-light)', borderRadius: 'var(--radius-md)',
            padding: '18px 22px', background: 'var(--color-stone)' }}>
            <div style={{ fontSize: '.66rem', letterSpacing: '.2em', textTransform: 'uppercase',
              fontWeight: 700, color: 'var(--color-grey)', marginBottom: 8 }}>Recognition</div>
            <p style={{ fontSize: '.92rem', fontWeight: 300, color: '#3a3a3c', margin: 0, lineHeight: 1.55 }}>{area.recognition}</p>
          </div>

          <div style={{ marginTop: 34, display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
            <window.Magnetic><Button variant="accent" onClick={() => window.nmGo('contact.html')}>Book a Consult →</Button></window.Magnetic>
            <Button variant="link" onClick={() => window.nmGo('contact.html')}>Contact us</Button>
          </div>

          <div style={{ marginTop: 30, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {window.PRACTICE_AREAS.filter((a) => a.slug !== area.slug).slice(0, 3).map((a) => (
              <button key={a.slug} onClick={() => onJump(a)} style={{ fontFamily: 'var(--font-grotesk)',
                fontSize: '.78rem', border: '1px solid var(--line-on-light)', background: 'transparent',
                color: 'var(--color-grey)', padding: '8px 14px', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}>
                {a.name} →
              </button>
            ))}
          </div>

          <p style={{ fontSize: '.78rem', fontWeight: 300, fontStyle: 'italic', color: 'var(--color-grey)',
            marginTop: 30, lineHeight: 1.6 }}>
            This material is for general information only and does not constitute advertisement, solicitation, or legal advice.
          </p>
        </div>
      </article>
      <style>{`
        @keyframes nm-fade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes nm-slide { from { transform: translateX(40px); opacity: .4 } to { transform: translateX(0); opacity: 1 } }
      `}</style>
    </div>
  );
}

window.PracticeDetail = PracticeDetail;
