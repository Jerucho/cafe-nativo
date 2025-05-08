import { motion } from "motion/react";
import { Instagram, Facebook, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full bg-zinc-900 text-zinc-200">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-10 md:flex-row">
        {/* Logo o Nombre */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-semibold text-white"
        >
          Café Nativo
        </motion.div>

        {/* Enlaces sociales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-4"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-amber-500"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-amber-500"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="mailto:contacto@cafearg.com"
            className="transition hover:text-amber-500"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </motion.div>

        {/* Derechos reservados */}
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-zinc-400"
        >
          © {new Date().getFullYear()} Café Nativo — Todos los derechos
          reservados
        </motion.p>
      </div>
    </footer>
  );
};
