
/**
 * Education component.
 */
import PropTypes from 'prop-types';

function EducationItem({ year, title, institution, icon }) {
    return (
      <div className="col-lg-4 col-md-8 mb-80">
        
        <div className="d-flex">
          <div className="mr-lg-5 mr-3">
            <img  className="logo-education" src={`/assets/icon/${icon}.jpeg`} alt="icon-education"  />
          </div>
          <div>
            <p className="text-dark mb-1">{year}</p>
            <h4>{title}</h4>
            <p className="mb-0 text-light">{institution}</p>
          </div>
        </div>
      </div>
    );
  }

EducationItem.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};


  
  function Education() {
    return (
      <section className="section position-relative education">
           
        <div className="container">
  
         
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">Education</h2>
            </div>
            {/* Use EducationItem component to render education items */}
            <EducationItem year="2014 - 2015" title="Master en Information et Communication" institution="University Of Washington" icon="uw"/>
            <EducationItem year="2021 - 2022" title="Développeur Web" institution="OpenClassrooms" icon="oc" />
            <EducationItem year="2022 - 2024" title="Développeur d'Application Javascript React" institution="OpenClassrooms" icon="oc" />
          </div>
        </div>
      </section>
    );
  }

export default Education;
