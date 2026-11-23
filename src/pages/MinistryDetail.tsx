import { Link, useParams } from "react-router-dom";
import { ButtonLink } from "../components/Button";
import EmptyState from "../components/EmptyState";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { ArrowRight } from "../components/icons";
import { activities, getMinistry, organization, publications } from "../data/site";

export default function MinistryDetail() {
  const { slug } = useParams();
  const ministry = getMinistry(slug);

  if (!ministry) {
    return <EmptyState title="Ministry not found" description="This ministry page does not exist. Return to the ministries overview to continue exploring Leadwell." />;
  }

  const ministryActivities = activities.filter((activity) => activity.ministrySlug === ministry.slug);
  const ministryPublications = publications.filter((publication) => publication.ministrySlug === ministry.slug);

  return (
    <>
      <PageHero eyebrow="Leadwell Ministry" title={ministry.name} description={ministry.summary} image={ministry.image}>
        <ButtonLink to="/get-involved" variant="primary">Get involved <ArrowRight size={16} /></ButtonLink>
      </PageHero>
      <section className="py-20 sm:py-28">
        <div className="container-lead grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading eyebrow="Ministry mandate" title="Serving Leadwell's shared vision with focus." description={ministry.mandate} />
            {ministry.responsibilities && ministry.responsibilities.length > 0 && (
              <div className="mt-10"><h2 className="font-display text-2xl font-semibold text-ink-900">Responsibilities</h2><ul className="mt-5 grid gap-3 sm:grid-cols-2">{ministry.responsibilities.map((item) => <li key={item} className="rounded-xl bg-cream-100 px-4 py-3 text-sm text-ink-700/80">{item}</li>)}</ul></div>
            )}
          </div>
          <aside className="h-fit rounded-2xl bg-ink-900 p-8 text-cream-50"><p className="eyebrow text-gold-300">Ministry director</p><p className="mt-4 font-display text-2xl font-semibold">{ministry.director}</p><p className="mt-4 text-sm leading-relaxed text-cream-100/70">Every ministry reports directly to the President as part of Leadwell's independent ministry structure.</p></aside>
        </div>
      </section>
      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-lead"><SectionHeading eyebrow="Sub-ministries" title="Focused expressions of the mandate" />{ministry.subMinistries.length > 0 ? <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{ministry.subMinistries.map((item) => <div key={item} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink-900/5"><h2 className="font-display text-xl font-semibold text-ink-900">{item}</h2><p className="mt-3 text-sm leading-relaxed text-ink-700/70">Programme details will be added as approved information becomes available.</p></div>)}</div> : <div className="mt-10"><EmptyState title="No sub-ministries listed" description="This ministry currently operates through its stated mandate and responsibilities." /></div>}</div>
      </section>
      <section className="py-20 sm:py-28"><div className="container-lead grid gap-12 lg:grid-cols-2"><div><SectionHeading eyebrow="Activities" title="What is happening" />{ministryActivities.length > 0 ? <div className="mt-8 space-y-4">{ministryActivities.map((activity) => <div key={activity.id} className="rounded-xl border border-ink-900/10 p-5"><p className="text-xs font-semibold uppercase tracking-wider text-gold-600">{activity.date}</p><h2 className="mt-2 font-display text-xl font-semibold text-ink-900">{activity.title}</h2><p className="mt-2 text-sm text-ink-700/70">{activity.description}</p></div>)}</div> : <div className="mt-8"><EmptyState title="Activities will appear here" description="Approved ministry activities and programmes will be published here." /></div>}</div><div><SectionHeading eyebrow="Related publications" title="Stories and resources" />{ministryPublications.length > 0 ? <div className="mt-8 space-y-4">{ministryPublications.map((publication) => <Link key={publication.slug} to={`/news/${publication.slug}`} className="block rounded-xl border border-ink-900/10 p-5 hover:border-gold-400"><p className="text-xs font-semibold uppercase tracking-wider text-gold-600">{publication.kind}</p><h2 className="mt-2 font-display text-xl font-semibold text-ink-900">{publication.title}</h2></Link>)}</div> : <div className="mt-8"><EmptyState title="Publications will appear here" description="Related news and approved publications will be connected to this ministry as they become available." /></div>}</div></div></section>
      <section className="bg-ink-900 py-16 text-center text-cream-50"><div className="container-lead"><p className="eyebrow text-gold-300">Stay connected</p><h2 className="mt-3 font-display text-3xl font-semibold">Learn more about {organization.shortName}.</h2><Link to="/news" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-300 hover:text-gold-200">Explore news and publications <ArrowRight size={16} /></Link></div></section>
    </>
  );
}
