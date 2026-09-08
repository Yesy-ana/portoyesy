import {
  GraduationCap,
  BookOpen,
  BadgeCheck,
  ExternalLink,
  FileCheck2,
} from "lucide-react";
import { education, certifications } from "../data/portfolio";
import "./Education.css";

export default function Education() {
  return (
    <section className="education section" id="education">
      <div className="container">
        <span className="section-label">
          <GraduationCap size={14} />
          Pendidikan
        </span>
        <h2 className="section-title">Pendidikan & Sertifikasi</h2>
        <p className="section-subtitle" style={{ marginBottom: "var(--space-2xl)" }}>
          Latar belakang akademik dan sertifikasi pelatihan resmi. Klik sertifikat untuk melihat dokumen langsung di Google Drive.
        </p>

        <div className="education__grid">
          {/* Formal Education */}
          <div className="education__formal">
            <div className="education__degree-card">
              <div className="education__degree-icon">
                <GraduationCap size={32} />
              </div>
              <div className="education__degree-info">
                <span className="education__degree-badge">Sarjana (S1)</span>
                <h3 className="education__degree-title">{education.degree}</h3>
                <p className="education__degree-uni">{education.university}</p>
                <div className="education__degree-meta">
                  <span className="education__gpa-badge">
                    IPK {education.gpa}
                  </span>
                  <span className="education__period">{education.period}</span>
                </div>
              </div>
            </div>

            <div className="education__note-card">
              <div className="education__note-icon">
                <FileCheck2 size={22} />
              </div>
              <div className="education__note-content">
                <h4 className="education__note-title">Kredensial Terverifikasi</h4>
                <p className="education__note-desc">
                  Seluruh sertifikat kompetensi Machine Learning & Python diterbitkan oleh platform DataCamp dan tersimpan di Google Drive. Klik salah satu sertifikat untuk melihat dokumen asli.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications List */}
          <div className="education__certs">
            <h3 className="education__certs-title">
              <BookOpen size={18} />
              Pelatihan & Sertifikasi
            </h3>

            <div className="education__cert-list">
              {certifications.map((cert, i) => {
                const hasLink = Boolean(cert.driveUrl);

                if (hasLink) {
                  return (
                    <a
                      key={i}
                      href={cert.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="education__cert-item education__cert-item--link"
                      title={`Buka sertifikat ${cert.title} di Google Drive`}
                    >
                      <BadgeCheck size={18} className="education__cert-check" />
                      <div className="education__cert-info">
                        <span className="education__cert-name">{cert.title}</span>
                        <span className="education__cert-provider">{cert.provider}</span>
                      </div>
                      <span className="education__cert-action">
                        <span>Lihat</span>
                        <ExternalLink size={13} />
                      </span>
                    </a>
                  );
                }

                return (
                  <div key={i} className="education__cert-item">
                    <BadgeCheck size={18} className="education__cert-check" />
                    <div className="education__cert-info">
                      <span className="education__cert-name">{cert.title}</span>
                      <span className="education__cert-provider">{cert.provider}</span>
                    </div>
                    <span className="education__cert-badge-text">Workshop</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
