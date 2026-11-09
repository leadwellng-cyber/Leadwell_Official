import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { ArrowRight } from "./icons";

export default function News() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="news-heading">
      <div className="container-lead">
        <ScrollReveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="News & Updates" title="Stories and announcements" />
          <Link
            to="/news"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-gold-600 transition-colors hover:text-gold-700"
          >
            All news &amp; updates
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-dashed border-ink-900/15 bg-cream-100 px-6 py-16 text-center">
            <h3 className="font-display text-xl font-semibold text-ink-900">
              No stories published yet
            </h3>
            <p className="mt-2 max-w-md text-sm text-ink-700/70">
              Organizational announcements and project updates will be featured here once available.
              Project-specific updates will also be accessible through each project's page.
            </p>
            <Link
              to="/news"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-600 transition-colors hover:text-gold-700"
            >
              Visit the news hub
              <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
