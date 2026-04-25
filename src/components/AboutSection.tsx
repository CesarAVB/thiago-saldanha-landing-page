import { motion } from "framer-motion";
import { Award, GraduationCap, Heart } from "lucide-react";
import fotoPerfil from "@/assets/perfil1.jpeg";

const stats = [
  { 
    icon: Award, 
    label: "FPERJ", 
    sub: "Treinador de Boxe Registrado",
    detail: "Certificação oficial pela Federação de Boxe do Estado do Rio de Janeiro."
  },
  { 
    icon: GraduationCap, 
    label: "Especialista", 
    sub: "Educação Física e Personal Fight",
    detail: "Especialização focada em alta performance e metodologia de combate."
  },
  { 
    icon: Heart, 
    label: "Atendimento", 
    sub: "Treinos Personalizados",
    detail: "Foco total na individualidade biológica e objetivos específicos de cada aluno."
  },
];

const AboutSection = () => (
  <section id="sobre" className="py-24 lg:py-36 relative overflow-hidden">
    {/* Decorative background element */}
    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
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
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 border-[8px] border-background/50 rounded-[2rem]" />
              
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
            <span className="inline-block text-secondary font-bold text-sm uppercase tracking-[0.4em] mb-4">
              Trajetória Profissional
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-8 leading-tight uppercase">
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

            <div className="mt-10 p-6 glass rounded-2xl border-l-4 border-l-primary shadow-xl">
              <p className="italic text-foreground/90 font-medium">
                "Não é apenas sobre estética, é sobre performance, saúde e longevidade."
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Cards - REIMAGINED STYLE */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative group"
          >
            {/* Background glass element */}
            <div className="absolute inset-0 bg-zinc-900/50 backdrop-blur-md rounded-[2.5rem] border border-white/5 transition-all duration-500 group-hover:border-primary/40 group-hover:bg-zinc-900/80" />
            
            <div className="relative p-10 flex flex-col h-full">
              {/* Icon with distinct style */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-8 shadow-lg shadow-primary/20 transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-6">
                <s.icon size={30} className="text-white" />
              </div>
              
              <div className="mb-4">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-1 tracking-wider uppercase">{s.label}</h3>
                <p className="text-primary font-bold text-sm tracking-wide">{s.sub}</p>
              </div>
              
              <p className="text-foreground/50 text-sm leading-relaxed mt-auto">
                {s.detail}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
