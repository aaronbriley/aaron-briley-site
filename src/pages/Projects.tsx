export default function Projects() {
  return (
    <main>
      <div className="site-container">
        <section style={{ padding: "48px 0 32px" }}>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "36px",
              fontWeight: 700,
              color: "var(--color-text-primary)",
              marginBottom: "8px",
              letterSpacing: "-0.02em",
            }}
            className="page-h1"
          >
            Projects
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "15px",
              color: "var(--color-text-secondary)",
              lineHeight: 1.6,
            }}
          >
            Things I'm building.
          </p>
        </section>

        <section style={{ paddingBottom: "64px" }}>
          {/* Colloquia card */}
          <a
            href="https://colloquia.live"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", textDecoration: "none", marginBottom: "16px" }}
          >
            <div
              style={{
                border: "0.5px solid var(--color-border)",
                borderRadius: "10px",
                padding: "24px 28px",
                background: "var(--color-bg)",
                transition: "border-color var(--transition)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "22px",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                  }}
                >
                  Colloquia.live
                </h2>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "var(--color-success)",
                    background: "var(--color-success-light)",
                    border: "0.5px solid var(--color-success)",
                    borderRadius: "4px",
                    padding: "3px 8px",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Live
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "15px",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.7,
                  maxWidth: "560px",
                }}
              >
                A community-sourced directory of live and in-person speaking events from notable intellectuals, scientists, philosophers, and public thinkers. Built because great ideas deserve an audience.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  color: "var(--color-accent)",
                  marginTop: "14px",
                  fontWeight: 500,
                }}
              >
                Visit colloquia.live ↗
              </p>
            </div>
          </a>

          {/* Dashed next project */}
          <div
            style={{
              border: "1px dashed var(--color-border)",
              borderRadius: "10px",
              padding: "24px 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                color: "var(--color-text-tertiary)",
                fontStyle: "italic",
              }}
            >
              Next project — in the works
            </p>
          </div>
        </section>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .page-h1 { font-size: 28px !important; }
        }
      `}</style>
    </main>
  );
}
