import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const tagline = 'Securing systems, discovering vulnerabilities, building a safer digital world.';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < tagline.length) {
        setDisplayText(tagline.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 max-w-6xl mx-auto relative z-10 w-full">
        {/* Text content */}
        <div className="text-center lg:text-left flex-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-sm mb-4 tracking-widest uppercase">
              {"// welcome to my portfolio"}
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4">
              <span className="gradient-text">Akmal Mohamed</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6">
              Cybersecurity Enthusiast | Vulnerability Analyst | Penetration Tester
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-10 h-8"
          >
            <span className="text-accent text-sm sm:text-base">
              {">"} {displayText}
              <span className={`${showCursor ? "opacity-100" : "opacity-0"} text-primary`}>▌</span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(195_100%_50%/0.4)] transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex-shrink-0"
        >
          <div className="relative">
            {/* Glow ring behind image */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/20 blur-xl opacity-60" />
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_40px_hsl(195_100%_50%/0.15),0_8px_32px_rgba(0,0,0,0.4)]">
              <img
                src={profilePhoto}
                alt="Akmal Mohamed"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-primary/50" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
