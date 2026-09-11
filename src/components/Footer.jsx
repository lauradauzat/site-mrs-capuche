/**
 * 11/09/2026 — LD : pied de page aligné sur l’identité Mrs Capuche.
 */
function Footer() {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <p>&copy; {new Date().getFullYear()} Laura Dauzat — Mrs Capuche. Tous droits réservés.</p>
          </div>

          
        </div>
      </div>

    </footer>
  );
}

export default Footer;
