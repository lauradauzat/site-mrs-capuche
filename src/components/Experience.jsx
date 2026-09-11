/**
 * 11/09/2026 — LD : logo AB Formation (PNG LD) + alt des logos.
 */
import PropTypes from "prop-types";

function ExperienceCard({ date, title, company, icon, href, linkLabel }) {
  const src = icon.includes(".") ? `./assets/icon/${icon}` : `./assets/icon/${icon}.jpeg`;

  return (
    <div className="col-lg-3 col-md-4 text-center xp-card">
      <img src={src} alt={company} />
      {date ? <p className="mb-0">{date}</p> : null}
      <h4>{title}</h4>
      <h6 className="text-light">{company}</h6>
      {href ? (
        <a className="xp-course-link" href={href} target="_blank" rel="noreferrer">
          {linkLabel}
        </a>
      ) : null}
    </div>
  );
}

ExperienceCard.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  href: PropTypes.string,
  linkLabel: PropTypes.string,
};

function Experience() {
  return (
    <section className="section experience">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-lg-12 text-center">
            <h2 className="section-title">Expérience</h2>
          </div>

          <ExperienceCard
            date="Août 2022 - aujourd’hui"
            title="Lead développeuse web frontend, cheffe de projet"
            company="La Mine de Fer"
            icon="laminedefer"
          />
          <ExperienceCard
            title="Formatrice"
            company="AB Formation"
            icon="abformation.png"
            href="https://www.abformationpro.fr/catalogue-des-formations/apprenez-a-creer-votre-site-web-avec-html5-et-css3/"
            linkLabel="Formation HTML5 & CSS3"
          />
          <ExperienceCard
            date="Mars 2021 - août 2022"
            title="Développeuse web junior"
            company="Gestiondepatrimoine.com"
            icon="gestiondepatrimoine"
          />
        </div>
      </div>
    </section>
  );
}

export default Experience;
