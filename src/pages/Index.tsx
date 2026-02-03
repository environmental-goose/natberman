import { motion } from "framer-motion";
import GraphPaperLayout from "@/components/layout/GraphPaperLayout";
import ShatterNav from "@/components/navigation/ShatterNav";

const Index = () => {
  return (
    <GraphPaperLayout>
      <div className="min-h-screen flex">
        {/* Left Column - Navigation (30%) */}
        <motion.div
          className="w-full md:w-[30%] min-h-screen flex flex-col justify-center p-8 md:p-12 lg:p-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-md">
            {/* Main Title Branding */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-2">
                NATHANIEL BERMAN
              </h1>
              <p className="text-sm md:text-base font-light tracking-widest text-muted-foreground uppercase">
                Multidisciplinary Portfolio
              </p>
            </motion.div>

            <ShatterNav />
          </div>
        </motion.div>

        {/* Right Column - Atmospheric Space (70%) */}
        <motion.div
          className="hidden md:flex w-[70%] min-h-screen items-end justify-end p-12 lg:p-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="text-right">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Nathaniel Berman's Portfolio
            </p>
            <p className="text-xs font-mono text-muted-foreground/60">
              2026
            </p>
          </div>
        </motion.div>
      </div>
    </GraphPaperLayout>
  );
};

export default Index;
