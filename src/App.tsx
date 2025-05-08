import { Banner } from "./components/Banner";
import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";
import { OurHistory } from "./components/OurHistory/OurHistory";
import { Testimonials } from "./components/Testimonials";
import { Gallery } from "./components/Gallery";
import { LastBanner } from "./components/LastBanner";
function App() {
  return (
    <div className="font-display">
      <Navbar />
      <Banner />
      <div className="relative z-20 bg-white">
        <OurHistory />
        <Menu />
        <Testimonials />
        <Gallery />
      </div>
      <LastBanner />
      {/* Todos los elementos deben tener un fondo para que no aparezca el video del banner por detras */}
    </div>
  );
}

export default App;
