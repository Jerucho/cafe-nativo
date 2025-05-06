import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrolled(latest > 0.1);
  });

  return (
    <motion.div
      className="fixed top-0 z-50 w-full text-sm text-white backdrop-blur-md"
      animate={{
        backgroundColor: scrolled ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0)",
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
    >
      <header className="container flex h-16 w-full items-center justify-between">
        <h2>Logo</h2>
        <ul className="flex list-none items-center justify-between gap-4">
          <li>Nosotros</li>
          <li>Menú</li>
          <li>Testimonio</li>
          <li>Galería</li>
          <li>Contacto</li>
          <button className="rounded-sm bg-secondary px-4 py-2 text-white transition-colors duration-500 hover:cursor-pointer hover:bg-hover">
            Reservar
          </button>
        </ul>
      </header>
    </motion.div>
  );
};
