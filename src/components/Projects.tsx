import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import MinistryCard from "./MinistryCard";
import { ArrowRight } from "./icons";
import { ministries } from "../data/site";

export default function Projects() {
  return (
    <section className="bg-cream-100 py-20 sm:py-28" aria-labelledby="ministries-heading">
      <div className="container-lead">
        <ScrollReveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Our Ministries"
            title="Eight ministries, one shared mission"
            description="Each independent ministry reports directly to the President and brings a distinct expression of faith, service, learning and organizational development."
          />
          <Link to="/ministries" className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-gold-600 transition-colors hover:text-gold-700">
            View all ministries <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.map((ministry, index) => <MinistryCard key={ministry.slug} ministry={ministry} index={index} />)}
        </div>
      </div>
    </section>
  );
}
