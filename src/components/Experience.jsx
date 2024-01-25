import PropTypes from 'prop-types';

/**
 * Experience component.
 */
function ExperienceCard({ date, title, company, icon }) {
    return (
      <div className="col-lg-3 col-md-4 text-center xp-card">
        <img src={`/assets/icon/${icon}.jpeg`} alt="icon" />
        <p className="mb-0">{date}</p>
        <h4>{title}</h4>
        <h6 className="text-light">{company}</h6>
      </div>
    );
  }

ExperienceCard.propTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,

};

  
  function Experience() {
    return (
      <section className="section experience">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">Experience</h2>
            </div>
       
            <ExperienceCard date="Mars 2021 - Aout 2022" title="Développeuse Web Junior" company="Gestiondepatrimoine.com" icon="gestiondepatrimoine" />
            <ExperienceCard date="Aout 2022 - aujourd'hui" title="Lead Développeuse Web Frontend, Cheffe de Projet" company="La Mine de Fer" icon="laminedefer" />

          </div>
        </div>
      </section>
    );
  }

export default Experience;
