/**
 * 11/09/2026 — LD : menu custom (sans classe Bootstrap .collapse, masquée par Tailwind).
 */
import { useEffect, useState } from "react";

const links = [
  { href: "#offre", label: "Offre" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#projets", label: "Projets" },
  { href: "#apropos", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

function Header() {
  const [shrinkHeader, setShrinkHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrinkHeader(window.pageYOffset > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navigation header ${shrinkHeader ? "shrink" : ""}`}>
      <nav className="site-nav" aria-label="Navigation principale">
        <a className="navbar-brand" href="#top" onClick={closeMenu}>
          <img id="logo-header" src="./assets/images/logo_white.png" alt="Mrs Capuche, développeuse web" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-toggle-bar"></span>
          <span className="menu-toggle-bar"></span>
          <span className="menu-toggle-bar"></span>
        </button>
        <ul className={`site-menu ${menuOpen ? "is-open" : ""}`} id="site-menu">
          {links.map((link) => (
            <li key={link.href}>
              <a className="nav-link" href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
