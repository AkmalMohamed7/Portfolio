import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const coursework = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "Database Systems",
  "Computer Networks",
  "Object-Oriented Programming",
];

const EducationSection = () => (
  <section id="education" className="py-24 px-4">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 gradient-text">
          {"// Education"}
        </h2>
        <div className="w-20 h-0.5 bg-primary mb-12" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-xl p-6 sm:p-8 animated-border hover:box-glow-hover transition-all duration-500"
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">
              Fayoum University
            </h3>
            <p className="text-primary font-medium">
              B.S. in Computer Science
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <span className="text-sm text-muted-foreground">
                Expected June 2027
              </span>
              <span className="text-sm text-accent font-semibold">
                GPA: 3.2
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-5">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-4 h-4 text-primary" />
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Relevant Coursework
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {coursework.map((course, i) => (
              <motion.span
                key={course}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:border-primary/50 hover:bg-primary/20 transition-all duration-300"
              >
                {course}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default EducationSection;
