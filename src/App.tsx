import "./App.css";
import { useState } from "react";
import Navbar from "./Home/navbar";
import Hero from "./Home/hero";
import Consultorio from "./Home/consultorio";
import Footer from "./Home/footer";
import Atuacao from "./Home/atuacao";
import SobreMim from "./Home/sobre";
import WppFloatingButton from "./components/WppFloatingButton";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-brand-bg  min-h-[90vh] rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/50 ">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div aria-hidden={isMenuOpen}>
        <Hero />
        <Atuacao />
        <Consultorio />
        <SobreMim />
      </div>
      <Footer />
      <WppFloatingButton />
    </div>
  );
}

export default App;
