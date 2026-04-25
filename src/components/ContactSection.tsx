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
    <section id="contato" className="py-20 lg:py-28 bg-muted relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-widest"
          >
            Contato
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3"
          >
            Fale comigo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mt-3 text-base max-w-md mx-auto"
          >
            Agende seu treino ou tire suas dúvidas sobre a consultoria online.
          </motion.p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {contactCards.map(({ icon: Icon, label, value, href, external }, i) => (
            <motion.a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-4 bg-background border border-border hover:border-primary/50 rounded-2xl px-5 py-4 transition-all duration-200 hover:shadow-md group"
            >
              <div className="w-10 h-10 rounded-xl border border-primary/30 bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <Icon size={18} className="text-primary group-hover:text-primary/80 transition-colors" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-foreground text-xs uppercase tracking-wide leading-none mb-1.5">{label}</p>
                <p className="text-muted-foreground text-xs truncate">{value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Image + Form */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-border shadow-md h-80 lg:h-full min-h-[320px]"
          >
             <img
                src={imgContato}
                alt="Thiago Saldanha - Treino"
                className="w-full h-full object-cover object-center"
              />
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-background border border-border rounded-2xl p-8 shadow-sm h-full">
              <h3 className="font-heading font-bold text-xl text-foreground mb-6">Envie uma mensagem</h3>

              {sent ? (
                <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                    <MessageCircle size={32} className="text-secondary" />
                  </div>
                  <p className="font-semibold text-foreground text-lg">Mensagem enviada!</p>
                  <p className="text-muted-foreground text-sm">Você foi redirecionado para o WhatsApp.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-2 text-primary text-sm underline underline-offset-4 hover:text-primary/80 transition-colors"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Nome</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm transition"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">E-mail</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm transition"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Mensagem</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm resize-none transition"
                      placeholder="Como posso te ajudar?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold py-3.5 rounded-xl hover:bg-primary/90 transition-colors text-sm shadow-lg shadow-primary/20"
                  >
                    <MessageCircle size={18} />
                    Enviar via WhatsApp
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
