export default function Footer() {
  return (
    <footer
      style={{
        background: "#1A1A1A",
        padding: "28px 64px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 11,
          letterSpacing: "0.12em",
          color: "#555",
          textTransform: "uppercase",
        }}
      >
        © 2025 snINcorp
      </span>
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 11,
          letterSpacing: "0.12em",
          color: "#555",
          textTransform: "uppercase",
        }}
      >
        Arquitetura · Urbanismo · Gerenciamento
      </span>
    </footer>
  );
}
