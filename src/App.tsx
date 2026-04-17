import "./App.css";
import { MessageCircleCheck } from "lucide-react";

import Navbar from "./Home/navbar";
import Hero from "./Home/hero";
import Consultorio from "./Home/consultorio";
import Footer from "./Home/footer";
import Atuacao from "./Home/atuacao";
import SobreMim from "./Home/sobre";
import WppFloatingButton from "./components/WppFloatingButton";

function App() {
  return (
    <>
      <div className="bg-brand-bg  min-h-[90vh] rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/50 ">
        <nav>
          <Navbar />
        </nav>
        <main>
          <Hero />
          <Atuacao />
          <Consultorio />
          <SobreMim />
        </main>
        <Footer />
        <WppFloatingButton />
      </div>
    </>
  );
}

export default App;
