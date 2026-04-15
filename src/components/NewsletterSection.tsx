import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section
      style={{
        background: "var(--color-bg)",
        borderRadius: "12px",
        padding: "28px 32px",
        margin: "48px 0",
        border: "0.5px solid var(--color-border)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "32px",
          alignItems: "center",
        }}
        className="newsletter-grid"
      >
        <div>
          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "22px",
              fontWeight: 600,
              color: "var(--color-text-primary)",
              marginBottom: "8px",
              lineHeight: 1.3,
            }}
          >
            Letters from Aaron
          </h3>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "14px",
              color: "var(--color-text-secondary)",
              lineHeight: 1.6,
            }}
          >
            Occasional essays on ideas, philosophy, technology, and the examined life. No noise, no spam.
          </p>
        </div>

        <div>
          {submitted ? (
            <div
              style={{
                background: "var(--color-success-light)",
                border: "0.5px solid var(--color-success)",
                borderRadius: "8px",
                padding: "16px 20px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  color: "var(--color-success)",
                  fontWeight: 500,
                }}
              >
                You're in. Thank you — I'll write something worth your time.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px" }}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  flex: 1,
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  color: "var(--color-text-primary)",
                  background: "var(--color-bg)",
                  border: "0.5px solid var(--color-border)",
                  borderRadius: "6px",
                  padding: "10px 14px",
                  outline: "none",
                  transition: "border-color var(--transition)",
                  minWidth: 0,
                }}
                onFocus={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent)";
                }}
                onBlur={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
                }}
              />
              <button
                type="submit"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#fff",
                  background: "var(--color-text-primary)",
                  border: "none",
                  borderRadius: "6px",
                  padding: "10px 18px",
                  cursor: "pointer",
                  transition: "opacity var(--transition)",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "0.85";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "1";
                }}
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .newsletter-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
