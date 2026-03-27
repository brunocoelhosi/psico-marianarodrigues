import { MessageCircle } from "lucide-react";
import h1 from "../assets/hero1.jfif";

export function Hero() {
  return (
    <section id="inicio" className="pt-12 pb-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-[1.1]">
            Apoio Especializado para o{" "}
            <span className="text-brand-blue2">Desenvolvimento</span> do Seu
            Filho
          </h2>
          <p className="text-lg text-slate-600 max-w-lg mx-auto md:mx-0">
            Psicoterapia focada em TDAH, TOD e Autismo com acolhimento,
            ludicidade e base científica para transformar desafios em
            conquistas.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="bg-brand-orange text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition shadow-xl shadow-brand-orange/25">
              Conhecer Especialidades
            </button>
            <button className="flex items-center gap-2 bg-white border-2 border-slate-100 px-8 py-4 rounded-2xl hover:scale-105 font-bold text-lg hover:bg-slate-50 transition shadow-xl shadow-brand-green/25">
              <MessageCircle className="text-brand-green" /> Fale conosco no
              WhatsApp
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -z-10 w-full h-full bg-emerald-100 rounded-3xl rotate-3 transform"></div>
          <img
            src={h1}
            alt="Criança brincando e psicóloga"
            className="rounded-3xl shadow-2xl object-cover h-[400px] w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
