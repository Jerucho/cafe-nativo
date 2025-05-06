import { Title } from "../Title";

export const OurHistory = () => {
  return (
    <section className="container bg-white px-6 py-20 md:px-10">
      <Title
        title="Nuestra Historia."
        description="Conocé nuestra historia y descubrí la esencia de nuestro café."
      />

      <div className="my-16 flex flex-col items-center justify-between gap-12 md:flex-row">
        {/* Texto */}
        <div className="w-full max-w-xl text-lg leading-relaxed text-gray-700 md:w-1/2">
          <p>
            En <span className="font-semibold text-primary">Café Nativo</span>,
            creemos que cada taza cuenta una historia. Trabajamos directamente
            con productores de café de diferentes regiones, asegurando prácticas
            sostenibles y comercio justo.
          </p>
          <br />
          <p>
            Nuestro proceso de tostado artesanal resalta las características
            únicas de cada grano, creando perfiles de sabor que despiertan los
            sentidos y conectan con la esencia de su origen.
          </p>
        </div>

        {/* Imagen */}
        <figure className="w-full md:w-1/2">
          <img
            loading="lazy"
            src="/cajero-mostrador.webp"
            alt="Mostrador del local de Café Nativo"
            className="h-[400px] w-full rounded-2xl object-cover shadow-lg"
          />
        </figure>
      </div>
    </section>
  );
};
