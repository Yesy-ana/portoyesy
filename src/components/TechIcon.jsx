import {
  Code,
  FileCode,
  BrainCircuit,
  Terminal,
  Gamepad2,
  Glasses,
  Award,
  Lightbulb,
  HeartHandshake,
  Clock,
  MessageSquare,
  Cpu,
} from "lucide-react";

// Pemetaan nama teknologi ke class Devicon resmi atau komponen Lucide
export const techIconMap = {
  // Mobile
  "Android Studio": { type: "devicon", class: "devicon-androidstudio-plain colored" },
  "Java": { type: "devicon", class: "devicon-java-plain colored" },
  "XML": { type: "lucide", component: FileCode, color: "#e36209" },
  "SQLite": { type: "devicon", class: "devicon-sqlite-plain colored" },

  // Web
  "Laravel": { type: "devicon", class: "devicon-laravel-original colored" },
  "PHP": { type: "devicon", class: "devicon-php-plain colored" },
  "JavaScript": { type: "devicon", class: "devicon-javascript-plain colored" },
  "HTML5": { type: "devicon", class: "devicon-html5-plain colored" },
  "CSS3": { type: "devicon", class: "devicon-css3-plain colored" },
  "MySQL": { type: "devicon", class: "devicon-mysql-original colored" },
  "React": { type: "devicon", class: "devicon-react-original colored" },

  // Data Science & ML
  "Python": { type: "devicon", class: "devicon-python-plain colored" },
  "NumPy": { type: "devicon", class: "devicon-numpy-plain colored" },
  "pandas": { type: "devicon", class: "devicon-pandas-plain colored" },
  "PyTorch": { type: "devicon", class: "devicon-pytorch-original colored" },
  "Machine Learning": { type: "lucide", component: BrainCircuit, color: "#8b5cf6" },
  "Google Colab": { type: "lucide", component: Terminal, color: "#f59e0b" },

  // Interactive & 3D
  "Unity": { type: "devicon", class: "devicon-unity-original" },
  "Construct 2": { type: "lucide", component: Gamepad2, color: "#ef4444" },
  "Blender": { type: "devicon", class: "devicon-blender-original colored" },
  "AR/VR (Vuforia)": { type: "lucide", component: Glasses, color: "#06b6d4" },

  // Tools
  "Git": { type: "devicon", class: "devicon-git-plain colored" },
  "GitHub": { type: "devicon", class: "devicon-github-original" },
  "VS Code": { type: "devicon", class: "devicon-vscode-plain colored" },
  "Postman": { type: "devicon", class: "devicon-postman-plain colored" },
  "Figma": { type: "devicon", class: "devicon-figma-plain colored" },
  "Canva": { type: "devicon", class: "devicon-canva-original colored" },

  // Soft Skills
  "Leadership": { type: "lucide", component: Award, color: "#f59e0b" },
  "Problem Solving": { type: "lucide", component: Lightbulb, color: "#eab308" },
  "Teamwork": { type: "lucide", component: HeartHandshake, color: "#ec4899" },
  "Time Management": { type: "lucide", component: Clock, color: "#3b82f6" },
  "Communication": { type: "lucide", component: MessageSquare, color: "#10b981" },
};

export default function TechIcon({ name, size = 20 }) {
  const iconConfig = techIconMap[name];

  if (!iconConfig) {
    return <Code size={size} style={{ color: "var(--color-primary-accent)" }} />;
  }

  if (iconConfig.type === "devicon") {
    return (
      <i
        className={`${iconConfig.class} tech-logo-icon`}
        style={{ fontSize: `${size}px`, lineHeight: 1 }}
        aria-hidden="true"
      />
    );
  }

  if (iconConfig.type === "lucide") {
    const Component = iconConfig.component;
    return (
      <Component
        size={size}
        style={{ color: iconConfig.color || "var(--color-primary-accent)" }}
        aria-hidden="true"
      />
    );
  }

  return <Cpu size={size} />;
}
