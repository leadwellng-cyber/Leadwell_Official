import { Link } from "react-router-dom";
import EmptyState from "../components/EmptyState";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { events, getMinistry } from "../data/site";

export default function Events() {
  const upcoming = events.filter((event) => new Date(event.date).getTime() >= Date.now());
  const past = events.filter((event) => new Date(event.date).getTime() < Date.now());
  return <><PageHero eyebrow="Events & Activities" title="Gatherings that move the mission forward." description="Browse approved Leadwell events and activities by date, venue and organizing ministry." /><section className="py-20 sm:py-28"><div className="container-lead"><SectionHeading eyebrow="Upcoming" title="What is next" />{upcoming.length > 0 ? <div className="mt-10 grid gap-6 md:grid-cols-2">{upcoming.map((event) => <EventCard key={event.slug} event={event} />)}</div> : <div className="mt-10"><EmptyState title="Upcoming events will appear here" description="No event dates or venues have been approved for publication yet." /></div>}<div className="mt-20"><SectionHeading eyebrow="Past events" title="A record of activities" />{past.length > 0 ? <div className="mt-10 grid gap-6 md:grid-cols-2">{past.map((event) => <EventCard key={event.slug} event={event} />)}</div> : <div className="mt-10"><EmptyState title="No past events listed" description="Past activities will be archived here once approved event records are available." /></div>}</div></div></section></>;
}

function EventCard({ event }: { event: (typeof events)[number] }) {
  const ministry = getMinistry(event.ministrySlug);
  return <Link to={`/events/${event.slug}`} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink-900/5 hover:-translate-y-1 hover:shadow-lg"><p className="text-xs font-semibold uppercase tracking-wider text-gold-600">{event.date} · {ministry?.name}</p><h2 className="mt-3 font-display text-2xl font-semibold text-ink-900">{event.title}</h2>{event.venue && <p className="mt-3 text-sm text-ink-700/70">{event.venue}</p>}<p className="mt-4 text-sm leading-relaxed text-ink-700/70">{event.description}</p></Link>;
}
