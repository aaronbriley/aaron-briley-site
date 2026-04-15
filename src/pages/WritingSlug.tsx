import { Link, useParams } from "react-router-dom";
import { ARTICLES } from "../data/articles";

export default function WritingSlug() {
  const { slug } = useParams<{ slug: string }>();
  const article = ARTICLES.find((a) => a.slug === slug);

  return (
    <main>
      <div className="site-container">
        <section style={{ padding: "48px 0 64px" }}>
          <Link to="/writing" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                color: "var(--color-text-tertiary)",
                cursor: "pointer",
                display: "inline-block",
                marginBottom: "32px",
                transition: "color var(--transition)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--color-text-secondary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--color-text-tertiary)";
              }}
            >
              ← All writing
            </span>
          </Link>

          {article && (
            <div style={{ marginBottom: "20px" }}>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "var(--color-text-tertiary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  display: "block",
                  marginBottom: "10px",
                }}
              >
                {article.category}
              </span>
              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "36px",
                  fontWeight: 700,
                  color: "var(--color-text-primary)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  marginBottom: "12px",
                }}
                className="page-h1"
              >
                {article.title}
              </h1>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  color: "var(--color-text-tertiary)",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span>{article.date}</span>
                <span>·</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          )}

          <div
            style={{
              marginTop: "40px",
              padding: "32px",
              background: "var(--color-surface)",
              border: "0.5px solid var(--color-border)",
              borderRadius: "8px",
              maxWidth: "560px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "17px",
                fontStyle: "italic",
                color: "var(--color-text-secondary)",
                lineHeight: 1.7,
              }}
            >
              This essay is coming soon. Check back shortly.
            </p>
          </div>
        </section>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .page-h1 { font-size: 26px !important; }
        }
      `}</style>
    </main>
  );
}
