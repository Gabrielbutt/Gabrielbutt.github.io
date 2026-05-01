import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => (
  <footer id="contact" className="border-t border-border py-12 mt-10">
    <div className="container grid gap-8 md:grid-cols-2 items-start">
      <div>
        <p className="font-mono text-xs text-primary">// contact</p>
        <h3 className="font-mono text-2xl mt-2">let's talk<span className="text-primary">.</span></h3>
        <p className="mt-3 text-muted-foreground max-w-md">
          Open to collaborations, research discussions, and engineering opportunities.
        </p>
      </div>
      <div className="font-mono text-sm space-y-3">
        <a href="https://github.com/Gabrielbutt" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
          <Github className="h-4 w-4 text-primary" /> github.com/Gabrielbutt
        </a>
        <a href="#" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
          <Linkedin className="h-4 w-4 text-primary" /> linkedin.com/in/gabrielbutt
        </a>
        <a href="mailto:your-email@example.com" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
          <Mail className="h-4 w-4 text-primary" /> your-email@example.com
        </a>
      </div>
    </div>
    <div className="container mt-12 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-muted-foreground">
      <span>© 2026 Gabriel Butt</span>
      <span><span className="text-primary">$</span> echo "built with care"</span>
    </div>
  </footer>
);
