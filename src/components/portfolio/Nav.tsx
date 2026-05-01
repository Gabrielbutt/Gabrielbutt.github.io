import { Github } from "lucide-react";

export const Nav = () => (
  <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
    <div className="container flex items-center justify-between h-14">
      <a href="#top" className="font-mono text-sm font-semibold">
        <span className="text-primary">~/</span>gabriel.butt
      </a>
      <nav className="hidden md:flex items-center gap-6 font-mono text-xs text-muted-foreground">
        <a href="#projects" className="hover:text-primary transition-colors">01 projects</a>
        <a href="#skills" className="hover:text-primary transition-colors">02 skills</a>
        <a href="#about" className="hover:text-primary transition-colors">03 about</a>
        <a href="#contact" className="hover:text-primary transition-colors">04 contact</a>
      </nav>
      <a
        href="https://github.com/Gabrielbutt"
        target="_blank"
        rel="noreferrer"
        className="font-mono text-xs flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
      >
        <Github className="h-4 w-4" /> github
      </a>
    </div>
  </header>
);
