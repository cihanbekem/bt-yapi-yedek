import { motion } from 'framer-motion';
import { ChevronDownIcon, PlayIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#363636] via-[#444] to-[#222]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-32 h-32 border border-blue-400/30 rounded-lg"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-20 w-24 h-24 border border-purple-400/30 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-40 left-1/4 w-20 h-20 border border-gray-400/30 transform rotate-45"
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 w-full flex flex-col items-center justify-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 bg-[#444]/70 backdrop-blur-md rounded-full border border-blue-400/30"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-gray-100 text-sm font-medium">5+ Yıllık Deneyim</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight w-full"
          >
            <span className="block">Hayallerinize</span>
            <span className="block bg-gradient-to-r from-black-400 via-gray-400 to-black-400 bg-clip-text text-transparent">
              İmzamızı Atıyoruz
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl sm:text-2xl text-gray-200 w-full max-w-5xl mx-auto leading-relaxed"
          >
            Her projeye özgü ihtiyaçları doğru analiz ederek, projelendirme, mühendislik, taahhüt, dekorasyon ve anahtar teslim tadilat süreçlerini bütüncül bir yaklaşımla ele alıyor; estetik ve işlevselliği bir arada sunan yapılar inşa ediyoruz.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              onClick={() => {
                const element = document.querySelector('#projects');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span>Projelerimizi İncele</span>
              <PlayIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 text-gray-500" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group border-2 border-gray-400/30 text-gray-100 px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#444]/70 hover:border-blue-400/30 transition-all duration-300 backdrop-blur-sm"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              İletişime Geç
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full pt-12"
          >
            {[
              { number: '10+', label: 'Tamamlanan Proje' },
              { number: '50+', label: 'Mutlu Müşteri' },
              { number: '5+', label: 'Yıllık Deneyim' },
              { number: '100%', label: 'Müşteri Memnuniyeti' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                className="text-center w-full"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToNext}
          className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
        >
          <ChevronDownIcon className="w-8 h-8" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
