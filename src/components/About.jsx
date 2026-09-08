import { User } from "lucide-react";
import { personalInfo, stats } from "../data/portfolio";
import "./About.css";

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <span className="section-label">
          <User size={14} />
          Tentang Saya
        </span>
        <h2 className="section-title">Mengenal Lebih Dekat</h2>
        <p className="section-subtitle" style={{ marginBottom: "var(--space-2xl)" }}>
          Dengan semangat membangun teknologi yang berdampak dan inklusif.
        </p>

        <div className="about__grid">
          <div className="about__text">
            <p>{personalInfo.bio}</p>
            <p style={{ marginTop: "var(--space-md)" }}>
              Saya memiliki ketertarikan mendalam pada <strong>teknologi aksesibilitas</strong> yang
              membantu penyandang disabilitas mengakses informasi digital secara setara, serta
              pengembangan aplikasi mobile yang mengutamakan pengalaman pengguna dan privasi data.
              Aktif berkontribusi dalam komunitas open-source melalui FOSTI UMS.
            </p>
          </div>

          <div className="about__stats">
            {stats.map((stat, i) => (
              <div className="about__stat-card" key={i}>
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
                <span className="about__stat-desc">{stat.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
