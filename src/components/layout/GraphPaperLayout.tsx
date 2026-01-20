import { ReactNode } from "react";

interface GraphPaperLayoutProps {
  children: ReactNode;
}

const GraphPaperLayout = ({ children }: GraphPaperLayoutProps) => {
  return (
    <div className="min-h-screen w-full graph-paper">
      {children}
    </div>
  );
};

export default GraphPaperLayout;