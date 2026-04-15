import { Link } from "react-router-dom";
import type { Article } from "../data/articles";

interface ArticleCardProps {
  article: Article;
  showBorder?: boolean;
}

export default function ArticleCard({ article, showBorder = true }: ArticleCardProps) {
  return (
    <Link to={`/writing/${article.slug}`} style={{ textDecoration: "none" }}>
      <article
        style={{
          padding: "20px 0",
          borderBottom: showBorder ? "0.5px solid var(--color-border)" : "none",
          cursor: "pointer",
        }}
      >
        <div style={{ marginBottom: "6px" }}>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "11px",
              fontWeight: 600,
              color: "var(--color-text-tertiary)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            {article.category}
          </span>
        </div>

        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "20px",
            fontWeight: 600,
            color: "var(--color-text-primary)",
            lineHeight: 1.3,
            marginBottom: "8px",
            transition: "color var(--transition)",
          }}
          className="article-title article-title-h2"
        >
          {article.title}
        </h2>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "14px",
            color: "var(--color-text-secondary)",
            lineHeight: 1.6,
            marginBottom: "12px",
          }}
        >
          {article.excerpt}
        </p>

        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "12px",
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

        <style>{`
          article:hover .article-title { color: var(--color-accent); }
          @media (max-width: 640px) {
            .article-title-h2 { font-size: 18px !important; }
          }
        `}</style>
      </article>
    </Link>
  );
}
