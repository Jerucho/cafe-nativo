import { Banner } from "./components/Banner";
import { Navbar } from "./components/Navbar";
import { OurHistory } from "./components/OurHistory/OurHistory";

function App() {
  return (
    <div className="font-display">
      <Navbar />
      <Banner />
      <div className="z-10 bg-white">
        <OurHistory />
      </div>
      {/* Todos los elementos deben tener un fondo para que no aparezca el video del banner por detras */}
    </div>
  );
}

export default App;
