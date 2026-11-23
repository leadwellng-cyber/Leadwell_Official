import { Link, useParams } from "react-router-dom";
import EmptyState from "../components/EmptyState";
import PageHero from "../components/PageHero";
import { getPublication } from "../data/site";

export default function NewsDetail() {
  const publication = getPublication(useParams().slug);
  if (!publication) return <EmptyState title="Publication not found" description="This article or publication does not exist. Return to News & Publications to continue browsing." />;
  return <><PageHero eyebrow={`${publication.kind} · ${publication.category}`} title={publication.title} description={publication.excerpt} image={publication.image} /><article className="container-lead max-w-3xl py-20 sm:py-28"><p className="text-sm text-ink-700/60">Published {publication.date}</p><div className="prose prose-lg mt-8 max-w-none text-ink-700/80"><p>Approved content for this publication will be added here.</p></div>{publication.downloadableFile && <a href={publication.downloadableFile} download className="mt-8 inline-flex rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-ink-900">Download publication</a>}<Link to="/news" className="mt-10 block text-sm font-semibold text-gold-600 hover:text-gold-700">Back to News & Publications</Link></article></>;
}
