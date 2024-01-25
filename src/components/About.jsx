
/**
 * About component.
 */
function About() {
    return (
        <section className="section about-area">
          <div className="container">
            <div className="row align-items-center">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">Sous la capuche ...</h2>
            </div>

            <div className="col-lg-3 text-center">
              <img className="profile-img" src="assets/images/profil-mrs-capuche.jpg" alt="" />
            </div>

            

            <div className="col-lg-9 divide-Y divide-none">
              
            <p className="paragraph-md text-dark">
                Bonjour, je m'appelle <b>Laura Dauzat</b>, je suis <b>développeuse web frontend</b> et je vis à Albi. 
                Quand je suis devant mon ordinateur, je porte généralement une capuche pour ressembler à mon héro <b>Mr Robot</b>. Un bon point pour celui/celle qui aura la ref :)
                </p>
                <br />
                
                <p className="paragraph-md text-dark">
                Lead développeuse à la <b>Mine de Fer</b> depuis 2022, je travaille sur la création et le maintenance d'un site eCommerce Prestashop. Cela inclu la stratégie, l'opérationnel, le SEO, le développement de module et l'amélioration de l'interface pour les utilisateurs.
                </p>
                <br />
               
                <p className="paragraph-md text-dark">
                Diplomée OpenClassrooms, je me suis spécialisée sur le développement d'application React et Javascript ce qui me permet de travailler sur des projets d'application web ou de site vitrine sans CMS (Content Management System : Prestashop, Wix, Wordpress), idéal pour les projets sur mesure et/ou intéractif. 
                </p>
                <br />
                <p className="paragraph-md text-dark">
                Avant de me spécialiser dans le web, j'ai travaillé en tant que chargée de coordination et de production, ce qui m'a dotée de compétences en gestion de projet et en compréhension globale des besoins d'une entreprise. Je peux m'adapter aux projets dans leur globalité, en combinant une approche technique solide à une compréhension stratégique.
                </p>
                <br />
                <p className="paragraph-md text-dark">
                Si je ne suis pas devant mon ordinateur, vous me trouverez probablement en train de lire un livre sur la productivité (je crois que c'est en train de devenir une obsession) ou en train de faire de la musique sous le pseudonyme d'Ely Beth (ça c'est définitivement une obsession!).
                </p>
                <br />
            </div>
                
        
            </div>
          </div>
        </section>
      );
}

export default About;
