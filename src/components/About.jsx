/**
 * 11/09/2026 — LD : à propos — retiré « agence » et « sans se perdre dans le technique ».
 */
function About() {
  return (
    <section className="section about-area" id="apropos">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Sous la capuche</h2>
        </div>

        <div className="about-layout">
          <aside className="about-identity">
            <img className="profile-img" src="assets/images/profil-mrs-capuche.jpg" alt="Laura Dauzat" />
            <p className="about-name">Laura Dauzat</p>
            <p className="about-role">Développeuse web · Albi</p>
          </aside>

          <div className="about-copy">
            <p>
              Quand je suis devant l’ordinateur, j’ai souvent une capuche — clin d’œil à <strong>Mr Robot</strong>.
              Derrière, il y a surtout du code, et le souci que votre site tienne dans la durée.
            </p>
            <p>
              Lead développeuse à <strong>La Mine de Fer</strong> depuis 2022, je travaille au quotidien
              sur une boutique <strong>PrestaShop</strong>&nbsp;: parcours d’achat, SEO, modules, mises à jour.
              C’est ce qui m’apprend à faire tenir un e-commerce, pas seulement à le lancer.
            </p>
            <p>
              En parallèle, j’accompagne des indépendants et des professions libérales.
              Site vitrine statique ou WordPress&nbsp;: on choisit l’outil dont vous avez réellement besoin.
            </p>
            <p>
              Avant le web, j’étais chargée de coordination et de production.
              Ça aide à cadrer un projet — délais, contenus, décisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
