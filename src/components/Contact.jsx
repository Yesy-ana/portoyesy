import { useState } from "react";
import { Send, Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { personalInfo } from "../data/portfolio";
import { submitContactMessage } from "../lib/supabase";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      await submitContactMessage(form);
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Gagal mengirim pesan. Silakan coba lagi.");
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <span className="section-label">
          <Mail size={14} />
          Kontak
        </span>
        <h2 className="section-title">Hubungi Saya</h2>
        <p className="section-subtitle" style={{ marginBottom: "var(--space-2xl)" }}>
          Tertarik untuk berkolaborasi? Kirim pesan atau hubungi langsung melalui jejaring sosial.
        </p>

        <div className="contact__grid">
          {/* Contact Info */}
          <div className="contact__info">
            <div className="contact__info-card">
              <Mail size={20} />
              <div>
                <span className="contact__info-label">Email</span>
                <a href={`mailto:${personalInfo.email}`} className="contact__info-value">
                  {personalInfo.email}
                </a>
              </div>
            </div>
            <div className="contact__info-card">
              <GithubIcon size={20} />
              <div>
                <span className="contact__info-label">GitHub</span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__info-value"
                >
                  {personalInfo.githubUsername || "Yesy-ana"}
                </a>
              </div>
            </div>
            <div className="contact__info-card">
              <LinkedinIcon size={20} />
              <div>
                <span className="contact__info-label">LinkedIn</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__info-value"
                >
                  yesy-yestiana
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="contact-name" className="contact__label">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="contact__input"
                  placeholder="Nama Anda"
                />
              </div>
              <div className="contact__field">
                <label htmlFor="contact-email" className="contact__label">
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="contact__input"
                  placeholder="email@contoh.com"
                />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="contact-subject" className="contact__label">
                Subjek / Perihal
              </label>
              <input
                type="text"
                id="contact-subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="contact__input"
                placeholder="Perihal pesan Anda"
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-message" className="contact__label">
                Pesan
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="contact__input contact__textarea"
                placeholder="Tuliskan pesan Anda di sini..."
              />
            </div>

            <button
              type="submit"
              className="btn btn--primary contact__submit"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? (
                <>
                  <Loader2 size={16} className="contact__spinner" />
                  Mengirim...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Kirim Pesan
                </>
              )}
            </button>

            {status === "success" && (
              <div className="contact__alert contact__alert--success">
                <CheckCircle size={18} />
                <span>Pesan berhasil terkirim! Terima kasih telah menghubungi saya.</span>
              </div>
            )}

            {status === "error" && (
              <div className="contact__alert contact__alert--error">
                <AlertCircle size={18} />
                <span>{errorMsg}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
