import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiMonitor, FiCloud } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Java Backend Developer with hands-on experience building RESTful APIs and Microservices
            using Core Java, Spring Boot, and Hibernate/JPA. Skilled in JWT-based security,
            multithreading, and database design with MySQL and PostgreSQL. Familiar with Docker,
            AWS deployment, and CI/CD pipelines to develop secure and high-performance backend
            systems for web and mobile applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-white mb-6">My Expertise</h3>
            <p className="text-gray-300 mb-6">
              I design and build scalable backend systems with Spring Boot, focusing on layered
              architecture, secure REST APIs, and efficient data persistence with Hibernate/JPA.
            </p>
            <p className="text-gray-300">
              I also work with React.js and modern frontend basics to support full-stack delivery,
              and integrate messaging (Kafka), caching (Redis), and AI (Spring AI) where projects
              require it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FeatureCard
                icon={<FiCode />}
                title="Backend Development"
                description="Java, Spring Boot, Spring MVC, Spring Security, Hibernate, JPA, Microservices, RESTful APIs, JWT, RBAC."
              />
              <FeatureCard
                icon={<FiMonitor />}
                title="Frontend"
                description="HTML5, CSS3, JavaScript, and React.js for responsive web interfaces."
              />
              <FeatureCard
                icon={<FiDatabase />}
                title="Databases"
                description="MySQL, PostgreSQL, Redis — database design, SQL queries, and data modeling."
              />
              <FeatureCard
                icon={<FiCloud />}
                title="Cloud & DevOps"
                description="AWS (EC2, S3, IAM, RDS), Docker, CI/CD (GitHub Actions), Git, Maven, Postman."
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
      <div className="text-blue-400 mb-4 text-2xl">{icon}</div>
      <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default About;
