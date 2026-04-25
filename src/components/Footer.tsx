import { Instagram, MessageCircle, Phone, MapPin, MonitorPlay } from "lucide-react";
import logo from "@/assets/logo_text.png";
import logoIcon from "@/assets/logo_icon.png";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

const Footer = () => (
  <footer className="bg-black text-card-foreground border-t border-white/5 relative overflow-hidden">
    {/* Decorative blobs */}
    <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute bottom-0 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="container relative z-10 mx-auto px-4 lg:px-8 pt-20 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        {/* Brand */}
        <div className="col-span-1 lg:col-span-1 flex flex-col items-center md:items-start">
          <div className="flex items-center gap-4 mb-8">
            <img src={logoIcon} alt="" className="h-12 object-contain" />
            <img src={logo} alt="Thiago Saldanha" className="h-10 object-contain brightness-0 invert" />
          </div>
          <p className="text-foreground/50 text-sm leading-relaxed mb-8 max-w-xs text-center md:text-left">
            Especialista em transformação física através da musculação e boxe técnico. Treinamento de alta performance para todos.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com/personal.saldanha" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
              <Instagram size={20} />
            </a>
            <a href="https://wa.me/5521969886804" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-heading font-bold text-lg uppercase tracking-widest text-foreground mb-8">Navegação</h4>
          <ul className="space-y-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-foreground/50 hover:text-primary transition-colors flex items-center gap-3 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all" />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-heading font-bold text-lg uppercase tracking-widest text-foreground mb-8">Contato</h4>
          <div className="space-y-4">
            <a href="tel:+5521969886804" className="flex items-center gap-4 text-sm text-foreground/50 hover:text-primary transition-all group">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-all">
                <Phone size={18} />
              </div>
              <span>(21) 96988-6804</span>
            </a>
            <a href="https://app.personalsaldanha.com.br/login" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-sm text-foreground/50 hover:text-primary transition-all group">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-all">
                <MonitorPlay size={18} />
              </div>
              <span>Plataforma do Aluno</span>
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-heading font-bold text-lg uppercase tracking-widest text-foreground mb-8">Atendimento</h4>
          <div className="flex items-start gap-4 text-sm text-foreground/50">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
              <MapPin size={18} />
            </div>
            <p className="leading-relaxed">
              Rio de Janeiro - RJ<br />
              Presencial & Consultoria Online
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-xs text-foreground/30 font-medium">
          © {new Date().getFullYear()} Thiago Saldanha. Desenvolvido com foco em resultados.
        </p>
        <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest font-bold text-foreground/20">
          <span>CREF / FPERJ</span>
          <span className="w-1 h-1 rounded-full bg-white/10" />
          <span>Educação Física</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
