import { useEffect, useMemo, useRef, useState } from "react";

const colors = {
  ivory: "#FBF6F0",
  pearl: "#FFF9F5",
  blush: "#E8B4B8",
  rose: "#C97B84",
  champagne: "#C6A875",
  ink: "#3A2E2A",
  softInk: "#5C4B44",
  mist: "#EFE4DA",
  lilac: "#B895C0",
  forest: "#4A6B5A",
};

const looks = [
  {
    src: "/media/photos/hero-garden.jpeg",
    title: "Garden Daydream",
    chapter: "I",
    tag: "Enchanted Soft",
    note: "Lilac ruffles, secret-garden light.",
    quote: "Petals, pastel, and a quiet smile.",
    palette: ["#E8D5EC", "#E8B4B8", "#C6A875", "#FBF6F0"],
    fabric: "Airy lilac chiffon with soft ruffle layers",
    vibe: "Secret-garden softness, daylight romance",
    tip: "Keep makeup dewy and let the lilac do the talking",
  },
  {
    src: "/media/photos/look-red-dress.jpeg",
    title: "Ruby Hour",
    chapter: "II",
    tag: "Statement Glam",
    note: "Studded scarlet — evening energy.",
    quote: "When the night asks for drama.",
    palette: ["#8B1E2D", "#C97B84", "#3A2E2A", "#F3E6EA"],
    fabric: "Structured scarlet with studded shimmer",
    vibe: "Evening drama, bold and magnetic",
    tip: "Pair with clean hair and a soft smoked eye",
  },
  {
    src: "/media/photos/look-02.jpeg",
    title: "Blush Corset",
    chapter: "III",
    tag: "Modern Muse",
    note: "Hot pink polish, soft smile.",
    quote: "Pretty with a little fire.",
    palette: ["#E85A7A", "#F2C9CD", "#C6A875", "#FFF9F5"],
    fabric: "Hot-pink polish with corset structure",
    vibe: "Modern muse energy, playful confidence",
    tip: "Balance the pink with nude lips and soft glow",
  },
  {
    src: "/media/photos/look-03.jpeg",
    title: "Champagne Spell",
    chapter: "IV",
    tag: "Festive Glow",
    note: "Embellished cream, princess finish.",
    quote: "Dressed in quiet sparkle.",
    featured: true,
    palette: ["#E2C992", "#F7EBE3", "#E8B4B8", "#C6A875"],
    fabric: "Embellished cream with champagne sparkle",
    vibe: "Festive princess glow, soft glam finish",
    tip: "Let the embellishment catch light — keep jewelry delicate",
  },
  {
    src: "/media/photos/look-boat.jpeg",
    title: "Fall Vibes",
    chapter: "V",
    tag: "Travel Edit",
    note: "River light & festive drapes.",
    quote: "Wind in the drapes, story in the light.",
    palette: ["#4A6B5A", "#C6A875", "#EFE4DA", "#E8B4B8"],
    fabric: "Flowing festive drapes made for movement",
    vibe: "Travel light, river breeze, soft adventure",
    tip: "Shoot near water or warm evening light for depth",
  },
  {
    src: "/media/photos/look-05.jpeg",
    title: "Teal Ballad",
    chapter: "VI",
    tag: "Desi Glam",
    note: "Seafoam sparkle, gold florals.",
    quote: "Tradition, tipped in gold.",
    palette: ["#2F6F6A", "#E2C992", "#F2C9CD", "#3A2E2A"],
    fabric: "Seafoam textile with gold floral detail",
    vibe: "Desi glam — heritage meets soft sparkle",
    tip: "Gold accessories and a soft bun complete the ballad",
  },
];

const offerings = [
  {
    title: "Fashion Stories",
    text: "Outfit stories, GRWM, and look transitions with your product styled naturally.",
  },
  {
    title: "Beauty Features",
    text: "Soft glam try-ons, texture close-ups, and everyday-to-evening beauty moments.",
  },
  {
    title: "Campaign Collabs",
    text: "Launch videos, unboxings, and PR features shaped for your brand voice.",
  },
];

const brandTagline = "Enchanted fashion & soft glam";

function BrandWordmark({ size = "nav" }) {
  const isNav = size === "nav";
  const isFooter = size === "footer";

  return (
    <span
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 0,
        lineHeight: 1.15,
        overflow: "visible",
        minWidth: 0,
      }}
    >
      <span
        style={{
          fontFamily: '"Great Vibes", cursive',
          fontSize: isNav
            ? "clamp(2.35rem, 3.8vw, 3.1rem)"
            : isFooter
              ? "2.55rem"
              : "clamp(3.9rem, 7.5vw, 6rem)",
          background: isFooter
            ? "linear-gradient(120deg, #f7ebe3 0%, #F2C9CD 45%, #E2C992 100%)"
            : `linear-gradient(120deg, ${colors.ink} 0%, #8F5A5F 35%, ${colors.rose} 68%, #A8894F 100%)`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          letterSpacing: "0.03em",
          fontWeight: 400,
          whiteSpace: "nowrap",
          overflow: "visible",
          display: "inline-block",
          padding: "0.12em 0.28em 0.02em 0.04em",
          margin: "-0.12em -0.08em 0 0",
          lineHeight: 1.05,
          WebkitBoxDecorationBreak: "clone",
          boxDecorationBreak: "clone",
        }}
      >
        blushbysweedal
      </span>
      <span
        aria-hidden="true"
        style={{
          width: isNav ? "86%" : isFooter ? "78%" : "72%",
          height: isNav ? 1.5 : 2,
          borderRadius: 99,
          background: `linear-gradient(90deg, ${colors.champagne} 0%, ${colors.blush} 55%, transparent 100%)`,
          marginTop: isNav ? 1 : 2,
          marginLeft: 2,
        }}
      />
      <span
        style={{
          fontFamily: '"Outfit", sans-serif',
          fontSize: isNav ? "0.68rem" : isFooter ? "0.82rem" : "0.95rem",
          letterSpacing: isNav ? "0.22em" : "0.28em",
          textTransform: "uppercase",
          color: isFooter ? "rgba(243,231,223,0.78)" : colors.softInk,
          fontWeight: 500,
          whiteSpace: "nowrap",
          marginTop: isNav ? 6 : 8,
          overflow: "visible",
        }}
      >
        {brandTagline}
      </span>
    </span>
  );
}

function BrandLogo({ size = "nav" }) {
  const isNav = size === "nav";
  const markHeight = isNav ? 74 : 112;

  return (
    <span
      className={`brand-logo brand-logo-${size}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: isNav ? 14 : 18,
        lineHeight: 1.15,
        background: "transparent",
        overflow: "visible",
        flexShrink: isNav ? 0 : 1,
        maxWidth: "100%",
      }}
    >
      <img
        className="brand-logo-mark"
        src="/logo-mark.png"
        alt=""
        style={{
          height: markHeight,
          width: "auto",
          display: "block",
          background: "transparent",
          border: "none",
          boxShadow: "none",
          borderRadius: 0,
          objectFit: "contain",
          flexShrink: 0,
        }}
      />
      <BrandWordmark size={size} />
    </span>
  );
}

function Sparkles() {
  const dots = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: `${6 + ((i * 17) % 88)}%`,
        top: `${10 + ((i * 29) % 75)}%`,
        delay: `${(i % 7) * 0.45}s`,
        size: 3 + (i % 4),
      })),
    []
  );

  return (
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {dots.map((d) => (
        <span
          key={d.id}
          className="sparkle"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            animationDelay: d.delay,
          }}
        />
      ))}
    </div>
  );
}

function Nav({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { id: "home", label: "Cover" },
    { id: "issue", label: "The Edit" },
    { id: "about", label: "About" },
    { id: "collabs", label: "Connect" },
  ];

  const sparks = useMemo(
    () => [
      { left: "18%", top: "28%", delay: "0s" },
      { left: "42%", top: "62%", delay: "0.7s" },
      { left: "68%", top: "24%", delay: "1.2s" },
      { left: "86%", top: "55%", delay: "1.8s" },
    ],
    []
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [page]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const goTo = (id) => {
    setPage(id);
    setMenuOpen(false);
  };

  return (
    <header
      className={`nav-shell${scrolled ? " scrolled" : ""}${menuOpen ? " menu-open" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 18,
        padding: scrolled ? "10px clamp(16px, 3.5vw, 40px)" : "14px clamp(18px, 4vw, 48px)",
        background: scrolled
          ? "linear-gradient(180deg, rgba(255,249,245,0.92) 0%, rgba(251,246,240,0.86) 100%)"
          : "linear-gradient(135deg, rgba(255,249,245,0.72) 0%, rgba(251,246,240,0.45) 45%, rgba(243,230,234,0.28) 100%)",
        backdropFilter: scrolled ? "blur(16px) saturate(1.15)" : "blur(12px) saturate(1.08)",
        borderBottom: scrolled ? "1px solid rgba(198,168,117,0.22)" : "1px solid rgba(232,180,184,0.18)",
        overflow: "visible",
      }}
    >
      {sparks.map((spark, i) => (
        <span
          key={i}
          className="nav-spark"
          style={{ left: spark.left, top: spark.top, animationDelay: spark.delay }}
        />
      ))}

      <button
        type="button"
        className="nav-logo-btn"
        onClick={() => goTo("home")}
        aria-label="blushbysweedal home"
        style={{
          border: "none",
          background: "transparent",
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: 14,
          padding: "4px 10px 4px 0",
          boxShadow: "none",
          position: "relative",
          zIndex: 2,
          overflow: "visible",
          flexShrink: 0,
          maxWidth: "none",
        }}
      >
        <BrandLogo size="nav" />
      </button>

      <nav
        className="nav-links-pill nav-links-desktop"
        aria-label="Primary"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 6,
          padding: "8px 10px",
          borderRadius: 999,
          background:
            "linear-gradient(135deg, rgba(255,249,245,0.78) 0%, rgba(243,230,234,0.55) 100%)",
          border: "1px solid rgba(198,168,117,0.28)",
          boxShadow: "0 10px 28px rgba(58,46,42,0.06), inset 0 1px 0 rgba(255,255,255,0.65)",
          position: "relative",
          zIndex: 2,
        }}
      >
        {links.map((link) => {
          const active = page === link.id;
          const isHover = hovered === link.id;
          return (
            <button
              key={link.id}
              type="button"
              className={`nav-link${active ? " active" : ""}`}
              onClick={() => goTo(link.id)}
              onMouseEnter={() => setHovered(link.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                border: "none",
                cursor: "pointer",
                color: active || isHover ? colors.rose : colors.softInk,
                fontSize: "clamp(0.86rem, 1.1vw, 0.98rem)",
                fontWeight: active ? 600 : 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                padding: "10px 16px",
                borderRadius: 999,
                background: active
                  ? "linear-gradient(135deg, rgba(232,180,184,0.45) 0%, rgba(198,168,117,0.22) 100%)"
                  : isHover
                    ? "rgba(255,249,245,0.7)"
                    : "transparent",
              }}
            >
              {link.label}
              {active && (
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 6,
                    right: 10,
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: colors.champagne,
                    boxShadow: "0 0 10px rgba(198,168,117,0.8)",
                  }}
                />
              )}
            </button>
          );
        })}
      </nav>

      <button
        type="button"
        className={`nav-burger${menuOpen ? " is-open" : ""}`}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="nav-mobile-panel"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={`nav-mobile-backdrop${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      />

      <nav
        id="nav-mobile-panel"
        className={`nav-mobile-panel${menuOpen ? " is-open" : ""}`}
        aria-label="Mobile"
        aria-hidden={!menuOpen}
      >
        {links.map((link) => {
          const active = page === link.id;
          return (
            <button
              key={link.id}
              type="button"
              className={`nav-mobile-link${active ? " active" : ""}`}
              onClick={() => goTo(link.id)}
            >
              {link.label}
            </button>
          );
        })}
      </nav>
    </header>
  );
}

const champagneLooks = [
  {
    src: "/media/photos/champagne/look-01.jpeg",
    title: "Champagne Spell",
    quote: "“Once upon a soft glam…”",
    note: "Featured look",
  },
  {
    src: "/media/photos/champagne/look-02.jpg",
    title: "Champagne Spell",
    quote: "“Dressed in quiet sparkle.”",
    note: "Angle two",
  },
  {
    src: "/media/photos/champagne/look-03.jpg",
    title: "Champagne Spell",
    quote: "“Soft profile, soft light.”",
    note: "Angle three",
  },
  {
    src: "/media/photos/champagne/look-04.jpg",
    title: "Champagne Spell",
    quote: "“Turn, glow, repeat.”",
    note: "Angle four",
  },
];

function Home({ setPage }) {
  const [lookIndex, setLookIndex] = useState(0);
  const [plateHover, setPlateHover] = useState(false);
  const activeLook = champagneLooks[lookIndex];

  const nextLook = () => {
    setLookIndex((prev) => (prev + 1) % champagneLooks.length);
  };

  useEffect(() => {
    if (plateHover || champagneLooks.length < 2) return undefined;
    const timer = window.setInterval(() => {
      setLookIndex((prev) => (prev + 1) % champagneLooks.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [plateHover]);

  const plateSparks = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: `${8 + ((i * 19) % 84)}%`,
        top: `${10 + ((i * 27) % 78)}%`,
        delay: `${(i % 6) * 0.25}s`,
        size: 3 + (i % 3),
      })),
    []
  );

  return (
    <section
      className="page-enter home-page"
      data-layout="home"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "grid",
        gridTemplateColumns: "minmax(0, 0.42fr) minmax(0, 0.58fr)",
        columnGap: 0,
        alignItems: "stretch",
        paddingTop: "148px",
        paddingBottom: 28,
        overflow: "hidden",
        background: `radial-gradient(ellipse at 12% 20%, rgba(255,255,255,0.95) 0%, transparent 42%), radial-gradient(ellipse at 80% 10%, rgba(232,180,184,0.22) 0%, transparent 40%), linear-gradient(160deg, ${colors.ivory} 0%, ${colors.pearl} 55%, ${colors.mist} 100%)`,
      }}
    >
      <div
        className="hero-orb"
        style={{
          width: 220,
          height: 220,
          left: "8%",
          top: "22%",
          background: "rgba(232,180,184,0.28)",
        }}
      />
      <div
        className="hero-orb"
        style={{
          width: 180,
          height: 180,
          left: "36%",
          bottom: "12%",
          background: "rgba(198,168,117,0.18)",
          animationDelay: "1.4s",
        }}
      />

      <div className="hero-grain" aria-hidden="true" />

      {/* soft light rays */}
      <div
        className="hero-ray"
        aria-hidden="true"
        style={{ left: "12%", top: 0, width: 70, height: "55%", transform: "rotate(-12deg)", transformOrigin: "top center" }}
      />
      <div
        className="hero-ray"
        aria-hidden="true"
        style={{
          left: "22%",
          top: 0,
          width: 46,
          height: "48%",
          transform: "rotate(8deg)",
          transformOrigin: "top center",
          animationDelay: "1.2s",
        }}
      />

      {/* blush blooms filling empty space */}
      <div
        className="hero-bloom"
        aria-hidden="true"
        style={{ width: 180, height: 180, left: "4%", bottom: "14%", background: "rgba(232,180,184,0.55)" }}
      />
      <div
        className="hero-bloom"
        aria-hidden="true"
        style={{
          width: 130,
          height: 130,
          left: "24%",
          top: "24%",
          background: "rgba(198,168,117,0.38)",
          animationDelay: "1.8s",
        }}
      />
      <div
        className="hero-bloom"
        aria-hidden="true"
        style={{
          width: 90,
          height: 90,
          left: "34%",
          bottom: "28%",
          background: "rgba(201,123,132,0.28)",
          animationDelay: "2.6s",
        }}
      />

      {/* champagne orbit rings */}
      <div
        className="hero-orbit"
        aria-hidden="true"
        style={{ width: 150, height: 150, left: "16%", top: "42%" }}
      />
      <div
        className="hero-orbit"
        aria-hidden="true"
        style={{
          width: 100,
          height: 100,
          left: "18.5%",
          top: "45.5%",
          animationDirection: "reverse",
          animationDuration: "36s",
          borderColor: "rgba(232,180,184,0.4)",
        }}
      />

      {/* delicate botanical line art */}
      <svg
        className="hero-botanical"
        aria-hidden="true"
        viewBox="0 0 120 220"
        style={{ left: "30%", bottom: "8%", width: 90, height: 170 }}
      >
        <path
          d="M60 210 C58 160 40 130 48 90 C56 55 78 40 70 18"
          fill="none"
          stroke="#C6A875"
          strokeWidth="1.2"
        />
        <path
          d="M60 140 C38 128 28 108 34 92 C48 98 58 118 60 140Z"
          fill="rgba(232,180,184,0.35)"
          stroke="#E8B4B8"
          strokeWidth="0.8"
        />
        <path
          d="M60 118 C82 108 94 90 88 74 C72 82 64 100 60 118Z"
          fill="rgba(232,180,184,0.28)"
          stroke="#E8B4B8"
          strokeWidth="0.8"
        />
        <circle cx="70" cy="20" r="3" fill="#C6A875" opacity="0.7" />
      </svg>

      {/* champagne dust motes on left empty space */}
      {[
        { left: "8%", top: "38%", size: 5, delay: "0s" },
        { left: "18%", top: "58%", size: 4, delay: "0.8s" },
        { left: "28%", top: "30%", size: 6, delay: "1.4s" },
        { left: "12%", top: "72%", size: 3, delay: "2s" },
        { left: "22%", top: "48%", size: 4, delay: "2.6s" },
        { left: "32%", top: "62%", size: 5, delay: "3.1s" },
      ].map((dot, i) => (
        <span
          key={i}
          className="hero-dust"
          style={{
            left: dot.left,
            top: dot.top,
            width: dot.size,
            height: dot.size,
            animationDelay: dot.delay,
            zIndex: 1,
          }}
        />
      ))}

      <div
        className="home-copy"
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "36px 18px 28px clamp(22px, 4vw, 56px)",
          width: "100%",
          maxWidth: "100%",
          gap: 0,
          boxSizing: "border-box",
        }}
      >
        {/* giant decorative quote */}
        <p
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "clamp(10px, 2vw, 28px)",
            top: "12%",
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: "clamp(7rem, 14vw, 11rem)",
            lineHeight: 0.8,
            color: "rgba(201,123,132,0.1)",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
          }}
        >
          “
        </p>

        {/* soft mirror watermark matching brand */}
        <img
          src="/logo-mark.png"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "-4%",
            top: "8%",
            width: 150,
            opacity: 0.1,
            pointerEvents: "none",
            filter: "grayscale(0.2)",
            zIndex: 0,
          }}
        />

        {/* silk ribbon flourish */}
        <svg
          className="hero-ribbon"
          aria-hidden="true"
          viewBox="0 0 180 40"
          style={{
            position: "absolute",
            right: "8%",
            top: "22%",
            width: 140,
            opacity: 0.7,
            zIndex: 0,
          }}
        >
          <path
            d="M8 22 C40 8, 70 8, 90 20 C110 32, 140 32, 172 18"
            fill="none"
            stroke="#C6A875"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M8 26 C42 14, 72 14, 92 24 C112 34, 142 34, 172 22"
            fill="none"
            stroke="#E8B4B8"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>

        <div
          className="fade-up"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            marginBottom: 18,
            flexWrap: "wrap",
          }}
        >
          <p
            className="chapter-reveal"
            style={{
              fontSize: "0.82rem",
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: colors.champagne,
              fontWeight: 500,
              margin: 0,
            }}
          >
            Soft glam · Style stories
          </p>
          <p
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: "1.05rem",
              color: colors.softInk,
              letterSpacing: "0.08em",
            }}
          >
            {String(lookIndex + 1).padStart(2, "0")}
            <span style={{ opacity: 0.4 }}> / </span>
            {String(champagneLooks.length).padStart(2, "0")}
          </p>
        </div>

        <h1 className="fade-up" style={{ lineHeight: 1.05, marginBottom: 24, overflow: "visible" }}>
          <BrandLogo size="hero" />
        </h1>

        <p
          className="fade-up"
          style={{
            animationDelay: "0.12s",
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: "clamp(1.65rem, 2.8vw, 2.25rem)",
            fontWeight: 500,
            fontStyle: "italic",
            color: colors.softInk,
            maxWidth: 480,
            lineHeight: 1.4,
            marginBottom: 14,
          }}
        >
          A little fairy-tale glow for every look.
        </p>

        <div
          className="fade-up"
          aria-hidden="true"
          style={{
            animationDelay: "0.16s",
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 28,
            maxWidth: 220,
          }}
        >
          <span style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${colors.champagne}, transparent)` }} />
          <span
            style={{
              width: 7,
              height: 7,
              transform: "rotate(45deg)",
              background: colors.blush,
              boxShadow: "0 0 10px rgba(232,180,184,0.6)",
            }}
          />
          <span style={{ flex: 1, height: 1, background: `linear-gradient(90deg, transparent, ${colors.champagne})` }} />
        </div>

        <div
          className="fade-up"
          style={{
            animationDelay: "0.22s",
            display: "flex",
            flexWrap: "wrap",
            gap: 14,
            alignItems: "center",
          }}
        >
          <button
            type="button"
            className="cta-glow"
            onClick={() => setPage("issue")}
            style={{
              border: "none",
              cursor: "pointer",
              background: `linear-gradient(135deg, ${colors.rose} 0%, #b86b76 100%)`,
              color: "#fff",
              padding: "16px 30px",
              borderRadius: 999,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontSize: "0.82rem",
              fontWeight: 600,
            }}
          >
            Enter the lookbook
          </button>
          <button
            type="button"
            onClick={() => setPage("collabs")}
            style={{
              border: `1px solid ${colors.champagne}`,
              cursor: "pointer",
              background: "transparent",
              color: colors.ink,
              padding: "16px 26px",
              borderRadius: 999,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontSize: "0.82rem",
              fontWeight: 500,
            }}
          >
            Let’s create
          </button>
        </div>

        <button
          type="button"
          className="fade-up"
          onClick={() => setPage("collabs")}
          style={{
            animationDelay: "0.28s",
            marginTop: 18,
            border: "none",
            background: "transparent",
            cursor: "pointer",
            padding: 0,
            color: colors.softInk,
            fontSize: "0.92rem",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            width: "fit-content",
          }}
        >
          For brands & styling features
          <span style={{ color: colors.rose, fontSize: "1.05rem" }}>→</span>
        </button>

        <a
          className="fade-up"
          href="https://instagram.com/blushbysweedal"
          target="_blank"
          rel="noreferrer"
          style={{
            animationDelay: "0.32s",
            marginTop: 16,
            color: colors.rose,
            textDecoration: "none",
            fontSize: "1.08rem",
            letterSpacing: "0.04em",
            fontWeight: 500,
            width: "fit-content",
          }}
        >
          @blushbysweedal
        </a>
      </div>

      <div
        className="home-visual"
        style={{
          position: "relative",
          height: "calc(100vh - 148px)",
          minHeight: "100%",
          overflow: "visible",
          background: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "28px clamp(28px, 4.5vw, 56px) 24px 10px",
          boxSizing: "border-box",
        }}
      >
        {/* soft paint-spread wash (no sharp panel edge) */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: "4% 2% 2% -18%",
            zIndex: 0,
            background: `
              radial-gradient(ellipse 70% 60% at 58% 42%, rgba(239,228,218,0.95) 0%, rgba(239,228,218,0.45) 38%, transparent 72%),
              radial-gradient(ellipse 55% 50% at 72% 28%, rgba(232,180,184,0.38) 0%, transparent 60%),
              radial-gradient(ellipse 50% 45% at 40% 70%, rgba(198,168,117,0.22) 0%, transparent 62%)
            `,
            filter: "blur(28px)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 70% at 55% 45%, #000 20%, rgba(0,0,0,0.75) 48%, transparent 78%)",
            maskImage:
              "radial-gradient(ellipse 75% 70% at 55% 45%, #000 20%, rgba(0,0,0,0.75) 48%, transparent 78%)",
            pointerEvents: "none",
          }}
        />

        {/* large soft watermark */}
        <p
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "6%",
            top: "8%",
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: "clamp(5rem, 12vw, 9rem)",
            fontWeight: 500,
            color: "rgba(201,123,132,0.08)",
            letterSpacing: "0.04em",
            lineHeight: 0.9,
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
          }}
        >
          soft
          <br />
          glam
        </p>

        <Sparkles />

        <div
          className="home-plate-layout"
          style={{
            position: "relative",
            zIndex: 2,
            display: "grid",
            gridTemplateColumns: "36px 1fr",
            gap: 12,
            alignItems: "center",
            width: "100%",
            maxWidth: 520,
            marginRight: "clamp(4px, 1vw, 12px)",
          }}
        >
          <p
            className="hero-side-type"
            style={{
              fontSize: "0.86rem",
              color: colors.champagne,
              fontWeight: 500,
              justifySelf: "center",
              opacity: 0.9,
            }}
          >
            Champagne Spell
          </p>

          <div className="hero-photo-wrap hero-plate" style={{ position: "relative" }}>
            {/* soft paint-spread outer layer (feathered, no sharp borders) */}
            <div
              className="hero-spread"
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: "10px -8px -20px 14px",
                zIndex: 0,
                borderRadius: "42% 48% 40% 46% / 38% 42% 44% 40%",
                background: `
                  radial-gradient(ellipse at 30% 25%, rgba(255,249,245,0.95) 0%, rgba(255,249,245,0.35) 35%, transparent 60%),
                  radial-gradient(ellipse at 70% 40%, rgba(232,180,184,0.55) 0%, rgba(232,180,184,0.18) 40%, transparent 68%),
                  radial-gradient(ellipse at 45% 75%, rgba(198,168,117,0.32) 0%, rgba(198,168,117,0.1) 38%, transparent 65%),
                  linear-gradient(145deg, rgba(243,230,234,0.55), rgba(239,228,218,0.35))
                `,
                filter: "blur(14px)",
                transform: "scale(1.04)",
                opacity: 0.95,
              }}
            />
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: "28px 0 -8px 26px",
                zIndex: 0,
                borderRadius: "48% 40% 46% 42% / 44% 48% 38% 42%",
                background:
                  "radial-gradient(circle at 55% 35%, rgba(232,180,184,0.35), transparent 58%)",
                filter: "blur(22px)",
                opacity: 0.85,
              }}
            />
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "12%",
                right: "10%",
                bottom: "-4%",
                height: 36,
                borderRadius: "50%",
                background: "rgba(58,46,42,0.1)",
                filter: "blur(14px)",
                zIndex: 0,
              }}
            />

            <figure
              onMouseEnter={() => setPlateHover(true)}
              onMouseLeave={() => setPlateHover(false)}
              style={{
                position: "relative",
                zIndex: 1,
                margin: 0,
                background: "rgba(255,249,245,0.92)",
                borderRadius: 28,
                padding: "14px 14px 0",
                border: "1px solid rgba(198,168,117,0.3)",
                boxShadow: "0 24px 50px rgba(58,46,42,0.14)",
                overflow: "hidden",
              }}
            >
              <div className={`hero-plate-sparkle-layer${plateHover ? " is-on" : ""}`} aria-hidden="true">
                {plateSparks.map((spark) => (
                  <span
                    key={spark.id}
                    className="sparkle"
                    style={{
                      left: spark.left,
                      top: spark.top,
                      width: spark.size,
                      height: spark.size,
                      animationDelay: spark.delay,
                    }}
                  />
                ))}
              </div>

              {/* top seal — tap to cycle looks 1-4 */}
              <button
                type="button"
                onClick={nextLook}
                aria-label={`Show look ${((lookIndex + 1) % 4) + 1}`}
                title="Tap for next look"
                style={{
                  position: "absolute",
                  top: 22,
                  right: 22,
                  zIndex: 5,
                  width: 74,
                  height: 74,
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  background: "rgba(255,249,245,0.95)",
                  border: "1px solid rgba(198,168,117,0.55)",
                  boxShadow: "0 8px 20px rgba(58,46,42,0.1)",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                <div style={{ textAlign: "center", lineHeight: 1.1 }}>
                  <p style={{ fontSize: "0.7rem", letterSpacing: "0.14em", color: colors.champagne }}>LOOK</p>
                  <p
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: "1.45rem",
                      color: colors.rose,
                      fontWeight: 600,
                    }}
                  >
                    {String(lookIndex + 1).padStart(2, "0")}
                  </p>
                </div>
              </button>

              <button
                type="button"
                onClick={nextLook}
                aria-label={`Show next look (${((lookIndex + 1) % champagneLooks.length) + 1})`}
                style={{
                  display: "block",
                  width: "100%",
                  padding: 0,
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  borderRadius: 18,
                }}
              >
                <div className="hero-look-stage">
                  {champagneLooks.map((look, i) => (
                    <img
                      key={look.src}
                      src={look.src}
                      alt={`Champagne Spell look ${i + 1}`}
                      className={`hero-look-img ${i === lookIndex ? "is-active" : "is-idle"}`}
                    />
                  ))}
                </div>
              </button>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 10,
                  padding: "12px 4px 2px",
                }}
              >
                {champagneLooks.map((look, i) => (
                  <button
                    key={look.src}
                    type="button"
                    className={`hero-thumb${i === lookIndex ? " is-active" : ""}`}
                    aria-label={`Go to look ${i + 1}`}
                    onClick={() => setLookIndex(i)}
                    style={{
                      width: 52,
                      height: 66,
                      borderRadius: 12,
                      padding: 0,
                      cursor: "pointer",
                      overflow: "hidden",
                      background: colors.mist,
                    }}
                  >
                    <img
                      src={look.src}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center top",
                        display: "block",
                      }}
                    />
                  </button>
                ))}
              </div>

              <figcaption
                className="hero-caption-bar hero-caption-fade"
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  gap: 12,
                  padding: "10px 8px 16px",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: colors.champagne,
                      marginBottom: 6,
                    }}
                  >
                    {activeLook.note}
                  </p>
                  <p
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: "1.7rem",
                      color: colors.ink,
                      lineHeight: 1.15,
                    }}
                  >
                    {activeLook.title}
                  </p>
                </div>
                <p
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontStyle: "italic",
                    fontSize: "1.2rem",
                    color: colors.softInk,
                    maxWidth: 180,
                    textAlign: "right",
                    lineHeight: 1.3,
                  }}
                >
                  {activeLook.quote}
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

function useReveal(deps = []) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;
    const cards = root.querySelectorAll(".look-card");
    const reveal = (el) => el.classList.add("visible");

    // Always show above-the-fold cards immediately (avoids blank Edit page)
    cards.forEach((card, i) => {
      card.style.transitionDelay = `${Math.min(i, 8) * 0.06}s`;
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
        reveal(card);
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) reveal(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "80px 0px" }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, deps);

  return ref;
}

function Issue({ setPage }) {
  const [mood, setMood] = useState("All");
  const ref = useReveal([mood]);
  const featuredAnchor = useRef(null);
  const mediaRef = useRef(null);
  const featuredIndex = looks.findIndex((l) => l.featured);
  const [activeLook, setActiveLook] = useState(featuredIndex >= 0 ? featuredIndex : 3);
  const [prevLook, setPrevLook] = useState(null);
  const [turnDir, setTurnDir] = useState("next");
  const [isTurning, setIsTurning] = useState(false);
  const [pageTurn, setPageTurn] = useState(false);
  const [spotlight, setSpotlight] = useState({ x: "50%", y: "30%" });
  const [saved, setSaved] = useState(() => new Set());
  const [toast, setToast] = useState("");
  const [parallax, setParallax] = useState(0);
  const [trayOpen, setTrayOpen] = useState(false);
  const [behindOpen, setBehindOpen] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [petals, setPetals] = useState([]);
  const turningRef = useRef(false);
  const dragStartX = useRef(0);
  const dragActive = useRef(false);
  const petalId = useRef(0);

  const moods = useMemo(() => ["All", ...Array.from(new Set(looks.map((l) => l.tag)))], []);
  const featured = looks[activeLook] || looks[3];
  const outgoing = prevLook != null ? looks[prevLook] : null;
  const filtered = mood === "All" ? looks : looks.filter((l) => l.tag === mood);
  const savedLooks = looks.filter((l) => saved.has(l.title));
  const sidePad = "clamp(16px, 2.2vw, 36px)";
  const editWidth = "min(1680px, 100%)";
  const titleLetters = featured.title.split("");
  const dragProgress = Math.max(-1, Math.min(1, dragX / 180));
  const dragAbs = Math.abs(dragProgress);
  const underLook =
    dragProgress < -0.02
      ? looks[(activeLook + 1) % looks.length]
      : dragProgress > 0.02
        ? looks[(activeLook - 1 + looks.length) % looks.length]
        : looks[(activeLook + 1) % looks.length];

  const dust = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: `${4 + ((i * 17) % 92)}%`,
        top: `${8 + ((i * 23) % 84)}%`,
        delay: `${(i % 7) * 0.35}s`,
        size: 3 + (i % 4),
      })),
    []
  );

  const changeCover = (nextIndex) => {
    const n = looks.length;
    const target = ((nextIndex % n) + n) % n;
    if (target === activeLook || turningRef.current) return;

    const forward = (target - activeLook + n) % n;
    const dir = forward !== 0 && forward <= n / 2 ? "next" : "prev";

    turningRef.current = true;
    setTurnDir(dir);
    setPrevLook(activeLook);
    setIsTurning(true);
    setActiveLook(target);

    window.setTimeout(() => {
      setIsTurning(false);
      setPrevLook(null);
      turningRef.current = false;
    }, 1080);
  };

  const goLook = (index) => {
    changeCover(index);
  };

  const openAsCover = (lookTitle) => {
    const idx = looks.findIndex((l) => l.title === lookTitle);
    if (idx < 0) return;
    changeCover(idx);
    featuredAnchor.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const burstPetals = () => {
    const batch = Array.from({ length: 14 }, (_, i) => {
      petalId.current += 1;
      return {
        id: petalId.current,
        left: `${8 + Math.random() * 120}px`,
        delay: `${i * 0.04}s`,
        drift: `${(Math.random() - 0.5) * 90}px`,
        rot: `${(Math.random() - 0.5) * 160}deg`,
        size: 8 + Math.random() * 10,
      };
    });
    setPetals((prev) => [...prev, ...batch]);
    window.setTimeout(() => {
      setPetals((prev) => prev.filter((p) => !batch.some((b) => b.id === p.id)));
    }, 1600);
  };

  const toggleSave = (title, e) => {
    e?.stopPropagation?.();
    setSaved((prev) => {
      const next = new Set(prev);
      if (next.has(title)) {
        next.delete(title);
        setToast("Removed from moodboard");
      } else {
        next.add(title);
        setToast("Saved to moodboard ✦");
        setTrayOpen(true);
        burstPetals();
      }
      return next;
    });
  };

  const onCoverPointerDown = (e) => {
    if (turningRef.current) return;
    if (e.target.closest("button, a")) return;
    dragActive.current = true;
    dragStartX.current = e.clientX;
    setDragging(true);
    setDragX(0);
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const onCoverPointerMove = (e) => {
    if (!dragActive.current || turningRef.current) return;
    setDragX(e.clientX - dragStartX.current);
  };

  const onCoverPointerUp = (e) => {
    if (!dragActive.current) return;
    dragActive.current = false;
    setDragging(false);
    const dx = e.clientX - dragStartX.current;
    setDragX(0);
    try {
      e.currentTarget.releasePointerCapture?.(e.pointerId);
    } catch {
      /* ignore */
    }
    if (Math.abs(dx) < 56) {
      // soft tap still turns next page
      if (Math.abs(dx) < 8) changeCover(activeLook + 1);
      return;
    }
    if (dx < 0) changeCover(activeLook + 1);
    else changeCover(activeLook - 1);
  };

  useEffect(() => {
    setPageTurn(true);
    const t = window.setTimeout(() => setPageTurn(false), 700);
    return () => window.clearTimeout(t);
  }, [mood]);

  useEffect(() => {
    setBehindOpen(false);
  }, [activeLook]);

  useEffect(() => {
    if (!toast) return undefined;
    const t = window.setTimeout(() => setToast(""), 1800);
    return () => window.clearTimeout(t);
  }, [toast]);

  useEffect(() => {
    const onScroll = () => setParallax(window.scrollY * 0.04);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className={`page-enter edit-page mood-${mood.replace(/\s+/g, "-").toLowerCase()}`}
      ref={ref}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setSpotlight({
          x: `${((e.clientX - rect.left) / rect.width) * 100}%`,
          y: `${((e.clientY - rect.top) / rect.height) * 100}%`,
        });
      }}
      style={{
        minHeight: "auto",
        position: "relative",
        padding: `120px ${sidePad} 48px`,
        overflow: "hidden",
        background: `
          radial-gradient(ellipse at 8% 12%, rgba(232,180,184,0.22) 0%, transparent 42%),
          radial-gradient(ellipse at 92% 18%, rgba(198,168,117,0.18) 0%, transparent 40%),
          linear-gradient(180deg, ${colors.ivory} 0%, ${colors.pearl} 42%, ${colors.mist} 100%)
        `,
      }}
    >
      <div
        className="edit-spotlight"
        aria-hidden="true"
        style={{ ["--sx"]: spotlight.x, ["--sy"]: spotlight.y }}
      />
      <div className="edit-mood-tint" aria-hidden="true" />
      <div className="edit-bloom" aria-hidden="true" style={{ width: 220, height: 220, left: "-4%", top: "8%", background: "rgba(232,180,184,0.35)" }} />
      <div className="edit-bloom" aria-hidden="true" style={{ width: 180, height: 180, right: "-2%", top: "30%", background: "rgba(198,168,117,0.28)", animationDelay: "1.4s" }} />
      {dust.map((d) => (
        <span
          key={d.id}
          className="edit-dust"
          aria-hidden="true"
          style={{ left: d.left, top: d.top, width: d.size, height: d.size, animationDelay: d.delay }}
        />
      ))}
      <p className="edit-watermark" aria-hidden="true" style={{ transform: `translateY(${parallax}px)` }}>
        the
        <br />
        edit
      </p>

      {/* chapter rail */}
      <nav className="edit-rail" aria-label="Chapter rail">
        {looks.map((look, i) => (
          <button
            key={look.title}
            type="button"
            className={`edit-rail-dot${i === activeLook ? " is-on" : ""}`}
            onClick={() => openAsCover(look.title)}
            title={look.title}
            aria-label={`Chapter ${look.chapter}: ${look.title}`}
          >
            <span>{look.chapter}</span>
          </button>
        ))}
      </nav>

      {toast && <div className="edit-toast">{toast}</div>}

      {/* moodboard tray */}
      <div className={`edit-tray${trayOpen ? " is-open" : ""}${savedLooks.length ? " has-items" : ""}`}>
        {petals.map((p) => (
          <span
            key={p.id}
            className="edit-petal"
            aria-hidden="true"
            style={{
              left: p.left,
              width: p.size,
              height: p.size * 1.35,
              animationDelay: p.delay,
              ["--drift"]: p.drift,
              ["--rot"]: p.rot,
            }}
          />
        ))}
        <button
          type="button"
          className="edit-tray-toggle"
          onClick={() => setTrayOpen((v) => !v)}
          aria-expanded={trayOpen}
          aria-label="Open moodboard tray"
        >
          <span className="edit-tray-heart">♥</span>
          <span>Moodboard</span>
          <span className="edit-tray-count">{savedLooks.length}</span>
        </button>
        <div className="edit-tray-panel" hidden={!trayOpen}>
          <div className="edit-tray-head">
            <p>Saved looks</p>
            <button type="button" onClick={() => setTrayOpen(false)} aria-label="Close moodboard">
              Close
            </button>
          </div>
          {savedLooks.length === 0 ? (
            <p className="edit-tray-empty">Tap ♡ on a look to collect it here.</p>
          ) : (
            <div className="edit-tray-list">
              {savedLooks.map((look) => (
                <div key={look.title} className="edit-tray-item">
                  <button type="button" className="edit-tray-open" onClick={() => openAsCover(look.title)}>
                    <img src={look.src} alt="" />
                    <span>
                      <strong>{look.title}</strong>
                      <em>Ch. {look.chapter}</em>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="edit-tray-remove"
                    onClick={(e) => toggleSave(look.title, e)}
                    aria-label={`Remove ${look.title}`}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* magazine masthead */}
      <header style={{ position: "relative", zIndex: 2, textAlign: "center", marginBottom: 28, maxWidth: editWidth, marginLeft: "auto", marginRight: "auto", width: "100%" }}>
        <div className="edit-flourish" aria-hidden="true">
          <span />
          <i />
          <span />
        </div>
        <p className="chapter-reveal" style={{ letterSpacing: "0.32em", textTransform: "uppercase", fontSize: "1rem", color: colors.champagne, marginBottom: 14 }}>
          The Edit · Vol. 01
        </p>
        <h2
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: "clamp(3.2rem, 6.5vw, 5.2rem)",
            fontWeight: 500,
            color: colors.ink,
            marginBottom: 16,
            lineHeight: 1.12,
          }}
        >
          Looks from the style diary
        </h2>
        <p style={{ color: colors.softInk, maxWidth: 760, margin: "0 auto 20px", lineHeight: 1.7, fontSize: "clamp(1.15rem, 2.1vw, 1.32rem)" }}>
          A fairy-tale magazine spread of fashion & beauty — soft glam, festive sparkle, and travel light.
        </p>
        <p
          style={{
            fontFamily: '"Great Vibes", cursive',
            fontSize: "clamp(2.05rem, 3.6vw, 2.7rem)",
            color: colors.rose,
            opacity: 0.9,
          }}
        >
          turn the page, find the glow
        </p>
      </header>

      {/* floating title marquee */}
      <div className="edit-marquee" aria-hidden="true">
        <div className="edit-marquee-track">
          {[...looks, ...looks].map((look, i) => (
            <span key={`${look.title}-${i}`}>
              Ch. {look.chapter} · {look.title}
              <em>✦</em>
            </span>
          ))}
        </div>
      </div>

      {/* featured cover story */}
      <div
        ref={featuredAnchor}
        className="edit-featured"
        style={{ position: "relative", zIndex: 2, maxWidth: editWidth, width: "100%", margin: "28px auto 56px" }}
      >
        <div className="edit-featured-grid">
          <div
            className={`edit-featured-media edit-book${isTurning ? " is-turning" : ""}${dragging ? " is-dragging" : ""}${dragProgress > 0.02 ? " is-drag-prev" : ""}`}
            ref={mediaRef}
            role="button"
            tabIndex={0}
            aria-label="Drag or tap to turn the cover story page"
            style={{
              ["--drag"]: dragProgress,
              ["--drag-abs"]: dragAbs,
              ["--drag-deg"]: `${dragProgress * 78}deg`,
            }}
            onPointerDown={onCoverPointerDown}
            onPointerMove={onCoverPointerMove}
            onPointerUp={onCoverPointerUp}
            onPointerCancel={onCoverPointerUp}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                changeCover(activeLook + 1);
              } else if (e.key === "ArrowRight") {
                e.preventDefault();
                changeCover(activeLook + 1);
              } else if (e.key === "ArrowLeft") {
                e.preventDefault();
                changeCover(activeLook - 1);
              }
            }}
          >
            <img
              className="edit-book-page edit-book-under"
              src={underLook.src}
              alt=""
              aria-hidden="true"
            />
            {outgoing && (
              <img
                className={`edit-book-page edit-book-out edit-book-out-${turnDir}`}
                src={outgoing.src}
                alt=""
                aria-hidden="true"
              />
            )}
            <img
              key={featured.src}
              className={`edit-book-page edit-book-in${isTurning ? ` edit-book-in-${turnDir}` : ""}${dragging ? " is-drag-live" : ""}`}
              src={featured.src}
              alt={featured.title}
              draggable={false}
            />
            <span className="edit-book-shade" aria-hidden="true" />
            <span className="edit-book-curl" aria-hidden="true" />
            <span className="edit-featured-badge">Cover story</span>
            <span className="edit-now-chip">
              Now showing {String(activeLook + 1).padStart(2, "0")} / {String(looks.length).padStart(2, "0")}
            </span>
            <span className="edit-featured-chapter">Ch. {featured.chapter}</span>
            <p className="edit-book-hint">Drag sideways to curl the page</p>
            <div className="edit-featured-nav">
              <button
                type="button"
                aria-label="Previous look"
                onClick={(e) => {
                  e.stopPropagation();
                  goLook(activeLook - 1);
                }}
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next look"
                onClick={(e) => {
                  e.stopPropagation();
                  goLook(activeLook + 1);
                }}
              >
                ›
              </button>
            </div>
          </div>
          <div className="edit-featured-copy">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 14, flexWrap: "wrap" }}>
              <p key={`tag-${featured.title}`} className="edit-copy-fade" style={{ fontSize: "1rem", letterSpacing: "0.22em", textTransform: "uppercase", color: colors.champagne, margin: 0 }}>
                Featured look · {featured.tag}
              </p>
              <button
                type="button"
                className={`edit-save${saved.has(featured.title) ? " is-on" : ""}`}
                onClick={(e) => toggleSave(featured.title, e)}
                aria-label={saved.has(featured.title) ? "Remove from moodboard" : "Save to moodboard"}
              >
                {saved.has(featured.title) ? "♥ Saved" : "♡ Save"}
              </button>
            </div>
            <h3
              key={`title-${featured.title}`}
              className="edit-title-letters"
              aria-label={featured.title}
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: "clamp(2.9rem, 5.4vw, 4.4rem)",
                fontWeight: 500,
                color: colors.ink,
                marginBottom: 16,
                lineHeight: 1.12,
              }}
            >
              {titleLetters.map((ch, i) => (
                <span key={`${featured.title}-${i}`} style={{ animationDelay: `${i * 0.028}s` }}>
                  {ch === " " ? "\u00A0" : ch}
                </span>
              ))}
            </h3>
            <p
              key={`quote-${featured.title}`}
              className="edit-copy-fade"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontStyle: "italic",
                fontSize: "clamp(1.7rem, 2.8vw, 2.15rem)",
                color: colors.rose,
                marginBottom: 18,
                lineHeight: 1.4,
                animationDelay: "0.06s",
              }}
            >
              “{featured.quote}”
            </p>
            <p key={`note-${featured.title}`} className="edit-copy-fade" style={{ color: colors.softInk, lineHeight: 1.75, marginBottom: 20, maxWidth: 560, fontSize: "clamp(1.15rem, 1.9vw, 1.3rem)", animationDelay: "0.1s" }}>
              {featured.note}
            </p>

            <div className="edit-palette" aria-label="Look color story">
              {(featured.palette || []).map((swatch) => (
                <span key={swatch} style={{ background: swatch }} title={swatch} />
              ))}
              <em>color story</em>
            </div>

            <div className="edit-mini-row">
              {looks.map((look, i) => (
                <button
                  key={look.title}
                  type="button"
                  className={`edit-mini${i === activeLook ? " is-on" : ""}`}
                  onClick={() => changeCover(i)}
                  aria-label={`Preview ${look.title}`}
                >
                  <img src={look.src} alt="" />
                </button>
              ))}
            </div>
            <p style={{ marginTop: 18, fontSize: "1.15rem", color: colors.softInk, letterSpacing: "0.04em" }}>
              Drag the cover sideways — or tap a thumbnail — to turn the page
            </p>

            <div className={`edit-behind${behindOpen ? " is-open" : ""}`}>
              <button
                type="button"
                className="edit-behind-toggle"
                onClick={() => setBehindOpen((v) => !v)}
                aria-expanded={behindOpen}
              >
                {behindOpen ? "Close behind the look" : "Behind the look"}
                <span aria-hidden="true">{behindOpen ? "−" : "+"}</span>
              </button>
              <div className="edit-behind-panel" hidden={!behindOpen}>
                <div className="edit-behind-grid">
                  <div>
                    <p className="edit-behind-label">Fabric</p>
                    <p className="edit-behind-text">{featured.fabric}</p>
                  </div>
                  <div>
                    <p className="edit-behind-label">Vibe</p>
                    <p className="edit-behind-text">{featured.vibe}</p>
                  </div>
                  <div>
                    <p className="edit-behind-label">Styling tip</p>
                    <p className="edit-behind-text">{featured.tip}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mood filter */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: editWidth, width: "100%", margin: "0 auto 28px", display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
        {moods.map((m) => {
          const count = m === "All" ? looks.length : looks.filter((l) => l.tag === m).length;
          return (
            <button
              key={m}
              type="button"
              className={`edit-mood${mood === m ? " is-on" : ""}`}
              onClick={() => setMood(m)}
            >
              {m}
              <span className="edit-mood-count">{count}</span>
            </button>
          );
        })}
      </div>

      {/* editorial look grid */}
      <div className={`edit-look-grid${pageTurn ? " is-turning" : ""}`} style={{ position: "relative", zIndex: 2, maxWidth: editWidth, width: "100%", margin: "0 auto" }}>
        {filtered.map((look, i) => (
          <article
            key={look.title}
            className="look-card edit-look"
            style={{ ["--stagger"]: `${i * 0.06}s` }}
          >
            <button type="button" className="edit-look-hit" onClick={() => openAsCover(look.title)} aria-label={`Open ${look.title} as cover story`}>
              <div className="edit-look-frame">
                <img src={look.src} alt={look.title} />
                <div className="edit-look-veil">
                  <p>{look.quote}</p>
                  <span className="edit-look-cta">View as cover →</span>
                </div>
                <span className="edit-look-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="edit-look-spark" aria-hidden="true" />
              </div>
            </button>
            <div className="edit-look-meta">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                <p>
                  Chapter {look.chapter} · {look.tag}
                </p>
                <button
                  type="button"
                  className={`edit-heart${saved.has(look.title) ? " is-on" : ""}`}
                  onClick={(e) => toggleSave(look.title, e)}
                  aria-label={`Save ${look.title}`}
                >
                  {saved.has(look.title) ? "♥" : "♡"}
                </button>
              </div>
              <h3>{look.title}</h3>
              <p className="edit-look-note">{look.note}</p>
              <div className="edit-palette tiny" aria-hidden="true">
                {(look.palette || []).map((swatch) => (
                  <span key={swatch} style={{ background: swatch }} />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* living pages / motion */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: editWidth, width: "100%", margin: "72px auto 0" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div className="edit-flourish" aria-hidden="true" style={{ marginBottom: 14 }}>
            <span />
            <i />
            <span />
          </div>
          <p style={{ letterSpacing: "0.28em", textTransform: "uppercase", fontSize: "0.88rem", color: colors.champagne, marginBottom: 12 }}>
            Living pages
          </p>
          <h3
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              fontWeight: 500,
              color: colors.ink,
              marginBottom: 10,
            }}
          >
            Soft motion from the diary
          </h3>
          <p style={{ color: colors.softInk, maxWidth: 580, margin: "0 auto", lineHeight: 1.7, fontSize: "clamp(1.05rem, 1.8vw, 1.18rem)" }}>
            Tiny moving chapters — outfit turns, glow moments, and fairy-tale energy.
          </p>
        </div>
        <div className="edit-motion-grid">
          {[
            { src: "/media/videos/reel-01.mp4", title: "Glow in motion", note: "Sparkle, turn, repeat.", tag: "Moment 01" },
            { src: "/media/videos/reel-02.mp4", title: "Soft story cut", note: "A breath of glam on loop.", tag: "Moment 02" },
          ].map((item) => (
            <div key={item.src} className="edit-motion look-card">
              <article className="edit-motion-card">
                <span className="edit-motion-glow" aria-hidden="true" />
                <header className="edit-motion-heading">
                  <p className="edit-motion-tagline">{item.tag}</p>
                  <div className="edit-motion-heading-copy">
                    <h4>{item.title}</h4>
                    <p>{item.note}</p>
                  </div>
                  <div className="edit-motion-heading-mark" aria-hidden="true">
                    <span />
                    <i />
                    <span />
                  </div>
                </header>
                <div className="edit-motion-frame">
                  <span className="edit-motion-jewel tl" aria-hidden="true" />
                  <span className="edit-motion-jewel tr" aria-hidden="true" />
                  <span className="edit-motion-jewel bl" aria-hidden="true" />
                  <span className="edit-motion-jewel br" aria-hidden="true" />
                  <div className="edit-motion-stage">
                    <video src={item.src} controls playsInline preload="metadata" />
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* closing strip */}
      <div className="edit-close" style={{ position: "relative", zIndex: 2, maxWidth: editWidth, width: "100%", margin: "72px auto 0" }}>
        <span className="edit-close-orb" aria-hidden="true" />
        <span className="edit-close-orb edit-close-orb-2" aria-hidden="true" />
        <span className="edit-close-spark a" aria-hidden="true" />
        <span className="edit-close-spark b" aria-hidden="true" />
        <span className="edit-close-spark c" aria-hidden="true" />
        <span className="edit-close-frame" aria-hidden="true" />

        <div className="edit-close-inner">
          <p className="edit-close-eyebrow">Campaign glow</p>
          <div className="edit-close-flourish" aria-hidden="true">
            <span />
            <i />
            <span />
          </div>
          <p className="edit-close-quote">Every look is a little glow.</p>
          <p className="edit-close-support">Want this glow on your campaign?</p>
          <p className="edit-close-note">
            Soft glam stories, festive frames, and brand-ready beauty moments — styled for your next launch.
          </p>

          <div className="edit-close-strip" aria-hidden="true">
            {looks.slice(0, 5).map((look) => (
              <span key={look.title} className="edit-close-thumb">
                <img src={look.src} alt="" />
              </span>
            ))}
          </div>

          <div className="edit-close-actions">
            <button type="button" className="cta-glow edit-close-btn" onClick={() => setPage("collabs")}>
              Let’s create
            </button>
            <a
              className="edit-close-link"
              href="https://instagram.com/blushbysweedal"
              target="_blank"
              rel="noreferrer"
            >
              @blushbysweedal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About({ setPage, onAskEnergy }) {
  const [parallax, setParallax] = useState(0);
  const [gaze, setGaze] = useState({ x: 50, y: 40 });
  const [mood, setMood] = useState("soft");
  const [quoteOn, setQuoteOn] = useState(false);
  const [split, setSplit] = useState(50);
  const [splitting, setSplitting] = useState(false);
  const [letterOn, setLetterOn] = useState(false);
  const [bioCopied, setBioCopied] = useState(false);
  const [toast, setToast] = useState("");
  const [goldenHour, setGoldenHour] = useState(62);
  const [voiceIndex, setVoiceIndex] = useState(0);
  const [voiceFlipped, setVoiceFlipped] = useState(false);
  const portraitRef = useRef(null);
  const diptychRef = useRef(null);
  const letterRef = useRef(null);
  const splitDrag = useRef(false);

  const dust = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        left: `${5 + ((i * 17) % 90)}%`,
        top: `${8 + ((i * 23) % 82)}%`,
        delay: `${(i % 7) * 0.35}s`,
        size: 3 + (i % 4),
      })),
    []
  );

  const orbitTags = ["soft glam", "festive", "garden light", "PR love", "desi glow"];
  const moods = [
    { id: "soft", label: "Soft" },
    { id: "festive", label: "Festive" },
    { id: "travel", label: "Travel" },
    { id: "desi", label: "Desi" },
  ];
  const timeline = [
    { year: "Then", note: "Outfit diaries & everyday pretty" },
    { year: "Now", note: "Magazine chapters & campaign glow" },
    { year: "Next", note: "Brand stories with a storybook heart" },
  ];
  const brand = "blushbysweedal";
  const headline = "Soft glam with a storybook heart.";
  const bioText =
    "Soft glam with a storybook heart.\nFashion · beauty · a little enchanted light\n@blushbysweedal";
  const voiceLines = [
    { prompt: "I create for…", answer: "girls who want pretty with a pulse of real life." },
    { prompt: "I love light that…", answer: "feels like golden hour on skin." },
    { prompt: "Brands that feel…", answer: "warm, soft, and a little enchanted." },
  ];
  const warmMix = goldenHour / 100;
  const coolMix = 1 - warmMix;

  useEffect(() => {
    const onScroll = () => {
      setParallax(window.scrollY * 0.04);
      setQuoteOn(window.scrollY > 120);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const idle = window.setTimeout(() => setQuoteOn(true), 1600);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(idle);
    };
  }, []);

  useEffect(() => {
    const el = letterRef.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setLetterOn(true);
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!toast) return undefined;
    const t = window.setTimeout(() => setToast(""), 1800);
    return () => window.clearTimeout(t);
  }, [toast]);

  const onPortraitMove = (e) => {
    if (splitDrag.current) return;
    const el = portraitRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGaze({ x, y });
  };

  useEffect(() => {
    const el = diptychRef.current;
    if (!el) return undefined;

    let active = false;
    let activePointerId = null;
    let prevBodyOverflow = "";
    let prevBodyTouchAction = "";

    const clientY = (e) => {
      if (e.touches && e.touches.length > 0) return e.touches[0].clientY;
      if (e.changedTouches && e.changedTouches.length > 0) return e.changedTouches[0].clientY;
      if (typeof e.clientY === "number") return e.clientY;
      return null;
    };

    const applySplit = (y) => {
      if (typeof y !== "number") return;
      const rect = el.getBoundingClientRect();
      if (!rect.height) return;
      const next = ((y - rect.top) / rect.height) * 100;
      setSplit(Math.max(28, Math.min(72, next)));
    };

    const lockScroll = () => {
      prevBodyOverflow = document.body.style.overflow;
      prevBodyTouchAction = document.body.style.touchAction;
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    };

    const unlockScroll = () => {
      document.body.style.overflow = prevBodyOverflow;
      document.body.style.touchAction = prevBodyTouchAction;
    };

    const start = (e) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      if (active) return;
      active = true;
      activePointerId = e.pointerId ?? "touch";
      splitDrag.current = true;
      setSplitting(true);
      lockScroll();
      if (typeof e.pointerId === "number") {
        try {
          el.setPointerCapture(e.pointerId);
        } catch {
          /* ignore */
        }
      }
      applySplit(clientY(e));
      if (e.cancelable) e.preventDefault();
    };

    const move = (e) => {
      if (!active) return;
      if (typeof e.pointerId === "number" && activePointerId !== e.pointerId) return;
      applySplit(clientY(e));
      if (e.cancelable) e.preventDefault();
    };

    const end = (e) => {
      if (!active) return;
      if (typeof e.pointerId === "number" && activePointerId !== e.pointerId) return;
      active = false;
      activePointerId = null;
      splitDrag.current = false;
      setSplitting(false);
      unlockScroll();
      if (typeof e.pointerId === "number") {
        try {
          el.releasePointerCapture(e.pointerId);
        } catch {
          /* ignore */
        }
      }
    };

    // Native non-passive listeners so mobile browsers actually allow preventDefault
    // (React synthetic touch/pointer listeners are often passive and can't stop scroll).
    const supportsPointer = typeof window.PointerEvent === "function";
    if (supportsPointer) {
      el.addEventListener("pointerdown", start, { passive: false });
      window.addEventListener("pointermove", move, { passive: false });
      window.addEventListener("pointerup", end);
      window.addEventListener("pointercancel", end);
    } else {
      el.addEventListener("touchstart", start, { passive: false });
      window.addEventListener("touchmove", move, { passive: false });
      window.addEventListener("touchend", end);
      window.addEventListener("touchcancel", end);
    }

    return () => {
      unlockScroll();
      if (supportsPointer) {
        el.removeEventListener("pointerdown", start);
        window.removeEventListener("pointermove", move);
        window.removeEventListener("pointerup", end);
        window.removeEventListener("pointercancel", end);
      } else {
        el.removeEventListener("touchstart", start);
        window.removeEventListener("touchmove", move);
        window.removeEventListener("touchend", end);
        window.removeEventListener("touchcancel", end);
      }
    };
  }, []);

  const copyBio = async () => {
    try {
      await navigator.clipboard.writeText(bioText);
      setBioCopied(true);
      setToast("Bio copied ✦");
      window.setTimeout(() => setBioCopied(false), 2200);
    } catch {
      setToast("Couldn’t copy — select & copy instead");
    }
  };

  const askForEnergy = () => {
    onAskEnergy?.(
      "Hi Sweedal — I’d love to collaborate on this About-the-muse energy: soft glam, storybook warmth, and brand-ready beauty moments."
    );
    setPage("collabs");
  };

  const flipVoice = () => {
    if (!voiceFlipped) {
      setVoiceFlipped(true);
      return;
    }
    setVoiceFlipped(false);
    window.setTimeout(() => {
      setVoiceIndex((i) => (i + 1) % voiceLines.length);
    }, 220);
  };

  return (
    <section className={`page-enter about-page mood-${mood}`}>
      <div className="about-mist" aria-hidden="true" />
      <div className="about-bloom a" aria-hidden="true" />
      <div className="about-bloom b" aria-hidden="true" />
      <div
        className="about-spotlight"
        aria-hidden="true"
        style={{ ["--ax"]: `${gaze.x}%`, ["--ay"]: `${gaze.y}%` }}
      />
      {dust.map((d) => (
        <span
          key={d.id}
          className="about-dust"
          aria-hidden="true"
          style={{ left: d.left, top: d.top, width: d.size, height: d.size, animationDelay: d.delay }}
        />
      ))}
      <p className="about-watermark" aria-hidden="true" style={{ transform: `translate3d(0, ${parallax}px, 0)` }}>
        muse
      </p>

      {toast && <div className="about-toast">{toast}</div>}

      <div className="about-marquee" aria-hidden="true">
        <div className="about-marquee-track">
          {Array.from({ length: 2 }).map((_, loop) => (
            <span key={loop}>
              soft glam ✦ garden light ✦ festive sparkle ✦ everyday pretty ✦ champagne glow ✦{" "}
            </span>
          ))}
        </div>
      </div>

      <div className="about-hero">
        <div className="about-hero-copy">
          <p className="about-eyebrow chapter-reveal">About the muse</p>
          <p className="about-brand" aria-label={brand}>
            {brand.split("").map((ch, i) => (
              <span key={`${ch}-${i}`} style={{ animationDelay: `${0.04 + i * 0.035}s` }}>
                {ch}
              </span>
            ))}
          </p>
          <h1 className="about-headline" aria-label={headline}>
            {headline.split(" ").map((word, wi, arr) => (
              <span key={`w-${wi}`} className="about-headline-word">
                {word.split("").map((ch, ci) => (
                  <span key={`${wi}-${ci}`} style={{ animationDelay: `${0.18 + (wi * 8 + ci) * 0.018}s` }}>
                    {ch}
                  </span>
                ))}
                {wi < arr.length - 1 ? "\u00A0" : ""}
              </span>
            ))}
          </h1>
          <p className={`about-quote${quoteOn ? " is-on" : ""}`}>
            “Pretty with a little enchantment.”
          </p>
          <p className="about-lede">
            Fashion, beauty, and a little enchanted light — styled for the feed, felt like a magazine.
          </p>

          <div className="about-moods" role="group" aria-label="Page mood">
            {moods.map((m) => (
              <button
                key={m.id}
                type="button"
                className={`about-mood${mood === m.id ? " is-on" : ""}`}
                onClick={() => setMood(m.id)}
              >
                {m.label}
              </button>
            ))}
          </div>

          <div className="about-hero-actions">
            <button type="button" className="cta-glow about-cta" onClick={askForEnergy}>
              Ask for this energy
            </button>
            <button
              type="button"
              className={`about-copy-bio${bioCopied ? " is-on" : ""}`}
              onClick={copyBio}
            >
              {bioCopied ? "Copied ✦" : "Copy bio"}
            </button>
            <a
              className="about-ig"
              href="https://instagram.com/blushbysweedal"
              target="_blank"
              rel="noreferrer"
            >
              @blushbysweedal
            </a>
          </div>
        </div>

        <div className="about-hero-visual">
          <div
            className="about-portrait-orbit"
            ref={portraitRef}
            onMouseMove={onPortraitMove}
            onMouseLeave={() => setGaze({ x: 50, y: 40 })}
          >
            {orbitTags.map((tag, i) => (
              <span
                key={tag}
                className="about-orbit-tag"
                style={{ ["--i"]: i, ["--n"]: orbitTags.length }}
              >
                {tag}
              </span>
            ))}
            <div
              className={`about-portrait about-diptych${splitting ? " is-splitting" : ""}`}
              ref={diptychRef}
              style={{
                ["--split"]: `${split}%`,
                ["--warm"]: warmMix,
                ["--cool"]: coolMix,
              }}
            >
              <div className="about-diptych-pane about-diptych-top">
                <img src="/media/photos/about.jpeg" alt="" aria-hidden="true" draggable={false} />
              </div>
              <div
                className="about-diptych-seam"
                role="slider"
                tabIndex={0}
                aria-label="Drag to peek between portrait frames"
                aria-valuemin={28}
                aria-valuemax={72}
                aria-valuenow={Math.round(split)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setSplit((v) => Math.max(28, v - 3));
                  } else if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setSplit((v) => Math.min(72, v + 3));
                  }
                }}
              >
                <span className="about-diptych-seam-line" aria-hidden="true" />
                <span className="about-diptych-seam-gem" aria-hidden="true" />
                <span className="about-diptych-seam-hint">Drag to peek</span>
              </div>
              <div className="about-diptych-pane about-diptych-bot">
                <img
                  src="/media/photos/about.jpeg"
                  alt="Sweedal overlooking mountains at golden hour"
                  draggable={false}
                />
              </div>
              <span className="about-portrait-veil" aria-hidden="true" />
              <span className="about-portrait-rim" aria-hidden="true" />
              <span className="about-portrait-spark a" aria-hidden="true" />
              <span className="about-portrait-spark b" aria-hidden="true" />
              <span className="about-portrait-spark c" aria-hidden="true" />
              <span className="about-portrait-spark d" aria-hidden="true" />
              <span className="about-hour-wash" aria-hidden="true" />
            </div>
          </div>

          <label className="about-peek-control">
            <span className="about-hour-label">
              <em>Top</em>
              <strong>Peek frames</strong>
              <em>Bottom</em>
            </span>
            <input
              type="range"
              min={28}
              max={72}
              value={split}
              onChange={(e) => setSplit(Number(e.target.value))}
              aria-label="Peek between portrait frames"
            />
          </label>

          <label className="about-hour">
            <span className="about-hour-label">
              <em>Cool</em>
              <strong>Golden hour</strong>
              <em>Warm</em>
            </span>
            <input
              type="range"
              min={0}
              max={100}
              value={goldenHour}
              onChange={(e) => setGoldenHour(Number(e.target.value))}
              aria-label="Golden hour light scrub"
            />
          </label>
        </div>
      </div>

      <div className="about-voice">
        <p className="about-voice-label">Voice of the muse</p>
        <button
          type="button"
          className={`about-voice-card${voiceFlipped ? " is-flipped" : ""}`}
          onClick={flipVoice}
          aria-label="Flip muse voice line"
        >
          <span className="about-voice-face about-voice-front">
            <span className="about-voice-index">
              {String(voiceIndex + 1).padStart(2, "0")} / {String(voiceLines.length).padStart(2, "0")}
            </span>
            <span className="about-voice-prompt">{voiceLines[voiceIndex].prompt}</span>
            <span className="about-voice-hint">Tap to reveal</span>
          </span>
          <span className="about-voice-face about-voice-back">
            <span className="about-voice-answer">{voiceLines[voiceIndex].answer}</span>
            <span className="about-voice-hint">Tap for next</span>
          </span>
        </button>
        <div className="about-voice-dots" role="tablist" aria-label="Voice lines">
          {voiceLines.map((line, i) => (
            <button
              key={line.prompt}
              type="button"
              className={`about-voice-dot${i === voiceIndex ? " is-on" : ""}`}
              aria-label={line.prompt}
              onClick={() => {
                setVoiceIndex(i);
                setVoiceFlipped(false);
              }}
            />
          ))}
        </div>
      </div>

      <div className={`about-letter${letterOn ? " is-on" : ""}`} ref={letterRef}>
        <p className="about-letter-label">Dear reader</p>
        <p className="about-letter-body">
          If you’re here, thank you for lingering. I make soft glam that still feels like a real girl —
          garden light, festive sparkle, and looks with a little storybook heart.
        </p>
        <p className="about-letter-sign">with love, Sweedal</p>
      </div>

      <div className="about-story">
        <div className="about-story-rule" aria-hidden="true">
          <span />
          <i />
          <span />
        </div>
        <p className="about-story-label">The chapter so far</p>
        <div className="about-story-grid">
          <p className="about-story-lead">
            I’m Sweedal — creating content that feels personal, pretty, and a little enchanted.
            Garden light, festive sparkle, everyday outfits, and looks that still feel like you.
          </p>
          <p className="about-story-body">
            This space is my digital magazine: a home for collaborations, PR love, and the chapters
            I share as <em>@blushbysweedal</em>. Soft glam with warmth — never cold, never loud.
          </p>
        </div>
      </div>

      <div className="about-timeline" aria-label="Creative timeline">
        {timeline.map((item, i) => (
          <div key={item.year} className="about-time-item" style={{ ["--stagger"]: `${i * 0.12}s` }}>
            <span className="about-time-dot" aria-hidden="true" />
            <p className="about-time-year">{item.year}</p>
            <p className="about-time-note">{item.note}</p>
          </div>
        ))}
      </div>

      <div className="about-truths">
        <p className="about-truths-label">Little truths</p>
        <ul>
          <li>
            <strong>Soft first</strong>
            <span>Romance in the lighting, never forced fantasy.</span>
          </li>
          <li>
            <strong>Real wardrobe energy</strong>
            <span>Looks you could actually wear — then elevate.</span>
          </li>
          <li>
            <strong>Brand-ready warmth</strong>
            <span>Pretty enough for campaigns, personal enough for trust.</span>
          </li>
        </ul>
      </div>

      <div className="about-close">
        <span className="about-close-orb" aria-hidden="true" />
        <p className="about-close-quote">Every look is a little glow.</p>
        <p className="about-close-note">Want that glow on your next campaign?</p>
        <div className="about-close-actions">
          <button type="button" className="cta-glow about-cta" onClick={askForEnergy}>
            Ask for this energy
          </button>
          <button type="button" className="about-secondary" onClick={() => setPage("issue")}>
            Browse The Edit
          </button>
          <button
            type="button"
            className={`about-copy-bio about-copy-bio-ghost${bioCopied ? " is-on" : ""}`}
            onClick={copyBio}
          >
            {bioCopied ? "Bio copied ✦" : "Copy bio"}
          </button>
        </div>
      </div>
    </section>
  );
}

function Collabs({ prefill = "" }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", brand: "", email: "", message: prefill || "" });
  const [intent, setIntent] = useState("");
  const [spotlight, setSpotlight] = useState({ x: "70%", y: "30%" });
  const [parallax, setParallax] = useState(0);
  const [petals, setPetals] = useState([]);
  const petalId = useRef(0);
  const formRef = useRef(null);

  const intents = [
    {
      id: "fashion",
      label: "Fashion story",
      message: "Hi Sweedal — I’d love a fashion story collab: outfit chapters, GRWM softness, and natural product styling.",
    },
    {
      id: "beauty",
      label: "Beauty feature",
      message: "Hi Sweedal — I’d love a beauty feature: soft glam try-ons, texture moments, and everyday-to-evening glow.",
    },
    {
      id: "campaign",
      label: "Campaign",
      message: "Hi Sweedal — I’d love a campaign collab: launch visuals, PR love, and brand-ready soft glam storytelling.",
    },
  ];

  const dust = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        left: `${6 + ((i * 19) % 88)}%`,
        top: `${10 + ((i * 27) % 80)}%`,
        delay: `${(i % 6) * 0.35}s`,
        size: 3 + (i % 3),
      })),
    []
  );

  useEffect(() => {
    if (!prefill) return;
    setForm((prev) => ({ ...prev, message: prefill }));
  }, [prefill]);

  useEffect(() => {
    const onScroll = () => setParallax(window.scrollY * 0.03);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const burstPetals = () => {
    const batch = Array.from({ length: 16 }, (_, i) => {
      petalId.current += 1;
      return {
        id: petalId.current,
        left: `${20 + Math.random() * 60}%`,
        delay: `${i * 0.04}s`,
        drift: `${(Math.random() - 0.5) * 140}px`,
        rot: `${(Math.random() - 0.5) * 180}deg`,
        size: 8 + Math.random() * 10,
      };
    });
    setPetals((prev) => [...prev, ...batch]);
    window.setTimeout(() => {
      setPetals((prev) => prev.filter((p) => !batch.some((b) => b.id === p.id)));
    }, 1600);
  };

  const applyIntent = (item) => {
    setIntent(item.id);
    setForm((prev) => ({ ...prev, message: item.message }));
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Collab inquiry from ${form.brand || form.name || "a brand"}`);
    const body = encodeURIComponent(
      `Hi Sweedal,\n\nName: ${form.name}\nBrand: ${form.brand}\nEmail: ${form.email}\n\n${form.message}\n`
    );
    burstPetals();
    window.location.href = `mailto:hello.blushbysweedal@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section
      className="page-enter connect-page"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setSpotlight({
          x: `${((e.clientX - rect.left) / rect.width) * 100}%`,
          y: `${((e.clientY - rect.top) / rect.height) * 100}%`,
        });
      }}
    >
      <div className="connect-mist" aria-hidden="true" />
      <div className="connect-bloom a" aria-hidden="true" />
      <div className="connect-bloom b" aria-hidden="true" />
      <div
        className="connect-spotlight"
        aria-hidden="true"
        style={{ ["--sx"]: spotlight.x, ["--sy"]: spotlight.y }}
      />
      {dust.map((d) => (
        <span
          key={d.id}
          className="connect-dust"
          aria-hidden="true"
          style={{ left: d.left, top: d.top, width: d.size, height: d.size, animationDelay: d.delay }}
        />
      ))}
      <p className="connect-watermark" aria-hidden="true" style={{ transform: `translateY(${parallax}px)` }}>
        connect
      </p>

      {petals.map((p) => (
        <span
          key={p.id}
          className="connect-petal"
          aria-hidden="true"
          style={{
            left: p.left,
            width: p.size,
            height: p.size * 1.35,
            animationDelay: p.delay,
            ["--drift"]: p.drift,
            ["--rot"]: p.rot,
          }}
        />
      ))}

      <div className="connect-marquee" aria-hidden="true">
        <div className="connect-marquee-track">
          {Array.from({ length: 2 }).map((_, loop) => (
            <span key={loop}>
              collaborations ✦ PR love ✦ soft glam campaigns ✦ beauty features ✦ fashion stories ✦{" "}
            </span>
          ))}
        </div>
      </div>

      <header className="connect-hero">
        <div className="connect-hero-copy">
          <p className="connect-eyebrow chapter-reveal">Connect & PR</p>
          <h1 className="connect-title">
            Ready for the next
            <span> campaign chapter.</span>
          </h1>
          <p className="connect-lede">
            Open to brand collaborations, PR packages, and creative partnerships across fashion and beauty.
            Rates available on request.
          </p>
          <div className="connect-hero-actions">
            <button
              type="button"
              className="cta-glow connect-cta"
              onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })}
            >
              Start inquiry
            </button>
            <a className="connect-ig" href="https://instagram.com/blushbysweedal" target="_blank" rel="noreferrer">
              @blushbysweedal
            </a>
          </div>
        </div>

        <div className="connect-hero-visual">
          <div className="connect-portrait">
            <img
              src="/media/photos/connect-hm-dress.jpg"
              alt="Sweedal in a champagne H&M-style satin midi dress"
            />
            <span className="connect-portrait-veil" aria-hidden="true" />
            <span className="connect-portrait-rim" aria-hidden="true" />
            <span className="connect-sticker a">H&M mood</span>
            <span className="connect-sticker b">Soft glam</span>
            <span className="connect-spark a" aria-hidden="true" />
            <span className="connect-spark b" aria-hidden="true" />
            <span className="connect-spark c" aria-hidden="true" />
          </div>
          <p className="connect-portrait-note">Champagne satin · campaign-ready softness</p>
        </div>
      </header>

      <div className="connect-offerings" aria-label="Collaboration offerings">
        {offerings.map((item, i) => (
          <article key={item.title} className="connect-offer" style={{ ["--stagger"]: `${i * 0.08}s` }}>
            <p className="connect-offer-num">{String(i + 1).padStart(2, "0")}</p>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <span className="connect-offer-sheen" aria-hidden="true" />
          </article>
        ))}
      </div>

      <div className="connect-intents" role="group" aria-label="Quick inquiry intents">
        <p>Choose a starting note</p>
        <div>
          {intents.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`connect-intent${intent === item.id ? " is-on" : ""}`}
              onClick={() => applyIntent(item)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="connect-panel" ref={formRef}>
        <div className="connect-panel-copy">
          <p className="connect-eyebrow">Brand inquiry</p>
          <h2>Tell me about the glow you want.</h2>
          <p>
            Share your brand, timeline, and the kind of story you’re dreaming of — fashion, beauty, or a full campaign chapter.
          </p>
          <div className="connect-direct">
            <a href="mailto:hello.blushbysweedal@gmail.com">hello.blushbysweedal@gmail.com</a>
            <a href="https://instagram.com/blushbysweedal" target="_blank" rel="noreferrer">
              @blushbysweedal
            </a>
          </div>
        </div>

        <form className="connect-form" onSubmit={onSubmit}>
          {[
            { key: "name", label: "Your name", type: "text" },
            { key: "brand", label: "Brand / agency", type: "text" },
            { key: "email", label: "Email", type: "email" },
          ].map((field) => (
            <label key={field.key} className="connect-field">
              {field.label}
              <input
                required={field.key !== "brand"}
                type={field.type}
                value={form[field.key]}
                onChange={(e) => setForm((prev) => ({ ...prev, [field.key]: e.target.value }))}
              />
            </label>
          ))}
          <label className="connect-field">
            Message
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
            />
          </label>
          <button type="submit" className="cta-glow connect-submit">
            {sent ? "Opening email…" : "Send inquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer({ setPage }) {
  const links = [
    ["home", "Cover"],
    ["issue", "The Edit"],
    ["about", "About"],
    ["collabs", "Connect"],
  ];

  const sidePad = "clamp(22px, 4vw, 56px)";

  return (
    <footer
      className="site-footer"
      style={{
        marginTop: 0,
        background: `linear-gradient(180deg, #4a3b36 0%, ${colors.ink} 40%)`,
        color: "#f3e7df",
        padding: `64px ${sidePad} 32px`,
        borderTop: "1px solid rgba(198,168,117,0.22)",
      }}
    >
        <div
          className="site-footer-grid"
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 0.7fr) minmax(0, 1fr)",
            gap: 48,
            alignItems: "start",
            paddingBottom: 40,
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
            <img
              src="/logo-mark.png"
              alt=""
              style={{ height: 78, width: "auto", background: "transparent", objectFit: "contain" }}
            />
            <div>
              <BrandWordmark size="footer" />
              <p
                style={{
                  marginTop: 16,
                  fontSize: "1.08rem",
                  lineHeight: 1.65,
                  opacity: 0.8,
                  maxWidth: 420,
                }}
              >
                Soft glam fashion stories, beauty moments, and brand-ready features.
              </p>
            </div>
          </div>

          <div>
            <p
              style={{
                fontSize: "0.82rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: colors.champagne,
                marginBottom: 18,
              }}
            >
              Explore
            </p>
            <div style={{ display: "grid", gap: 14 }}>
              {links.map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setPage(id)}
                  style={{
                    border: "none",
                    background: "transparent",
                    color: "#f3e7df",
                    cursor: "pointer",
                    textAlign: "left",
                    padding: 0,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontSize: "0.95rem",
                    opacity: 0.9,
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p
              style={{
                fontSize: "0.82rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: colors.champagne,
                marginBottom: 12,
              }}
            >
              Say hello
            </p>
            <a
              href="mailto:hello.blushbysweedal@gmail.com"
              style={{ color: "#f3e7df", textDecoration: "none", fontSize: "1.08rem", display: "block", marginBottom: 4 }}
            >
              hello.blushbysweedal@gmail.com
            </a>
            <a
              href="https://instagram.com/blushbysweedal"
              target="_blank"
              rel="noreferrer"
              style={{ color: colors.blush, textDecoration: "none", fontSize: "1.08rem", display: "block", lineHeight: 1.2 }}
            >
              @blushbysweedal
            </a>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            borderTop: "1px solid rgba(243,231,223,0.12)",
            paddingTop: 20,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 10,
            fontSize: "0.92rem",
            opacity: 0.7,
          }}
        >
          <p>© {new Date().getFullYear()} blushbysweedal</p>
          <p>Enchanted fashion & soft glam</p>
        </div>
    </footer>
  );
}

/** Magical Disney-style SFX via Web Audio (no external files). */
function createIntroSound() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) {
    return {
      unlock: async () => {},
      play: () => {},
      stopAll: () => {},
      dispose: () => {},
    };
  }

  const ctx = new AudioCtx();
  const master = ctx.createGain();
  master.gain.value = 0.55;
  master.connect(ctx.destination);

  const active = new Set();

  const now = () => ctx.currentTime;

  const tone = (freq, start, dur, type = "sine", gain = 0.12, slideTo = null) => {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, start);
    if (slideTo != null) osc.frequency.exponentialRampToValueAtTime(Math.max(20, slideTo), start + dur);
    g.gain.setValueAtTime(0.0001, start);
    g.gain.exponentialRampToValueAtTime(gain, start + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    osc.connect(g);
    g.connect(master);
    osc.start(start);
    osc.stop(start + dur + 0.05);
    active.add(osc);
    osc.onended = () => active.delete(osc);
  };

  const noiseWhoosh = (start, dur = 0.85, gain = 0.18) => {
    const len = Math.floor(ctx.sampleRate * dur);
    const buffer = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < len; i += 1) data[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(400, start);
    filter.frequency.exponentialRampToValueAtTime(3200, start + dur * 0.45);
    filter.frequency.exponentialRampToValueAtTime(600, start + dur);
    filter.Q.value = 0.7;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, start);
    g.gain.exponentialRampToValueAtTime(gain, start + 0.08);
    g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    src.connect(filter);
    filter.connect(g);
    g.connect(master);
    src.start(start);
    src.stop(start + dur + 0.02);
  };

  const chimeCluster = (base, start, gain = 0.1) => {
    [0, 4, 7, 12].forEach((semi, i) => {
      const f = base * 2 ** (semi / 12);
      tone(f, start + i * 0.07, 1.4 - i * 0.12, "sine", gain * (1 - i * 0.15));
      tone(f * 2, start + i * 0.07, 0.9, "triangle", gain * 0.25);
    });
  };

  const sparkleRain = (start, count = 8) => {
    for (let i = 0; i < count; i += 1) {
      const f = 1200 + Math.random() * 2200;
      tone(f, start + i * 0.06, 0.25 + Math.random() * 0.2, "sine", 0.035 + Math.random() * 0.03);
    }
  };

  let padNodes = null;
  const startPad = () => {
    if (padNodes) return;
    const oscA = ctx.createOscillator();
    const oscB = ctx.createOscillator();
    const g = ctx.createGain();
    oscA.type = "sine";
    oscB.type = "sine";
    oscA.frequency.value = 110;
    oscB.frequency.value = 164.81;
    g.gain.value = 0.0001;
    oscA.connect(g);
    oscB.connect(g);
    g.connect(master);
    const t = now();
    g.gain.exponentialRampToValueAtTime(0.045, t + 1.2);
    oscA.start(t);
    oscB.start(t);
    padNodes = { oscA, oscB, g };
  };

  const stopPad = (fade = 0.8) => {
    if (!padNodes) return;
    const t = now();
    padNodes.g.gain.cancelScheduledValues(t);
    padNodes.g.gain.setValueAtTime(Math.max(padNodes.g.gain.value, 0.0001), t);
    padNodes.g.gain.exponentialRampToValueAtTime(0.0001, t + fade);
    padNodes.oscA.stop(t + fade + 0.05);
    padNodes.oscB.stop(t + fade + 0.05);
    padNodes = null;
  };

  const cues = {
    mist: () => {
      startPad();
      sparkleRain(now() + 0.2, 6);
    },
    whisper: () => chimeCluster(523.25, now(), 0.09),
    whisper2: () => chimeCluster(587.33, now(), 0.1),
    mirror: () => {
      tone(392, now(), 1.6, "sine", 0.08, 784);
      sparkleRain(now() + 0.15, 10);
      chimeCluster(659.25, now() + 0.35, 0.07);
    },
    rings: () => {
      tone(440, now(), 0.5, "triangle", 0.05);
      tone(554.37, now() + 0.12, 0.55, "triangle", 0.045);
      tone(659.25, now() + 0.24, 0.7, "sine", 0.05);
    },
    turn: () => {
      tone(220, now(), 2.8, "sine", 0.06, 660);
      noiseWhoosh(now() + 0.4, 1.1, 0.1);
      sparkleRain(now() + 0.8, 8);
    },
    float: () => {
      sparkleRain(now(), 7);
      tone(784, now(), 1.2, "sine", 0.04);
    },
    woosh: () => {
      noiseWhoosh(now(), 1.0, 0.22);
      tone(180, now(), 0.7, "sawtooth", 0.04, 720);
      sparkleRain(now() + 0.15, 12);
    },
    name: () => {
      chimeCluster(698.46, now(), 0.12);
      tone(349.23, now(), 1.8, "sine", 0.07);
      sparkleRain(now() + 0.2, 10);
    },
    shimmer: () => {
      noiseWhoosh(now(), 0.9, 0.16);
      sparkleRain(now(), 14);
      tone(880, now(), 1.0, "triangle", 0.05, 1320);
    },
    tag: () => {
      tone(523.25, now(), 0.9, "sine", 0.06);
      tone(659.25, now() + 0.1, 1.0, "sine", 0.05);
    },
    welcome: () => {
      noiseWhoosh(now(), 0.75, 0.12);
      chimeCluster(784, now(), 0.1);
    },
    finale: () => {
      noiseWhoosh(now(), 1.15, 0.2);
      chimeCluster(880, now(), 0.13);
      sparkleRain(now() + 0.1, 16);
      tone(196, now(), 2.0, "sine", 0.07, 392);
    },
    exit: () => {
      stopPad(1.2);
      tone(523.25, now(), 1.4, "sine", 0.05, 261.63);
      sparkleRain(now(), 8);
    },
  };

  return {
    unlock: async () => {
      if (ctx.state === "suspended") {
        try {
          await ctx.resume();
        } catch {
          /* ignore */
        }
      }
      return ctx.state === "running";
    },
    play: (cue) => {
      const run = () => {
        if (ctx.state === "suspended") return false;
        cues[cue]?.();
        return true;
      };
      if (run()) return true;
      ctx.resume?.()
        .then(() => {
          run();
        })
        .catch(() => {});
      return false;
    },
    stopAll: () => {
      stopPad(0.4);
      active.forEach((n) => {
        try {
          n.stop();
        } catch {
          /* ignore */
        }
      });
      active.clear();
    },
    dispose: () => {
      stopPad(0.2);
      try {
        ctx.close();
      } catch {
        /* ignore */
      }
    },
    get state() {
      return ctx.state;
    },
  };
}

function EnchantedIntro({ onReveal, onGone }) {
  // gate → mist → whisper → mirror → rings → turn → float → woosh → name → shimmer → tag → welcome → finale → exit
  const [started, setStarted] = useState(false);
  const [phase, setPhase] = useState("mist");
  const [exiting, setExiting] = useState(false);
  const [whisperHide, setWhisperHide] = useState(false);
  const [whisperText, setWhisperText] = useState("once upon a glow");
  const [wooshKey, setWooshKey] = useState(0);
  const [petalsOn, setPetalsOn] = useState(false);
  const doneRef = useRef(false);
  const startedRef = useRef(false);
  const soundRef = useRef(null);

  const finish = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    soundRef.current?.play("exit");
    setExiting(true);
    onReveal();
    window.setTimeout(() => {
      soundRef.current?.stopAll();
      onGone();
    }, 1800);
  };

  useEffect(() => {
    const sound = createIntroSound();
    soundRef.current = sound;
    return () => {
      sound.dispose();
      soundRef.current = null;
    };
  }, []);

  const beginIntro = async () => {
    if (startedRef.current) return;
    startedRef.current = true;
    const sound = soundRef.current;
    if (sound) {
      await sound.unlock();
      // Retry briefly — some mobile browsers need a tick after the gesture.
      if (sound.state === "suspended") {
        await new Promise((r) => window.setTimeout(r, 40));
        await sound.unlock();
      }
      sound.play("mist");
    }
    setStarted(true);
  };

  useEffect(() => {
    if (!started) return undefined;
    const map = {
      mist: "mist",
      whisper: "whisper",
      whisper2: "whisper2",
      mirror: "mirror",
      rings: "rings",
      turn: "turn",
      float: "float",
      woosh: "woosh",
      name: "name",
      shimmer: "shimmer",
      tag: "tag",
      welcome: "welcome",
      finale: "finale",
    };
    const cue = map[phase];
    if (cue && phase !== "mist") soundRef.current?.play(cue);
  }, [phase, started]);

  useEffect(() => {
    if (!started) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setPhase("welcome");
      const t = window.setTimeout(finish, 1000);
      return () => window.clearTimeout(t);
    }

    const timers = [
      window.setTimeout(() => setPhase("whisper"), 1400),
      window.setTimeout(() => setPhase("mirror"), 3400),
      window.setTimeout(() => setWhisperHide(true), 4200),
      window.setTimeout(() => {
        setWhisperHide(false);
        setWhisperText("a soft glam fairytale");
        setPhase("whisper2");
      }, 5200),
      window.setTimeout(() => setWhisperHide(true), 7000),
      window.setTimeout(() => setPhase("rings"), 7600),
      window.setTimeout(() => setPhase("turn"), 8800),
      window.setTimeout(() => {
        setPhase("float");
        setPetalsOn(true);
      }, 12200),
      window.setTimeout(() => {
        setPhase("woosh");
        setWooshKey(1);
      }, 14500),
      window.setTimeout(() => setPhase("name"), 15800),
      window.setTimeout(() => {
        setPhase("shimmer");
        setWooshKey(2);
      }, 17800),
      window.setTimeout(() => setPhase("tag"), 18800),
      window.setTimeout(() => {
        setPhase("welcome");
        setWooshKey(3);
      }, 20500),
      window.setTimeout(() => setPhase("finale"), 22000),
      window.setTimeout(finish, 23500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [started]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const sparks = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => {
        const angle = (i / 26) * Math.PI * 2;
        return {
          id: i,
          sx: `${Math.cos(angle) * (110 + (i % 5) * 34)}px`,
          sy: `${Math.sin(angle) * (88 + (i % 6) * 30)}px`,
          delay: `${(i % 10) * 0.05}s`,
          left: "50%",
          top: "40%",
        };
      }),
    []
  );

  const dust = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: `${4 + ((i * 11) % 92)}%`,
        top: `${6 + ((i * 17) % 82)}%`,
        delay: `${(i % 9) * 0.38}s`,
        size: 2 + (i % 4),
      })),
    []
  );

  const stars = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => ({
        id: i,
        left: `${3 + ((i * 17) % 94)}%`,
        top: `${4 + ((i * 23) % 90)}%`,
        delay: `${(i % 8) * 0.26}s`,
        size: 2 + (i % 3),
      })),
    []
  );

  const rays = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        ray: `${i * 30}deg`,
        delay: `${0.06 * i}s`,
      })),
    []
  );

  const petals = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        left: `${6 + ((i * 7) % 88)}%`,
        delay: `${(i % 8) * 0.35}s`,
        duration: `${4.8 + (i % 5) * 0.4}s`,
        scale: 0.7 + (i % 4) * 0.2,
      })),
    []
  );

  const latePhases = ["float", "woosh", "name", "shimmer", "tag", "welcome", "finale"];
  const namePhases = ["name", "shimmer", "tag", "welcome", "finale"];
  const showMirror = !["mist", "whisper"].includes(phase);
  const turning = ["turn", ...latePhases].includes(phase) || exiting;
  const floating = ["float", "woosh", "name", "shimmer", "tag", "welcome", "finale"].includes(phase) && !exiting;
  const showRings = ["rings", "turn", ...latePhases].includes(phase) || exiting;
  const showWoosh = ["woosh", ...namePhases].includes(phase) || exiting;
  const showName = namePhases.includes(phase) || exiting;
  const showShimmer = ["shimmer", "tag", "welcome", "finale"].includes(phase) || exiting;
  const showTag = ["tag", "welcome", "finale"].includes(phase) || exiting;
  const showWelcome = ["welcome", "finale"].includes(phase) || exiting;
  const showFinale = phase === "finale" || exiting;
  const showWhisper =
    phase === "whisper" ||
    phase === "whisper2" ||
    (phase === "mirror" && !whisperHide) ||
    (phase === "whisper2" && !whisperHide);
  const showRays = showWoosh;
  const showCrest = showName;

  return (
    <div
      className={`intro-overlay${exiting ? " intro-exit" : ""}${started ? " is-started" : " is-gated"}`}
      role="dialog"
      aria-label="Welcome to blushbysweedal"
    >
      <div className={`intro-glow${showName ? " late" : ""}`} aria-hidden="true" />
      <div className={`intro-finale-flash${showFinale ? " play" : ""}`} aria-hidden="true" />

      {stars.map((s) => (
        <span
          key={`star-${s.id}`}
          className="intro-star"
          aria-hidden="true"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
          }}
        />
      ))}

      {dust.map((d) => (
        <span
          key={`dust-${d.id}`}
          className="intro-dust"
          aria-hidden="true"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            animationDelay: d.delay,
          }}
        />
      ))}

      {!started && (
        <button type="button" className="intro-start-gate" onClick={beginIntro} autoFocus>
          <img className="intro-start-mark" src="/logo-mark.png" alt="" />
          <span className="intro-start-title">blushbysweedal</span>
          <span className="intro-start-sub">Tap to enter with sound</span>
          <span className="intro-start-cta">Begin the glow</span>
        </button>
      )}

      {started && petalsOn &&
        petals.map((p) => (
          <span
            key={`petal-${p.id}`}
            className="intro-petal fall"
            aria-hidden="true"
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              transform: `scale(${p.scale})`,
            }}
          />
        ))}

      {showRays &&
        rays.map((r) => (
          <span
            key={`ray-${r.id}-${wooshKey}`}
            className="intro-ray play"
            aria-hidden="true"
            style={{
              ["--ray"]: r.ray,
              animationDelay: r.delay,
            }}
          />
        ))}

      <p className={`intro-whisper${showWhisper && !whisperHide ? " show" : ""}${whisperHide ? " hide" : ""}`}>
        {whisperText}
      </p>

      <div className="intro-center">
        <div
          className={`intro-mirror-stage${showMirror ? " show" : ""}${turning && !floating ? " turning" : ""}${floating ? " float" : ""}`}
          style={{ opacity: showMirror || turning || floating ? undefined : 0 }}
        >
          <span className={`intro-ring outer${showRings ? " show" : ""}`} aria-hidden="true" />
          <span className={`intro-ring inner${showRings ? " show" : ""}`} aria-hidden="true" />
          <img className="intro-mirror" src="/logo-mark.png" alt="" />
        </div>

        <div
          key={`woosh-${wooshKey}`}
          className={`intro-woosh${showWoosh ? " play" : ""}${wooshKey >= 2 ? " second" : ""}`}
          aria-hidden="true"
        />

        {showWoosh &&
          sparks.map((s) => (
            <span
              key={`spark-${s.id}-${wooshKey}`}
              className="intro-spark burst"
              aria-hidden="true"
              style={{
                left: s.left,
                top: s.top,
                animationDelay: s.delay,
                ["--sx"]: s.sx,
                ["--sy"]: s.sy,
              }}
            />
          ))}

        <svg
          className={`intro-crest${showCrest ? " show" : ""}`}
          viewBox="0 0 280 28"
          aria-hidden="true"
        >
          <path
            d="M10 18 C50 6, 90 6, 140 16 C190 26, 230 26, 270 14"
            fill="none"
            stroke="rgba(226,201,146,0.7)"
            strokeWidth="1.2"
          />
          <path
            d="M10 22 C55 12, 95 12, 140 20 C185 28, 230 28, 270 18"
            fill="none"
            stroke="rgba(232,180,184,0.45)"
            strokeWidth="0.9"
          />
        </svg>

        <div className="intro-name-wrap">
          <p className={`intro-name-words${showName ? " show" : ""}`} aria-label="blush by sweedal">
            <span>blush</span>
            <span>by</span>
            <span>sweedal</span>
          </p>
          <span className={`intro-name-shimmer${showShimmer ? " play" : ""}`} aria-hidden="true" />
        </div>

        <div className={`intro-flourish${showName ? " show" : ""}`} aria-hidden="true">
          <span className="line" />
          <span className="diamond" />
          <span className="line" />
        </div>

        <p className={`intro-tagline${showTag ? " show" : ""}`}>Enchanted fashion & soft glam</p>
        <p className={`intro-handle${showTag ? " show" : ""}`}>@blushbysweedal</p>
        <p className={`intro-welcome${showWelcome ? " show" : ""}`}>Welcome to the edit</p>
      </div>

      {started && (
        <div className="intro-progress" aria-hidden="true">
          <span />
        </div>
      )}

      {started && (
        <button
          type="button"
          className="intro-skip"
          onClick={async () => {
            await soundRef.current?.unlock();
            finish();
          }}
        >
          Skip
        </button>
      )}
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const [introDone, setIntroDone] = useState(false);
  const [introGone, setIntroGone] = useState(false);
  const [collabPrefill, setCollabPrefill] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <>
      {!introGone && (
        <EnchantedIntro
          onReveal={() => setIntroDone(true)}
          onGone={() => setIntroGone(true)}
        />
      )}
      <div
        className={introDone ? "site-reveal" : undefined}
        style={{
          minHeight: "100vh",
          background: colors.ivory,
          visibility: introDone ? "visible" : "hidden",
        }}
        aria-hidden={!introDone}
      >
        <Nav page={page} setPage={setPage} />
        <main key={page}>
          {page === "home" && <Home setPage={setPage} />}
          {page === "issue" && <Issue setPage={setPage} />}
          {page === "about" && <About setPage={setPage} onAskEnergy={setCollabPrefill} />}
          {page === "collabs" && <Collabs prefill={collabPrefill} />}
        </main>
        <Footer setPage={setPage} />
      </div>
    </>
  );
}
