————↗export default function About() {
  return (
    <main>
      <div className="site-container">
        <section style={{ padding: "48px 0 64px" }}>
          <div
            className="about-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "48px",
              alignItems: "start",
            }}
          >
            {/* Avatar */}
            <div>
              <div
                style={{
                  width: "160px",
                  height: "160px",
                  background: "var(--color-surface)",
                  border: "0.5px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "44px",
                    fontWeight: 700,
                    color: "var(--color-text-tertiary)",
                    letterSpacing: "-0.03em",
                    userSelect: "none",
                  }}
                >
                  AB
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { label: "Twitter / X", href: "https://twitter.com" },
                  { label: "LinkedIn", href: "https://linkedin.com" },
                  { label: "Colloquia.live ↗", href: "https://colloquia.live" },
                  { label: "Email", href: "mailto:aaron@aaronbriley.com" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "13px",
                      color: "var(--color-accent)",
                      fontWeight: 500,
                      transition: "opacity var(--transition)",
                      textDecoration: "none",
                      minHeight: "44px",
                      display: "flex",
                      alignItems: "center",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.opacity = "0.7";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.opacity = "1";
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Bio */}
            <div>
              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "36px",
                  fontWeight: 700,
                  color: "var(--color-text-primary)",
                  marginBottom: "24px",
                  letterSpacing: "-0.02em",
                }}
                className="page-h1"
              >
                About
              </h1>

              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "15px",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Hello! I'm Aaron — a writer and founder interested in the intersection of ideas, technology, and live events. I founded{" "}
                <a
                  href="https://colloquia.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--color-accent)",
                    textDecoration: "underline",
                    textDecorationColor: "transparent",
                    transition: "text-decoration-color var(--transition)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.textDecorationColor = "var(--color-accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.textDecorationColor = "transparent";
                  }}
                >
                  Colloquia
                </a>
                , a directory of live intellectual events, because I believe that the best ideas spread through live encounter — through lecture halls and seminar rooms, through the friction of real conversation.
              </p>

              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "15px",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                My essays explore moral philosophy, the nature of lived experience, challenges of the human condition, and what it might mean to live an examined life in an age of distraction. I read slowly, think even more slowly, and try to write only when I have something to say rather than something to perform.
              </p>

              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "15px",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.8,
                }}
              >
                If you want to reach out — whether to discuss an idea, a book, or a collaboration — email is the best way.
              </p>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .page-h1 { font-size: 28px !important; }
        }
      `}</style>
    </main>
  );
}
