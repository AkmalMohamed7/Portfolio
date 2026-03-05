import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Networking",
    skills: [
      { name: "TCP/IP & DNS", level: 80 },
      { name: "HTTP/HTTPS", level: 85 },
      { name: "Routing & Switching", level: 70 },
      { name: "Firewall Config", level: 75 },
    ],
  },
  {
    title: "Cybersecurity",
    skills: [
      { name: "Vulnerability Assessment", level: 85 },
      { name: "Web App Pentesting", level: 80 },
      { name: "Reconnaissance & Enumeration", level: 85 },
      { name: "Report Writing", level: 90 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Burp Suite", level: 80 },
      { name: "Nmap", level: 85 },
      { name: "Wireshark", level: 75 },
      { name: "Metasploit", level: 80 },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "C++", level: 80 },
      { name: "Python", level: 65 },
      { name: "Bash Scripting", level: 60 },
      { name: "HTML/CSS/JS", level: 75 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <div className="mb-3">
    <div className="flex justify-between text-sm mb-1">
      <span className="text-foreground">{name}</span>
      <span className="text-primary">{level}%</span>
    </div>
    <div className="h-2 rounded-full bg-muted overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        style={{ boxShadow: "0 0 10px hsl(195 100% 50% / 0.5)" }}
      />
    </div>
  </div>
);

const SkillsSection = () => (
  <section id="skills" className="py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 gradient-text">{"// Skills"}</h2>
        <div className="w-20 h-0.5 bg-primary mb-12" />
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-8">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1 }}
            className="glass rounded-xl p-6"
          >
            <h3 className="font-semibold text-primary mb-4 text-lg">{`> ${cat.title}`}</h3>
            {cat.skills.map((s, si) => (
              <SkillBar key={s.name} name={s.name} level={s.level} delay={ci * 0.1 + si * 0.1} />
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
