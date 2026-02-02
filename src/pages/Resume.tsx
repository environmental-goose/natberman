import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Download, FileText } from "lucide-react";
import GraphPaperLayout from "@/components/layout/GraphPaperLayout";

const Resume = () => {
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

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">
                Resume
              </h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My professional resume is available for download below. It includes my work experience, education, and technical skills.
                </p>
                <p>
                  For a more comprehensive view of my projects and capabilities, please explore the Design, Photo, and Art sections of this portfolio.
                </p>
              </div>

              {/* Download Button */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background font-mono text-sm uppercase tracking-widest hover:bg-foreground/90 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </motion.div>
            </motion.div>

            {/* Right - PDF Preview Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex justify-center md:justify-end"
            >
              <div className="portrait-frame">
                <div className="w-64 h-80 md:w-72 md:h-96 bg-muted flex flex-col items-center justify-center gap-4">
                  <FileText className="w-12 h-12 text-muted-foreground/50" />
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                    PDF Preview
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

export default Resume;