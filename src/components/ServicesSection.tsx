import { motion } from "framer-motion";
import { Dumbbell, Target, Laptop, Activity } from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    title: "Personal Trainer",
    description:
      "Treinos individualizados de musculação com acompanhamento presencial focado na execução correta e nos seus objetivos específicos.",
    benefits: ["Ganho de massa muscular", "Emagrecimento", "Correção postural"],
  },
  {
    icon: Target,
    title: "Treinador de Boxe (FPERJ)",
    description:
      "Aulas de boxe técnico e condicionamento físico baseadas na metodologia FPERJ, adequadas para todos os níveis.",
    benefits: ["Condicionamento cardiovascular", "Técnica e defesa pessoal", "Alívio do estresse"],
  },
  {
    icon: Activity,
    title: "Personal Fight",
    description:
      "Treinamento personalizado que une os benefícios das artes marciais (boxe) com preparação física de alto rendimento.",
    benefits: ["Treino dinâmico", "Gasto calórico elevado", "Coordenação motora"],
  },
  {
    icon: Laptop,
    title: "Consultoria Online",
    description:
      "Planejamento completo de treinos através da plataforma exclusiva. Treine onde e quando quiser com meu acompanhamento à distância.",
    benefits: ["Acesso via App exclusivo", "Suporte via WhatsApp", "Vídeos demonstrativos"],
  },
];

const ServicesSection = () => (
  <section id="servicos" className="py-24 lg:py-36 relative">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16 lg:mb-24">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-secondary font-bold text-sm uppercase tracking-[0.4em]"
        >
          Metodologia
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mt-4"
        >
          Como posso te <span className="text-primary">ajudar</span>
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative h-full"
          >
            {/* Subtle Hover Halo effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-md transition duration-500" />
            
            <div className="relative h-full glass-dark border border-white/5 rounded-[2rem] p-8 flex flex-col transition-all duration-500 group-hover:translate-y-[-8px] group-hover:border-primary/20">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 relative">
                <div className="absolute inset-0 bg-primary/5 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <s.icon size={32} className="text-primary relative z-10 transition-transform duration-500 group-hover:scale-110" />
              </div>
              
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4 tracking-wide transition-colors">
                {s.title}
              </h3>
              
              <p className="text-foreground/60 text-sm leading-relaxed mb-8 flex-grow">
                {s.description}
              </p>
              
              <ul className="space-y-3 pt-6 border-t border-white/5">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-xs font-medium text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1 shadow-[0_0_8px_rgba(var(--secondary),0.6)]" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
