import { ArrowUpRight, Github } from "lucide-react";

type Project = {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  href: string;
};

const projects: Project[] = [
  {
    title: "Computational Intelligence",
    slug: "computational-intelligence",
    description: "AI projects exploring intelligent search, optimization, learning systems, and computational approaches to complex problem solving.",
    tags: ["Python", "AI", "Optimization", "Search"],
    href: "https://github.com/Gabrielbutt/computational-intelligence",
  },
  {
    title: "Data Wrangling",
    slug: "data-wrangling",
    description: "Practical data wrangling and analysis projects: cleaning, preprocessing, visualization, and insight generation with Python.",
    tags: ["Python", "Pandas", "Data Cleaning", "Visualization"],
    href: "https://github.com/Gabrielbutt/data-wrangling",
  },
  {
    title: "Deep Learning",
    slug: "deep-learning",
    description: "Neural network projects with transformer models, graph learning, sequence modeling, training pipelines, and evaluation.",
    tags: ["Python", "PyTorch", "Transformers", "GNNs"],
    href: "https://github.com/Gabrielbutt/deep-learning-projects",
  },
  {
    title: "Evolutionary Computing",
    slug: "evolutionary-computing",
    description: "Optimization projects using evolutionary algorithms to solve search and decision problems through population-based learning.",
    tags: ["Python", "Genetic Algorithms", "Optimization"],
    href: "https://github.com/Gabrielbutt/evolutionary-computing",
  },
  {
    title: "Information Retrieval",
    slug: "information-retrieval",
    description: "A full IR pipeline covering text preprocessing, indexing, ranking, retrieval evaluation, clustering, and result analysis.",
    tags: ["Python", "NLP", "Ranking", "Clustering"],
    href: "https://github.com/Gabrielbutt/information-retrieval-system",
  },
  {
    title: "Knowledge & Data",
    slug: "knowledge-data",
    description: "Linked data and Semantic Web projects using RDF, OWL, SPARQL, ontologies, reasoning, and knowledge graph integration.",
    tags: ["RDF", "OWL", "SPARQL", "Knowledge Graphs"],
    href: "https://github.com/Gabrielbutt/knowledge-data-semantic-web",
  },
  {
    title: "Knowledge Representation",
    slug: "knowledge-representation",
    description: "A SAT-based reasoning project modeling non-consecutive Sudoku as a propositional logic problem, solved with a custom solver.",
    tags: ["Python", "SAT", "Logic", "CNF"],
    href: "https://github.com/Gabrielbutt/knowledge-representation-sat-solver",
  },
  {
    title: "Text Mining",
    slug: "text-mining",
    description: "NLP projects applying sentiment analysis, entity recognition, topic modeling, and transformer-based text classification.",
    tags: ["Python", "NLP", "Sentiment Analysis", "Topic Modeling"],
    href: "https://github.com/Gabrielbutt/text-mining-nlp",
  },
];

export const Projects = () => (
  <section id="projects" className="py-20 md:py-28 border-t border-border">
    <div className="container">
      <SectionHeading index="02" title="projects" caption="// selected work" />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <a
            key={p.slug}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="group terminal-window block transition-all duration-200 hover:border-primary/60 hover:-translate-y-0.5"
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <div className="terminal-header">
              <div className="flex items-center gap-1.5 mr-3">
                <span className="dot bg-[hsl(0_60%_55%)]" />
                <span className="dot bg-[hsl(40_70%_55%)]" />
                <span className="dot bg-[hsl(140_45%_50%)]" />
              </div>
              <span className="font-mono text-xs text-muted-foreground truncate">
                ~/projects/{p.slug}.md
              </span>
              <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
            <div className="p-5 font-mono text-sm">
              <h3 className="text-base text-foreground font-semibold tracking-tight">
                <span className="text-primary mr-2">#</span>{p.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed font-sans text-sm">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-border bg-secondary/40 px-2 py-0.5 text-xs text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
                <Github className="h-3.5 w-3.5" />
                <span className="truncate">{p.href.replace("https://", "")}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export const SectionHeading = ({ index, title, caption }: { index: string; title: string; caption: string }) => (
  <div className="flex items-end justify-between flex-wrap gap-4">
    <div>
      <p className="font-mono text-xs text-primary">{caption}</p>
      <h2 className="font-mono text-2xl md:text-3xl mt-2 tracking-tight">
        <span className="text-muted-foreground">{index}.</span> {title}
        <span className="text-primary">()</span>
      </h2>
    </div>
    <div className="hidden md:block h-px flex-1 ml-8 bg-border" />
  </div>
);
