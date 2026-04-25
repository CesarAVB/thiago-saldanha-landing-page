import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import logo from "@/assets/logo_text.png";
import videoBg from "@/assets/video.mp4";

const WHATSAPP_URL = "https://wa.me/5521969886804?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20consultorias%20e%20treinos.";

const HeroSection = () => (
  <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background Video */}
    <div className="absolute inset-0 bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-60 md:opacity-80 scale-100"
        style={{ objectPosition: 'center 20%' }}
      >
        <source src={videoBg} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
    </div>

    {/* Logo — top right, md+ only */}
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-24 right-8 lg:right-16 z-10 hidden md:block"
    >
      <img src={logo} alt="Thiago Saldanha" className="h-40 lg:h-52 object-contain brightness-0 invert opacity-90" />
    </motion.div>

    <div className="container relative z-10 mx-auto px-4 lg:px-8 pt-20 pb-14">
      {/* Logo — mobile only, centered in empty space above content */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mb-8 sm:hidden"
      >
        <img src={logo} alt="Thiago Saldanha" className="h-48 object-contain brightness-0 invert" />
      </motion.div>

      <div className="max-w-2xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-secondary/20 text-secondary font-semibold text-xs sm:text-sm px-3 py-1.5 rounded-full mb-5 backdrop-blur-sm border border-secondary/30 leading-snug uppercase tracking-wide"
        >
          Profissional de Educação Física · Personal Trainer · Boxe
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground leading-tight mb-5"
        >
          Alcançe sua melhor versão com{" "}
          <span className="text-primary">treinamento de verdade</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg lg:text-xl text-foreground/80 mb-8 max-w-lg"
        >
          Treinamento especializado em musculação e boxe, presencial ou consultoria online, focado nos seus resultados.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm sm:text-base px-6 py-3.5 rounded-lg hover:bg-primary/90 transition-colors shadow-lg"
          >
            <MessageCircle size={18} />
            Agendar Treino
          </a>
          <a
            href="https://app.personalsaldanha.com.br/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-secondary/30 text-secondary font-semibold text-sm sm:text-base px-6 py-3.5 rounded-lg hover:bg-secondary/10 transition-colors"
          >
            Acessar Plataforma
          </a>
        </motion.div>
      </div>
    </div>

    {/* Scroll indicator */}
    <motion.a
      href="#sobre"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/60 animate-bounce"
    >
      <ChevronDown size={32} />
    </motion.a>
  </section>
);

export default HeroSection;
