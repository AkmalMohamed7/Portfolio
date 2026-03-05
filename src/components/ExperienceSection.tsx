import { motion } from "framer-motion";
import {
  Shield,
  Bug,
  Network,
  FileText,
  Target,
  Radio,
  FlaskConical,
  Briefcase,
} from "lucide-react";

const details = [
  {
    icon: Target,
    text: "Performed penetration testing on 12+ web applications and 5+ networks",
  },
  {
    icon: Bug,
    text: "Identified 45+ vulnerabilities (XSS, SQL Injection, IDOR, Broken Access Control)",
  },
  {
    icon: Shield,
    text: "Used tools: Nmap, Burp Suite, Wireshark",
  },
  {
    icon: Network,
    text: "Analyzed 100+ open ports/services during assessments",
  },
  {
    icon: Radio,
    text: "Conducted traffic analysis on 20+ network captures",
  },
  {
    icon: FlaskConical,
    text: "Completed 50+ hours of hands-on labs",
  },
  {
    icon: FileText,
    text: "Delivered 8+ professional pentesting reports",
  },
  {
    icon: FileText,
    text: "Documented attack chains and exploitation paths",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 px-4">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 gradient-text">
          {"// Experience"}
        </h2>
        <div className="w-20 h-0.5 bg-primary mb-12" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-xl p-6 sm:p-8 animated-border hover:box-glow-hover transition-all duration-500"
      >
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Briefcase className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">
              Vulnerability Analyst & Penetration Testing Intern
            </h3>
            <p className="text-primary font-medium">DEPI</p>
            <p className="text-sm text-muted-foreground mt-1">
              Dec 2025 – Present
            </p>
          </div>
        </div>

        {/* Details */}
        <div className="border-t border-border/50 pt-5 space-y-3">
          {details.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-3 group"
            >
              <div className="mt-0.5 w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-3.5 h-3.5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
