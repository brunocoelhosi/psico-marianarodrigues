import React from "react";
import { Award, Target, Star, type LucideIcon } from "lucide-react";
import im from "../assets/img1.jpg";

interface Diferencial {
  icone: LucideIcon;
  texto: string;
  cor: "green" | "blue" | "orange";
}

const SobreMim: React.FC = () => {
  const diferenciais: Diferencial[] = [
    { icone: Award, texto: "Especialista TDAH/TEA", cor: "green" },
    { icone: Target, texto: "Atendimento Humanizado", cor: "blue" },
    { icone: Star, texto: "Base Científica", cor: "orange" },
  ];

  return (
    <section id="sobre" className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Lado da Foto */}
        <div className="relative flex justify-center">
          <div className="absolute top-1/2 left-1/2 -z-10 w-[110%] h-[110%] -translate-x-1/2 -translate-y-1/2 rounded-[4rem] bg-brand-green/5"></div>

          <div className="relative w-full max-w-sm rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
            <img
              src={im}
              alt="Dra. Mariana Rodrigues"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Lado do Texto */}
        <div className="space-y-6">
          <header>
            <span className="text-brand-green font-bold text-sm tracking-widest uppercase">
              Sobre Mim
            </span>
            <h2 className="text-4xl font-extrabold text-brand-dark mt-2">
              Mariana Rodrigues
            </h2>
            <p className="text-lg font-medium text-brand-blue">
              Psicóloga Infantil | CRP 04/73272
            </p>
          </header>

          <div className="space-y-4 text-brand-dark/90 leading-relaxed">
            <p>
              Sou especialista no desenvolvimento infantil, focada em
              transformar a vida de crianças neurodivergentes através da
              ludicidade e ciência.
            </p>
            <p>
              Meu compromisso é oferecer um suporte seguro para que as famílias
              compreendam e potencializem as habilidades de seus filhos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
            {diferenciais.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-brand-green/5 shadow-sm"
              >
                <div
                  className={`w-10 h-10 flex-shrink-0 rounded-xl flex items-center justify-center bg-brand-${item.cor}/10`}
                >
                  <item.icone className={`text-brand-${item.cor}`} size={20} />
                </div>
                <span className="text-xs font-bold text-brand-dark leading-tight">
                  {item.texto}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMim;
