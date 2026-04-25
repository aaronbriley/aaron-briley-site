import { BOOKS, ENCOUNTERS } from "../data/articles";

const SECTIONS = ["Currently Reading", "Recently Finished", "Favorites"] as const;

export default function Reading() {
  return (
    <main>
      <div className="site-container">

        {/* Books section */}
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
            Reading
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "15px",
              color: "var(--color-text-secondary)",
              lineHeight: 1.6,
            }}
          >
            What's on my nightstand and what's shaped my thinking.
          </p>
        </section>

        <section style={{ paddingBottom: "64px" }}>
          {SECTIONS.map((section) => {
            const books = BOOKS.filter((b) => b.section === section);
            return (
              <div key={section} style={{ marginBottom: "40px" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "var(--color-text-tertiary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "16px",
                    paddingBottom: "10px",
                    borderBottom: "0.5px solid var(--color-border)",
                  }}
                >
                  {section}
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {books.map((book) => (
                    <div key={book.title}>
                      <span
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "17px",
                          fontStyle: "italic",
                          fontWeight: 400,
                          color: "var(--color-text-primary)",
                          display: "block",
                          marginBottom: "2px",
                        }}
                      >
                        {book.title}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "13px",
                          color: "var(--color-text-tertiary)",
                        }}
                      >
                        {book.author}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* Readings and More section */}
        <section style={{ paddingBottom: "80px", borderTop: "0.5px solid var(--color-border)", paddingTop: "48px" }}>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "28px",
              fontWeight: 700,
              color: "var(--color-text-primary)",
              marginBottom: "8px",
              letterSpacing: "-0.02em",
            }}
          >
            Readings and More
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "15px",
              color: "var(--color-text-secondary)",
              lineHeight: 1.6,
              marginBottom: "48px",
              fontStyle: "italic",
            }}
          >
            A record of books, speeches, debates, and performances that changed how I see the world. Not a reading list — reflections.
          </p>

          {ENCOUNTERS.map((encounter, index) => (
            <article
              key={index}
              style={{
                marginBottom: "56px",
                paddingBottom: "56px",
                borderBottom: index < ENCOUNTERS.length - 1 ? "0.5px solid var(--color-border)" : "none",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--color-text-tertiary)",
                  marginBottom: "8px",
                }}
              >
                {encounter.type}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "20px",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "var(--color-text-primary)",
                  margin: "0 0 4px",
                  lineHeight: 1.3,
                }}
              >
                {encounter.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  color: "var(--color-text-tertiary)",
                  margin: "0 0 16px",
                }}
              >
                {encounter.author}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "16px",
                  color: "var(--color-text-primary)",
                  lineHeight: 1.8,
                  margin: "0 0 16px",
                }}
              >
                {encounter.reflection}
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {encounter.themes.map((theme) => (
                  <span
                    key={theme}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "11px",
                      color: "var(--color-text-tertiary)",
                      background: "var(--color-surface-raised, #f0ece4)",
                      padding: "3px 10px",
                      borderRadius: "12px",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </article>
          ))}
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
