import { motion } from 'framer-motion';
import { FiBook } from 'react-icons/fi';

interface EducationItem {
  school: string;
  degree: string;
  duration: string;
  details: string;
}

const Education = () => {
  const education: EducationItem[] = [
    {
      school: 'Anuradha Engineering College, Chikhali, Maharashtra',
      degree: 'Bachelor of Engineering — Information Technology',
      duration: 'Jul 2021 — Jun 2024',
      details: 'CGPA: 7.57/10',
    },
    {
      school: 'Government Polytechnic College, Ambad, Maharashtra',
      degree: 'Diploma',
      duration: 'Aug 2018 — Jun 2021',
      details: 'Percentage: 78.51%',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-lg border border-gray-700"
            >
              <div className="flex items-start gap-3">
                <FiBook className="text-blue-400 text-xl mt-1 shrink-0" />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white">{item.school}</h3>
                    <span className="text-sm text-gray-400 shrink-0">{item.duration}</span>
                  </div>
                  <p className="text-gray-300 font-medium">{item.degree}</p>
                  <p className="text-blue-400 text-sm mt-1">{item.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
