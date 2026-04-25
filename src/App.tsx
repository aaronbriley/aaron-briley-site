import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Writing from "@/pages/Writing";
import WritingSlug from "@/pages/WritingSlug";
import Projects from "@/pages/Projects";
import Reading from "@/pages/Reading";
import About from "@/pages/About";

function NotFound() {
  return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "16px" }}>
      <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "48px", fontWeight: 700, color: "var(--color-text-tertiary)" }}>404</h1>
      <p style={{ fontFamily: "var(--font-sans)", color: "var(--color-text-secondary)" }}>Page not found.</p>
    </div>
  );
}

function AppRoutes() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Nav />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/writing/:slug" element={<WritingSlug />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/reading" element={<Reading />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return (
    <BrowserRouter basename={base}>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
