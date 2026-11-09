import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { ArrowRight } from "./icons";
import { projects } from "../data/site";

export default function Projects() {
  return (
    <section className="bg-cream-100 py-20 sm:py-28" aria-labelledby="projects-heading">
      <div className="container-lead">
        <ScrollReveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Our Projects"
            title="Six initiatives, one shared mission"
            description="Each project develops leaders in a distinct area — from reading culture to community service — while sharing a common foundation of faith and purpose."
          />
          <Link
            to="/projects"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-gold-600 transition-colors hover:text-gold-700"
          >
            View all projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
