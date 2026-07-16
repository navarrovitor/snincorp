"use client";

export default function Hero() {
  const handleScrollToProjects = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    document.querySelector("#projetos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "0 64px 72px",
        position: "relative",
        overflow: "hidden",
        paddingTop: 88,
      }}
    >
      <div
        style={{
          position: "absolute",
          right: 80,
          top: 140,
          bottom: 120,
          width: 1,
          background:
            "linear-gradient(to bottom, transparent, #E0DBCF 20%, #E0DBCF 80%, transparent)",
        }}
      />

      <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: 48 }}>
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#B0AC9F",
          }}
        >
          Est. 2010
        </span>
      </div>

      <div
        className="hero-name"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "32px 0",
          position: "relative",
        }}
      >
        <div
          className="hero-logo-bg"
          style={{
            position: "absolute",
            left: "-2%",
            top: "50%",
            transform: "translateY(-55%)",
            width: "min(50vw, 620px)",
            height: "min(50vw, 620px)",
            opacity: 0.55,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <svg viewBox="0 0 1040 984" width="100%" height="100%" style={{ overflow: "visible" }}>
            <path d="M293,235 C289,340 296,470 291,600 C288,690 286,740 285,780" fill="none" stroke="#6E8A97" strokeWidth={24} pathLength={1} strokeDasharray={1} style={{ animationName: "draw0" }} />
            <path d="M195,196 C300,178 420,168 505,178 C610,190 680,188 725,184" fill="none" stroke="#6E8A97" strokeWidth={24} pathLength={1} strokeDasharray={1} style={{ animationName: "draw1" }} />
            <path d="M505,62 C517,190 483,285 500,410 C518,535 470,640 494,760 C505,825 490,880 497,928" fill="none" stroke="#F09419" strokeWidth={18} pathLength={1} strokeDasharray={1} style={{ animationName: "draw2" }} />
            <path d="M425,690 C423,770 424,850 423,925" fill="none" stroke="#F09419" strokeWidth={14} pathLength={1} strokeDasharray={1} style={{ animationName: "draw3" }} />
            <path d="M93,797 L367,792" fill="none" stroke="#1B1B1B" strokeWidth={17} pathLength={1} strokeDasharray={1} style={{ animationName: "draw4" }} />
            <path d="M168,838 L365,830" fill="none" stroke="#1B1B1B" strokeWidth={17} pathLength={1} strokeDasharray={1} style={{ animationName: "draw5" }} />
            <path d="M592,772 L975,758" fill="none" stroke="#1B1B1B" strokeWidth={20} pathLength={1} strokeDasharray={1} style={{ animationName: "draw6" }} />
            <path d="M592,812 L975,800" fill="none" stroke="#1B1B1B" strokeWidth={20} pathLength={1} strokeDasharray={1} style={{ animationName: "draw7" }} />
            <path d="M592,852 L975,845" fill="none" stroke="#1B1B1B" strokeWidth={20} pathLength={1} strokeDasharray={1} style={{ animationName: "draw8" }} />
            <path d="M592,905 L975,895" fill="none" stroke="#1B1B1B" strokeWidth={20} pathLength={1} strokeDasharray={1} style={{ animationName: "draw9" }} />
          </svg>
        </div>

        <div
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(72px, 11vw, 160px)",
            fontWeight: 300,
            lineHeight: 0.92,
            letterSpacing: "-0.025em",
            color: "#1A1A1A",
            position: "relative",
            zIndex: 1,
          }}
        >
          <span>sn</span>
          <span style={{ color: "#F09419" }}>IN</span>
          <span>corp</span>
        </div>

        <div
          style={{
            marginTop: 28,
            display: "flex",
            alignItems: "center",
            gap: 20,
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={{ width: 40, height: 2, background: "#F09419" }} />
          <span
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(16px, 2vw, 22px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#6B6560",
              letterSpacing: "0.02em",
            }}
          >
            Arquitetura, Urbanismo e Gerenciamento de Obras
          </span>
        </div>
      </div>

      <div
        className="hero-sub"
        style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}
      >
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#A8A49E",
            lineHeight: 2.2,
          }}
        >
          São Paulo · Brasil
        </p>

        <a
          href="#projetos"
          onClick={handleScrollToProjects}
          className="hero-cta"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#888",
            transition: "color 0.2s",
          }}
        >
          <span>Ver Projetos</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span style={{ display: "block", width: 48, height: 1, background: "currentColor" }} />
            ↓
          </span>
        </a>
      </div>
    </section>
  );
}
