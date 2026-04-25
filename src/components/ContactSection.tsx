import { motion } from "framer-motion";
import { Phone, MapPin, Instagram, MessageCircle } from "lucide-react";
import { useState } from "react";
import imgContato from "@/assets/perfil2.jpeg";

const WHATSAPP_URL = "https://wa.me/5521969886804?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20consultorias%20e%20treinos.";

const contactCards = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(21) 96988-6804",
    href: WHATSAPP_URL,
    external: true,
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(21) 96988-6804",
    href: "tel:+5521969886804",
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
    value: "Rio de Janeiro - RJ e Consultoria Online (App Exclusivo)",
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
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary font-bold text-sm uppercase tracking-[0.4em]"
          >
            Contato
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-4"
          >
            Vamos começar sua <span className="text-primary">jornada</span>?
          </motion.h2>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {contactCards.map(({ icon: Icon, label, value, href, external }, i) => (
            <motion.a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-dark border border-white/5 hover:border-primary/30 rounded-3xl px-6 py-5 transition-all duration-300 group flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <Icon size={20} className="text-primary" />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-foreground text-[10px] uppercase tracking-widest leading-none mb-1.5 opacity-50">{label}</p>
                <p className="text-foreground/80 text-xs font-medium truncate">{value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Image + Form */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl min-h-[400px]"
          >
             <img
                src={imgContato}
                alt="Thiago Saldanha - Treino"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-2xl font-heading font-bold text-foreground drop-shadow-lg">
                  Pronto para o próximo nível?
                </p>
              </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-dark border border-white/5 rounded-[2.5rem] p-8 md:p-10 h-full shadow-2xl">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-8">Mande um oi!</h3>

              {sent ? (
                <div className="flex flex-col items-center justify-center text-center py-20 gap-6">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center animate-bounce">
                    <MessageCircle size={40} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-2xl text-foreground mb-2">Mensagem enviada!</p>
                    <p className="text-foreground/50 text-sm">Estou te esperando no WhatsApp.</p>
                  </div>
                  <button
                    onClick={() => setSent(false)}
                    className="text-primary font-bold text-sm hover:underline underline-offset-8 transition-all"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-foreground/40 uppercase tracking-[0.2em] ml-2">Nome Completo</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-foreground placeholder:text-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300"
                      placeholder="Como posso te chamar?"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-foreground/40 uppercase tracking-[0.2em] ml-2">E-mail</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-foreground placeholder:text-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-foreground/40 uppercase tracking-[0.2em] ml-2">Sua Mensagem</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-foreground placeholder:text-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Em que posso te ajudar hoje?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full group relative flex items-center justify-center gap-3 bg-primary text-primary-foreground font-bold py-5 rounded-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-primary/20"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <MessageCircle size={22} className="relative z-10" />
                    <span className="relative z-10 text-lg">Enviar via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
