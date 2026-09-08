import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { personalInfo } from "../data/portfolio";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero section" id="hero">
      <div className="container hero__container">
        {/* Decorative blobs */}
        <div className="hero__blob hero__blob--1" aria-hidden="true" />
        <div className="hero__blob hero__blob--2" aria-hidden="true" />

        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Open to Work
          </div>

          <h1 className="hero__title">
            Halo, saya{" "}
            <span className="hero__name">{personalInfo.name}</span>
          </h1>

          <p className="hero__subtitle">{personalInfo.tagline}</p>
          <p className="hero__description">{personalInfo.headline}</p>

          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">
              Lihat Proyek Saya
              <ArrowDown size={16} />
            </a>
            <a href="#contact" className="btn btn--outline">
              Hubungi Saya
            </a>
          </div>

          <div className="hero__socials">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hero__social-link"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__avatar-ring">
            <div className="hero__avatar">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="hero__avatar-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/yesy.JPG";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
