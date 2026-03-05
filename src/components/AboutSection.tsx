import { motion } from "framer-motion";
import { Shield, Brain, Target, Globe } from "lucide-react";

const highlights = [
{ icon: Shield, label: "Ethical Hacking" },
{ icon: Target, label: "Penetration Testing" },
{ icon: Globe, label: "Networking" },
{ icon: Brain, label: "Continuous Learning" }];


const AboutSection = () =>
<section id="about" className="py-24 px-4 relative">
    <div className="max-w-6xl mx-auto">
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}>

        <h2 className="text-3xl sm:text-4xl font-bold mb-2 gradient-text">{"// About Me"}</h2>
        <div className="w-20 h-0.5 bg-primary mb-8" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Computer Science student at Fayoum University with strong programming skills and a deep passion for cybersecurity. Currently working as a Vulnerability Analyst & Penetration Tester at DEPI, where I've executed end-to-end penetration testing across 12+ web applications and identified 45+ security vulnerabilities.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            My focus areas include vulnerability assessment, network analysis, and web application security. I believe in hands-on learning and have completed 50+ hours of cybersecurity labs simulating real-world attacker techniques.
          </p>
          <div className="glass rounded-lg p-4 animated-border">
            <p className="text-sm text-primary mb-2">Currently studying:</p>
            <p className="text-sm text-muted-foreground">DEPI Initiative • Vulnerability Analysis & Penetration Testing</p>
          </div>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-2 gap-4">

          {highlights.map(({ icon: Icon, label }) =>
        <div
          key={label}
          className="glass rounded-lg p-6 text-center hover:box-glow transition-all duration-300 group">

              <Icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:text-accent transition-colors" />
              <p className="text-sm font-medium text-foreground">{label}</p>
            </div>
        )}
        </motion.div>
      </div>
    </div>
  </section>;


export default AboutSection;