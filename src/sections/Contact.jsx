import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">İletişim</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Projeleriniz için bizimle iletişime geçin.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
