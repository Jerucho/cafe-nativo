import { motion } from "motion/react";

export const LastBanner = ({
  ref: contactoRef,
}: {
  ref: React.RefObject<HTMLElement | null>;
}) => {
  return (
    <section ref={contactoRef} className="relative w-full">
      <div className="relative h-[600px] w-full bg-[url('https://buenazo.cronosmedia.glr.pe/original/2024/08/22/66c7c58d2d7a032cea207d04.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-8 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="mb-4 text-5xl font-bold text-white">
              El mejor café de la ciudad, posta
            </h1>
            <p className="text-xl text-gray-200">
              Un lugar tranqui donde cada taza tiene su historia
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center gap-4 rounded-lg bg-white/10 p-6 backdrop-blur-md"
          >
            <h2 className="text-2xl font-semibold text-white">
              Pasá a visitarnos
            </h2>
            <div className="flex items-center gap-2 text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p>Av. Principal 123, pleno centro</p>
            </div>
            <div className="flex items-center gap-2 text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Todos los días de 7:00 a 22:00, ¡sin excusas!</p>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-amber-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-amber-700"
          >
            Abrir en Google Maps
          </motion.button>
        </div>
      </div>
    </section>
  );
};
