/**
 * 11/09/2026 — LD : intro sans montants (les prix restent dans Tarifs / bandeau suivi).
 */
function Hook() {
  return (
    <section className="section about-area" id="intro">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <p className="paragraph-md text-dark">
              Vous avez un projet de site, ou un site existant à reprendre&nbsp;?
              Je vous accompagne de A à Z&nbsp;: maquettes, développement, mise en ligne.
            </p>
            <p className="paragraph-md text-dark mt-4">
              Deux manières principales de faire. Soit un <strong>site vitrine statique</strong>,
              livré clé en main, que je fais évoluer avec vous. Soit un <strong>WordPress</strong>,
              pour mettre à jour textes, photos et actualités en toute liberté.
              Pour vendre en ligne, on part sur <strong>PrestaShop</strong>.
              S’il faut un outil métier (questionnaire, paiements, espace client), on le développe sur mesure.
            </p>
            <p className="paragraph-md text-dark mt-4">
              Une fois le site en ligne, un <strong>suivi mensuel</strong> prend le relais&nbsp;:
              sauvegardes, mises à jour, et jusqu’à une heure de changements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hook;
