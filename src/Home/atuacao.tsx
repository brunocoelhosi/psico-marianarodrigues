import { Brain, Puzzle, Users, Angry } from "lucide-react";
export function Atuacao() {
  return (
    <section id="atuacao" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-12">Áreas de Atuação</h3>
        <div className="grid md:grid-cols-4 gap-8">
          {/* Card Autismo */}
          <div className="p-8 rounded-3xl bg-blue-50 border border-blue-100 hover:shadow-xl transition group">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition">
              <Brain className="text-blue-600" size={32} />
            </div>
            <h4 className="text-xl font-bold mb-3">Autismo (TEA)</h4>
            <p className="text-slate-600 leading-relaxed">
              Desenvolvimento de habilidades sociais, comunicação e autonomia
              através de intervenções personalizadas.
            </p>
          </div>

          {/* Card TDAH */}
          <div className="p-8 rounded-3xl bg-orange-50 border border-orange-100 hover:shadow-xl transition group">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition">
              <Puzzle className="text-orange-600" size={32} />
            </div>
            <h4 className="text-xl font-bold mb-3">
              Transtorno de Déficit de Atenção e Hiperatividade (TDAH)
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Foco em organização, regulação emocional e estratégias
              comportamentais para o dia a dia escolar e familiar.
            </p>
          </div>

          {/* Card Tod */}
          <div className="p-8 rounded-3xl bg-red-50 border border-red-100 hover:shadow-xl transition group">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition">
              <Angry className="text-red-600" size={32} />
            </div>
            <h4 className="text-xl font-bold mb-3">
              Transtorno de Oposição Desafiante (TOD)
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Diagnóstico e tratamento do Transtorno Opositor Desafiador, que na
              maioria das vezes é causado por não saber organizar suas emoções.
            </p>
          </div>

          {/* Card Pais */}
          <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-100 hover:shadow-xl transition group">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition">
              <Users className="text-emerald-600" size={32} />
            </div>
            <h4 className="text-xl font-bold mb-3">Orientação Parental</h4>
            <p className="text-slate-600 leading-relaxed">
              Suporte direto à família para lidar com comportamentos
              desafiadores e fortalecer o vínculo afetivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Atuacao;
