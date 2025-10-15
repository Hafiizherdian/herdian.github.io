import React from 'react';

type Project = {
  name: string;
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  image?: string;
  video?: string;
  links: {
    github: string;
    demo: string;
  };
  technologies: string[];
};

const Projects = () => {
  const projects: Project[] = [
    {
      name: "Sistem Pembuatan Soal Otomatis dengan Generative AI",
      title: "Sistem Pembuatan Soal Otomatis",
      description: "Merancang, mengembangkan, dan mengimplementasikan sistem pembuatan soal otomatis berbasis Generative AI.",
      features: [
        "Membangun arsitektur microservices secara end-to-end: autentikasi, manajemen soal, AI generation service, dan notifikasi.",
        "Mengintegrasikan Gemini 1.5 untuk menghasilkan soal pilihan ganda maupun esai berdasarkan input materi.",
        "Membuat backend menggunakan Node.js (Express), database dengan PostgreSQL, serta antarmuka dengan Next.js + TypeScript.",
        "Menggunakan Docker untuk containerization dan memastikan sistem mudah di-deploy serta scalable.",
        "Menyusun dokumentasi teknis lengkap (ERD, BRD, class diagram) sebagai bagian dari deliverable proyek."
      ],
      techStack: ["Node.js", "Next.js", "TypeScript", "PostgreSQL", "Docker", "Generative AI (LLM)", "Microservices Architecture"],
      video: "https://www.youtube.com/embed/Y2YqQ2c14RA", 
      links: {
        github: "https://github.com/Hafiizherdian",
        demo: "#"
      },
      technologies: ["Node.js", "Next.js", "TypeScript", "PostgreSQL", "Docker", "Generative AI (LLM)", "Microservices Architecture"]
    },
    {
      name: "Dashboard Analitik Data Penjualan",
      title: "Dashboard Analitik Data Penjualan",
      description: "Membuat dashboard analitik untuk memvisualisasikan data penjualan dengan Google Data Studio.",
      features: [
        "Mengolah data mentah menggunakan SQL pada Google Cloud Platform.",
        "Membuat visualisasi interaktif untuk analisis tren penjualan.",
        "Mengidentifikasi pola dan insight bisnis dari data penjualan."
      ],
      techStack: ["Google Data Studio", "SQL", "Google Cloud Platform", "Data Visualization"],
      image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp", // contoh link YouTube
      links: {
        github: "",
        demo: ""
      },
      technologies: ["Google Data Studio", "SQL", "Google Cloud Platform", "Data Visualization"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Proyek Terbaru
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Beberapa proyek yang telah saya kerjakan baik secara individu maupun tim.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:shadow-md dark:hover:shadow-cyan-500/10 transition-shadow bg-gray-50 dark:bg-gray-900/50"
            >
              {/* Media Project */}
              {project.video ? (
                <div className="relative w-full h-56 overflow-hidden">
                  <iframe
                    src={project.video}
                    title={project.name}
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-56 object-cover"
                />
              ) : null}

              {/* Konten Card */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Fitur Utama:
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Teknologi:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-black transition-all border border-black rounded-lg hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:bg-cyan-700 dark:hover:bg-cyan-600 dark:text-white"
          >
            Lihat Semua Proyek
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
