import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import EmptyState from "../components/EmptyState";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { publications } from "../data/site";

export default function News() {
  const [category, setCategory] = useState("All");
  const categories = useMemo(() => ["All", ...Array.from(new Set(publications.map((publication) => publication.category)))], []);
  const filtered = category === "All" ? publications : publications.filter((publication) => publication.category === category);

  return (
    <>
      <PageHero eyebrow="News & Publications" title="Stories, resources and updates from Leadwell." description="A professional home for organization-wide announcements, ministry news and approved LeadPress publications." />
      <section className="py-20 sm:py-28"><div className="container-lead"><SectionHeading eyebrow="Editorial platform" title="Read what Leadwell is sharing" description="News articles and downloadable publications will be clearly distinguished as approved content is added." /><div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter publications">{categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${category === item ? "bg-ink-900 text-cream-50" : "bg-cream-100 text-ink-700 hover:bg-gold-100"}`}>{item}</button>)}</div><div className="mt-10">{filtered.length > 0 ? <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filtered.map((publication) => <Link key={publication.slug} to={`/news/${publication.slug}`} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink-900/5 hover:-translate-y-1 hover:shadow-lg"><p className="text-xs font-semibold uppercase tracking-wider text-gold-600">{publication.kind} · {publication.category}</p><h2 className="mt-4 font-display text-2xl font-semibold text-ink-900">{publication.title}</h2><p className="mt-3 text-sm leading-relaxed text-ink-700/70">{publication.excerpt}</p><p className="mt-5 text-xs text-ink-700/50">{publication.date}</p></Link>)}</div> : <EmptyState title="Publications are coming soon" description="No approved news articles or publications have been added yet. This space is ready for LeadPress and ministry content." />}</div></div></section>
    </>
  );
}
