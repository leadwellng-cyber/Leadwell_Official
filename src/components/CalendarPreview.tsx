import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import { ButtonLink } from "./Button";
import { ArrowRight, Calendar as CalIcon } from "./icons";

const months = [
  { label: "Nov", days: ["S", "M", "T", "W", "T", "F", "S"] },
];

export default function CalendarPreview() {
  return (
    <section className="bg-ink-900 py-20 text-cream-50 sm:py-28" aria-labelledby="calendar-heading">
      <div className="container-lead grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <ScrollReveal>
          <p className="eyebrow mb-3 text-gold-300">Calendar</p>
          <h2 id="calendar-heading" className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
            One calendar for every Leadwell activity
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-cream-100/75">
            The unified Leadwell calendar brings together activities from all six projects and their
            sub-projects — from readers' conferences to leadership boot camps, school tours and
            worship gatherings.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/calendar" variant="primary">
              Open the calendar
            </ButtonLink>
            <Link
              to="/calendar"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-gold-300 transition-colors hover:text-gold-200"
            >
              Browse upcoming activities
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <div className="rounded-2xl bg-ink-800 p-6 shadow-xl ring-1 ring-cream-50/5 sm:p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold-400/15 text-gold-300">
                  <CalIcon size={20} />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold">November 2026</p>
                  <p className="text-xs text-cream-100/60">Activity preview</p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-7 gap-1.5 text-center">
              {months[0].days.map((d) => (
                <span key={d} className="text-[0.65rem] font-semibold uppercase text-cream-100/40">
                  {d}
                </span>
              ))}
              {Array.from({ length: 30 }).map((_, i) => (
                <span
                  key={i}
                  className={`aspect-square rounded-md text-xs flex items-center justify-center ${
                    i === 8
                      ? "bg-gold-400 font-semibold text-ink-900"
                      : "bg-ink-700/40 text-cream-100/60"
                  }`}
                >
                  {i + 1}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-ink-700/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold-300">Coming soon</p>
              <p className="mt-1 text-sm text-cream-100/70">
                Scheduled activities from all projects will be listed here once approved.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
