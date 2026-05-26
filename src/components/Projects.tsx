import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiPlay, FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  period?: string;
  description: string;
  highlights?: string[];
  image?: string;
  images?: string[];
  poster?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  frontendUrl?: string;
  backendUrl?: string;
}

const Projects = () => {
  const [isClient, setIsClient] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setIsClient(true);
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleVideoToggle = (videoUrl?: string) => {
    if (videoUrl) {
      setSelectedVideo(videoUrl);
      setShowVideo(true);
    } else {
      setSelectedVideo(null);
      setShowVideo(false);
    }
    document.body.style.overflow = videoUrl ? 'hidden' : 'auto';
  };
  const projects: Project[] = [
    {
      id: 1,
      title: 'AI-Powered Shopping Platform',
      period: 'Sep 2024 — Present',
      description:
        'E-commerce backend with secure APIs, caching, event-driven order processing, and AI-powered product recommendations.',
      highlights: [
        'Designed and developed 15+ scalable RESTful APIs for user, product, cart, and order management using Spring Boot following layered architecture.',
        'Implemented secure authentication using JWT and Spring Security; integrated Redis caching to improve response time by 35%.',
        'Integrated Apache Kafka for 100+ order events and Spring AI for product recommendations, supporting 50+ AI queries and LLM API interactions.',
        'Deployed on AWS using Docker and GitHub Actions CI/CD, supporting 100+ API requests.',
      ],
      image: '/ecommerce-platform.png',
      technologies: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'Spring Data JPA', 'Hibernate', 'MySQL', 'Redis', 'Kafka', 'Spring AI'],
      githubUrl: 'https://github.com/omchaudhari553/AI-Powered-E-Commerse-Website',
      liveUrl: 'https://ai-powered-shopping-plaftform.vercel.app/',
    },
    {
      id: 2,
      title: 'Student Management System - Microservices Backend',
      period: 'Nov 2024 — Present',
      description:
        'Microservices-based student management backend with API Gateway, inter-service communication, and Docker deployment.',
      highlights: [
        'Built a microservices-based backend with 3 services using Spring Boot and Spring Cloud, exposing 20+ REST APIs through API Gateway.',
        'Executed Hibernate/JPA for ORM-based database operations, ensuring efficient data persistence and role-based authorization.',
        'Enabled inter-service communication using OpenFeign and Resilience4j, improving system availability by 30%.',
        'Configured centralized configuration, logging, and Docker deployment; executed 100+ test requests.',
      ],
      image: '/security-system.png',
      technologies: ['Java', 'Spring Boot', 'Spring Cloud', 'Microservices', 'API Gateway', 'OpenFeign', 'MySQL'],
      githubUrl: 'https://github.com/omchaudhari553/Microservice-Based-SMT',
    },









  ];

  return (
    <section id="projects" className="py-20 bg-gray-950 overflow-hidden relative">
      {/* Background blobs for 3D depth feel */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={isClient ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each project showcases different skills and technologies.
          </p>
        </motion.div>
        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col w-full ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-4 md:gap-10 items-center`}
            >
              <motion.div
                className="w-full lg:w-1/2 relative overflow-hidden rounded-2xl shadow-2xl group mx-auto max-w-2xl border border-white/10 backdrop-blur-md bg-white/5 transform-gpu transition-all duration-500 hover:scale-[1.02] hover:border-blue-500/50 hover:shadow-blue-500/20"
                whileHover={{ y: -5 }}
                onClick={() => project.image?.endsWith('.mp4') && handleVideoToggle(project.image)}
              >
                <div className="relative aspect-video w-full overflow-hidden bg-gray-900/40">
                  {project.images ? (
                    <div className="relative w-full h-full">
                      {project.images.map((img, idx) => (
                        <div
                          key={idx}
                          className={`absolute inset-0 transition-opacity duration-500 ${idx === 0 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                        >
                          <Image
                            src={img}
                            alt={`${project.title} ${idx + 1}`}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      {isClient && project.image?.endsWith('.mp4') ? (
                        <div className="relative w-full h-full">
                          <video
                            className="w-full h-full object-cover"
                            src={project.image}
                            poster={project.poster || '/ai.png'}
                            autoPlay
                            muted
                            loop
                            playsInline
                          />
                        </div>
                      ) : (
                        <Image
                          src={project.image || ''}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          style={{ objectFit: project.id === 6 ? 'contain' : 'cover' }}
                          className={`transition-transform duration-500 group-hover:scale-105 ${project.image?.endsWith('.mp4') ? 'cursor-pointer' : ''}`}
                          priority={index < 2 || project.id === 6}
                        />
                      )}
                      {project.image?.endsWith('.mp4') && (
                        <div
                          className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleVideoToggle(project.image);
                          }}
                        >
                          <div className="p-3 bg-gray-800/80 rounded-full">
                            <FiPlay className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex justify-end space-x-4">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-400 transform hover:scale-125 transition-all shadow-lg"
                          >
                            <FiGithub size={24} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-400 transform hover:scale-125 transition-all shadow-lg"
                          >
                            <FiExternalLink size={24} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                {project.period && (
                  <p className="text-blue-400 text-sm font-medium mb-4">{project.period}</p>
                )}
                <p className="text-gray-300 mb-6">
                  {project.description}
                </p>
                {project.highlights && (
                  <ul className="mb-6 space-y-2">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-gray-400 text-sm flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-900 text-blue-200 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 items-center">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2.5 h-10 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-gray-900 transition-colors font-medium whitespace-nowrap"
                    >
                      <FiExternalLink className="mr-2" /> Live Demo
                    </a>
                  )}
                  {project.backendUrl && (
                    <span
                      className="flex items-center justify-center px-4 py-2.5 h-10 rounded-lg bg-green-600/20 text-green-400 border border-green-600/50 font-medium whitespace-nowrap cursor-default shadow-[0_0_15px_rgba(34,197,94,0.1)]"
                    >
                      Backend ({project.id === 4 ? 'Vercel' : 'Render'})
                    </span>
                  )}
                  {project.frontendUrl && (
                    <span
                      className="flex items-center justify-center px-4 py-2.5 h-10 rounded-lg bg-purple-600/20 text-purple-400 border border-purple-600/50 font-medium whitespace-nowrap cursor-default shadow-[0_0_15px_rgba(168,85,247,0.1)]"
                    >
                      Frontend ({project.id === 2 || project.id === 4 ? 'Vercel' : 'Render'})
                    </span>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2.5 h-10 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors whitespace-nowrap"
                    >
                      <FiGithub className="mr-2" /> View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        {showVideo && selectedVideo && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => handleVideoToggle()}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                handleVideoToggle();
              }}
            >
              <FiX className="w-8 h-8" />
            </button>
            <div className="w-full max-w-4xl" onClick={e => e.stopPropagation()}>
              <video
                src={selectedVideo}
                controls
                autoPlay
                muted
                className="w-full rounded-lg shadow-2xl"
                key={selectedVideo}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
