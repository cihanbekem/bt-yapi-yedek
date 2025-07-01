import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { XMarkIcon } from '@heroicons/react/24/outline';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [alert, setAlert] = useState(null); // { type: 'success' | 'error', message: string }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_hr8hp0b',
      'template_4ts5wra',
      form.current,
      'Y1U1rUJf0K6DiUQuh'
    ).then(
      (result) => {
        setAlert({ type: 'success', message: 'Mesajınız başarıyla gönderildi!' });
        form.current.reset();
      },
      (error) => {
        setAlert({ type: 'error', message: 'Mesaj gönderilemedi, lütfen tekrar deneyin.' });
      }
    );
    setTimeout(() => setAlert(null), 2000);
  };

  // Alert'ı manuel kapatma fonksiyonu
  const closeAlert = () => setAlert(null);

  return (
    <section id="contact" className="relative min-h-screen w-full flex items-center justify-center bg-white text-black overflow-hidden">
      {/* Centered Alert Modal */}
      <AnimatePresence>
        {alert && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            {/* Overlay - tıklanınca kapansın */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm cursor-pointer" onClick={closeAlert} />
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={`relative z-10 px-8 py-6 rounded-2xl shadow-2xl text-center min-w-[280px] max-w-xs mx-auto
                ${alert.type === 'success' ? 'bg-white text-green-600 border border-green-200' : 'bg-white text-red-600 border border-red-200'}`}
            >
              {/* Çarpı ikonu */}
              <button onClick={closeAlert} className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 transition-colors">
                <XMarkIcon className="w-6 h-6 text-gray-400 hover:text-gray-700" />
              </button>
              <span className="text-lg font-semibold block mt-2">{alert.message}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-8 transition-all duration-300 group relative cursor-pointer"
          >
            <span className="group-hover:bg-gradient-to-r group-hover:from-black group-hover:via-gray-500 group-hover:to-gray-900 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              İletişim
            </span>
          </motion.h2>

          {/* Form */}
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 items-center w-full max-w-lg mx-auto">
            <input
              type="text"
              name="user_name"
              placeholder="İsim"
              required
              className="w-full bg-transparent border-b-2 border-gray-300 focus:border-black outline-none py-3 px-2 text-lg text-black placeholder-gray-400 transition-all duration-200"
            />
            <input
              type="tel"
              name="user_phone"
              placeholder="Telefon Numarası"
              required
              className="w-full bg-transparent border-b-2 border-gray-300 focus:border-black outline-none py-3 px-2 text-lg text-black placeholder-gray-400 transition-all duration-200"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Mail"
              required
              className="w-full bg-transparent border-b-2 border-gray-300 focus:border-black outline-none py-3 px-2 text-lg text-black placeholder-gray-400 transition-all duration-200"
            />
            <textarea
              name="message"
              placeholder="Mesaj"
              rows={5}
              required
              className="w-full bg-transparent border-b-2 border-gray-300 focus:border-black outline-none py-3 px-2 text-lg text-black placeholder-gray-400 transition-all duration-200 resize-none"
            />
            <button
              type="submit"
              className="mt-4 w-full py-3 rounded-full bg-black text-white font-semibold text-lg transition-all duration-200 shadow-md hover:bg-gray-100 hover:text-black"
            >
              Gönder
            </button>
          </form>

          {/* Sosyal Medya */}
          <div className="flex gap-8 justify-center items-center mt-10">
            <a
              href="https://www.instagram.com/btyapinsaat/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors duration-200 text-3xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61552676894356"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors duration-200 text-3xl"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>
          <div className="w-full flex justify-center mt-12">
            <span className="text-xs text-black">BT Yapı İnşaat - Tüm hakları saklıdır.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
