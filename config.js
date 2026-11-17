// 1) Fill these two after creating your Supabase project (Settings → API). The anon key is public by design;
//    security comes from the Row Level Security policies in the setup SQL.
window.SUPABASE_URL = "https://axmpwqfyuzgixuhvnysv.supabase.co";
window.SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4bXB3cWZ5dXpnaXh1aHZueXN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ4ODIyNDEsImV4cCI6MjExMDQ1ODI0MX0.ma7cxXR9mYHIGAvPmlLQtKSjXUUge-INZ2S1dZXyGow";

// 2) Default content. Used until you save something from /admin.html.
window.DEFAULT = {
  name: "Hilmi Romzi Nagib",
  role: { en: "Aspiring Web Developer", id: "Calon Web Developer" },
  links: {
    email: "hilmi.romzy@gmail.com",
    github: "https://github.com/HilmiRN/",
    linkedin: "https://www.linkedin.com/in/hilmi-romzi-41a442430/",
    instagram: "https://www.instagram.com/hilmir.n/",
  },
  skills: [
    { name: "HTML", glyph: "</>", progress: 100 },
    { name: "CSS", glyph: "{ }", progress: 100 },
    { name: "Tailwind CSS", glyph: "tw", progress: 100 },
    { name: "JavaScript Fundamentals", glyph: "JS", progress: 40 },
  ],
  certs: [
    {
      title: "Introduction to HTML",
      platform: "SoloLearn",
      date: "Jul 2026",
      image: "",
      link: "",
    },
    {
      title: "Introduction to CSS",
      platform: "SoloLearn",
      date: "Nov 2026",
      image: "",
      link: "",
    },
    {
      title: "Introduction to JavaScript",
      platform: "SoloLearn",
      date: "Nov 2026",
      image: "",
      link: "",
    },
    {
      title: "Web Development",
      platform: "SoloLearn",
      date: "Nov 2026",
      image: "",
      link: "",
    },
    {
      title: "Vibe Coding",
      platform: "SoloLearn",
      date: "Nov 2026",
      image: "",
      link: "",
    },
  ],
  projects: [
    {
      title: "JelajahIndo",
      status: "In development",
      live: "https://jelajahindoo.netlify.app/",
      repo: "https://github.com/HilmiRN/JelajahIndo",
      image: "",
      desc: {
        en: "A website that introduces Indonesia’s natural beauty to people abroad. I built it because many people outside Indonesia only know Bali. Still in development.",
        id: "Website untuk mengenalkan keindahan alam Indonesia kepada orang-orang di luar negeri. Aku membuatnya karena banyak orang di luar sana hanya mengenal Bali. Saat ini masih dalam tahap pengembangan.",
      },
    },
    {
      title: "Gaulingo",
      status: "In progress",
      live: "https://gaulingo.vercel.app/",
      repo: "https://github.com/HilmiRN/gaulingo",
      image: "",
      desc: {
        en: "A website that helps people visiting Indonesia talk with Indonesians, using its play-sound feature.",
        id: "Website yang membantu orang yang berkunjung ke Indonesia untuk berbicara dengan orang Indonesia, lewat fitur putar suara.",
      },
    },
  ],
  journey: [
    {
      date: "Jul 2026",
      done: true,
      title: { en: "Introduction to HTML", id: "Pengantar HTML" },
      text: {
        en: "Learned how pages are structured. SoloLearn certificate earned.",
        id: "Belajar bagaimana halaman web disusun. Sertifikat SoloLearn diraih.",
      },
    },
    {
      date: "Nov 2026",
      done: true,
      title: { en: "CSS and Tailwind CSS", id: "CSS dan Tailwind CSS" },
      text: {
        en: "Learned to style, lay out and make things responsive.",
        id: "Belajar menata tampilan, tata letak, dan membuatnya responsif.",
      },
    },
    {
      date: "Nov 2026",
      done: true,
      title: { en: "Introduction to JavaScript", id: "Pengantar JavaScript" },
      text: {
        en: "Finished the SoloLearn course. Still working through the fundamentals.",
        id: "Menyelesaikan kursus SoloLearn. Masih terus memperdalam dasar-dasarnya.",
      },
    },
    {
      date: "Nov 2026",
      done: true,
      title: {
        en: "Web Development & Vibe Coding",
        id: "Web Development & Vibe Coding",
      },
      text: {
        en: "Two more SoloLearn courses completed.",
        id: "Dua kursus SoloLearn lagi selesai.",
      },
    },
    {
      date: "Now",
      done: false,
      title: { en: "Building real projects", id: "Membangun proyek nyata" },
      text: {
        en: "JelajahIndo is live. Gaulingo is in progress.",
        id: "JelajahIndo sudah live. Gaulingo sedang dikerjakan.",
      },
    },
  ],
};
