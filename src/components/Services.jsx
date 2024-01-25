import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * Services component.
 */
function ServiceCard({ icon, title, description }) {

  return (
    // <div className="col-md-4 mb-4 mb-md-0">
      <div className="card hover-shadow shadow">
        <div className="card-body text-center px-4 py-3">
          {icon === "wordpress-simple" ? (
            <FontAwesomeIcon
              icon={`fa-brands fa-${icon}`}
              className="icon mb-5 d-inline-block"
            />
          ) : (
            <FontAwesomeIcon
              icon={`fa fa-${icon}`}
              className="icon mb-5 d-inline-block"
            />
          )}
          <h4 className="mb-4">{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    // </div>
  );
}

function Services() {
  return (
    <section className="section">
      <div className="container up">
        <div className="row service-container">
          <div className="col-12 text-center">
            <h2 className="section-title">Services</h2>
          </div>
 
          <ServiceCard
            icon="desktop"
            title="Création de site vitrine"
            description="Création de site statique ou d'application web dynamique 100% personnalisés"
          />

          <ServiceCard
            icon="wordpress-simple"
            title="Création et personnalisation de sites web WordPress"
            description="Un site WordPress vous permettra de mettre à jour votre contenu en autonomie après la livraison du site."
          />

          <ServiceCard
            icon="shopping-cart"
            title="Création et personnalisation de Boutiques PrestaShop"
            description="Personnaliser le design et les fonctionnalités de votre boutique PrestaShop, le CMS n°1 en France pour le eCommerce"
          />

  
          <ServiceCard
            icon="wrench"
            title="Maintenance et Support Technique"
            description="Restez opérationnel et sécurisez votre site web avec un contrat de maintenance et de support technique."
          />

          <ServiceCard
            icon="graduation-cap"
            title="Formation"
            description="Apprenez à gérer votre boutique en ligne avec Prestashop."
          />
        </div>
       
    
      
      </div>
    </section>
  );
}

export default Services;
