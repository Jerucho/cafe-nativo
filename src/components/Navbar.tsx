import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect, RefObject } from "react";

interface NavbarProps {
  refs: {
    nuestraHistoriaRef: RefObject<HTMLElement | null>;
    menuRef: RefObject<HTMLElement | null>;
    testimoniosRef: RefObject<HTMLElement | null>;
    galeriaRef: RefObject<HTMLElement | null>;
    contactoRef: RefObject<HTMLElement | null>;
  };
}

export const Navbar = ({ refs }: NavbarProps) => {
  const { scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const scrollTo = (ref: RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // cerrar menú mobile después del click
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrolled(latest > 0.1);
  });

  const handleOpenNavbar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Nosotros", ref: refs.nuestraHistoriaRef },
    { name: "Menú", ref: refs.menuRef },
    { name: "Testimonio", ref: refs.testimoniosRef },
    { name: "Galería", ref: refs.galeriaRef },
    { name: "Contacto", ref: refs.contactoRef },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="fixed top-0 z-50 w-full text-sm text-white backdrop-blur-md"
      animate={{
        backgroundColor: scrolled ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0)",
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
    >
      <header className="container flex h-16 w-full items-center justify-between">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Logo
        </motion.h2>

        {/* Desktop Menu */}
        <motion.ul
          className="hidden list-none items-center justify-between gap-8 md:flex"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {menuItems.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer transition-colors hover:text-secondary"
              onClick={() => scrollTo(item.ref)}
            >
              {item.name}
            </motion.li>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-sm bg-secondary px-4 py-2 text-white transition-colors duration-500 hover:cursor-pointer hover:bg-hover"
          >
            Reservar
          </motion.button>
        </motion.ul>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={handleOpenNavbar}
          className="rounded-sm bg-secondary p-2 text-white transition-colors duration-500 hover:cursor-pointer hover:bg-hover md:hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Menu size={24} />
        </motion.button>
      </header>

      {/* Mobile Menu */}
      <motion.div
        className="fixed top-0 left-0 z-50 h-screen w-full bg-black/95 backdrop-blur-md md:hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="container flex h-full flex-col items-center justify-center">
          <motion.button
            onClick={handleOpenNavbar}
            className="absolute top-4 right-4 text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={24} />
          </motion.button>

          <motion.ul className="flex flex-col items-center gap-8">
            {menuItems.map((item) => (
              <motion.li
                key={item.name}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer text-xl transition-colors hover:text-secondary"
                onClick={() => scrollTo(item.ref)}
              >
                {item.name}
              </motion.li>
            ))}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-sm bg-secondary px-6 py-3 text-lg text-white transition-colors duration-500 hover:cursor-pointer hover:bg-hover"
            >
              Reservar
            </motion.button>
          </motion.ul>
        </div>
      </motion.div>
    </motion.div>
  );
};
