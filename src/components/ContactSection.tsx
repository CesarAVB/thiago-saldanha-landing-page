import { motion } from "framer-motion";
import { Mail, MapPin, Instagram, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import imgContato from "@/assets/perfil2.jpeg";

const WHATSAPP_URL = "https://wa.me/5521969886804?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20consultorias%20e%20treinos.";

const contactCards = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(21) 96988-6804",
    href: "https://wa.me/5521969886804",
    external: true,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "saldanha.work@gmail.com",
    href: "mailto:saldanha.work@gmail.com",
    external: false,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@personal.saldanha",
    href: "https://instagram.com/personal.saldanha",
    external: true,
  },
  {
    icon: MapPin,
    label: "Atendimento",
    value: "Rio de Janeiro - RJ e Online",
    href: "#",
    external: false,
  },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.name}. Email: ${form.email}. ${form.message}`;
    window.open(`https://wa.me/5521969886804?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contato" className="py-24 lg:py-36 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">

        <div className="text-center mb-16 lg:mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary font-bold text-sm uppercase tracking-[0.4em] mr-[-0.4em]"
          >
            Networking
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mt-4 uppercase tracking-tight"
          >
            Vamos começar sua <span className="text-primary">jornada</span>?
          </motion.h2>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactCards.map(({ icon: Icon, label, value, href, external }, i) => (
            <motion.a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-[2.5rem] p-8 transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 shadow-2xl"
            >
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white text-primary">
                  <Icon size={24} />
                </div>
                <h4 className="font-heading font-bold text-xl text-foreground mb-2 tracking-wide uppercase">{label}</h4>
                <p className="text-foreground/60 text-xs font-medium">{value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Reimagined Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden group shadow-2xl">
              <img
                src={imgContato}
                alt="Thiago Saldanha"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
              
              {/* Floating info badge */}
              <div className="absolute bottom-10 left-10 right-10 p-6 glass rounded-3xl border-white/10">
                <p className="font-heading font-bold text-2xl text-white mb-1 uppercase">Saldanha Team</p>
                <p className="text-white/70 text-sm font-medium">Junte-se à elite do treinamento.</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-primary/30 rounded-full animate-pulse pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          </motion.div>

          {/* Reimagined Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative p-1 bg-gradient-to-br from-primary/30 to-secondary/10 rounded-[2.5rem] md:rounded-[3rem]">
              <div className="bg-zinc-950 rounded-[2.4rem] md:rounded-[2.9rem] p-6 sm:p-10 md:p-14 shadow-2xl">
                <div className="mb-8 md:mb-10">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4 uppercase tracking-wider">
                    Solicite sua <span className="text-gradient-red">Consultoria</span>
                  </h3>
                  <p className="text-foreground/50 text-sm md:text-base leading-relaxed">
                    Preencha os dados abaixo e eu entrarei em contato diretamente pelo seu WhatsApp para alinharmos seus objetivos.
                  </p>
                </div>

                {sent ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-10 gap-6"
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/20 flex items-center justify-center">
                      <Send size={32} className="text-primary animate-pulse md:size-[40px]" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-2">Mensagem Enviada!</h4>
                      <p className="text-foreground/50 text-sm md:text-base">Redirecionando para o WhatsApp...</p>
                    </div>
                    <button
                      onClick={() => setSent(false)}
                      className="text-primary font-bold hover:underline underline-offset-8 text-sm md:text-base"
                    >
                      Enviar novo formulário
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] ml-1">Nome</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-zinc-900/50 border-b border-white/10 px-0 py-3 md:py-4 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-primary transition-all duration-300"
                          placeholder="Ex: João Silva"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] ml-1">E-mail</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-zinc-900/50 border-b border-white/10 px-0 py-3 md:py-4 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-primary transition-all duration-300"
                          placeholder="Ex: joao@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] ml-1">Mensagem (Opcional)</label>
                      <textarea
                        rows={3}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-zinc-900/50 border-b border-white/10 px-0 py-3 md:py-4 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-primary transition-all duration-300 resize-none"
                        placeholder="Conte brevemente seu objetivo..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="group relative w-full flex items-center justify-center gap-3 md:gap-4 bg-primary text-white font-bold py-4 md:py-6 rounded-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-[0_20px_40px_-15px_rgba(var(--primary),0.5)]"
                    >
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      <MessageCircle size={20} className="relative z-10 md:size-[22px]" />
                      <span className="relative z-10 text-base md:text-lg uppercase tracking-wider md:tracking-widest">Iniciar Transformação</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
