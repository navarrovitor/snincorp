export default function Contact() {
  return (
    <section
      id="contato"
      style={{ padding: "120px 64px", background: "#1A1A1A", color: "#FAFAF8" }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
        <div>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#F09419",
              marginBottom: 32,
            }}
          >
            Contato
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 56,
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: 40,
            }}
          >
            Vamos criar
            <br />
            <em>juntos.</em>
          </h2>
          <div style={{ width: 40, height: 1, background: "#F09419" }} />
        </div>

        <div style={{ paddingTop: 64, display: "flex", flexDirection: "column", gap: 48 }}>
          <div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#6B95A5",
                marginBottom: 10,
              }}
            >
              Email
            </div>
            <a
              href="mailto:contato@snincorp.com.br"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 24,
                fontWeight: 300,
                color: "#FAFAF8",
                transition: "color 0.2s",
              }}
            >
              contato@snincorp.com.br
            </a>
          </div>

          <div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#6B95A5",
                marginBottom: 10,
              }}
            >
              Localização
            </div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 24,
                fontWeight: 300,
                color: "#FAFAF8",
                lineHeight: 1.6,
              }}
            >
              São Paulo
              <br />
              Brasil
            </p>
          </div>

          <div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#6B95A5",
                marginBottom: 10,
              }}
            >
              Instagram
            </div>
            <a
              href="#"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 24,
                fontWeight: 300,
                color: "#FAFAF8",
              }}
            >
              @snincorp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
