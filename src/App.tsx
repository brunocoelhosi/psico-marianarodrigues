import "./App.css";
import { MessageCircleCheck } from "lucide-react";

import Navbar from "./Home/navbar";
import Hero from "./Home/hero";
import Consultorio from "./Home/consultorio";
import Footer from "./Home/footer";
import Atuacao from "./Home/atuacao";
import SobreMim from "./Home/sobre";

function App() {
  return (
    <>
      <div className="bg-brand-bg  min-h-[90vh] rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/50 ">
        <Navbar />
        <Hero />
        <Atuacao />
        <Consultorio />
        <SobreMim />
        <Footer />

        {/* Botão flutuante WhatsApp */}
        <a
          href="https://wa.me/+5534996373011"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition z-50"
        >
          <MessageCircleCheck size={25} />
        </a>
      </div>
    </>
  );
}

export default App;
