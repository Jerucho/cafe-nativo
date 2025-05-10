import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export const Banner = () => {
  const containerRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollY } = useScroll();

  const textY = useTransform(scrollY, [0, 1000], [0, -200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (video) {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.1 },
    );

    const currentRef = containerRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
      aria-label="Banner principal"
    >
      {/* Fondo de video parallax */}
      <motion.div
        // style={{ y: videoY }}
        className="fixed inset-0 z-[-3] will-change-transform"
        aria-hidden="true"
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src="/banner-video.webm"
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 z-[-4] bg-black/80" />
      </motion.div>

      {/* Contenido del banner */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-4 text-center text-white will-change-transform"
      >
        <motion.h1
          className="text-5xl font-bold sm:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Despertá tus sentidos con cada taza
        </motion.h1>
        <motion.p
          className="max-w-2xl text-lg font-light sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Café de especialidad tostado artesanalmente, con sabores únicos que
          cuentan historias
        </motion.p>

        <motion.div
          className="mt-4 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="rounded bg-secondary px-6 py-2 text-lg text-white transition-all duration-300 hover:bg-primary focus:ring-2 focus:ring-white focus:outline-none">
            Reservar
          </button>

          <button className="rounded border border-white bg-transparent px-6 py-2 text-lg text-white transition-colors duration-300 hover:bg-white hover:text-black focus:ring-2 focus:ring-white focus:outline-none">
            Ver Menú
          </button>
        </motion.div>
      </motion.div>

      {/* Flecha animada */}
      <motion.div
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 stroke-white"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </section>
  );
};
