import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#444444] via-[#555555] to-[#444444]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating geometric shapes */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-24 left-24 w-28 h-28 border border-blue-300/30 rounded-2xl"
        />
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-32 right-32 w-20 h-20 border border-purple-300/30 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/3 w-16 h-16 border border-gray-400/20 transform rotate-45"
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-8 w-full flex flex-col items-center justify-center"
        >
          {/* Başlık */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-400 via-white to-gray-300 bg-clip-text text-transparent"
          >
            Hakkımızda
          </motion.h2>

          {/* Alt başlık ve içerik */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            BT Yapı İnşaat olarak, yenilikçi ve sürdürülebilir çözümlerle yaşam alanlarını geleceğe taşıyoruz. 
            Her projede estetik, fonksiyonellik ve güvenliği bir arada sunmayı hedefliyoruz. 
            <span className="block mt-4 text-base text-gray-300">Vizyonumuz; sektörde öncü, güvenilir ve yaratıcı projelere imza atmak.<br/>Misyonumuz; müşteri memnuniyetini ve kaliteyi en üst düzeyde tutmak.</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
