import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { useState } from 'react';
import btLogoBuyuk from '../assets/bt_logo_buyuk.png';
import btLogoKucuk from '../assets/bt_logo_kucuk.png';
import btLogoBuyukBeyaz from '../assets/bt_logo_buyuk_beyaz.png';
import btLogoKucukBeyaz from '../assets/bt_logo_kucuk_beyaz.png';
import btStarbucksLogo from '../assets/bt_starbucks.jpeg';
import btStarbucks1 from '../assets/bt_starbucks_1.jpeg';
import btStarbucks2 from '../assets/bt_starbucks_2.jpeg';
import btRamadaLogo from '../assets/bt_ramada.jpeg';
import btRamada1 from '../assets/bt_ramada1.jpeg';
import btRamada2 from '../assets/bt_ramada2.jpeg';
import btRamada3 from '../assets/bt_ramada3.jpeg';
import btSpaceLogo from '../assets/bt_space.jpeg';
import btSpace1 from '../assets/bt_space1.jpeg';
import btSpace2 from '../assets/bt_space2.jpeg';
import btEvLogo from '../assets/bt_tadilat.jpeg';
import btEv1 from '../assets/bt_tadilat1.jpeg';
import btEv2 from '../assets/bt_tadilat2.jpeg';
import btEv3 from '../assets/bt_tadilat3.jpeg';
import btEv4 from '../assets/bt_tadilat4.jpeg'; 
import btVillaLogo from '../assets/bt_villacephe.jpeg';
import btVilla1 from '../assets/bt_villacephe1.jpeg';
import btVilla2 from '../assets/bt_villacephe2.jpeg';
import btVilla3 from '../assets/bt_villacephe3.jpeg';
import btVilla4 from '../assets/bt_villacephe4.jpeg';
import btDavutlarVillaLogo from '../assets/bt_davutlar.jpeg';
import btDavutlarVilla1 from '../assets/bt_davutlar1.jpeg';
import btDavutlarVilla2 from '../assets/bt_davutlar2.jpeg';
import btDavutlarVilla3 from '../assets/bt_davutlar3.jpeg';

const demoProjects = [
  {
    title: 'Starbucks İç Dış Bakım, Onarım ve Tadilat',
    cover: btStarbucksLogo,
    images: [btStarbucksLogo, btStarbucks1, btStarbucks2],
  },
  {
    title: 'Ramada Hotel & Suites Havuz İnşaatı Onarım ve Tadilat',
    cover: btRamadaLogo,
    images: [btRamadaLogo,btRamada1, btRamada2, btRamada3],
  },
  {
    title: 'Space Garden Villaları',
    cover: btSpaceLogo,
    images: [btSpaceLogo, btSpace1, btSpace2],
  },
  {
    title: 'Ev Tadilatı',
    cover: btEvLogo,
    images: [btEvLogo, btEv1, btEv2, btEv3, btEv4],
  },
  {
    title: 'Villa Cephe Tasarımı',
    cover: btVillaLogo,
    images: [btVillaLogo, btVilla1, btVilla2, btVilla3, btVilla4],
  },
  {
    title: 'Kuşadası Davutlar Villa',
    cover: btDavutlarVillaLogo,
    images: [btDavutlarVillaLogo, btDavutlarVilla1, btDavutlarVilla2, btDavutlarVilla3],
  },


];

export default function Projects() {
  const [expandedIdx, setExpandedIdx] = useState(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const openCard = (idx) => {
    setExpandedIdx(idx);
    setGalleryIndex(0);
  };
  const closeCard = () => setExpandedIdx(null);
  const nextImg = () => setGalleryIndex((i) => (i + 1) % demoProjects[expandedIdx].images.length);
  const prevImg = () => setGalleryIndex((i) => (i - 1 + demoProjects[expandedIdx].images.length) % demoProjects[expandedIdx].images.length);

  return (
    <section id="projects" className="relative min-h-screen w-full flex items-start justify-center bg-gradient-to-br from-gray-400 via-gray-200 via-gray-250 to-gray-350 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-start pt-16">
        {/* Logo and heading */}
        <div className="flex flex-row items-center justify-center gap-6 w-full mb-10">
          <motion.img
            src={btLogoBuyuk}
            alt="BT Yapı İnşaat Logo"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-28 h-28 sm:w-32 sm:h-32 object-contain"
          />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold bg-gradient-to-r from-black via-gray-500 to-gray-800 bg-clip-text text-transparent"
          >
            Projelerimiz
          </motion.h2>
        </div>

        {/* Project Cards Grid */}
        <div className={`mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full transition-all duration-300 items-stretch`}>
          {demoProjects.map((proj, idx) => (
            <div
              key={proj.title}
              className={
                expandedIdx !== null && expandedIdx !== idx
                  ? 'filter blur-sm opacity-60 scale-95 transition-all duration-300 pointer-events-none'
                  : 'transition-all duration-300'
              }
              style={{ minHeight: '220px', height: '100%' }}
            >
              <ProjectCard
                title={proj.title}
                cover={proj.cover}
                onClick={() => openCard(idx)}
                expanded={expandedIdx === idx}
                images={proj.images}
                galleryIndex={galleryIndex}
                onClose={closeCard}
                onNext={nextImg}
                onPrev={prevImg}
                zIndex={expandedIdx === idx ? 50 : 10}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
