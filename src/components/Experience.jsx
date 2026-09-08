import { Briefcase, Building2, CalendarDays, Users2, Award } from "lucide-react";
import { experiences, organizations, committees } from "../data/portfolio";
import "./Experience.css";

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <span className="section-label">
          <Briefcase size={14} />
          Pengalaman
        </span>
        <h2 className="section-title">Pengalaman & Kepemimpinan</h2>
        <p className="section-subtitle" style={{ marginBottom: "var(--space-2xl)" }}>
          Perjalanan profesional dan kontribusi organisasi.
        </p>

        <div className="experience__grid">
          {/* Work Experience */}
          <div className="experience__column">
            <h3 className="experience__column-title">
              <Building2 size={18} />
              Pengalaman Kerja
            </h3>
            <div className="experience__timeline">
              {experiences.map((exp, i) => (
                <div className="experience__item" key={i}>
                  <div className="experience__dot" />
                  <div className="experience__content">
                    <span className="experience__period">
                      <CalendarDays size={13} />
                      {exp.period}
                    </span>
                    <h4 className="experience__title">{exp.title}</h4>
                    <p className="experience__org">{exp.organization}</p>
                    <p className="experience__desc">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Organizations */}
          <div className="experience__column">
            <h3 className="experience__column-title">
              <Users2 size={18} />
              Organisasi
            </h3>
            <div className="experience__timeline">
              {organizations.map((org, i) => (
                <div className="experience__item" key={i}>
                  <div className="experience__dot" />
                  <div className="experience__content">
                    <span className="experience__period">
                      <CalendarDays size={13} />
                      {org.period}
                    </span>
                    <h4 className="experience__title">{org.title}</h4>
                    <p className="experience__org">{org.organization}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="experience__column-title" style={{ marginTop: "var(--space-2xl)" }}>
              <Award size={18} />
              Kepanitiaan
            </h3>
            <div className="experience__committees">
              {committees.map((c, i) => (
                <div className="experience__committee-card" key={i}>
                  <span className="experience__committee-role">{c.role}</span>
                  <span className="experience__committee-event">{c.event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
