import { useState } from "react";
import { ARTICLES, type Category } from "../data/articles";
import ArticleCard from "../components/ArticleCard";
import CategoryTabs from "../components/CategoryTabs";

export default function Writing() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = activeCategory === "All"
    ? ARTICLES
    : ARTICLES.filter((a) => a.category === activeCategory);

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
            Writing
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "15px",
              color: "var(--color-text-secondary)",
              lineHeight: 1.6,
              maxWidth: "520px",
            }}
          >
            Essays on ideas, philosophy, technology, and the examined life.
          </p>
        </section>

        <CategoryTabs active={activeCategory} onChange={setActiveCategory} />

        <section style={{ paddingBottom: "64px" }}>
          {filtered.length === 0 ? (
            <p style={{ color: "var(--color-text-tertiary)", fontSize: "14px", paddingTop: "32px" }}>
              No essays in this category yet.
            </p>
          ) : (
            filtered.map((article, i) => (
              <ArticleCard
                key={article.slug}
                article={article}
                showBorder={i < filtered.length - 1}
              />
            ))
          )}
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
