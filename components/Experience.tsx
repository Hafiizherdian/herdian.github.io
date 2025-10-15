import React from 'react';

const experienceData = {
  workExperience: [
    {
      position: "Project-Based Virtual Intern: Big Data Analytics Kimia Farma x Rakamin Academy",
      period: "Feb - Mar 2024",
      company: "Kimia Farma",
      location: "Indonesia",
      responsibilities: [
        "Membuat dashboard menggunakan Google Data Studio (Looker Studio) untuk data penjualan salah satu produk Kimia Farma dalam satu tahun dari data mentah yang telah disediakan.",
        "Mengolah data mentah dengan SQL pada Google Cloud Platform.",
        "Membuat dashboard visualisasi data penjualan menggunakan Google Data Studio (Looker Studio)."
      ]
    },
    {
      position: "Telkom Indonesia - Lab Infra Service Research (ISR)",
      period: "Aug - Sep 2024",
      company: "Telkom Indonesia",
      location: "Bandung, Indonesia",
      responsibilities: [
        "Mengembangkan model machine learning untuk mengevaluasi kualitas data.",
        "Membangun pipeline pada pengembangan model machine learning untuk mengevaluasi kualitas data."
      ]
    }
  ],
  certifications: [
    {
      name: "Big Data Analytics Kimia Farma x Rakamin Academy 2024",
      issuer: "Rakamin Academy",
      period: "2024",
      credentialId: ""
    },
    {
      name: "BNSP Associate Data Scientist 2025",
      issuer: "BNSP",
      period: "2025",
      credentialId: ""
    },
    {
      name: "EPrT (English Proficiency Test) 2025",
      issuer: "Telkom University Language Center",
      period: "2025",
      credentialId: "520 (Listening 56, Grammar 50, Reading 50)"
    }
  ]
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gray-100 
                 dark:bg-gradient-to-b dark:from-black dark:via-gray-950 dark:to-black"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Pengalaman & Sertifikasi
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Pengalaman kerja dan sertifikasi yang telah saya peroleh selama ini.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-16">
          <div className="space-y-20">
            {/* Pengalaman Kerja */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8">
                Pengalaman Kerja
              </h3>
              <div className="space-y-8">
                {experienceData.workExperience.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-cyan-500">
                    <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-2 top-1"></div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                      {exp.position}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {exp.company} • {exp.period} • {exp.location}
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2 mt-3">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="text-sm">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Pelatihan & Sertifikasi */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8">
                Sertifikasi
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {experienceData.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="relative rounded-2xl border border-gray-700/50 
                               bg-white/10 backdrop-blur-md p-6 text-center 
                               shadow-sm hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] 
                               transition-all duration-300"
                  >
                    {/* Garis solid */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[3px] bg-cyan-400 rounded-full" />

                    {/* Glow di belakang garis */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-[8px] bg-cyan-400 blur-md opacity-70" />

                    {/* Konten */}
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mt-3">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      {cert.issuer} • {cert.period}
                    </p>
                    {cert.credentialId && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                        Score: {cert.credentialId}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
