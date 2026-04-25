import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, MonitorPlay } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import logo from "@/assets/logo_text.png";
import logoIcon from "@/assets/logo_icon.png";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

const WHATSAPP_URL = "https://wa.me/5521969886804?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20consultorias%20e%20treinos.";
const LOGIN_URL = "https://app.personalsaldanha.com.br/login";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [tapCount, setTapCount] = useState(0);

  const triggerEasterEgg = () => {
    // Boxing Bell Sound
    const bell = new Audio("https://www.myinstants.com/media/sounds/boxing-bell.mp3");
    // Rocky Theme Snippet (Gonna Fly Now)
    const rocky = new Audio("https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Gonna+Fly+Now&filename=mt/MTI5MTY1ODgxMjkxNjg3_f_2f_2bWq_2b_2bcU6_2bE.mp3");
    
    bell.play();
    setTimeout(() => {
      rocky.play();
      rocky.volume = 0.5;
    }, 500);

    // Visual feedback - temporary "frenzy" effect could be added here
    console.log("🥊 MODO ROCKY ATIVADO!");
  };

  const handleLogoClick = () => {
    const newCount = tapCount + 1;
    if (newCount === 3) {
      triggerEasterEgg();
      setTapCount(0);
    } else {
      setTapCount(newCount);
      // Reset count after 1 second of inactivity
      setTimeout(() => setTapCount(0), 1000);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl h-16" : "bg-transparent h-20"
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] bg-primary origin-left z-[60]"
        style={{ scaleX }}
      />

      <div className="container mx-auto h-full flex items-center justify-between px-4 lg:px-8">
        <div 
          onClick={handleLogoClick}
          className="flex items-center gap-3 group cursor-pointer select-none active:scale-95 transition-transform"
        >
          <motion.img 
            animate={tapCount > 0 ? { rotate: [0, -10, 10, 0] } : {}}
            src={logoIcon} 
            alt="" 
            className="h-8 md:h-10 object-contain transition-transform group-hover:scale-110" 
          />
          <img src={logo} alt="Thiago Saldanha" className="h-8 md:h-10 object-contain brightness-0 invert" />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          <div className="flex items-center gap-4 lg:gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <Separator orientation="vertical" className="h-6 bg-white/10" />

          <div className="flex items-center gap-3">
            <a
              href={LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-foreground font-bold text-xs lg:text-sm px-4 lg:px-5 py-2 rounded-full hover:bg-white/10 transition-all active:scale-95"
            >
              <MonitorPlay size={16} />
              Acessar Plataforma
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-xs lg:text-sm px-4 lg:px-5 py-2 rounded-full hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] active:scale-95"
            >
              <MessageCircle size={16} />
              Agendar Treino
            </a>
          </div>
        </nav>

        {/* Mobile toggle */}
        <button 
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-foreground" 
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Horizontal Separator at the bottom of the header */}
      <Separator className="absolute bottom-0 left-0 right-0 bg-white/10" />

      {/* Mobile nav */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-2xl border-t border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-4 text-lg font-heading font-bold text-foreground/80 hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}

              <Separator className="my-2 bg-white/10" />

              <div className="grid grid-cols-1 gap-3 mt-4">
                <a
                  href={LOGIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-foreground font-bold py-4 rounded-xl"
                >
                  <MonitorPlay size={20} />
                  Acessar Plataforma
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold py-4 rounded-xl shadow-lg shadow-primary/20"
                >
                  <MessageCircle size={20} />
                  Agendar Treino
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
