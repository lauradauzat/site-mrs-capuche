/**
 * 11/09/2026 — LD : hero — raccourcis d’offre ; CTA réservation Google Calendar.
 */
const BOOKING_URL = "https://calendar.app.google/ScBQb2NhXWErhdXi9";

function HeroArea() {
  const services = [
    { href: "#offre-vitrine", label: "Site vitrine" },
    { href: "#offre-wordpress", label: "WordPress" },
    { href: "#offre-surmesure", label: "Sur mesure" },
    { href: "#offre-prestashop", label: "PrestaShop" },
    { href: "#offre-suivi", label: "Suivi & maintenance" },
  ];

  return (
    <section className="hero-area" id="top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 hero-copy">
            <p className="hero-kicker">Développeuse web · Albi</p>
            <h1 className="hero-title">Un site clair, à votre image, de la maquette à la mise en ligne.</h1>
            <p className="hero-lead">
              Sites vitrine, WordPress, PrestaShop ou développement sur mesure.
              On choisit ensemble la solution qui vous convient.
            </p>
            <div className="hero-services" aria-label="Accès aux offres">
              {services.map((service) => (
                <a key={service.href} className="hero-service-link" href={service.href}>
                  {service.label}
                </a>
              ))}
            </div>
            <div className="hero-actions">
              <a className="btn btn-light" href="#tarifs">Voir les tarifs</a>
              <a className="btn btn-outline-light" href={BOOKING_URL} target="_blank" rel="noreferrer">
                Réserver un créneau
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroArea;
