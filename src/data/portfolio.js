// Portfolio data based on CV — Yesy Lely Yestiana

export const personalInfo = {
  name: "Yesy Lely Yestiana",
  initials: "YY",
  tagline: "Software & Mobile Developer",
  headline: "Membangun solusi teknologi berdampak melalui aksesibilitas digital & performa aplikasi yang andal.",
  bio: "Lulusan S1 Teknik Informatika Universitas Muhammadiyah Surakarta (IPK 3.76/4.00) dengan pengalaman hands-on dalam pengembangan aplikasi mobile Android, full-stack web development, serta data science & machine learning. Berfokus pada teknologi aksesibilitas dan solusi digital yang inklusif.",
  email: "yesyyestiana152@gmail.com",
  location: "Surakarta, Jawa Tengah, Indonesia",
  github: "https://github.com/Yesy-ana",
  githubUsername: "Yesy-ana",
  linkedin: "https://www.linkedin.com/in/yesy-yestiana",
  cvUrl: "/Yesy_Lely_Yestiana-CV.pdf",
  avatar: "/yesy-profile.jpg",
};

export const stats = [
  { value: "3.76", label: "IPK / 4.00", description: "Teknik Informatika UMS" },
  { value: "20+", label: "Kepanitiaan", description: "Organisasi & Event" },
  { value: "3+", label: "Proyek Utama", description: "Mobile, Web & ML" },
];

export const skills = [
  {
    category: "Mobile Development",
    icon: "Smartphone",
    items: ["Android Studio", "Java", "XML", "SQLite"],
  },
  {
    category: "Web Development",
    icon: "Globe",
    items: ["Laravel", "PHP", "JavaScript", "HTML5", "CSS3", "MySQL", "React"],
  },
  {
    category: "Data Science & ML",
    icon: "BrainCircuit",
    items: ["Python", "NumPy", "pandas", "PyTorch", "Machine Learning", "Google Colab"],
  },
  {
    category: "Interactive & 3D Tech",
    icon: "Gamepad2",
    items: ["Unity", "Construct 2", "Blender", "AR/VR (Vuforia)"],
  },
  {
    category: "Tools & Workflow",
    icon: "Wrench",
    items: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Canva"],
  },
  {
    category: "Soft Skills",
    icon: "Users",
    items: ["Leadership", "Problem Solving", "Teamwork", "Time Management", "Communication"],
  },
];

export const projects = [
  {
    title: "Penerjemah Huruf Hijaiah ke Bahasa Isyarat",
    subtitle: "Metode Kitabah — Aksesibilitas untuk PDSRW",
    description:
      "Aplikasi Android edukatif yang menerjemahkan huruf Hijaiah ke bahasa isyarat visual, ditujukan untuk Penyandang Disabilitas Sensorik Rungu Wicara (PDSRW). Dilengkapi animasi isyarat, drag-and-drop matching game, dan kuis evaluasi interaktif.",
    tech: ["Java", "Android Studio", "XML"],
    github: "https://github.com/Yesy-ana/hijaiah-sign-language-translator.git",
    highlight: "Mobile",
  },
  {
    title: "Aplikasi Kalender Wanita",
    subtitle: "Pencatatan siklus & pengingat ibadah islami",
    description:
      "Aplikasi mobile pencatatan siklus menstruasi & masa subur dengan fitur pengingat ibadah islami (salat & puasa). Menggunakan penyimpanan lokal offline-first (SQLite) untuk menjaga privasi data pengguna, serta menyediakan edukasi kesehatan reproduksi.",
    tech: ["Java", "Android Studio", "SQLite"],
    github: "https://github.com/Yesy-ana/reminderperiodhaid.git",
    highlight: "Mobile",
  },
  {
    title: "Aplikasi Kalori Traker",
    subtitle: "Memonitoring Kalori",
    description:
      "Aplikasi mobile yang berfungsi untuk mentrcker kalori yang telah masuk ke tubuh. Menggunakan penyimpanan lokal offline-first (SQLite) untuk menjaga privasi data pengguna, serta menyediakan edukasi kesehatan reproduksi.",
    tech: ["Java", "Android Studio", "SQLite"],
    github: "https://github.com/Yesy-ana/calorietracker.git",
    highlight: "Mobile",
  },
  {
    title: "Sistem Inventaris & Peminjaman Barang MTA TV",
    subtitle: "Digitalisasi alur peminjaman peralatan broadcast",
    description:
      "Aplikasi web full-stack untuk manajemen inventaris dan peminjaman peralatan operasional broadcast MTA TV. Fitur meliputi database barang, form request peminjaman, role access, dan tracking status real-time.",
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/Yesy-ana",
    highlight: "Website",
  },
];

export const experiences = [
  {
    type: "work",
    title: "Full Stack Web Developer & Broadcast Technical Intern",
    organization: "MTA TV Studio",
    period: "Maret — Mei 2024",
    description:
      "Mengembangkan sistem inventaris berbasis web menggunakan Laravel & MySQL. Mendukung operasional teknis penyiaran termasuk pengelolaan peralatan broadcast.",
  },
];

export const organizations = [
  {
    title: "Divisi Keanggotaan",
    organization: "FOSTI UMS (Forum Open Source Teknik Informatika)",
    period: "Desember 2023 — Desember 2024",
  },
  {
    title: "Sekretaris Umum",
    organization: "FOSTI UMS",
    period: "Desember 2022 — Desember 2023",
  },
  {
    title: "Sekretaris Umum",
    organization: "KMF-KI (Koordinator Mentoring FK&I UMS)",
    period: "September 2022 — 2024",
  },
];

export const committees = [
  { role: "Sie Acara", event: "FOSTIFEST FOSTI 2024" },
  { role: "Bendahara", event: "Rapat Kerja FOSTI 2024" },
  { role: "Sie Sponsorship", event: "FOSTIFEST FOSTI 2023" },
  { role: "Sie Acara", event: "Madrasah Mentor LPPIK UMS 2023" },
];

export const education = {
  degree: "S1 Teknik Informatika",
  university: "Universitas Muhammadiyah Surakarta",
  gpa: "3.76 / 4.00",
  period: "September 2021 — Selesai",
};

export const certifications = [
  {
    title: "End-to-End Machine Learning",
    provider: "DataCamp",
    driveUrl: "https://drive.google.com/file/d/10xQZMemsXKsdQWsshBDhIVxuQGdAz5H7/view?usp=sharing",
  },
  {
    title: "Introduction to Deep Learning with PyTorch",
    provider: "DataCamp",
    driveUrl: "https://drive.google.com/file/d/1PLkpuw8dLuOL6XzFKTrxubkZmjs8ks1n/view?usp=sharing",
  },
  {
    title: "Intermediate Deep Learning with PyTorch",
    provider: "DataCamp",
    driveUrl: "https://drive.google.com/file/d/13nx8Xy3aXyzXJwUKbuDtS5FKtsU22ncT/view?usp=sharing",
  },
  {
    title: "Machine Learning with Tree-Based Models in Python",
    provider: "DataCamp",
    driveUrl: "https://drive.google.com/file/d/1UhLcv1z3NBW9Y9Sn5K7t0ofdegoGF0v2/view?usp=sharing",
  },
  {
    title: "Linear Classifiers in Python",
    provider: "DataCamp",
    driveUrl: "https://drive.google.com/file/d/1ElZ_b6BC7ylfdioAEoqh7s6wFZ2Cw64F/view?usp=sharing",
  },
  {
    title: "Data Manipulation with pandas",
    provider: "DataCamp",
    driveUrl: "https://drive.google.com/file/d/1eKnqsK9OOTiCMV3FUccTzsOZLeoNyuET/view?usp=sharing",
  },
  {
    title: "Introduction to NumPy",
    provider: "DataCamp",
    driveUrl: "https://drive.google.com/file/d/1BTF2T8nk0WIpdeBEQ1EyY-P45e9GUZ64/view?usp=sharing",
  },
  {
    title: "Real-time Chat Web App (Vue.js)",
    provider: "Workshop Nasional FOSTI Festival 2024",
    driveUrl: null,
  },
];
