/**
 * 11/09/2026 — LD : Julia Lirsac + MoreOrLess ajoutés au portfolio.
 */
import PropTypes from "prop-types";

function PortfolioCard({ title, img, description, link, technology }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="cardPortfolio">
      <div className="portfolio-card-inner">
        <img className="w-full portfolio-thumb" src={`./assets/images/${img}.jpg`} alt={`Aperçu du site ${title}`} />
        <div className="portfolio-card-body">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="portfolio-card-tags">
          {technology.map((tech) => (
            <span key={tech} className="portfolio-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

PortfolioCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  technology: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function Portfolio() {
  return (
    <section className="section" id="projets">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Projets</h2>
        </div>

        <div className="portfolio-grid">
          <PortfolioCard
            title="La Mine de Fer"
            img="laminedefer"
            description="Boutique PrestaShop : catalogue, parcours d’achat, modules et suivi au long cours."
            link="https://www.laminedefer.fr/"
            technology={[
              "PrestaShop",
              "eCommerce",
              "SEO",
              "Maintenance",
              "MAJ",
              "Développement",
              "Création d’outil sur mesure",
            ]}
          />
          <PortfolioCard
            title="Mind’Up Pro"
            img="minduppro"
            description="Site vitrine pour un organisme de coaching et d’accompagnement. Maquettes, développement, mise en ligne."
            link="https://minduppro.com/"
            technology={["WordPress", "HTML", "CSS", "Développement sur mesure"]}
          />
          <PortfolioCard
            title="Léa Lopez, thérapie brève"
            img="lealopez"
            description="Site vitrine : maquettes, développement, mise en ligne."
            link="https://lealopeztherapiebreve.com/"
            technology={["Bootstrap", "HTML", "CSS", "JS"]}
          />
          <PortfolioCard
            title="Ely Beth"
            img="ElyBeth"
            description="Page unique : maquettes, développement, hébergement."
            link="https://www.elybeth.com/"
            technology={["HTML", "CSS", "JS"]}
          />
          <PortfolioCard
            title="Antoine Bru, psychologue"
            img="antoinebru"
            description="Site vitrine : maquettes et développement."
            link="https://lauradauzat.github.io/antoinebrupsychologue/#Accueil"
            technology={["HTML", "CSS"]}
          />
          <PortfolioCard
            title="Öly"
            img="oly"
            description="Site vitrine : maquettes et développement."
            link="https://lauradauzat.github.io/oly_website/"
            technology={["HTML", "CSS", "JS"]}
          />
          <PortfolioCard
            title="Julia Lirsac, lectrice-correctrice"
            img="lectrice"
            description="Site vitrine : maquettes, développement, mise en ligne."
            link="https://lauradauzat.github.io/lectrice_correctrice/"
            technology={["HTML", "CSS", "JS"]}
          />
          <PortfolioCard
            title="Plus ou Moins"
            img="moreorless"
            description="App de comptage partageable, en simultané, pour salle de spectacle."
            link="https://lauradauzat.github.io/MoreOrLess/"
            technology={["TypeScript", "React", "Développement sur mesure"]}
          />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
