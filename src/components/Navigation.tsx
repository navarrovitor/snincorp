"use client";

const NAV_LINKS = [
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export default function Navigation() {
  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        padding: "22px 64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "rgba(250,250,248,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <span
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 22,
          fontWeight: 400,
          letterSpacing: "-0.01em",
        }}
      >
        <span>sn</span>
        <span style={{ color: "#F09419" }}>IN</span>
        <span>corp</span>
      </span>

      <div style={{ display: "flex", gap: 48, alignItems: "center" }}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(event) => handleLinkClick(event, link.href)}
            className="nav-link"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#1A1A1A",
              transition: "color 0.2s",
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
