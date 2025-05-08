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
    <div className="flex flex-col items-center justify-center">
      <div className="container flex h-auto min-h-screen flex-col gap-10 p-4">
        <Title title="Galería" description="Grábate en el momento" />
        <motion.div
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
          style={{ y: imageY }}
        >
          {gallery.map((item) => (
            <div
              key={item.id}
              ref={(el) => {
                imageRefs.current[item.id] = el;
              }}
              data-id={item.id}
              className="relative aspect-square overflow-hidden rounded-lg bg-gray-200"
            >
              {visibleImages.includes(item.id) && (
                <motion.img
                  src={item.image}
                  alt="Gallery"
                  className="h-full w-full object-cover"
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
            </div>
          ))}
        </motion.div>
      </div>
      <a
        href="https://www.instagram.com/cafecafecafe/"
        className="mx-auto flex items-center justify-center rounded-md border border-primary px-6 py-3 text-center text-lg text-primary transition-colors duration-200 hover:bg-primary hover:text-white"
      >
        <Instagram className="mr-2 h-6 w-6" />
        Seguinos en Instagram
      </a>
    </div>
  );
};
