import { useState } from "react";
import { Link } from "react-router-dom";
import { ARTICLES, BOOKS, type Category } from "../data/articles";
import ArticleCard from "../components/ArticleCard";
import CategoryTabs from "../components/CategoryTabs";
import NewsletterSection from "../components/NewsletterSection";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = activeCategory === "All"
    ? ARTICLES
    : ARTICLES.filter((a) => a.category === activeCategory);

  const currentlyReading = BOOKS.filter((b) => b.section === "Currently Reading");

  return (
    <main>
      <div className="site-container">
        {/* HERO */}
        <section
          style={{
            padding: "56px 0 48px",
            borderBottom: "0.5px solid var(--color-border)",
          }}
        >
          <div
            className="hero-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "48px",
              alignItems: "start",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  marginBottom: "16px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "var(--color-success)",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "var(--color-text-tertiary)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Writer & founder
                </span>
              </div>

              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "44px",
                  fontWeight: 700,
                  color: "var(--color-text-primary)",
                  lineHeight: 1.15,
                  marginBottom: "20px",
                  letterSpacing: "-0.02em",
                }}
                className="hero-h1"
              >
                Ideas examined,<br />arguments made.
              </h1>

              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "16px",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: "28px",
                  maxWidth: "460px",
                }}
              >
                I'm Aaron Briley — writer, founder of{" "}
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
                , and slow thinker. I write about ideas, philosophy, and technology — what it means to examine a life worth living.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {[
                  { href: "/writing", label: "Read my essays →" },
                  { href: "/projects", label: "My projects →" },
                  { href: "/about", label: "About me →" },
                ].map((link) => (
                  <Link key={link.href} to={link.href} style={{ textDecoration: "none" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "var(--color-text-secondary)",
                        cursor: "pointer",
                        transition: "color var(--transition)",
                        minHeight: "44px",
                        display: "flex",
                        alignItems: "center",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "var(--color-text-primary)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "var(--color-text-secondary)";
                      }}
                    >
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div
              className="hero-avatar-wrap"
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <img
                src="/avatar.png"
                alt="Aaron Briley"
                style={{
                  width: "180px",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "14px",
                  border: "0.5px solid var(--color-border)",
                  flexShrink: 0,
                  display: "block",
                }}
              />
            </div>
          </div>
        </section>

        {/* CATEGORY TABS */}
        <section style={{ paddingTop: "32px" }}>
          <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
        </section>

        {/* TWO-COLUMN BODY */}
        <section style={{ paddingTop: "0" }}>
          <div
            className="body-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "3fr 2fr",
              gap: "52px",
              alignItems: "start",
            }}
          >
            {/* LEFT: Articles */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "var(--color-text-tertiary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  padding: "24px 0 4px",
                }}
              >
                Latest writing
              </p>

              {filtered.length === 0 ? (
                <p style={{ color: "var(--color-text-tertiary)", fontSize: "14px", paddingTop: "20px" }}>
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
            </div>

            {/* RIGHT: Sidebar */}
            <div style={{ paddingTop: "24px" }}>
              {/* Currently Building */}
              <div style={{ marginBottom: "36px" }}>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "var(--color-text-tertiary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "14px",
                  }}
                >
                  Currently building
                </p>

                {/* Colloquia card */}
                <a
                  href="https://colloquia.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", textDecoration: "none" }}
                >
                  <div
                    style={{
                      border: "0.5px solid var(--color-border)",
                      borderRadius: "8px",
                      padding: "14px 16px",
                      marginBottom: "10px",
                      transition: "border-color var(--transition)",
                      background: "var(--color-bg)",
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
                        marginBottom: "4px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "var(--color-text-primary)",
                        }}
                      >
                        Colloquia.live
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "10px",
                          fontWeight: 600,
                          color: "var(--color-success)",
                          background: "var(--color-success-light)",
                          border: "0.5px solid var(--color-success)",
                          borderRadius: "4px",
                          padding: "2px 6px",
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
                        fontSize: "13px",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.5,
                      }}
                    >
                      A directory of live intellectual events from the world's greatest minds.
                    </p>
                  </div>
                </a>

                {/* Dashed next project card */}
                <div
                  style={{
                    border: "1px dashed var(--color-border)",
                    borderRadius: "8px",
                    padding: "14px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "13px",
                      color: "var(--color-text-tertiary)",
                      fontStyle: "italic",
                    }}
                  >
                    Next project — coming soon
                  </span>
                </div>
              </div>

              {/* Interests */}
              <div style={{ marginBottom: "36px" }}>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "var(--color-text-tertiary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "14px",
                  }}
                >
                  Interests
                </p>

                <div style={{ marginBottom: "12px" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "var(--color-text-tertiary)",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      marginBottom: "6px",
                    }}
                  >
                    Intellectual
                  </p>
                  {[
                    "Philosophy of mind",
                    "Epistemology",
                    "History of ideas",
                    "AI & cognition",
                    "Political theory",
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "13px",
                        color: "var(--color-text-secondary)",
                        padding: "3px 0",
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "var(--color-text-tertiary)",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      marginBottom: "6px",
                    }}
                  >
                    Personal
                  </p>
                  {[
                    "Long walks",
                    "Chess",
                    "Jazz piano",
                    "Cooking slowly",
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "13px",
                        color: "var(--color-text-secondary)",
                        padding: "3px 0",
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Currently Reading */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "var(--color-text-tertiary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "14px",
                  }}
                >
                  Currently reading
                </p>

                {currentlyReading.map((book) => (
                  <div key={book.title} style={{ marginBottom: "10px" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "14px",
                        fontStyle: "italic",
                        color: "var(--color-text-primary)",
                        display: "block",
                      }}
                    >
                      {book.title}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "12px",
                        color: "var(--color-text-tertiary)",
                      }}
                    >
                      {book.author}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <NewsletterSection />
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-avatar-wrap {
            justify-content: flex-start !important;
            /* avatar appears BELOW text on mobile: natural document order */
          }
          .hero-h1 {
            font-size: 32px !important;
          }
          .body-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
