import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  { text: "$ nmap -sV -sC target.htb", delay: 0, color: "text-accent" },
  { text: "Starting Nmap 7.94 ( https://nmap.org )", delay: 800, color: "text-muted-foreground" },
  { text: "PORT    STATE SERVICE  VERSION", delay: 1400, color: "text-muted-foreground" },
  { text: "22/tcp  open  ssh      OpenSSH 8.9", delay: 1800, color: "text-foreground" },
  { text: "80/tcp  open  http     Apache 2.4.52", delay: 2100, color: "text-foreground" },
  { text: "443/tcp open  ssl/http nginx 1.18.0", delay: 2400, color: "text-foreground" },
  { text: "", delay: 2800, color: "" },
  { text: "$ dirsearch -u http://target.htb -w common.txt", delay: 3000, color: "text-accent" },
  { text: "[200] /admin", delay: 3600, color: "text-green-400" },
  { text: "[301] /api → /api/v1", delay: 3900, color: "text-yellow-400" },
  { text: "[403] /server-status", delay: 4200, color: "text-destructive" },
  { text: "", delay: 4500, color: "" },
  { text: "$ sqlmap -u 'http://target.htb/api?id=1' --dbs", delay: 4700, color: "text-accent" },
  { text: "[*] checking connection to target...", delay: 5200, color: "text-muted-foreground" },
  { text: "[!] VULNERABLE: SQL Injection detected", delay: 5800, color: "text-destructive" },
  { text: "[+] available databases: users, admin, secrets", delay: 6300, color: "text-green-400" },
  { text: "", delay: 6700, color: "" },
  { text: "$ echo 'Vulnerability found. Reporting...'", delay: 7000, color: "text-accent" },
  { text: "[✓] Report generated successfully.", delay: 7600, color: "text-primary" },
];

const TerminalSection = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    lines.forEach((line, i) => {
      timers.push(
        setTimeout(() => setVisibleLines(i + 1), line.delay)
      );
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section id="terminal" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 gradient-text">{"// Terminal"}</h2>
          <div className="w-20 h-0.5 bg-primary mb-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-xl overflow-hidden animated-border"
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-xs text-muted-foreground ml-2">akmal@kali:~/pentest</span>
          </div>

          {/* Terminal body */}
          <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm min-h-[300px] max-h-[400px] overflow-y-auto">
            {lines.slice(0, visibleLines).map((line, i) => (
              <div key={i} className={`${line.color} ${line.text === "" ? "h-3" : ""}`}>
                {line.text}
              </div>
            ))}
            {visibleLines < lines.length && (
              <span className="text-primary animate-blink">▌</span>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalSection;
