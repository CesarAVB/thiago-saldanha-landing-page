import { Instagram, MessageCircle, Mail, MapPin, MonitorPlay } from "lucide-react";
import logo from "@/assets/logo_text.png";
import logoIcon from "@/assets/logo_icon.png";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

const Footer = () => (
  <footer className="bg-card text-card-foreground border-t border-border relative overflow-hidden">

    {/* Decorative top divider */}
    <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />

    {/* Decorative blobs */}
    <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 -left-24 w-72 h-72 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

    <div className="container relative z-10 mx-auto px-4 lg:px-8 pt-10 pb-5 md:pt-16 md:pb-8">

      {/* Main grid: 2 cols mobile | 4 cols md+ | Address drops on md */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-8 md:gap-10 mb-8 md:mb-12">

        {/* Brand — full width on mobile, 2 cols on md, 1 col on lg */}
        <div className="col-span-2 md:col-span-2 lg:col-span-1 flex flex-col items-center text-center md:items-start md:text-left">
          <div className="flex items-center gap-4 mb-3 md:mb-5">
            <img src={logoIcon} alt="" className="h-16 md:h-20 object-contain brightness-0 invert" />
            <img src={logo} alt="Thiago Saldanha" className="h-14 md:h-20 object-contain brightness-0 invert" />
          </div>
          <p className="text-foreground/70 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 max-w-xs">
            Profissional de Educação Física, Personal Trainer e Treinador de Boxe comprometido com os seus resultados.
          </p>
          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full border border-primary/20">
            CREF / FPERJ
          </span>
        </div>

        {/* Separator — between Brand and Nav/Contact (mobile only) */}
        <div className="col-span-2 md:hidden h-px bg-border/50" />

        {/* Nav */}
        <div>
          <h4 className="font-heading font-semibold text-xs uppercase tracking-widest text-muted-foreground mb-3 md:mb-5">Navegação</h4>
          <ul className="space-y-2 md:space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-xs md:text-sm text-foreground/70 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors flex-shrink-0" />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-xs uppercase tracking-widest text-muted-foreground mb-3 md:mb-5">Contato</h4>
          <div className="space-y-2 md:space-y-3">
            <a href="mailto:personal.saldanha@gmail.com" className="flex items-center gap-2 text-xs md:text-sm text-foreground/70 hover:text-primary transition-colors group">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-foreground/5 group-hover:bg-primary/10 flex items-center justify-center transition-colors flex-shrink-0">
                <Mail size={13} />
              </div>
              <span className="truncate">personal.saldanha@gmail.com</span>
            </a>
            <a href="https://wa.me/5521969886804" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs md:text-sm text-foreground/70 hover:text-primary transition-colors group">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-foreground/5 group-hover:bg-primary/10 flex items-center justify-center flex-shrink-0 transition-colors">
                <MessageCircle size={13} />
              </div>
              WhatsApp
            </a>
            <a href="https://instagram.com/personal.saldanha" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs md:text-sm text-foreground/70 hover:text-primary transition-colors group">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-foreground/5 group-hover:bg-primary/10 flex items-center justify-center flex-shrink-0 transition-colors">
                <Instagram size={13} />
              </div>
              <span className="truncate">@personal.saldanha</span>
            </a>
            <a href="https://app.personalsaldanha.com.br/login" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs md:text-sm text-foreground/70 hover:text-primary transition-colors group">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-foreground/5 group-hover:bg-primary/10 flex items-center justify-center flex-shrink-0 transition-colors">
                <MonitorPlay size={13} />
              </div>
              <span className="truncate">Plataforma do Aluno</span>
            </a>
          </div>
        </div>

        {/* Separator — before Address (mobile + md, hidden on lg) */}
        <div className="col-span-2 md:col-span-4 lg:hidden h-px bg-border/50" />

        {/* Address — full width on mobile/md centered, col 4 on lg */}
        <div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col items-center text-center lg:items-start lg:text-left">
          <h4 className="font-heading font-semibold text-xs uppercase tracking-widest text-muted-foreground mb-3 md:mb-5">Atendimento</h4>
          <a
            href="#servicos"
            className="group flex items-start gap-3 text-xs md:text-sm text-foreground/70 hover:text-primary transition-colors"
          >
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-foreground/5 group-hover:bg-primary/10 flex items-center justify-center flex-shrink-0 transition-colors mt-0.5">
              <MapPin size={13} />
            </div>
            <span className="leading-relaxed text-left">
              Rio de Janeiro - RJ<br />
              Presencial & Consultoria Online
            </span>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border pt-4 md:pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Thiago Saldanha — Todos os direitos reservados.</p>
        <p>
          Desenvolvido por{" "}
          <a 
            href="https://portfolio.cesaraugusto.dev.br/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-bold hover:text-primary transition-colors"
          >
            César Augusto
          </a>
        </p>
      </div>

    </div>
  </footer>
);

export default Footer;
