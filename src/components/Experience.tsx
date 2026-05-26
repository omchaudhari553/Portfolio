import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

interface ExperienceItem {
  id: number;
  position: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  skills: string[];
  certificates?: { name: string; url: string }[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      position: 'Java Developer Intern',
      company: 'TechnoHacks',
      location: 'Remote',
      duration: 'May 2024 - Jun 2024',
      description: [
        'Enhanced 10+ backend modules using Core Java, applying object-oriented programming principles and multithreading',
        'Created 15+ database operations using JDBC and MySQL with prepared statements for secure data handling',
        'Troubleshot and optimized existing code, improving application performance by 25% and enhancing maintainability',
        'Collaborated using Git and GitHub for version control, managing 50+ commits and ensuring timely delivery'
      ],
      skills: ['Java', 'JDBC', 'MySQL', 'Git', 'GitHub', 'OOP', 'Multithreading'],
      certificates: []
    },
    {
      id: 2,
      position: 'Java Full Stack Development Training',
      company: 'Seed Infotech Ltd',
      location: 'Pune, Maharashtra',
      duration: 'Jul 2024 - Feb 2025',
      description: [
        'Trained in Core Java, Spring Boot, Spring Security, Hibernate, MySQL, REST APIs, and React.js',
        'Gained hands-on experience in building full-stack applications with modern technologies'
      ],
      skills: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'MySQL', 'REST APIs', 'React.js'],
      certificates: [
        {
          name: 'Java Full Stack Developer Certificate',
          url: '#certificates',
        },
      ],
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Internship & Training
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Internship experience and professional training aligned with my resume.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-900"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} relative`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-gray-800 z-10"></div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                  <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700">
                    <div className="flex items-center mb-2">
                      <FiBriefcase className="text-blue-400 mr-2" />
                      <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-300">{exp.company}</h4>
                      <div className="flex items-center text-gray-400 text-sm mt-1">
                        <span className="mr-3">{exp.location}</span>
                        <div className="flex items-center">
                          <FiCalendar className="mr-1" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span 
                          key={i}
                          className="px-2 py-1 bg-blue-900 text-blue-200 text-xs font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    {/* Certificates Section */}
                    {exp.certificates && exp.certificates.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <div className="flex items-center mb-3">
                          <svg className="w-4 h-4 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <h5 className="text-sm font-bold text-white">Verified Certificates</h5>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {exp.certificates.map((cert, i) => (
                            <a
                              key={i}
                              href={cert.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group relative inline-flex items-center px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                            >
                              {/* Shine effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>
                              
                              {/* Award icon */}
                              <svg className="w-4 h-4 mr-2 relative z-10" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                              </svg>
                              
                              <span className="relative z-10">{cert.name}</span>
                              
                              {/* External link icon */}
                              <svg className="w-3.5 h-3.5 ml-1.5 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
