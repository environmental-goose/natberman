import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import GraphPaperLayout from "@/components/layout/GraphPaperLayout";
import { getProjectImageUrls } from "@/utils/contentLoader";
import { useIsMobile } from "@/hooks/use-mobile";

const About = () => {
  const isMobile = useIsMobile();
  
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
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-widest text-foreground border border-foreground/30 rounded-full hover:bg-foreground hover:text-background transition-colors"
            >
              ← Back
            </Link>
          </div>

          {/* Mobile Layout: Text first, then image */}
          {isMobile ? (
            <div className="flex flex-col gap-8">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">
                  Hi, I'm Nat...
                </h1>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
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
                    I enjoy mechanical design, photography, soccer, biking, and also hold my private pilots license.
                  </p>
                  <p className="text-sm italic">
                    Currently working from my Brooklyn closet.
                  </p>
                </div>

                {/* Download Resume Button */}
                <motion.a
                  href="/Resume-Nathaniel-Berman.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 border border-foreground/30 text-foreground rounded-full hover:bg-foreground hover:text-background transition-colors text-sm font-mono uppercase tracking-widest"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Resume
                </motion.a>
              </motion.div>

              {/* Portrait - Full width on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="w-full"
              >
                <div className="portrait-frame">
                  {portraitUrl ? (
                    <img
                      src={portraitUrl}
                      alt="Nathaniel Berman"
                      className="w-full h-auto object-cover"
                    />
                  ) : (
                    <div className="w-full aspect-[4/5] bg-muted flex items-center justify-center">
                      <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                        Portrait
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          ) : (
            /* Desktop Layout: Two Column */
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
                    I made this site to have a place document projects, art, and photography, and share it with whoever finds them interesting. If you see something cool - feel free to use it, or ask me about it.
                  </p>
                  <p>
                    I don't know everything, but I like learning, so if you find a mistake in my code, or know how to design something more effectively drop a comment or reach out - I like getting better.
                  </p>
                  <p>
                    I graduated from Northeastern University in 2020 with BS in Mechanical Engineering. Since graduating I've worked as a mechanical designer, working on things like high performance 3D printers at Markforged and high volume consumer devices at aerflo.
                  </p>
                  <p>
                    I enjoy mechanical design, photography, soccer, biking, and also hold my private pilots license.
                  </p>
                  <p className="text-sm italic">
                    Currently working from my Brooklyn closet.
                  </p>
                </div>

                {/* Download Resume Button */}
                <motion.a
                  href="/Resume-Nathaniel-Berman.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 border border-foreground/30 text-foreground rounded-full hover:bg-foreground hover:text-background transition-colors text-sm font-mono uppercase tracking-widest"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Resume
                </motion.a>
              </motion.div>

              {/* Right - Portrait from page-data */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex justify-center md:justify-end"
              >
                <div className="portrait-frame">
                  {portraitUrl ? (
                    <img
                      src={portraitUrl}
                      alt="Nathaniel Berman"
                      className="w-64 h-80 md:w-72 md:h-96 object-cover"
                    />
                  ) : (
                    <div className="w-64 h-80 md:w-72 md:h-96 bg-muted flex items-center justify-center">
                      <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                        Portrait
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </GraphPaperLayout>
  );
};

export default About;
