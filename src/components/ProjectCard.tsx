import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "./icons";

type ProjectCardProps = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  index: number;
};

export default function ProjectCard({ slug, name, tagline, description, image, index }: ProjectCardProps) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink-900/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <Link to={`/projects/${slug}`} className="block focus-visible:ring-2 focus-visible:ring-gold-400">
        <div className="relative aspect-[16/11] overflow-hidden">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/10 to-transparent" />
          <div className="absolute bottom-4 left-5 right-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">{tagline}</p>
            <h3 className="mt-1 font-display text-2xl font-semibold text-cream-50">{name}</h3>
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-relaxed text-ink-700/85">{description}</p>
        <Link
          to={`/projects/${slug}`}
          className="group/link mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-600 transition-colors hover:text-gold-700"
        >
          Explore Project
          <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}
