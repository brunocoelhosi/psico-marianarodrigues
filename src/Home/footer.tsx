import { MapPin, Phone, Mail } from "lucide-react";
export function Footer() {
  return (
    <footer className="bg-brand-blue3 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <h4 className="text-white font-bold text-lg">Mariana Rodrigues</h4>
          <p className="text-sm">
            Especialista em Psicologia infantil, dedicada a transformar a vida
            de crianças e suas famílias em Uberlândia.
          </p>
          <div className="flex gap-4">
            <Mail className="cursor-pointer hover:text-emerald-400" />
            <Mail className="cursor-pointer hover:text-emerald-400" />
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-bold text-lg">Contato</h4>
          <div className="flex items-center gap-3">
            <Phone size={18} className="text-emerald-400" />
            <span>(34) 99637-3011</span>
          </div>
          <div className="flex items-start gap-3">
            <MapPin size={18} className="text-emerald-400 mt-1" />
            <span>
              Rua Exemplo, 123 - Sala 405
              <br />
              Bairro Jardim - Uberlândia, MG
            </span>
          </div>
        </div>

        <div className="bg-emerald-700 p-6 rounded-2xl">
          <h4 className="text-white font-bold mb-4">Horário de Atendimento</h4>
          <p className="text-sm">Segunda a Sexta: 08:00 às 18:00</p>
          <p className="text-sm">Sábado: 08:00 às 12:00</p>
        </div>
      </div>
      <div className="text-center mt-16 pt-8 border-t border-slate-800 text-xs">
        © 2026 Mariana Rodrigues. Todos os direitos reservados.
      </div>
    </footer>
  );
}
export default Footer;
