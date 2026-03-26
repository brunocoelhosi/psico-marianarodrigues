import { MessageCircle } from "lucide-react";
import bg from "../assets/6.png";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[50vh] md:min-h-[450px] flex items-center overflow-hidden "
    >
      {/* 1. Imagem de Fundo (z-0) */}
      <img
        src={bg}
        className="absolute inset-0 w-full h-full object-cover z-0"
        alt="Background"
      />

      {/* 2. Camada de Overlay (ESSENCIAL para o texto aparecer) */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] z-10"></div>

      {/* 3. Container de Conteúdo (Adicionei z-20 aqui) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark leading-[1.1]">
              Apoio Especializado para o{" "}
              <span className="text-brand-blue2 ">Desenvolvimento</span> do Seu
              Filho
            </h2>

            <p className="text-lg text-brand-dark/80 max-w-lg mx-auto md:mx-0">
              Psicoterapia focada em TDAH e Autismo com acolhimento, ludicidade
              e base científica para transformar desafios em conquistas.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="bg-brand-orange text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition shadow-xl shadow-brand-orange/20">
                Conhecer Especialidades
              </button>

              <button className="flex items-center gap-2 bg-white/80 border-2 border-brand-green/20 text-brand-dark px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-green/5 transition">
                <MessageCircle className="text-brand-green" />
                Agende sua consulta no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
