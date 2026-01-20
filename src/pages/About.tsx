import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GraphPaperLayout from "@/components/layout/GraphPaperLayout";
import Logo from "@/components/navigation/Logo";

const About = () => {
  return (
    <GraphPaperLayout>
      <div className="min-h-screen flex items-center justify-center p-8 md:p-16">
        <motion.div
          className="max-w-4xl w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back Link */}
          <div className="mb-12">
            <Logo />
            <Link
              to="/"
              className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back
            </Link>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">
                Hi, I'm Nat...
              </h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm an engineer and designer who believes in the power of
                  thoughtful, intentional creation. My work sits at the
                  intersection of technology, art, and human experience.
                </p>
                <p>
                  With over a decade of experience crafting digital products, I
                  approach each project with precision and care—drawing
                  inspiration from industrial design, architecture, and the
                  beauty of well-engineered systems.
                </p>
                <p>
                  Currently based in San Francisco, I work with forward-thinking
                  companies and individuals who value craft and attention to
                  detail.
                </p>
              </div>
            </motion.div>

            {/* Right - Portrait */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex justify-center md:justify-end"
            >
              <div className="portrait-frame">
                <div className="w-64 h-80 md:w-72 md:h-96 bg-muted flex items-center justify-center">
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                    Portrait
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </GraphPaperLayout>
  );
};

export default About;