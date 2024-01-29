import PropTypes from 'prop-types';

function PortfolioCard({ title, img, description, link, technology }) {
  return (
    <a href={link} target='_blank' className="max-w-sm cardPortfolio">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={`./assets/images/${img}.jpg`} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {technology.map((tech, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
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
  const technologyElyBeth = ['Html', 'Css', 'JS']; 
  const technologyLeaLopez = ['Bootstrap', 'Html', 'Css']; 
  const technoAntoine = ['Html', 'Css'];
  const technoOly = ['Html', 'Css', 'JS'];
  const technoLesPetitsPlats = ['Html', 'Css', 'JS'];
  const technoGameOn = ['Html', 'Css', 'JS', 'UX', 'OpenClassrooms'];
  const technoChouette = ['Html', 'Css', 'JS', 'SEO', 'Accessibilité', 'UX', 'UI', 'OpenClassrooms'];
  const technoReservia = ['Html', 'Css', 'JS', 'Responsive Design', 'AirBnB', 'Training Project', 'OpenClassrooms'];
  const technoOhMyFood = ['Html', 'Css', 'JS', 'Responsive Design', 'SCSS', 'Training Project', 'OpenClassrooms'];

  return (
    <section className="section">
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-12 text-center">
            <h2 className="section-title">Projets</h2>
          </div>
          {/* Use PortfolioCard component to render skill cards */}
          
          <PortfolioCard title="Léo Lopez, thérapie brève" img='lealopez' description='Site vitrine, Création des maquettes, développement du site, gestion de la mise en ligne' link='https://lealopeztherapiebreve.com/' technology={technologyLeaLopez}/>
          <PortfolioCard title="Ely Beth" img='ElyBeth' description='Single page, création des maquettes, développement, hébergement' link='https://www.elybeth.com/' technology={technologyElyBeth}/>
          <PortfolioCard title='Antoine Bru, psychologue' img='antoinebru' description='Site vitrine, Création des maquettes, développement du site' link='https://lauradauzat.github.io/antoinebrupsychologue/#Accueil' technology={technoAntoine}/>
          <PortfolioCard title='Öly' img='oly' description='Site vitrine, Création des maquettes, développement du site' link='https://lauradauzat.github.io/oly_website/' technology={technoOly}/>
          <PortfolioCard title='Les petits plats' img='lespetitsplats' description='Site de recettes pour un projet scolaire fictifs, a partir de la maquette, travail sur les différents algorithmes de recherches' link='https://lauradauzat.github.io/DauzatLaura_7_-LesPetitsPlats_26082022/' technology={technoLesPetitsPlats}/>
          <PortfolioCard title='Game On' img='GameOn' description='Site de jeux pour un projet scolaire fictifs, a partir de la maquette, travail sur la gestion des intéractions utilisateurs avec JavaScript' link='https://lauradauzat.github.io/Dauzat_Laura_DAJRP4_18042022/#' technology={technoGameOn}/>
          <PortfolioCard title='La Chouette Agence' img='chouette' description="Site d'une agence de communicatio fictive, a partir de la maquette, travail sur l'accessibilité, le référencement, le SEO, et l'UX'" link='https://lauradauzat.github.io/DauzatLaura_4_01072021/' technology={technoChouette}/>
          <PortfolioCard title='Reservia' img='reservia' description="Site de réservation de vacances fictif pour OpenClassrooms, a partir d'une maquette, travail sur le responsive design" link='https://lauradauzat.github.io/DauzatLaura_2_25032021/' technology={technoReservia}/>
          <PortfolioCard title='Oh My Food' img='ohmyfood' description="Site de réservation de restaurants fictif pour OpenClassrooms, a partir d'une maquette, travail sur le Css et le SCSS" link='https://lauradauzat.github.io/DauzatLaura_3_06052021/menu_LaPaletteDuGout.html' technology={technoOhMyFood}/>
        </div>
      </div>
    </section>
  );
}



export default Portfolio;
