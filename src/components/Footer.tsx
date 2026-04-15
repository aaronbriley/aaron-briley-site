export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "0.5px solid var(--color-border)",
        padding: "24px 0",
        marginTop: "64px",
      }}
    >
      <div
        className="site-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "12px",
            color: "var(--color-text-tertiary)",
          }}
        >
          © 2026 Aaron Briley · aaronbriley.com
        </span>

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {[
            { label: "Twitter / X", href: "https://twitter.com" },
            { label: "LinkedIn", href: "https://linkedin.com" },
            { label: "Colloquia.live ↗", href: "https://colloquia.live" },
            { label: "RSS", href: "/rss.xml" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "12px",
                color: "var(--color-text-tertiary)",
                transition: "color var(--transition)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--color-text-secondary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--color-text-tertiary)";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
