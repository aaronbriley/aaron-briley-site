import { BOOKS } from "../data/articles";

const SECTIONS = ["Currently Reading", "Recently Finished", "Favourites"] as const;

export default function Reading() {
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
      </div>

      <style>{`
        @media (max-width: 640px) {
          .page-h1 { font-size: 28px !important; }
        }
      `}</style>
    </main>
  );
}
