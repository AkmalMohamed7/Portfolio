import { motion } from "framer-motion";
import { ExternalLink, Shield, Terminal, Code, FileText } from "lucide-react";

const projects = [
  {
    icon: Shield,
    title: "Enterprise Network Security Lab",
    org: "Fortinet",
    tech: ["FortiGate", "Networking", "Firewall"],
    desc: "Designed and deployed virtual enterprise networks with advanced security configurations.",
    achievements: [
      "Built a virtual enterprise network",
      "Configured firewall policies, VPNs, VIPs",
      "Implemented High Availability (HA)",
      "Applied Security Fabric architecture",
    ],
  },
  {
    icon: Terminal,
    title: "Active Directory Enumeration Tool — GhostPath",
    org: "",
    tech: ["PowerShell", "Visual Studio"],
    desc: "Customized and extended an Active Directory enumeration tool with enhanced output.",
    achievements: [
      "Customized AD enumeration tool",
      "Improved output readability",
      "Enumerated users, groups, machines",
      "Uploaded project to GitHub with documentation",
    ],
    github: "#",
  },
  {
    icon: Code,
    title: "Responsive Course Website",
    org: "",
    tech: ["HTML", "CSS", "JavaScript"],
    desc: "Built a fully responsive course website with modern UI principles.",
    achievements: [
      "Built responsive UI",
      "Designed clean layout",
      "Mobile-friendly design",
    ],
  },
  {
    icon: FileText,
    title: "Hotel Management System UML Design",
    org: "",
    tech: ["UML"],
    desc: "Modeled a real-world hotel management system using UML diagrams.",
    achievements: [
      "Created use case, class, sequence diagrams",
      "Modeled real-world system architecture",
    ],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 gradient-text">
          {"// Projects"}
        </h2>
        <div className="w-20 h-0.5 bg-primary mb-12" />
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-6 animated-border group hover:box-glow-hover transition-all duration-500 flex flex-col"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <p.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
              </div>
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  GitHub
                </a>
              )}
            </div>

            <h3 className="font-semibold text-foreground mb-1">{p.title}</h3>
            {p.org && (
              <p className="text-xs text-accent mb-2">{p.org}</p>
            )}
            <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Achievements */}
            <ul className="space-y-1.5 mt-auto">
              {p.achievements.map((a, j) => (
                <li
                  key={j}
                  className="flex items-start gap-2 text-xs text-muted-foreground"
                >
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
