import PageHero from "../components/PageHero";
import MinistryCard from "../components/MinistryCard";
import { ministries } from "../data/site";

export default function Ministries() {
  return (
    <>
      <PageHero eyebrow="Our Ministries" title="Eight independent arms, one shared mission." description="Explore the ministries that carry Leadwell International's work across faith, outreach, leadership, technology, publications, care, partnership and administration." />
      <section className="py-20 sm:py-28">
        <div className="container-lead grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.map((ministry, index) => <MinistryCard key={ministry.slug} ministry={ministry} index={index} />)}
        </div>
      </section>
    </>
  );
}
