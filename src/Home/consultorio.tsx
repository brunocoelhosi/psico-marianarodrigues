import React from "react";
import { HouseHeart, Puzzle, Baby, type LucideIcon } from "lucide-react";
import a1 from "../assets/a1.png";
import a3 from "../assets/a3.png";
import a4 from "../assets/a4.png";

interface CardConsultorio {
  titulo: string;
  descricao: string;
  icone: LucideIcon;
  cor: "brand-green" | "brand-blue" | "brand-orange";
  imagem: string;
}

const Consultorio: React.FC = () => {
  const cards: CardConsultorio[] = [
    {
      titulo: "Ambiente Acolhedor",
      descricao:
        "Espaço projetado para que a criança se sinta segura e à vontade.",
      icone: HouseHeart,
      cor: "brand-green",
      imagem: a3,
    },
    {
      titulo: "Recursos Lúdicos",
      descricao:
        "Materiais terapêuticos específicos para intervenções de TDAH e Autismo.",
      icone: Puzzle,
      cor: "brand-blue",
      imagem: a1,
    },
    {
      titulo: "Foco na Criança",
      descricao:
        "Atendimento humanizado, respeitando a individualidade de cada pequeno.",
      icone: Baby,
      cor: "brand-orange",
      imagem: a4,
    },
  ];

  return (
    <section
      id="consultorio"
      className="py-20 px-6 bg-brand-bg-outer rounded-[3rem] mt-16"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-12 text-center">
          Conheça Nosso Espaço
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-[2.5rem] shadow-lg border border-brand-green/10 flex flex-col items-center text-center transition-transform hover:scale-[1.02]"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-${card.cor}/10 border border-${card.cor}/20`}
              >
                <card.icone className={`text-${card.cor}`} size={32} />
              </div>

              <div className="w-full h-48 rounded-3xl overflow-hidden mb-6 border border-brand-green/10">
                <img
                  src={card.imagem}
                  alt={card.titulo}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {card.titulo}
              </h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                {card.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Consultorio;
