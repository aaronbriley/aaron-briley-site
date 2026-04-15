import { CATEGORIES, type Category } from "../data/articles";

interface CategoryTabsProps {
  active: Category;
  onChange: (cat: Category) => void;
}

export default function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  return (
    <div
      style={{
        overflowX: "auto",
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
        borderBottom: "0.5px solid var(--color-border)",
        marginBottom: "0",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "0",
          whiteSpace: "nowrap",
          minWidth: "max-content",
        }}
      >
        {CATEGORIES.map((cat) => {
          const isActive = cat === active;
          return (
            <button
              key={cat}
              onClick={() => onChange(cat)}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                fontWeight: isActive ? 500 : 400,
                color: isActive ? "var(--color-text-primary)" : "var(--color-text-secondary)",
                padding: "15px 18px",
                background: "none",
                border: "none",
                borderBottom: isActive ? "2px solid var(--color-text-primary)" : "2px solid transparent",
                cursor: "pointer",
                transition: "all var(--transition)",
                letterSpacing: "0.01em",
                marginBottom: "-0.5px",
              }}
              onMouseEnter={(e) => {
                if (!isActive) (e.currentTarget as HTMLElement).style.color = "var(--color-text-primary)";
              }}
              onMouseLeave={(e) => {
                if (!isActive) (e.currentTarget as HTMLElement).style.color = "var(--color-text-secondary)";
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
