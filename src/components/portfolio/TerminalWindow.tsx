import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  title?: string;
  children: ReactNode;
  className?: string;
  showDots?: boolean;
}

export const TerminalWindow = ({ title = "bash", children, className, showDots = true }: Props) => (
  <div className={cn("terminal-window", className)}>
    <div className="terminal-header">
      {showDots && (
        <div className="flex items-center gap-1.5 mr-3">
          <span className="dot bg-[hsl(0_60%_55%)]" />
          <span className="dot bg-[hsl(40_70%_55%)]" />
          <span className="dot bg-[hsl(140_45%_50%)]" />
        </div>
      )}
      <span className="font-mono text-xs text-muted-foreground">{title}</span>
    </div>
    <div className="font-mono text-sm">{children}</div>
  </div>
);
