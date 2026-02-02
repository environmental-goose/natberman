import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GraphPaperLayout from "@/components/layout/GraphPaperLayout";
import { getProjectImageUrls } from "@/utils/contentLoader";

const About = () => {
  // Get portrait from page-data/about folder
  const portraitImages = getProjectImageUrls("about", "about");
  const portraitUrl = portraitImages.length > 0 ? portraitImages[0] : null;

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
            <Link
              to="/"
              className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back
            </Link>
          </div>

          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Hi, I'm Nat...
          </motion.h1>

          {/* Two Column Layout - Body text and portrait */}
          <div className="grid md:grid-cols-[1fr,auto] gap-6 md:gap-8 items-start">
            {/* Left - Body Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="space-y-4 text-muted-foreground leading-relaxed"
            >
              <p>
                I made this site to have a place document projects, art, and photography, and share it with whoever finds them interesting. If you see something cool - feel free to use it, or ask me about it.
              </p>
              <p>
                I don't know everything, but I like learning, so if you find a mistake in my code, or know how to design something more effectively drop a comment or reach out - I like getting better.
              </p>
              <p>
                I graduated from Northeastern University in 2020 with BS in Mechanical Engineering. Since graduating I've worked as a mechanical designer, working on things like high performance 3D printers at Markforged and high volume consumer devices at aerflo.
              </p>
              <p>
                I enjoy mechanical design, photography, soccer, sewing, and hold my private pilots license.
              </p>
              <p className="text-sm italic">
                Currently working from my Brooklyn closet.
              </p>
            </motion.div>

            {/* Right - Portrait */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex justify-center md:justify-start"
            >
              <div className="portrait-frame">
                {portraitUrl ? (
                  <img
                    src={portraitUrl}
                    alt="Nathaniel Berman"
                    className="w-56 md:w-64 object-cover"
                  />
                ) : (
                  <div className="w-56 md:w-64 h-72 md:h-80 bg-muted flex items-center justify-center">
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                      Portrait
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </GraphPaperLayout>
  );
};

export default About;
