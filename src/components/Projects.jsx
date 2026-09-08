import { FolderOpen, ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import TechIcon from "./TechIcon";
import { projects } from "../data/portfolio";
import "./Projects.css";

const highlightColors = {
  Accessibility: { bg: "rgba(134, 239, 172, 0.15)", color: "#16a34a", border: "rgba(134, 239, 172, 0.3)" },
  Mobile: { bg: "rgba(191, 219, 254, 0.3)", color: "#2563eb", border: "rgba(96, 165, 250, 0.3)" },
  "Full-Stack": { bg: "rgba(196, 181, 253, 0.2)", color: "#7c3aed", border: "rgba(196, 181, 253, 0.3)" },
};

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <span className="section-label">
          <FolderOpen size={14} />
          Proyek
        </span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle" style={{ marginBottom: "var(--space-2xl)" }}>
          Proyek-proyek yang telah saya kerjakan dari tahap perancangan hingga implementasi.
        </p>

        <div className="projects__grid">
          {projects.map((project, i) => {
            const hl = highlightColors[project.highlight] || highlightColors.Mobile;
            return (
              <article className="projects__card" key={i}>
                <div className="projects__card-top">
                  <span
                    className="projects__highlight"
                    style={{
                      background: hl.bg,
                      color: hl.color,
                      borderColor: hl.border,
                    }}
                  >
                    <Sparkles size={12} />
                    {project.highlight}
                  </span>
                  <h3 className="projects__card-title">{project.title}</h3>
                  <p className="projects__card-subtitle">{project.subtitle}</p>
                </div>

                <p className="projects__card-desc">{project.description}</p>

                <div className="projects__card-footer">
                  <div className="projects__tech-tags">
                    {project.tech.map((t, j) => (
                      <span className="projects__tech-tag" key={j}>
                        <TechIcon name={t} size={14} />
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__link"
                    aria-label={`Lihat repository GitHub ${project.title}`}
                  >
                    <GithubIcon size={16} />
                    Repository
                    <ExternalLink size={13} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
