import { motion } from "framer-motion";
import { Search, Wifi, Globe, FlaskConical } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Vulnerability Assessment",
    desc: "Identifying and documenting security vulnerabilities aligned with OWASP Top 10 methodology.",
  },
  {
    icon: Wifi,
    title: "Network Analysis",
    desc: "Traffic analysis, port scanning, and detecting anomalies across network sessions.",
  },
  {
    icon: Globe,
    title: "Web App Testing",
    desc: "Testing web applications using Burp Suite, identifying XSS, SQLi, IDOR, and more.",
  },
  {
    icon: FlaskConical,
    title: "Security Labs",
    desc: "Hands-on practice through simulated environments and real-world attack scenarios.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 gradient-text">{"// Services"}</h2>
        <div className="w-20 h-0.5 bg-primary mb-12" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-6 animated-border hover:box-glow-hover transition-all duration-500 group cursor-default"
          >
            <s.icon className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors duration-300" />
            <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
