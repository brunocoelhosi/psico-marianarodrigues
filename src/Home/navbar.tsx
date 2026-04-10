import { useState, useEffect } from "react";
import navbar_desk from "../assets/logo-navbar.png";
import navbar_mobile from "../assets/logo-navbar-mobile.png";
import { MessageCircleCheck, X, Menu } from "lucide-react";

// --- INTERFACES ---
interface MenuLinksProps {
  onClick?: () => void;
  isMobile?: boolean;
}

interface DropdownProps {
  isOpen: boolean;
  onClose: () => void;
  isPillVersion?: boolean;
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 1. NAVBAR ESTÁTICA */}
      <header className="relative w-full z-50">
        {/* Camada de Fundo Isolada para o Blur */}
        <div
          className={`absolute inset-0 -z-10 border-b border-slate-100 transition-all duration-300
          ${isMenuOpen && !isScrolled ? "bg-white shadow-lg rounded-b-3xl" : "bg-white/80 backdrop-blur-md"}
        `}
        />

        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-10">
          <Logo h="h-16 md:h-22" />
          <div className="hidden md:block">
            <MenuLinks />
          </div>
          <div className="flex items-center gap-2">
            <ActionButton className="hidden sm:flex px-6 py-2.5" />
            <HamburguerButton
              setIsMenuOpen={setIsMenuOpen}
              isMenuOpen={isMenuOpen}
            />
          </div>
        </div>

        {!isScrolled && (
          <MobileDropdown
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
          />
        )}
      </header>

      {/* 2. NAVBAR PÍLULA */}
      <header
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out border border-slate-100 shadow-lg w-[95%] max-w-6xl overflow-hidden
          ${isScrolled ? "top-5 opacity-100 translate-y-0" : "top-0 opacity-0 -translate-y-full pointer-events-none"}
          ${isMenuOpen ? "rounded-4xl" : "rounded-full"} 
        `}
      >
        {/* Fundo isolado da pílula */}
        <div className="absolute inset-0 -z-10 bg-white/90 backdrop-blur-md" />

        <div className="flex items-center justify-between w-full py-2 px-6">
          <Logo2 h="h-12 md:h-12" />
          <div className="hidden md:block">
            <MenuLinks />
          </div>
          <div className="flex items-center gap-2">
            <ActionButton className="hidden sm:flex px-4 py-2 text-sm" />
            <HamburguerButton
              setIsMenuOpen={setIsMenuOpen}
              isMenuOpen={isMenuOpen}
            />
          </div>
        </div>

        {isScrolled && (
          <MobileDropdown
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            isPillVersion
          />
        )}
      </header>

      {/* Backdrop de Blur do Fundo (O que borra o site abaixo da nav) */}
      <div
        className={`fixed inset-0 z-40 bg-black/5 backdrop-blur-sm transition-opacity duration-500 md:hidden
          ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setIsMenuOpen(false)}
      />
    </>
  );
}

const MobileDropdown = ({ isOpen, onClose, isPillVersion }: DropdownProps) => (
  <div
    className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out
      ${isOpen ? "max-h-100 opacity-100 pb-6" : "max-h-0 opacity-0 pointer-events-none"}
    `}
  >
    <nav
      className={`flex flex-col items-center gap-5 pt-4 border-t border-slate-100 ${isPillVersion ? "mx-6" : "px-6"}`}
    >
      <MenuLinks onClick={onClose} isMobile />
      <div className="w-full pt-2 text-center">
        <ActionButton className="w-full py-3 justify-center text-base" />
      </div>
    </nav>
  </div>
);

// --- COMPONENTES AUXILIARES (Logo, MenuLinks, ActionButton, HamburguerButton) ---
const Logo = ({ h }: { h: string }) => (
  <img src={navbar_desk} className={`${h} object-contain`} alt="Logo" />
);
const Logo2 = ({ h }: { h: string }) => (
  <img src={navbar_mobile} className={`${h} object-contain`} alt="Logo" />
);

const MenuLinks = ({ onClick, isMobile }: MenuLinksProps) => {
  const links = [
    { name: "Início", href: "#inicio" },
    { name: "Atuação", href: "#atuacao" },
    { name: "Nosso espaço", href: "#consultorio" },
    { name: "Sobre Mim", href: "#sobre" },
  ];
  return (
    <div
      className={
        isMobile
          ? "flex flex-col items-center gap-5"
          : "flex gap-8 font-medium text-slate-600"
      }
    >
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={onClick}
          className="hover:text-brand-blue2 transition-colors"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

const ActionButton = ({ className }: { className: string }) => (
  <a target="_blank" href="https://wa.me/+5534996373011">
    <button
      className={`bg-brand-blue2 text-white rounded-full font-semibold transition-all hover:bg-brand-orange shadow-md flex items-center gap-2 ${className} cursor-pointer`}
    >
      Agendar Consulta <MessageCircleCheck className="w-4 h-4" />
    </button>
  </a>
);

const HamburguerButton = ({
  setIsMenuOpen,
  isMenuOpen,
}: {
  setIsMenuOpen: (v: boolean) => void;
  isMenuOpen: boolean;
}) => (
  <button
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-full"
  >
    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
);

export default Navbar;
