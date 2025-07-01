import { motion } from 'framer-motion';

const services = [
  'Projelendirme',
  'Mühendislik Hizmeti',
  'İnşaat Taahhüt Hizmetleri',
  'İç Dış Dekorasyon',
  'Anahtar Teslim Tadilat',
];

const Services = () => {
  return (
    <section id="services" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#555555] via-[#666666] to-[#555555]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Büyük dönen kare */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/6 w-80 h-80 border-2 border-white/10 rounded-3xl opacity-30"
        />
        {/* Yavaşça kayan büyük daire */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-10 right-1/5 w-96 h-96 border-2 border-gray-200/20 rounded-full opacity-20"
        />
        {/* Küçük hareketli üçgen (simge olarak div) */}
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 right-1/4 w-16 h-16 border-l-4 border-t-4 border-white/20 opacity-30 rotate-12"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
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
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-10 w-full flex flex-col items-center justify-center"
        >
          {/* Başlık */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white transition-all duration-300 group relative"
          >
            <span className="group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-gray-200 group-hover:to-white group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              Hizmetlerimiz
            </span>
          </motion.h2>

          {/* Hizmetler Listesi */}
          <ul className="flex flex-col gap-6 items-center justify-center mt-8">
            {services.map((service, idx) => (
              <motion.li
                key={service}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.15, duration: 0.7 }}
                viewport={{ once: true }}
                className="group text-2xl sm:text-3xl font-semibold text-gray-200 cursor-pointer transition-all duration-300 relative px-2"
              >
                <span className="transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-gray-300 group-hover:to-gray-500">
                  {service}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-white via-gray-400 to-black rounded-full transition-all duration-300 group-hover:w-full"></span>
              </motion.li>
            ))}
          </ul>

          {/* Alt Slogan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            viewport={{ once: true }}
            className="mt-16 group"
          >
            <span className="block font-bold text-3xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent tracking-wide">
              BT Yapı İnşaat ile Her Yapı, Güvenle Yükselir.
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
