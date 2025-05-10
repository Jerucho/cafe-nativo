import { Banner } from "./components/Banner";
import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";
import { OurHistory } from "./components/OurHistory/OurHistory";
import { Testimonials } from "./components/Testimonials";
import { Gallery } from "./components/Gallery";
import { LastBanner } from "./components/LastBanner";
import { Footer } from "./components/Footer";
import { useRef } from "react";
function App() {
  const ourHistoryRef = useRef<HTMLElement | null>(null);
  const menuRef = useRef<HTMLElement | null>(null);
  const testimoniosRef = useRef<HTMLElement | null>(null);
  const galeriaRef = useRef<HTMLElement | null>(null);
  const contactoRef = useRef<HTMLElement | null>(null);

  return (
    <div className="font-display">
      <Navbar
        refs={{
          nuestraHistoriaRef: ourHistoryRef,
          menuRef: menuRef,
          testimoniosRef: testimoniosRef,
          galeriaRef: galeriaRef,
          contactoRef: contactoRef,
        }}
      />
      <Banner />
      <div className="relative z-20 bg-white">
        <OurHistory ref={ourHistoryRef} />
        <Menu ref={menuRef} />
        <Testimonials ref={testimoniosRef} />
        <Gallery ref={galeriaRef} />
      </div>
      <LastBanner ref={contactoRef} />
      <Footer />
      {/* Todos los elementos deben tener un fondo para que no aparezca el video del banner por detras */}
    </div>
  );
}

export default App;
