import { motion } from "framer-motion";
import { Award, GraduationCap, Heart } from "lucide-react";
import fotoPerfil from "@/assets/perfil1.jpeg";

const stats = [
  { icon: Award, label: "FPERJ", sub: "Treinador de Boxe Registrado" },
  { icon: GraduationCap, label: "Especialista", sub: "Educação Física e Personal Fight" },
  { icon: Heart, label: "Atendimento", sub: "Treinos Personalizados" },
];

const AboutSection = () => (
  <section id="sobre" className="py-16 lg:py-28 bg-muted">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
        {/* Text — first on mobile */}
        <div className="order-2 lg:order-2">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-widest"
          >
            Sobre
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-4"
          >
            Conheça Thiago Saldanha
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-base lg:text-lg leading-relaxed"
          >
            Sou Profissional de Educação Física, Personal Trainer e Treinador de Boxe (FPERJ) com paixão por ajudar pessoas a alcançarem seu melhor potencial.
            Minha abordagem integra treinamento inteligente e personalizado, criando planos únicos que respeitam a sua rotina, objetivos e individualidade biológica.
          </motion.p>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-1 flex justify-center"
        >
          <div className="relative">
            {/* Decorative offset background */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-primary/20" />
            <div className="absolute inset-0 -translate-x-3 -translate-y-3 rounded-3xl border-2 border-primary/30" />

            {/* Photo */}
            <div className="relative w-56 sm:w-64 md:w-72 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-background">
              <img
                src={fotoPerfil}
                alt="Thiago Saldanha - Personal Trainer"
                className="w-full h-full object-cover object-top"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-background/90 to-transparent" />
              {/* Badge inside photo */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary/90 backdrop-blur-sm text-primary-foreground font-heading font-bold text-xs px-4 py-1.5 rounded-full shadow-lg border border-primary">
                CREF / FPERJ
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="flex items-center gap-5 bg-background rounded-2xl p-5 border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300 group"
          >
            <div className="w-11 h-11 rounded-xl border border-primary/30 bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
              <s.icon size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-foreground text-sm leading-none mb-1.5">{s.label}</h3>
              <p className="text-muted-foreground text-xs leading-snug">{s.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
