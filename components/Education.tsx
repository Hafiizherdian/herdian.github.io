'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaMapMarkerAlt, FaTrophy } from 'react-icons/fa';

const Education = () => {
  const educations = [
    {
      id: 1,
      institution: "Telkom University",
      degree: "S1 Sistem Informasi",
      location: "Bandung, Jawa Barat",
      year: "2018 - 2025",
      description: "Fokus pada pengembangan perangkat lunak, manajemen basis data, dan analisis sistem informasi. Memperoleh pemahaman mendalam tentang pengembangan aplikasi berbasis web dan mobile, serta manajemen proyek TI.",
      achievements: [
        "Aktif dalam organisasi kemahasiswaan sebagai anggota divisi ",
        "Pengembangan perangkat lunak",
        "Menyelesaikan proyek akhir berbasis web app microservices dengan predikat sangat memuaskan"
      ],
      gpa: "3.00/4.0"
    },
    
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="education" className="py-20 bg-gray-100 dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Riwayat <span className="text-cyan-500">Pendidikan</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Perjalanan pendidikan formal yang telah membentuk pengetahuan dan keterampilan saya hingga saat ini.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {educations.map((edu, index) => (
              <motion.div 
                key={edu.id}
                variants={item}
                className="relative"
              >
                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-md dark:hover:shadow-cyan-500/10 transition-shadow bg-gray-50 dark:bg-gray-900/50">
                  <div className="flex items-start">
                    <div className="bg-cyan-100 dark:bg-cyan-900/30 p-3 rounded-lg mr-4 flex-shrink-0 shadow-inner">
                      <FaUniversity className="text-cyan-600 dark:text-cyan-400 text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                        {edu.institution}
                      </h3>
                      
                      <div className="flex items-center text-cyan-600 dark:text-cyan-400 mb-3">
                        <FaGraduationCap className="mr-2" />
                        <span className="font-medium">{edu.degree}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <FaCalendarAlt className="mr-1.5 text-cyan-500" />
                          {edu.year}
                        </span>
                        <span className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <FaMapMarkerAlt className="mr-1.5 text-cyan-500" />
                          {edu.location}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {edu.description}
                      </p>
                      
                      {edu.gpa && (
                        <div className="mb-4">
                          <span className="inline-block bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-sm px-3 py-1 rounded-full shadow-sm">
                            IPK: {edu.gpa}
                          </span>
                        </div>
                      )}
                      
                      {edu.achievements && edu.achievements.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                          <div className="flex items-center text-cyan-500 mb-3">
                            <FaTrophy className="mr-2" />
                            <h4 className="font-semibold">Pencapaian:</h4>
                          </div>
                          <ul className="space-y-2">
                            {edu.achievements.map((achievement, i) => (
                              <li 
                                key={i} 
                                className="flex items-start text-gray-600 dark:text-gray-300 text-sm"
                              >
                                <span className="text-cyan-500 mr-2 mt-1">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
    </section>
  );
};

export default Education;
