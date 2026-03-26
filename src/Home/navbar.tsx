import bg from "../assets/1.png";

export function Navbar() {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div>
            <img
              src={bg}
              className="h-8 md:h-35 object-contain opacity-90 hover:opacity-100"
              alt="Background"
            />
          </div>
        </div>

        <nav className="hidden md:flex gap-8 font-medium text-slate-600">
          <a href="#inicio" className="hover:text-emerald-600 transition">
            Início
          </a>
          <a href="#atuacao" className="hover:text-emerald-600 transition">
            Atuação
          </a>
          <a href="#consultorio" className="hover:text-emerald-600 transition">
            O Consultório
          </a>
          <a href="#sobre" className="hover:text-emerald-600 transition">
            Sobre
          </a>
        </nav>

        <button className="bg-brand-blue2 hover:bg-sky-300 text-white px-6 py-2.5 rounded-full font-semibold transition shadow-lg shadow-sky-200">
          Agendar Consulta
        </button>
      </div>
    </header>
  );
}

export default Navbar;
