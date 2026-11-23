import { Link, useParams } from "react-router-dom";
import EmptyState from "../components/EmptyState";
import PageHero from "../components/PageHero";
import { getEvent, getMinistry } from "../data/site";

export default function EventDetail() {
  const event = getEvent(useParams().slug);
  if (!event) return <EmptyState title="Event not found" description="This event does not exist. Return to Events & Activities to continue browsing." />;
  const ministry = getMinistry(event.ministrySlug);
  return <><PageHero eyebrow={`${event.date} · ${ministry?.name ?? "Leadwell International"}`} title={event.title} description={event.description} image={event.flyer} /><section className="container-lead max-w-3xl py-20 sm:py-28"><div className="grid gap-4 sm:grid-cols-2"><div className="rounded-xl bg-cream-100 p-5"><p className="eyebrow">Date and time</p><p className="mt-2 text-sm text-ink-700/80">{event.date}{event.time ? ` · ${event.time}` : ""}</p></div><div className="rounded-xl bg-cream-100 p-5"><p className="eyebrow">Venue</p><p className="mt-2 text-sm text-ink-700/80">{event.venue ?? "Venue to be announced"}</p></div></div><Link to="/events" className="mt-10 block text-sm font-semibold text-gold-600 hover:text-gold-700">Back to Events & Activities</Link></section></>;
}
