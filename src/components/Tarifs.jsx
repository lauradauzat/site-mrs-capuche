/**
 * 11/09/2026 — LD : fourchettes + trois suivis (vitrine 19 € / WP 39 € / PrestaShop 89 €).
 */
function Tarifs() {
  const creation = [
    { name: "Site vitrine statique", price: "à partir de 900 €", detail: "Clé en main, de la maquette à la mise en ligne." },
    { name: "Site WordPress", price: "à partir de 1 690 €", detail: "Vos contenus, en toute liberté." },
    { name: "Site sur mesure", price: "à partir de 2 290 €", detail: "Module conçu pour votre activité." },
    { name: "Boutique PrestaShop", price: "à partir de 3 490 €", detail: "Catalogue, paiement, livraison." },
  ];

  const suivi = [
    { name: "Suivi site vitrine statique", price: "19 € / mois", detail: "Sauvegardes, mises à jour, jusqu’à 1 h de changements." },
    { name: "Suivi site WordPress", price: "39 € / mois", detail: "Sauvegardes, mises à jour, jusqu’à 1 h de changements." },
    { name: "Suivi boutique PrestaShop", price: "89 € / mois", detail: "Cœur, modules, sauvegardes, jusqu’à 1 h de changements." },
  ];

  return (
    <section className="section tarifs-area" id="tarifs">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="section-title">Tarifs</h2>
          </div>
          <div className="col-12 col-lg-10 mx-auto">
            <p className="paragraph-md text-dark text-center mb-5">
              Des fourchettes pour vous situer. Chaque projet fait l’objet d’un devis après un échange.
            </p>
            <div className="tarifs-table-wrap">
              <table className="tarifs-table">
                <thead>
                  <tr>
                    <th>Prestation</th>
                    <th>Tarif</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tarif-group">
                    <th colSpan={2}>Création</th>
                  </tr>
                  {creation.map((row) => (
                    <tr key={row.name}>
                      <td>
                        <strong>{row.name}</strong>
                        <span className="tarif-detail">{row.detail}</span>
                      </td>
                      <td className="tarif-price">{row.price}</td>
                    </tr>
                  ))}
                  <tr className="tarif-group">
                    <th colSpan={2}>Suivi &amp; maintenance</th>
                  </tr>
                  {suivi.map((row) => (
                    <tr key={row.name}>
                      <td>
                        <strong>{row.name}</strong>
                        <span className="tarif-detail">{row.detail}</span>
                      </td>
                      <td className="tarif-price">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="tarifs-note text-center">
              Prix nets. TVA non applicable, art. 293 B du CGI.
              Paiement à la livraison, en plusieurs fois possible.
              Interventions à la journée : 350 € net.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tarifs;
