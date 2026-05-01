import { SectionHeading } from "./Projects";

const skills = [
  "Python", "Pandas", "NumPy", "Scikit-learn", "PyTorch", "Transformers",
  "NLP", "Information Retrieval", "RDF / OWL / SPARQL", "Knowledge Graphs",
  "Data Visualization", "Git / GitHub",
];

export const Skills = () => (
  <section id="skills" className="py-20 md:py-28 border-t border-border">
    <div className="container">
      <SectionHeading index="03" title="skills" caption="// stack" />
      <div className="mt-10 terminal-window max-w-3xl">
        <div className="terminal-header">
          <div className="flex items-center gap-1.5 mr-3">
            <span className="dot bg-[hsl(0_60%_55%)]" />
            <span className="dot bg-[hsl(40_70%_55%)]" />
            <span className="dot bg-[hsl(140_45%_50%)]" />
          </div>
          <span className="font-mono text-xs text-muted-foreground">~/skills $ ls --tags</span>
        </div>
        <div className="p-6 font-mono text-sm flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="rounded-md border border-border bg-secondary/40 px-3 py-1.5 text-foreground/90 hover:border-primary/60 hover:text-primary transition-colors"
            >
              <span className="text-primary mr-1.5">$</span>{s}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);
