/**
 * 11/09/2026 — LD : compétences recadrées sur l’offre réelle (plus de dump GitHub : npm, Notion, Prisma).
 * 11/09/2026 — LD : cartes compétences dans une row dédiée (PrestaShop ne se cale plus à côté du texte).
 */
import PropTypes from "prop-types";

function SkillCard({ title, progress, color }) {
  return (
    <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
      <div className="card shadow text-center">
        <div
          className="position-relative rounded-top progress-wrapper"
          data-color={color}
          style={{ backgroundColor: color }}
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
  const items = [
    { name: "PrestaShop", icon: "prestashop" },
    { name: "WordPress", icon: "wordpress" },
    { name: "HTML", icon: "html5" },
    { name: "CSS", icon: "css" },
    { name: "SCSS", icon: "sass" },
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "PHP", icon: "php" },
    { name: "SQL", icon: "mysql" },
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextdotjs" },
    { name: "Node.js", icon: "nodedotjs" },
    { name: "Vite", icon: "vite" },
    { name: "Bootstrap", icon: "bootstrap" },
    { name: "Tailwind", icon: "tailwindcss" },
    { name: "jQuery", icon: "jquery" },
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "Docker", icon: "docker" },
    { name: "Figma", icon: "figma" },
    { name: "Cursor", icon: "cursor" },
    { name: "Google Analytics", icon: "googleanalytics" },
    { name: "Search Console", icon: "googlesearchconsole" },
  ];

  return (
    <section className="section" id="competences">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-title">Compétences</h2>
          </div>
          <div className="col-lg-8 mx-auto text-center">
            <p className="paragraph-md text-dark mb-5">
              PrestaShop au quotidien : boutique, modules, SEO, suivi. Sites vitrine et WordPress
              pour les indépendants. React quand il faut un outil métier.
            </p>
          </div>
        </div>
        <div className="row">
          <SkillCard title="PrestaShop" progress="85%" color="rgb(177 163 205)" />
          <SkillCard title="Développement Front-end" progress="90%" color="rgb(255 198 130)" />
          <SkillCard title="React" progress="80%" color="#e6e6e6" />
          <SkillCard title="WordPress" progress="75%" color="#594c76" />
        </div>

        <div className="row mt-5">
          <div className="col-lg-12 text-center">
            <h3 className="h4 mb-4">Outils</h3>
          </div>
          <div className="col-lg-10 mx-auto text-center">
            <ul className="skills-list">
              {items.map((item) => (
                <li key={item.name}>
                  <img src={`./assets/icon/tools/${item.icon}.svg`} alt="" />
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
