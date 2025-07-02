import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const ProjectCard = ({
  title,
  cover,
  onClick,
  expanded = false,
  images = [],
  galleryIndex = 0,
  onClose,
  onNext,
  onPrev,
  zIndex = 10,
}) => (
  <AnimatePresence>
    {!expanded && (
      <motion.div
        className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group border border-gray-100 hover:border-gray-300 flex flex-col h-full min-h-[220px]"
        onClick={onClick}
        tabIndex={0}
        role="button"
        aria-label={title}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={cardVariants}
        transition={{ duration: 0.5, delay: 0.1 }}
        layout
      >
        <img
          src={cover}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="flex-1 flex items-end justify-center p-4">
          <h3 className="text-lg font-bold text-gray-800 text-center group-hover:text-blue-700 transition-colors duration-300">
            {title}
          </h3>
        </div>
      </motion.div>
    )}

    {expanded && (
      <motion.div
        key="modal"
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-60 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ zIndex }}
        onClick={onClose}
      >
        <motion.div
          layout
          className="relative bg-white rounded-xl shadow-2xl flex flex-col items-center w-full max-w-4xl mx-auto p-6"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.95 }}
          transition={{ duration: 0.4 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-black text-3xl font-bold z-10"
            onClick={(e) => {
              e.stopPropagation();
              if (onClose) onClose();
            }}
            aria-label="Kapat"
          >
            <FiX size={24} />
          </button>

          {/* Görsel */}
          <img
            src={images[galleryIndex]}
            alt="Proje Fotoğrafı"
            className="w-full h-[500px] object-cover rounded-lg mb-6"
          />

          {/* Başlık */}
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">{title}</h3>

          {/* Navigasyon Butonları */}
          <div className="flex justify-between items-center w-full px-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (onPrev) onPrev();
              }}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-300 text-xl transition"
              aria-label="Önceki"
            >
              <FiArrowLeft />
            </button>

            <span className="text-gray-600 text-sm">
              {galleryIndex + 1} / {images.length}
            </span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                if (onNext) onNext();
              }}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-300 text-xl transition"
              aria-label="Sonraki"
            >
              <FiArrowRight />
            </button>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default ProjectCard;
