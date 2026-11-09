import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { ArrowRight, Calendar as CalIcon } from "./icons";

export default function Events() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="events-heading">
      <div className="container-lead">
        <ScrollReveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Events" title="Upcoming events" />
          <Link
            to="/events"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-gold-600 transition-colors hover:text-gold-700"
          >
            View all events
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-dashed border-ink-900/15 bg-cream-100 px-6 py-16 text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold-100 text-gold-600">
              <CalIcon size={26} />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">
              No upcoming events announced yet
            </h3>
            <p className="mt-2 max-w-md text-sm text-ink-700/70">
              Approved Leadwell events will appear here with full details. Please check back soon,
              or visit the full events page for the latest schedule.
            </p>
            <Link
              to="/events"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-600 transition-colors hover:text-gold-700"
            >
              Go to events page
              <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
