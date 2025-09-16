import React from 'react';
import { FaCode, FaDatabase, FaProjectDiagram, FaTools, FaLaptopCode } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    {
      category: 'Data & Analytics',
      icon: <FaDatabase className="w-6 h-6 text-blue-600" />,
      items: [
        'Big Data',
        'SQL',
        'Python',
        'Google Cloud Platform (GCP)',
        'Looker Studio',
        'Data Visualization'
      ]
    },
    {
      category: 'Big Data Processing',
      icon: <FaDatabase className="w-6 h-6 text-purple-600" />,
      items: [
        'Big Data Scheduling',
        'Data Processing',
        'ETL Pipelines',
        'Data Warehousing',
        'Data Modeling'
      ]
    },
    {
      category: 'Project Management',
      icon: <FaProjectDiagram className="w-6 h-6 text-green-600" />,
      items: [
        'Project Coordination',
        'Project Monitoring',
        'Team Collaboration',
        'Problem Solving',
        'Time Management',
        'Agile Methodology'
      ]
    },
    {
      category: 'Development Tools',
      icon: <FaTools className="w-6 h-6 text-yellow-600" />,
      items: [
        'Git & GitHub',
        'Docker',
        'Docker Hub',
        'PostgreSQL',
        'VS Code',
        'Jupyter Notebook'
      ]
    },
    {
      category: 'Web Development',
      icon: <FaLaptopCode className="w-6 h-6 text-red-600" />,
      items: [
        'React.js',
        'Node.js',
        'NEXT.js',
        'TypeScript',
        'HTML/CSS',
        'RESTful APIs'
      ]
    },
    {
      category: 'Soft Skills',
      icon: <FaCode className="w-6 h-6 text-indigo-600" />,
      items: [
        'Communication',
        'Teamwork',
        'Critical Thinking',
        'Adaptability',
        'Leadership',
        'Attention to Detail'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Kemampuan Utama</h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Berbagai keterampilan dan keahlian yang saya kuasai dalam pengembangan perangkat lunak dan manajemen proyek.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillGroup, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-md dark:hover:shadow-cyan-500/10 transition-shadow bg-gray-50 dark:bg-gray-900/50">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-opacity-10 dark:bg-opacity-20 mr-4" style={{ backgroundColor: skillGroup.icon.props.className.includes('blue') ? 'rgba(37, 99, 235, 0.1)' : skillGroup.icon.props.className.includes('purple') ? 'rgba(168, 85, 247, 0.1)' : skillGroup.icon.props.className.includes('green') ? 'rgba(16, 185, 129, 0.1)' : 'rgba(234, 179, 8, 0.1)' }}>
                    {React.cloneElement(skillGroup.icon, { 
                      className: 'w-6 h-6 ' + (skillGroup.icon.props.className.includes('blue') ? 'text-blue-600 dark:text-blue-400' : 
                                              skillGroup.icon.props.className.includes('purple') ? 'text-purple-600 dark:text-purple-400' : 
                                              skillGroup.icon.props.className.includes('green') ? 'text-green-600 dark:text-green-400' : 
                                              'text-yellow-600 dark:text-yellow-400')
                    })}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skillGroup.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <svg className="w-4 h-4 text-cyan-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
