/**
 * 11/09/2026 — LD : cartes d’offre empilées (effet hover d’origine) ; suivi PrestaShop 89 €.
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ServiceCard({ id, icon, brand, title, description }) {
  return (
    <div className="card hover-shadow shadow" id={id}>
      <div className="card-body text-center px-4 py-4">
        <FontAwesomeIcon
          icon={brand ? ["fab", icon] : ["fas", icon]}
          className="icon mb-4 d-inline-block"
        />
        <h3 className="h4 mb-3">{title}</h3>
        <p className="mb-0">{description}</p>
      </div>
    </div>
  );
}

function Services() {
  return (
    <section className="section" id="offre">
      <div className="container up">
        <div className="text-center">
          <h2 className="section-title">Offre</h2>
        </div>
        <div className="service-container">
          <ServiceCard
            id="offre-vitrine"
            icon="desktop"
            title="Site vitrine statique"
            description="Je conçois, je développe et je mets en ligne. Rien à gérer au quotidien : les évolutions passent par un suivi simple."
          />
          <ServiceCard
            id="offre-wordpress"
            icon="wordpress-simple"
            brand
            title="Site WordPress"
            description="Textes, photos, horaires et actualités à jour librement. Blog, galerie, nouvelles pages — sans tout reconstruire."
          />
          <ServiceCard
            id="offre-surmesure"
            icon="puzzle-piece"
            title="Site sur mesure"
            description="Un site, plus un module conçu pour votre activité : questionnaire, gestion des paiements, espace client."
          />
          <ServiceCard
            id="offre-prestashop"
            icon="shopping-cart"
            title="Boutique PrestaShop"
            description="Catalogue, paiement, livraison. Personnalisation du design et des fonctionnalités de votre boutique."
          />
        </div>

        <aside className="suivi-band" id="offre-suivi">
          <div className="suivi-band-intro">
            <FontAwesomeIcon icon={["fas", "wrench"]} className="suivi-band-icon" />
            <div>
              <h3 className="h4 mb-2">Suivi &amp; maintenance</h3>
              <p className="mb-0">
                Sauvegardes, mises à jour, le site reste en ligne, et jusqu’à une heure de changements par mois.
                Sur PrestaShop, ça inclut aussi le cœur, les modules et le suivi e-commerce.
              </p>
            </div>
          </div>
          <div className="suivi-prices">
            <div className="suivi-price-card">
              <p className="suivi-price-label">Site vitrine statique</p>
              <p className="suivi-price-value">19 € / mois</p>
            </div>
            <div className="suivi-price-card">
              <p className="suivi-price-label">Site WordPress</p>
              <p className="suivi-price-value">39 € / mois</p>
            </div>
            <div className="suivi-price-card">
              <p className="suivi-price-label">Boutique PrestaShop</p>
              <p className="suivi-price-value">89 € / mois</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Services;
