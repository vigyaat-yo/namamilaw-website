/* @ds-bundle: {"format":3,"namespace":"NamamiLawOfficesDesignSystem_f396ce","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"9354e142d356","components/core/Button.jsx":"a7cd82d54906","components/core/Card.jsx":"43a31c6475a6","components/core/Eyebrow.jsx":"5201296edced","components/core/Input.jsx":"e93a5e39ac95","components/core/Tag.jsx":"1e7a7a207b99","ui_kits/website/Sections.jsx":"f9e76cddc718","ui_kits/website/Sidebar.jsx":"589b8776cd42"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NamamiLawOfficesDesignSystem_f396ce = window.NamamiLawOfficesDesignSystem_f396ce || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small status / category badge. Saffron-tinted or neutral.
 */
function Badge({
  children,
  tone = 'accent',
  ...rest
}) {
  const tones = {
    accent: {
      background: 'var(--color-saffron-08)',
      color: 'var(--color-gold)',
      border: '1px solid rgba(239,137,34,.3)'
    },
    neutral: {
      background: 'var(--color-stone)',
      color: 'var(--color-charcoal)',
      border: '1px solid var(--line-on-light)'
    },
    dark: {
      background: 'var(--color-charcoal)',
      color: 'var(--color-cream)',
      border: '1px solid var(--color-charcoal)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-grotesk)',
      fontSize: '0.66rem',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      fontWeight: 600,
      padding: '5px 10px',
      borderRadius: 'var(--radius-sm)',
      lineHeight: 1,
      ...tones[tone]
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Namami primary action. Editorial, sharp-cornered, restrained.
 * Variants: primary (charcoal), accent (saffron), ghost (bordered), link.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  type = 'button',
  style,
  ...rest
}) {
  const pad = size === 'sm' ? '8px 16px' : size === 'lg' ? '16px 32px' : '12px 24px';
  const fontSize = size === 'sm' ? '0.82rem' : size === 'lg' ? '1.02rem' : '0.92rem';
  const base = {
    fontFamily: 'var(--font-grotesk)',
    fontWeight: 600,
    letterSpacing: '0.02em',
    fontSize,
    padding: pad,
    border: '1px solid transparent',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background .2s ease, color .2s ease, border-color .2s ease, opacity .2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    lineHeight: 1,
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: {
      background: 'var(--color-charcoal)',
      color: 'var(--color-cream)',
      borderColor: 'var(--color-charcoal)'
    },
    accent: {
      background: 'var(--color-saffron)',
      color: 'var(--color-charcoal)',
      borderColor: 'var(--color-saffron)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-charcoal)',
      borderColor: 'var(--line-on-light)'
    },
    'ghost-inverse': {
      background: 'transparent',
      color: 'var(--color-cream)',
      borderColor: 'var(--line-on-dark)'
    },
    link: {
      background: 'transparent',
      color: 'var(--color-gold)',
      borderColor: 'transparent',
      padding: '4px 0',
      borderRadius: 0,
      textDecoration: 'none',
      borderBottom: '1px solid rgba(200,132,26,.5)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === 'primary') e.currentTarget.style.background = '#000';
      if (variant === 'accent') e.currentTarget.style.background = 'var(--color-gold)';
      if (variant === 'ghost') e.currentTarget.style.borderColor = 'var(--color-charcoal)';
      if (variant === 'ghost-inverse') {
        e.currentTarget.style.background = 'var(--color-cream)';
        e.currentTarget.style.color = 'var(--color-charcoal)';
      }
      if (variant === 'link') e.currentTarget.style.opacity = '0.7';
    },
    onMouseLeave: e => {
      if (disabled) return;
      const v = variants[variant];
      e.currentTarget.style.background = v.background;
      e.currentTarget.style.color = v.color;
      e.currentTarget.style.borderColor = v.borderColor;
      e.currentTarget.style.opacity = '1';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Editorial card: bordered, unfilled, with a bold charcoal top edge.
 * Not a "feature grid" tile — restrained and document-like.
 */
function Card({
  title,
  children,
  inverse = false,
  accentTop = true,
  ...rest
}) {
  const borderColor = inverse ? 'var(--line-on-dark)' : 'var(--line-on-light)';
  const topColor = inverse ? 'var(--color-saffron)' : 'var(--color-charcoal)';
  const titleColor = inverse ? 'var(--color-cream)' : 'var(--color-charcoal)';
  const bodyColor = inverse ? 'var(--ink-muted-dark)' : 'var(--ink-muted-light)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: `1px solid ${borderColor}`,
      background: 'transparent',
      padding: '27px 26px',
      borderRadius: 'var(--radius-sm)'
    }
  }, rest), title && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: accentTop ? `3px solid ${topColor}` : 'none',
      paddingTop: accentTop ? '16px' : 0,
      marginBottom: '11px',
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 600,
      fontSize: '1.05rem',
      color: titleColor
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontSize: '0.93rem',
      fontWeight: 300,
      lineHeight: 1.55,
      color: bodyColor
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tracked uppercase label that sits above headlines. The brand's signature
 * type element — saffron/gold, letter-spaced, semibold.
 */
function Eyebrow({
  children,
  tone = 'gold',
  as = 'div',
  ...rest
}) {
  const Tag = as;
  const color = tone === 'saffron' ? 'var(--color-saffron)' : 'var(--color-gold)';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontSize: 'var(--type-eyebrow)',
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      fontWeight: 600,
      color,
      margin: 0
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with a bottom-rule editorial treatment. Optional label.
 */
function Input({
  label,
  id,
  type = 'text',
  inverse = false,
  ...rest
}) {
  const ink = inverse ? 'var(--color-cream)' : 'var(--color-charcoal)';
  const line = inverse ? 'var(--line-on-dark)' : 'var(--line-on-light)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-grotesk)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.68rem',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: inverse ? 'var(--color-saffron)' : 'var(--color-gold)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontSize: '1rem',
      fontWeight: 300,
      color: ink,
      background: 'transparent',
      border: 'none',
      borderBottom: `1px solid ${line}`,
      padding: '8px 0',
      outline: 'none'
    },
    onFocus: e => e.currentTarget.style.borderBottomColor = 'var(--color-saffron)',
    onBlur: e => e.currentTarget.style.borderBottomColor = line
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Outlined practice-area / topic tag. Thin border, no fill, slight tracking.
 */
function Tag({
  children,
  inverse = false,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      border: `1px solid ${inverse ? 'var(--line-on-dark)' : 'var(--line-on-light)'}`,
      color: inverse ? 'rgba(249,245,239,.82)' : 'var(--color-charcoal)',
      padding: '8px 16px',
      fontFamily: 'var(--font-grotesk)',
      fontSize: '0.82rem',
      letterSpacing: '0.04em',
      fontWeight: 400,
      borderRadius: 'var(--radius-sm)',
      lineHeight: 1
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
/* global React */
const {
  Eyebrow,
  Tag,
  Card,
  Button,
  Badge,
  Input
} = window.NamamiLawOfficesDesignSystem_f396ce;
function Ellipse({
  pos = 'tr'
}) {
  const map = {
    tr: {
      top: '-180px',
      right: '-120px'
    },
    bl: {
      bottom: '-180px',
      left: '-120px'
    },
    br: {
      bottom: '-160px',
      right: '-100px'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 520,
      height: 520,
      borderRadius: '50%',
      background: 'var(--ellipse-glow)',
      pointerEvents: 'none',
      zIndex: 0,
      ...map[pos]
    }
  });
}
const SECTION = {
  position: 'relative',
  padding: '88px 7vw',
  overflow: 'hidden'
};
const H2 = {
  fontSize: 'clamp(2rem,3.6vw,3.2rem)',
  fontWeight: 600,
  letterSpacing: '-.025em',
  lineHeight: 1.04,
  margin: '14px 0 0',
  color: 'var(--color-charcoal)',
  maxWidth: '18ch'
};
const PD = {
  color: 'var(--color-saffron)'
};

/* ---------- Hero ---------- */
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...SECTION,
      background: 'var(--color-charcoal)',
      color: 'var(--color-cream)',
      minHeight: '88vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Ellipse, {
    pos: "tr"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 920
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "saffron"
  }, "A Creator-First IP & Entertainment Practice"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.8rem,6vw,5.4rem)',
      fontWeight: 600,
      letterSpacing: '-.03em',
      lineHeight: .98,
      margin: '22px 0 0',
      maxWidth: '15ch'
    }
  }, "We bow to the work", /*#__PURE__*/React.createElement("span", {
    style: PD
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(1.05rem,1.5vw,1.35rem)',
      fontWeight: 300,
      lineHeight: 1.5,
      maxWidth: '46ch',
      color: 'rgba(249,245,239,.72)',
      marginTop: 26
    }
  }, "A boutique practice at the intersection of intellectual property, media, and the Indian creator economy \u2014 advising on trademarks, copyright, performer rights, and M&E transactions with the precision a creative practice demands."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 34,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: () => onNav('contact')
  }, "Start a conversation"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost-inverse",
    onClick: () => onNav('practice')
  }, "Practice areas"))));
}

/* ---------- Practice ---------- */
const PRACTICE = [['Trademarks', 'Clearance, prosecution, oppositions and brand strategy across classes and jurisdictions.'], ['Copyright', 'Authorship, assignment, fair dealing and enforcement for written, visual and recorded work.'], ['Performer Rights', 'Royalties, moral rights and the statutory protections owed to performers and musicians.'], ['Film & Entertainment', 'Production, chain-of-title, licensing and M&E transactions end to end.'], ['Patents & Design', 'Industrial design registration and patent advisory for inventors and studios.'], ['IP Audit & Licensing', 'Portfolio audits, valuation support and licensing frameworks for franchises.']];

/* Detailed sub-page content for each practice area. Tone stays informational
   (BCI-compliant): we explain what the work involves, give the visitor a
   genuine takeaway, and offer a checklist they can copy. */
const AREAS = {
  'Trademarks': {
    blurb: 'Protecting the name, logo and identity a brand is built on.',
    what: ['Availability searches and clearance before you commit to a name or mark.', 'Filing and prosecution across the right classes, in India and abroad.', 'Oppositions, rectifications and responses to examination reports.', 'Watch services, enforcement and coexistence agreements.'],
    takeaway: 'A trademark protects how customers identify you — not the idea behind your product. Register the mark you actually use, in the classes you actually trade in.',
    checklist: ['Run a clearance search before printing anything', 'File in every class your goods/services fall under', 'Use the ™ symbol from day one; ® only after registration', 'Keep dated evidence of first commercial use', 'Diarise the 10-year renewal']
  },
  'Copyright': {
    blurb: 'Securing authorship and the right to control how work is used.',
    what: ['Advice on authorship, ownership and first-owner rules for commissioned work.', 'Assignment and licence drafting that survives platform and format changes.', 'Fair-dealing assessments for criticism, review, reporting and teaching.', 'Takedowns, infringement notices and litigation support.'],
    takeaway: 'Copyright exists the moment a work is fixed — registration is optional but powerful as evidence. The author is the first owner unless a written assignment says otherwise.',
    checklist: ['Get assignments in writing — verbal deals fail', 'Name the author and the owner separately in contracts', 'Keep source files and drafts as proof of creation', 'Specify territory, term and media in every licence', 'Register key works for stronger enforcement']
  },
  'Patent': {
    blurb: 'Turning a genuinely new invention into a protected, ownable asset.',
    what: ['Patentability assessment and prior-art searching.', 'Drafting specifications and claims with the right scope.', 'Prosecution before the Patent Office and response to objections.', 'Inventor-assignment and employer-IP advisory for studios and startups.'],
    takeaway: 'A patent protects how something works, not how it looks. Public disclosure before filing can destroy novelty — file first, demo second.',
    checklist: ['File before any public demo, pitch or sale', 'Document the invention with dated lab/notebook records', 'Confirm the invention is novel and non-obvious', 'Settle inventor and employer ownership up front', 'Decide on jurisdictions within the priority window']
  },
  'Industrial Design': {
    blurb: 'Protecting the shape, configuration and look of a product.',
    what: ['Design registration for the visual appearance of articles.', 'Strategy on the overlap between design, trademark and copyright.', 'Enforcement against look-alikes and knock-offs.', 'Portfolio planning for product families.'],
    takeaway: 'Design protection covers appearance — lines, contours, ornamentation — and must be new and original at filing. It is fast and cost-effective for product makers.',
    checklist: ['Register before the design is shown publicly', 'File separate designs for materially different variants', 'Keep the representations clean and consistent', 'Mark registered articles appropriately', 'Track the renewal term to keep protection alive']
  },
  'Film & Entertainment': {
    blurb: 'Clearing, structuring and protecting media and entertainment work.',
    what: ['Chain-of-title review so a project can actually be sold or financed.', 'Production, talent, music and distribution agreements.', 'Rights clearance — underlying works, music, footage and locations.', 'Format, remake and adaptation deals.'],
    takeaway: 'A film is only as sellable as its chain of title is clean. Every contribution — script, score, performance — needs a written grant of rights tracing back to the producer.',
    checklist: ['Secure underlying rights before the camera rolls', 'Get signed grants from every contributor', 'Clear all music — sync and master separately', 'Confirm location and footage releases', 'Keep a single, complete chain-of-title file']
  },
  'Performer Rights': {
    blurb: 'Upholding the statutory rights owed to performers and musicians.',
    what: ['Advice on performer and moral rights post the 2012 Copyright Amendment.', 'Royalty entitlements and collection-society relationships.', 'Contract review so performers retain non-waivable rights.', 'Enforcement where credit or royalties are withheld.'],
    takeaway: 'Performers have rights that cannot be signed away entirely — including a share of royalties for many uses. A contract that ignores them is not the full picture.',
    checklist: ['Read royalty clauses, not just the upfront fee', 'Confirm credit and moral-rights terms', 'Check which collection societies you should join', 'Keep records of every performance and broadcast', 'Don\u2019t waive what the statute makes non-waivable']
  },
  'IP Licensing': {
    blurb: 'Letting others use IP — on terms that protect the owner.',
    what: ['Licence and franchise frameworks for scaling a brand or format.', 'Royalty structures, audits and quality-control clauses.', 'Territory, term and exclusivity strategy.', 'Termination, reversion and post-term obligations.'],
    takeaway: 'A franchise is, at its core, an IP licensing arrangement. The value sits in quality control and clear scope — not just the royalty rate.',
    checklist: ['Define scope: territory, term, exclusivity, media', 'Build in quality-control and audit rights', 'Set clear royalty triggers and reporting duties', 'Plan termination and what reverts on exit', 'Keep the licensed marks under the owner\u2019s control']
  },
  'Creator Economy': {
    blurb: 'Practical IP guidance for individual creators and small studios.',
    what: ['Brand and handle protection across platforms.', 'Sponsorship, collaboration and UGC agreements.', 'Advice on platform terms, monetisation and ownership.', 'Disputes over content, credit and takedowns.'],
    takeaway: 'Owning your handle is not the same as owning your brand. Register the name, keep your contracts simple but written, and read what each platform claims over your work.',
    checklist: ['Register your name/brand as a trademark early', 'Get brand-deal terms in writing every time', 'Read each platform\u2019s rights grab before posting', 'Keep originals and proof of authorship', 'Separate personal and business IP ownership']
  }
};
const AREA_ORDER = ['Trademarks', 'Copyright', 'Patent', 'Industrial Design', 'Film & Entertainment', 'Performer Rights', 'IP Licensing', 'Creator Economy'];
function Practice() {
  const [open, setOpen] = useState(null);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...SECTION,
      background: 'var(--color-cream)'
    }
  }, /*#__PURE__*/React.createElement(Ellipse, {
    pos: "br"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Practice Areas"), /*#__PURE__*/React.createElement("h2", {
    style: H2
  }, "Where IP law meets creative vision", /*#__PURE__*/React.createElement("span", {
    style: PD
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.92rem',
      fontWeight: 300,
      color: 'var(--color-grey)',
      marginTop: 14
    }
  }, "Select an area to read what the work involves, what's worth knowing, and a checklist you can take with you."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      marginTop: 22,
      maxWidth: 760
    }
  }, AREA_ORDER.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setOpen(t),
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontSize: '0.82rem',
      letterSpacing: '0.04em',
      border: '1px solid var(--line-on-light)',
      background: 'transparent',
      color: 'var(--color-charcoal)',
      padding: '9px 16px',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      transition: 'background .2s, border-color .2s, color .2s'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--color-charcoal)';
      e.currentTarget.style.color = 'var(--color-cream)';
      e.currentTarget.style.borderColor = 'var(--color-charcoal)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = 'var(--color-charcoal)';
      e.currentTarget.style.borderColor = 'var(--line-on-light)';
    }
  }, t, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-saffron)',
      fontWeight: 700
    }
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: 22,
      marginTop: 44
    }
  }, PRACTICE.map(([t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    title: t
  }, d)))), open && /*#__PURE__*/React.createElement(PracticeDetail, {
    name: open,
    onClose: () => setOpen(null),
    onJump: setOpen
  }));
}

/* ---------- Practice detail sub-page (overlay) ---------- */
function PracticeDetail({
  name,
  onClose,
  onJump
}) {
  const a = AREAS[name];
  const [done, setDone] = useState({});
  const [copied, setCopied] = useState(false);
  React.useEffect(() => {
    setDone({});
    setCopied(false);
  }, [name]);
  const copyChecklist = () => {
    const text = `Namami Law Offices — ${name}: a quick checklist\n\n` + a.checklist.map(c => `\u2610 ${c}`).join('\n') + `\n\nInformational only; not legal advice. namamilaw.com`;
    if (navigator.clipboard) navigator.clipboard.writeText(text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(28,28,30,.55)',
      backdropFilter: 'blur(2px)',
      animation: 'nm-fade .25s ease'
    }
  }), /*#__PURE__*/React.createElement("article", {
    style: {
      position: 'relative',
      width: 'min(620px, 94vw)',
      height: '100%',
      overflowY: 'auto',
      background: 'var(--color-cream)',
      boxShadow: '-20px 0 60px rgba(28,28,30,.35)',
      animation: 'nm-slide .32s cubic-bezier(.2,.7,.2,1)',
      padding: '40px 48px 64px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Practice \xB7 ", name), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1.6rem',
      lineHeight: 1,
      color: 'var(--color-charcoal)'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(2rem,3.4vw,2.8rem)',
      fontWeight: 600,
      letterSpacing: '-.025em',
      lineHeight: 1.04,
      margin: '14px 0 0'
    }
  }, name, /*#__PURE__*/React.createElement("span", {
    style: PD
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.1rem',
      fontWeight: 300,
      color: '#3a3a3c',
      lineHeight: 1.5,
      marginTop: 14
    }
  }, a.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      width: 64,
      background: 'var(--color-gold)',
      margin: '30px 0'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '.72rem',
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'var(--color-gold)'
    }
  }, "What we do"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '16px 0 0'
    }
  }, a.what.map(w => /*#__PURE__*/React.createElement("li", {
    key: w,
    style: {
      display: 'flex',
      gap: 12,
      padding: '10px 0',
      borderBottom: '1px solid var(--line-on-light)',
      fontSize: '.98rem',
      fontWeight: 300,
      lineHeight: 1.5,
      color: '#3a3a3c'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-saffron)',
      fontWeight: 700
    }
  }, "\u2014"), w))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      border: '1px solid rgba(239,137,34,.4)',
      background: 'var(--color-saffron-08)',
      borderRadius: 'var(--radius-md)',
      padding: '22px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.66rem',
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      fontWeight: 700,
      color: 'var(--color-gold)',
      marginBottom: 10
    }
  }, "Worth knowing"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.02rem',
      fontWeight: 300,
      lineHeight: 1.55,
      color: 'var(--color-charcoal)',
      margin: 0
    }
  }, a.takeaway)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      flexWrap: 'wrap',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '.72rem',
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'var(--color-gold)'
    }
  }, "Take this with you"), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: copyChecklist
  }, copied ? 'Copied to clipboard ✓' : 'Copy checklist')), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      border: '1px solid var(--line-on-light)',
      borderTop: '3px solid var(--color-charcoal)',
      borderRadius: 'var(--radius-sm)',
      padding: '8px 22px 14px'
    }
  }, a.checklist.map((c, i) => /*#__PURE__*/React.createElement("label", {
    key: i,
    style: {
      display: 'flex',
      gap: 13,
      alignItems: 'flex-start',
      padding: '12px 0',
      borderBottom: i < a.checklist.length - 1 ? '1px solid var(--line-on-light)' : 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setDone(d => ({
      ...d,
      [i]: !d[i]
    })),
    style: {
      flex: 'none',
      width: 20,
      height: 20,
      marginTop: 1,
      borderRadius: 5,
      border: '1.5px solid ' + (done[i] ? 'var(--color-saffron)' : 'var(--color-grey)'),
      background: done[i] ? 'var(--color-saffron)' : 'transparent',
      color: 'var(--color-charcoal)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 13,
      fontWeight: 700,
      transition: 'all .15s'
    }
  }, done[i] ? '✓' : ''), /*#__PURE__*/React.createElement("span", {
    onClick: () => setDone(d => ({
      ...d,
      [i]: !d[i]
    })),
    style: {
      fontSize: '.98rem',
      fontWeight: 300,
      lineHeight: 1.5,
      color: done[i] ? 'var(--color-grey)' : 'var(--color-charcoal)',
      textDecoration: done[i] ? 'line-through' : 'none'
    }
  }, c))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30,
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, AREA_ORDER.filter(n => n !== name).slice(0, 3).map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => onJump(n),
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontSize: '.78rem',
      border: '1px solid var(--line-on-light)',
      background: 'transparent',
      color: 'var(--color-grey)',
      padding: '8px 14px',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer'
    }
  }, n, " \u2192"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.78rem',
      fontWeight: 300,
      fontStyle: 'italic',
      color: 'var(--color-grey)',
      marginTop: 30,
      lineHeight: 1.6
    }
  }, "This material is for general information only and does not constitute advertisement, solicitation, or legal advice.")));
}

/* ---------- About ---------- */
function About() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...SECTION,
      background: 'var(--color-stone)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'grid',
      gridTemplateColumns: '.85fr 1.15fr',
      gap: 'clamp(2rem,5vw,5rem)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mark-saffron.png",
    alt: "Namami mark",
    style: {
      width: 'min(260px,60%)',
      justifySelf: 'center',
      filter: 'drop-shadow(0 14px 40px rgba(239,137,34,.25))'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "The Firm"), /*#__PURE__*/React.createElement("h2", {
    style: H2
  }, "Authority is shown, not announced", /*#__PURE__*/React.createElement("span", {
    style: PD
  }, ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      width: 64,
      background: 'var(--color-gold)',
      margin: '24px 0'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.02rem',
      fontWeight: 300,
      lineHeight: 1.62,
      color: '#3a3a3c',
      maxWidth: '46ch'
    }
  }, /*#__PURE__*/React.createElement("b", null, "Namami"), " (\u0928\u092E\u093E\u092E\u093F) is Sanskrit \u2014 \u201CI bow,\u201D \u201CI revere.\u201D It is the firm's argument in one gesture: protecting what people create is an act of reverence for the work. We advise founders, studios and performers in plain language, with the calm that comes from precision."))));
}

/* ---------- Insights ---------- */
const POSTS = [['Case Note', 'A franchise is, at its core, an IP licensing arrangement'], ['Explainer', 'Performer royalties after the 2012 Copyright Amendment'], ['Policy', 'What the creator economy gets wrong about “fair use”']];
function Insights() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...SECTION,
      background: 'var(--color-charcoal)',
      color: 'var(--color-cream)'
    }
  }, /*#__PURE__*/React.createElement(Ellipse, {
    pos: "bl"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "saffron"
  }, "Insights"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...H2,
      color: 'var(--color-cream)'
    }
  }, "Information first. We position, we don't pitch", /*#__PURE__*/React.createElement("span", {
    style: PD
  }, ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: 22,
      marginTop: 40
    }
  }, POSTS.map(([k, t]) => /*#__PURE__*/React.createElement("article", {
    key: t,
    style: {
      borderTop: '3px solid var(--color-saffron)',
      paddingTop: 16,
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, k), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '1.25rem',
      fontWeight: 600,
      letterSpacing: '-.02em',
      lineHeight: 1.2,
      margin: '14px 0 0'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link"
  }, "Read the note")))))));
}

/* ---------- Contact ---------- */
function Contact() {
  const [sent, setSent] = useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...SECTION,
      background: 'var(--color-cream)'
    }
  }, /*#__PURE__*/React.createElement(Ellipse, {
    pos: "tr"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'clamp(2rem,5vw,5rem)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Contact"), /*#__PURE__*/React.createElement("h2", {
    style: H2
  }, "Keep it consistent. Ask if unsure", /*#__PURE__*/React.createElement("span", {
    style: PD
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.02rem',
      fontWeight: 300,
      lineHeight: 1.62,
      color: '#3a3a3c',
      maxWidth: '40ch',
      marginTop: 20
    }
  }, "For new matters and brand enquiries, write to us. We respond within two working days."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.85rem',
      fontWeight: 300,
      color: 'var(--color-grey)',
      fontStyle: 'italic',
      marginTop: 28,
      maxWidth: '46ch',
      lineHeight: 1.6
    }
  }, "This material is for general information only and does not constitute advertisement, solicitation, or legal advice.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Jane Creator"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@studio.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Matter",
    placeholder: "Trademark clearance"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: () => setSent(true)
  }, sent ? 'Received — thank you' : 'Send enquiry')))));
}
Object.assign(window, {
  Hero,
  Practice,
  About,
  Insights,
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sidebar.jsx
try { (() => {
/* global React */
const {
  useState
} = React;
const NAV = [['practice', 'Practice'], ['about', 'The Firm'], ['insights', 'Insights'], ['contact', 'Contact']];
function Sidebar({
  active,
  onNav
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'sticky',
      top: 0,
      alignSelf: 'flex-start',
      width: 320,
      minWidth: 320,
      height: '100vh',
      background: 'var(--color-charcoal)',
      color: 'var(--color-cream)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '40px 34px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/wordmark-reversed.png",
    alt: "Namami Law Offices",
    style: {
      width: 200,
      display: 'block',
      marginBottom: 6,
      cursor: 'pointer'
    },
    onClick: () => onNav('practice')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.62rem',
      letterSpacing: '.28em',
      textTransform: 'uppercase',
      color: 'rgba(249,245,239,.45)',
      fontWeight: 600,
      paddingLeft: 2
    }
  }, "IP \xB7 Media \xB7 Entertainment")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, NAV.map(([key, label]) => /*#__PURE__*/React.createElement("button", {
    key: key,
    onClick: () => onNav(key),
    style: {
      textAlign: 'left',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-grotesk)',
      fontSize: '1.5rem',
      fontWeight: 600,
      letterSpacing: '-.02em',
      padding: '7px 0',
      color: active === key ? 'var(--color-saffron)' : 'var(--color-cream)',
      transition: 'color .2s, padding-left .2s'
    },
    onMouseEnter: e => {
      e.currentTarget.style.paddingLeft = '8px';
      if (active !== key) e.currentTarget.style.color = 'var(--color-gold)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.paddingLeft = '0';
      if (active !== key) e.currentTarget.style.color = 'var(--color-cream)';
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.66rem',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'rgba(249,245,239,.4)',
      lineHeight: 1.9
    }
  }, "New Delhi, India", /*#__PURE__*/React.createElement("br", null), "namaste@namamilaw.com"));
}
window.Sidebar = Sidebar;
window.NAV = NAV;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sidebar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tag = __ds_scope.Tag;

})();
