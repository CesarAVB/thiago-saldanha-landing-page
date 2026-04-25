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
  <section id="servicos" className="py-16 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-10 lg:mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-primary font-semibold text-sm uppercase tracking-widest"
        >
          Serviços
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mt-3"
        >
          Como posso te ajudar
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
              <s.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.description}</p>
            <ul className="space-y-1.5">
              {s.benefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
