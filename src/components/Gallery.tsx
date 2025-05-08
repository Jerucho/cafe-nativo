import { motion, useScroll, useTransform } from "motion/react";
import { Title } from "./Title";
import { useEffect, useRef, useState } from "react";
import { Instagram } from "lucide-react";

const gallery = [
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/1284603827/es/foto/reuni%C3%B3n-de-amigos-en-la-cafeter%C3%ADa-en-un-fin-de-semana.jpg?s=612x612&w=0&k=20&c=qenRMLujVx7mc8EtsRUCvDycgFl_Ekixb0BMgmEg0UY=",
  },
  {
    id: 2,
    image:
      "https://thumbs.dreamstime.com/b/gente-joven-que-se-encuentra-en-la-cafeter%C3%ADa-95820274.jpg",
  },
  {
    id: 3,
    image:
      "https://st4.depositphotos.com/12731704/24376/i/450/depositphotos_243768772-stock-photo-couple-eating-pizza-snack-outdoors.jpg",
  },
  {
    id: 4,
    image:
      "https://img.freepik.com/fotos-premium/vista-superior-amigos-brindando-capuchino-restaurante-cafeteria_101731-584.jpg",
  },
  {
    id: 5,
    image:
      "https://img.freepik.com/foto-gratis/senoras-beben-cafe-mujeres-sentadas-mesa-amigos-lindo-perro_1157-41807.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 6,
    image:
      "https://media.istockphoto.com/id/1351860620/es/foto/grupo-de-personas-brindando-caf%C3%A9-con-leche-en-la-azotea-del-bar-de-caf%C3%A9-amigos-hablando-y.jpg?s=612x612&w=0&k=20&c=ug7CzuP8F0saPdr3I8_hLq-5ifb93ajC1Hwg3Ya-pX0=",
  },
];

export const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState<number[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute("data-id"));
            setVisibleImages((prev) => [...prev, id]);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "50px",
      },
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      className="flex min-h-screen flex-col items-center justify-center gap-10 py-20"
      style={{ opacity }}
    >
      <div className="container flex flex-col gap-10 p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Title title="Galería" description="Grábate en el momento" />
        </motion.div>
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          style={{ y: imageY }}
        >
          {gallery.map((item) => (
            <div
              key={item.id}
              ref={(el) => {
                imageRefs.current[item.id] = el;
              }}
              data-id={item.id}
              className="group relative aspect-square overflow-hidden rounded-xl bg-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              {visibleImages.includes(item.id) && (
                <motion.img
                  src={item.image}
                  alt="Gallery"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  whileHover={{ scale: 1.05 }}
                  style={{ transformOrigin: "center" }}
                />
              )}
              <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </motion.div>
      </div>
      <motion.a
        href="https://www.instagram.com/cafecafecafe/"
        className="group relative mx-auto flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-primary px-8 py-4 text-center text-lg font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Instagram className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
        <span>Seguinos en Instagram</span>
      </motion.a>
    </motion.div>
  );
};
