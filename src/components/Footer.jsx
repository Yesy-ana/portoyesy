import { Heart, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { personalInfo } from "../data/portfolio";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__avatar">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="footer__avatar-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/yesy.JPG";
              }}
            />
          </div>
          <span className="footer__name">{personalInfo.name}</span>
          <p className="footer__tagline">{personalInfo.tagline}</p>
        </div>

        <div className="footer__socials">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
          <a href={`mailto:${personalInfo.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
