import { Banner } from "./components/Banner";
import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";
import { OurHistory } from "./components/OurHistory/OurHistory";
import { Testimonials } from "./components/Testimonials";

function App() {
  return (
    <div className="font-display">
      <Navbar />
      <Banner />
      <div className="z-20 bg-white">
        <OurHistory />
        <Menu />
        <Testimonials />
      </div>
      {/* Todos los elementos deben tener un fondo para que no aparezca el video del banner por detras */}
    </div>
  );
}

export default App;
