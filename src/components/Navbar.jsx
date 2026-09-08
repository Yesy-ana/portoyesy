import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import "./Navbar.css";

const navLinks = [
  { label: "Tentang", href: "#about" },
  { label: "Keahlian", href: "#skills" },
  { label: "Proyek", href: "#projects" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <nav className="navbar__inner container" aria-label="Navigasi utama">
        <a href="#" className="navbar__logo" aria-label="Kembali ke atas">
          <div className="navbar__logo-avatar">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="navbar__logo-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/yesy.JPG";
              }}
            />
          </div>
          <span className="navbar__logo-text">Yesy Lely Yestiana</span>
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <a
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--sm"
          >
            <Download size={15} />
            Unduh CV
          </a>

          <button
            className="navbar__burger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Overlay */}
        <div
          className={`navbar__mobile-overlay ${mobileOpen ? "navbar__mobile-overlay--open" : ""}`}
          onClick={() => setMobileOpen(false)}
        />
        <div className={`navbar__mobile ${mobileOpen ? "navbar__mobile--open" : ""}`}>
          <ul role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="navbar__mobile-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
            style={{ width: "100%", justifyContent: "center", marginTop: "var(--space-md)" }}
          >
            <Download size={15} />
            Unduh CV
          </a>
        </div>
      </nav>
    </header>
  );
}
