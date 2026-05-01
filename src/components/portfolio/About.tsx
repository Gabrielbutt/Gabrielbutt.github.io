import { SectionHeading } from "./Projects";

export const About = () => (
  <section id="about" className="py-20 md:py-28 border-t border-border">
    <div className="container">
      <SectionHeading index="04" title="about" caption="// who" />
      <div className="mt-10 grid md:grid-cols-[auto_1fr] gap-6 max-w-4xl font-mono text-sm leading-relaxed">
        <div className="hidden md:flex flex-col text-muted-foreground/60 select-none pr-4 border-r border-border">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i}>{String(i + 1).padStart(2, "0")}</span>
          ))}
        </div>
        <p className="text-foreground/85 font-sans text-base md:text-lg">
          I focus on building practical AI and data science projects that combine theory
          with implementation. My work spans <span className="text-primary font-mono">machine learning</span>,
          <span className="text-primary font-mono"> deep learning</span>,
          <span className="text-primary font-mono"> NLP</span>,
          <span className="text-primary font-mono"> information retrieval</span>,
          <span className="text-primary font-mono"> semantic web technologies</span>, and
          <span className="text-primary font-mono"> logic-based reasoning systems</span>.
        </p>
      </div>
    </div>
  </section>
);
