import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { href: "/writing", label: "Writing" },
  { href: "/projects", label: "Projects" },
  { href: "/reading", label: "Reading" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "var(--color-bg)",
        borderBottom: "0.5px solid var(--color-border)",
        height: "64px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <nav
        className="site-container"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "21px",
              fontWeight: 600,
              color: "var(--color-text-primary)",
              letterSpacing: "-0.01em",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            Aaron Briley
          </span>
        </Link>

        <div style={{ flex: 1 }} />

        <div className="nav-links-desktop" style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.href || location.pathname.startsWith(link.href + "/");
            return (
              <Link key={link.href} to={link.href} style={{ textDecoration: "none" }}>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: isActive ? "var(--color-text-primary)" : "var(--color-text-secondary)",
                    cursor: "pointer",
                    transition: "color var(--transition)",
                    letterSpacing: "0.01em",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = "var(--color-text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = "var(--color-text-secondary)";
                  }}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>

        <a
          href="https://colloquia.live"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "12px",
            fontWeight: 500,
            color: "var(--color-accent)",
            border: "0.5px solid var(--color-accent)",
            borderRadius: "6px",
            padding: "5px 10px",
            transition: "all var(--transition)",
            flexShrink: 0,
            letterSpacing: "0.01em",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "var(--color-accent-light)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "transparent";
          }}
        >
          Colloquia.live ↗
        </a>

        <button
          className="nav-hamburger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", flexShrink: 0 }}
        >
          <span style={{ fontSize: "20px", color: "var(--color-text-primary)" }}>
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>
      </nav>

      {menuOpen && (
        <div
          className="nav-mobile-menu"
          style={{
            position: "absolute",
            top: "64px",
            left: 0,
            right: 0,
            background: "var(--color-bg)",
            borderBottom: "0.5px solid var(--color-border)",
            padding: "16px 28px 20px",
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.href || location.pathname.startsWith(link.href + "/");
            return (
              <Link key={link.href} to={link.href} style={{ textDecoration: "none" }}>
                <div
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "15px",
                    fontWeight: 500,
                    color: isActive ? "var(--color-text-primary)" : "var(--color-text-secondary)",
                    padding: "10px 0",
                    borderBottom: "0.5px solid var(--color-border)",
                    minHeight: "44px",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  {link.label}
                </div>
              </Link>
            );
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .nav-links-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
