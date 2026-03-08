import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

const ContactSection = () =>
<section id="contact" className="py-24 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}>

        <h2 className="text-3xl sm:text-5xl font-bold mb-4 gradient-text">Think your system is secure? Let’s test that.

      </h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">Whether you have a security project, a challenge, or just want to connect — feel free to reach out.

      </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
          href="https://www.linkedin.com/in/akmalmohamed/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-lg glass hover:box-glow transition-all duration-300 group">

            <Linkedin className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
            <span className="text-foreground text-sm">LinkedIn</span>
          </a>
          <a
          href="https://github.com/AkmalMohamed7"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-lg glass hover:box-glow transition-all duration-300 group">

            <Github className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
            <span className="text-foreground text-sm">GitHub</span>
          </a>
          <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=akmalmohamed570@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-lg glass hover:box-glow transition-all duration-300 group">

            <Mail className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
            <span className="text-foreground text-sm">Email</span>
          </a>
        </div>
      </motion.div>

      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="mt-20 pt-8 border-t border-border/30">

        <p className="text-xs text-muted-foreground">
          © 2026 Akmal Mohamed. Built with passion for cybersecurity.
        </p>
      </motion.div>
    </div>
  </section>;


export default ContactSection;
