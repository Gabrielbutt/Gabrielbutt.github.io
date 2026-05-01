import { Github, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TerminalWindow } from "./TerminalWindow";

export const Hero = () => (
  <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
    <div className="container relative grid md:grid-cols-2 gap-10 md:gap-16 items-center">
      <div className="animate-fade-up">
        <p className="font-mono text-sm text-primary mb-4">$ whoami</p>
        <h1 className="font-mono text-4xl md:text-6xl font-semibold tracking-tight">
          Gabriel Butt
        </h1>
        <p className="font-mono text-base md:text-lg text-muted-foreground mt-3">
          <span className="text-primary">&gt;</span> AI / Data Science / Software Projects
        </p>
        <p className="mt-6 text-foreground/80 leading-relaxed max-w-xl">
          I build practical projects across machine learning, deep learning, natural
          language processing, information retrieval, semantic web technologies, and
          knowledge representation.
        </p>
        <div className="mt-5 flex items-center gap-2 text-sm font-mono text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-primary" />
          Amsterdam, Netherlands
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="font-mono">
            <a href="https://github.com/Gabrielbutt" target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" /> View GitHub
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-mono">
            <a href="mailto:your-email@example.com">
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </Button>
        </div>
      </div>

      <div className="animate-fade-up" style={{ animationDelay: "120ms" }}>
        <TerminalWindow title="gabriel@portfolio: ~">
          <div className="p-5 space-y-1.5">
            <Line prompt user="gabriel" path="~">cat profile.json</Line>
            <pre className="text-foreground/90 leading-relaxed pl-2">
{`{
  "name": "Gabriel Butt",
  "role": "AI · Data Science · Software",
  "location": "Amsterdam, NL",
  "focus": [
    "machine learning",
    "deep learning",
    "nlp & information retrieval",
    "semantic web · knowledge graphs"
  ],
  "status": "building"
}`}
            </pre>
            <Line prompt user="gabriel" path="~">
              <span className="cursor-blink"> </span>
            </Line>
          </div>
        </TerminalWindow>
      </div>
    </div>
  </section>
);

const Line = ({ children, prompt, user, path }: { children: React.ReactNode; prompt?: boolean; user?: string; path?: string }) =>
  prompt ? (
    <div className="text-foreground/90">
      <span className="text-primary">{user}</span>
      <span className="text-muted-foreground">@</span>
      <span className="text-primary">portfolio</span>
      <span className="text-muted-foreground">:</span>
      <span className="text-[hsl(210_50%_70%)]">{path}</span>
      <span className="text-muted-foreground">$ </span>
      {children}
    </div>
  ) : (
    <div>{children}</div>
  );
