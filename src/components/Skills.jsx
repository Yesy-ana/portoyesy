import { Cpu, Smartphone, Globe, BrainCircuit, Gamepad2, Wrench, Users } from "lucide-react";
import { skills } from "../data/portfolio";
import TechIcon from "./TechIcon";
import "./Skills.css";

const iconMap = {
  Smartphone: Smartphone,
  Globe: Globe,
  BrainCircuit: BrainCircuit,
  Gamepad2: Gamepad2,
  Wrench: Wrench,
  Users: Users,
};

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <span className="section-label">
          <Cpu size={14} />
          Keahlian
        </span>
        <h2 className="section-title">Tech Stack & Kompetensi</h2>
        <p className="section-subtitle" style={{ marginBottom: "var(--space-2xl)" }}>
          Teknologi dan tools yang saya gunakan dalam membangun solusi digital.
        </p>

        <div className="skills__grid">
          {skills.map((skillGroup, i) => {
            const Icon = iconMap[skillGroup.icon] || Cpu;
            return (
              <div className="skills__card" key={i}>
                <div className="skills__card-header">
                  <div className="skills__icon-wrap">
                    <Icon size={20} />
                  </div>
                  <h3 className="skills__card-title">{skillGroup.category}</h3>
                </div>
                <div className="skills__items-grid">
                  {skillGroup.items.map((item, j) => (
                    <div className="skills__item-pill" key={j} title={item}>
                      <div className="skills__item-icon">
                        <TechIcon name={item} size={20} />
                      </div>
                      <span className="skills__item-name">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
