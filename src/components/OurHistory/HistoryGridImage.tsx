export const HistoryGridImage = () => {
  return (
    <div className="px-4 py-8">
      <div className="grid h-[500px] grid-cols-3 grid-rows-2 gap-4">
        {/* Imagen vertical izquierda */}
        <div className="row-span-2 overflow-hidden rounded-xl shadow-md">
          <img
            loading="lazy"
            src="taza-cafe.webp"
            alt="Café vertical"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Imagen superior centro */}
        <div className="overflow-hidden rounded-xl shadow-md">
          <img
            loading="lazy"
            src="barista.webp"
            alt="Café centro"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Imagen superior derecha */}
        <div className="overflow-hidden rounded-xl shadow-md">
          <img
            loading="lazy"
            src="cafeteria.webp"
            alt="Café derecha"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Imagen inferior centro-derecha (grande) */}
        <div className="col-span-2 overflow-hidden rounded-xl shadow-md">
          <img
            loading="lazy"
            src="cajero-mostrador.webp"
            alt="Café grande"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
