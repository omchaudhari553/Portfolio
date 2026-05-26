import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiExternalLink } from 'react-icons/fi';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  verifyUrl?: string;
}

const publicImage = (filename: string) => encodeURI(`/${filename}`);

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Java Full Stack Developer Certificate',
    issuer: 'Seed Infotech Ltd',
    date: 'Feb 2025',
    image: publicImage('Full Stack Java Development.png'),
    description:
      'Trained in Core Java, Spring Boot, Spring Security, Hibernate, MySQL, REST APIs, and React.js.',
  },
  {
    id: 2,
    title: 'HackerRank Advanced SQL',
    issuer: 'HackerRank',
    date: '2024',
    image: publicImage('hackerRanK.png'),
    description:
      'Advanced SQL certification demonstrating proficiency in complex queries, joins, and database operations.',
    verifyUrl: 'https://www.hackerrank.com/certificates/37a133c7141a',
  },
];

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const openCertificate = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  const navigateCertificate = (direction: 'next' | 'prev') => {
    if (!selectedCertificate) return;

    const currentIndex = certificates.findIndex((cert) => cert.id === selectedCertificate.id);
    const newIndex =
      direction === 'next'
        ? (currentIndex + 1) % certificates.length
        : (currentIndex - 1 + certificates.length) % certificates.length;

    setSelectedCertificate(certificates[newIndex]);
  };

  return (
    <section id="certificates" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Professional certifications from my training and skill assessments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => openCertificate(certificate)}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{certificate.title}</h3>
                <p className="text-gray-300 mb-2">{certificate.issuer}</p>
                {certificate.date && (
                  <span className="text-sm text-gray-400">{certificate.date}</span>
                )}
                <div className="flex flex-col gap-3 mt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openCertificate(certificate);
                    }}
                    className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
                  >
                    View Certificate
                  </button>
                  {certificate.verifyUrl && (
                    <a
                      href={certificate.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full py-2 border border-blue-600 text-blue-400 hover:bg-blue-600/10 font-medium rounded-md transition-colors flex items-center justify-center gap-2"
                    >
                      <FiExternalLink /> Verify on HackerRank
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedCertificate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gray-800 rounded-lg max-w-6xl w-full max-h-[95vh] overflow-hidden relative flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <h3 className="text-2xl font-bold text-white truncate pr-4">
                  {selectedCertificate.title}
                </h3>
                <button
                  onClick={closeCertificate}
                  className="text-gray-400 hover:text-gray-200 p-1 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <FiX size={24} />
                </button>
              </div>

              <div className="flex-grow overflow-auto relative">
                <div className="relative h-[70vh] w-full">
                  <Image
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 80vw"
                    style={{ objectFit: 'contain' }}
                    priority
                    quality={100}
                  />
                </div>
              </div>

              <div className="p-4 border-t border-gray-700 bg-gray-800">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <p className="text-gray-300">
                      <span className="font-medium">Issuer:</span> {selectedCertificate.issuer}
                    </p>
                    {selectedCertificate.date && (
                      <p className="text-gray-300">
                        <span className="font-medium">Date:</span> {selectedCertificate.date}
                      </p>
                    )}
                    {selectedCertificate.verifyUrl && (
                      <a
                        href={selectedCertificate.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 mt-2"
                      >
                        <FiExternalLink size={14} /> View on HackerRank
                      </a>
                    )}
                  </div>

                  <div className="flex space-x-4">
                    <button
                      onClick={() => navigateCertificate('prev')}
                      className="px-4 py-2 flex items-center justify-center bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors"
                    >
                      <FiChevronLeft className="mr-1" /> Previous
                    </button>
                    <button
                      onClick={() => navigateCertificate('next')}
                      className="px-4 py-2 flex items-center justify-center bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Next <FiChevronRight className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
