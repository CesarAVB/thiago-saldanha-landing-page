import { motion } from "framer-motion";
import { Award, GraduationCap, Heart } from "lucide-react";
import fotoPerfil from "@/assets/perfil1.jpeg";

const stats = [
  { icon: Award, label: "FPERJ", sub: "Treinador de Boxe Registrado" },
  { icon: GraduationCap, label: "Especialista", sub: "Educação Física e Personal Fight" },
  { icon: Heart, label: "Atendimento", sub: "Treinos Personalizados" },
];

const AboutSection = () => (
  <section id="sobre" className="py-20 lg:py-32 relative overflow-hidden">
    {/* Decorative background element */}
    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1 flex justify-center"
        >
          <div className="relative group">
            {/* Animated rings */}
            <div className="absolute -inset-4 border border-primary/20 rounded-[2rem] animate-[spin_20s_linear_infinite] pointer-events-none" />
            <div className="absolute -inset-8 border border-secondary/10 rounded-[2.5rem] animate-[spin_30s_linear_infinite_reverse] pointer-events-none" />

            {/* Main photo container */}
            <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src={fotoPerfil}
                alt="Thiago Saldanha - Personal Trainer"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 border-[8px] border-background/50 rounded-[2rem]" />
              
              {/* Badge */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 glass px-6 py-2 rounded-full shadow-xl border-primary/30">
                <span className="text-primary font-heading font-bold tracking-widest text-sm">CREF / FPERJ</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-secondary font-bold text-sm uppercase tracking-[0.3em] mb-4">
              Trajetória Profissional
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8 leading-tight">
              Transformando vidas através do <span className="text-primary">movimento</span>
            </h2>
            <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
              <p>
                Sou Profissional de Educação Física, Personal Trainer e Treinador de Boxe (FPERJ) com paixão por ajudar pessoas a alcançarem seu melhor potencial.
              </p>
              <p>
                Minha abordagem integra treinamento inteligente e personalizado, criando planos únicos que respeitam a sua rotina, objetivos e individualidade biológica.
              </p>
            </div>

            {/* Signature or highlight */}
            <div className="mt-10 p-6 glass rounded-2xl border-l-4 border-l-primary">
              <p className="italic text-foreground/90 font-medium">
                "Não é apenas sobre estética, é sobre performance, saúde e longevidade."
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-zinc-900/80 backdrop-blur-sm group p-8 rounded-3xl border border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
              <s.icon size={28} className="text-primary" />
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-2 tracking-wide">{s.label}</h3>
            <p className="text-foreground/50 text-sm leading-relaxed">{s.sub}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
