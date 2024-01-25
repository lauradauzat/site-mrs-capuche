import PropTypes from 'prop-types';
function SkillCard({ title, progress, color }) {



  return (
    <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
      <div className="card shadow text-center">
        <div
          className={`position-relative rounded-top progress-wrapper`} 
          data-color={color}
          style={{ backgroundColor: color}}
        >
          <div className="wave" data-progress={progress} style={{ bottom: progress }}></div>
         
        </div>
        <div className="card-footer bg-white">
          <h4 className="card-title">{title}</h4>
        </div>
      </div>
    </div>
  );
}

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};


function Skills() {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-title">Compétences</h2>
          </div>
          {/* Use SkillCard component to render skill cards */}
          
          <SkillCard title="Prestashop" progress="60%" color="rgb(177 163 205)" />
          <SkillCard title="Développement Front-end" progress="90%" color="rgb(255 198 130)" />
          <SkillCard title="React" progress="80%" color="#e6e6e6" />
          <SkillCard title="Wordpress" progress="30%" color="#594c76" />
        </div>
      </div>
    </section>
  );
}



export default Skills;
