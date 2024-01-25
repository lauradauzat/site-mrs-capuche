/**
 * Header component.
 */

import  { useEffect, useState } from "react";

function Header() {
  const [shrinkHeader, setShrinkHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setShrinkHeader(true);
      } else {
        setShrinkHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navigation header ${shrinkHeader ? "shrink" : ""}`}>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand font-tertiary h3" href="index.html">
          <img id="logo-header" src="/assets/images/logo_white.png" alt="Logo Mrs Capuche" />
        </a>
      </nav>
    </header>
  );
}



export default Header;
