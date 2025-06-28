import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projelerimiz</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tamamladığımız başarılı projelerimizden örnekler.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
