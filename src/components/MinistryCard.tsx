import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "./icons";
import type { Ministry } from "../data/site";

type MinistryCardProps = {
  ministry: Ministry;
  index: number;
};

export default function MinistryCard({ ministry, index }: MinistryCardProps) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <Link to={`/ministries/${ministry.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img src={ministry.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/75 via-ink-950/10 to-transparent" />
          <h3 className="absolute bottom-5 left-5 right-5 font-display text-2xl font-semibold leading-tight text-cream-50">{ministry.name}</h3>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-relaxed text-ink-700/85">{ministry.summary}</p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-gold-600">Director: {ministry.director}</p>
        <Link to={`/ministries/${ministry.slug}`} className="group/link mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-600 transition-colors hover:text-gold-700">
          Explore ministry <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}
