import useEmblaCarousel from "embla-carousel-react";
import { Title } from "./Title";
import { useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    company: "Influencer Gastronómico",
    image: "https://i.pravatar.cc/150",
    quote:
      "Como profesional del café, puedo decir que la calidad y el cuidado que ponen en cada preparación es excepcional. Un lugar que respeta el café.",
  },
  {
    name: "Luigia Figaro",
    company: "Influencer Gastronómica",
    image: "https://i.pravatar.cc/150",
    quote:
      "La variedad de cafés y el sabor único de cada taza son una delicia. Recomiendo este lugar a todos los amantes del café.",
  },
  {
    name: "Mark Roldan",
    company: "Veldor S.A",
    image: "https://i.pravatar.cc/150",
    quote:
      "Un lugar increíble para disfrutar del café. La atención y el servicio son excepcionales.",
  },
];

export const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);
  return (
    <div className="w-100% container bg-white p-5">
      <div className="flex w-full flex-col gap-10 rounded-xl p-5 shadow-sm">
        <Title title="Nuestros Clientes" description="Porque nos eligen" />
        <div
          className="mx-auto w-full max-w-3xl overflow-hidden"
          ref={emblaRef}
        >
          <div className="flex">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="flex-[0_0_100%] px-4">
                <div
                  className={`text-muted-foreground flex h-[300px] flex-col items-center justify-center gap-4 rounded-xl border border-muted/20 p-5`}
                >
                  <Quote className="h-12 w-12 text-muted" />
                  <p className="px-6 text-center">{testimonial.quote}</p>
                  <div className="flex flex-col items-center justify-center gap-2">
                    <img
                      src={testimonial.image}
                      alt="Avatar de usuario"
                      className="h-12 w-12 rounded-full"
                    />
                    <div className="flex flex-col items-center justify-center gap-2">
                      <p>{testimonial.name}</p>
                      <p>{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="my-4 flex justify-center gap-5">
            <button className="cursor-pointer rounded-full border border-muted p-2 transition hover:bg-gray-100">
              <ChevronLeft
                className="h-6 w-6 text-muted"
                onClick={scrollPrev}
              />
            </button>
            <button className="cursor-pointer rounded-full border border-muted p-2 transition hover:bg-gray-100">
              <ChevronRight
                className="h-6 w-6 text-muted"
                onClick={scrollNext}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
