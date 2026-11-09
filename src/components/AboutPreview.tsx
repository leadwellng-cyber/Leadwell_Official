import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { ArrowRight } from "./icons";
import { aboutImage, organization } from "../data/site";

export default function AboutPreview() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="about-heading">
      <div className="container-lead grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <ScrollReveal className="order-2 lg:order-1">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-lg border-l-2 border-t-2 border-gold-400/60" aria-hidden="true" />
            <img
              src={aboutImage}
              alt="A Leadwell leader speaking at a gathering"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-lg"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-4 hidden rounded-xl bg-ink-900 px-6 py-5 text-cream-50 shadow-xl sm:block">
              <p className="font-display text-3xl font-semibold text-gold-300">2017</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-cream-100/70">Founded</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="order-1 lg:order-2" delay={0.1}>
          <SectionHeading
            eyebrow="About Leadwell"
            title="A movement of faith, leadership and service"
          />
          <p className="mt-6 text-base leading-relaxed text-ink-700/85 sm:text-lg">
            {organization.description}
          </p>

          <figure className="mt-8 border-l-2 border-gold-400 pl-5">
            <blockquote className="font-display text-xl italic leading-snug text-ink-900 sm:text-2xl">
              "{organization.vision}"
            </blockquote>
            <figcaption className="mt-2 text-sm text-ink-700/70">Our Vision</figcaption>
          </figure>

          <p className="mt-6 text-sm text-ink-700/70">
            Founded on {organization.founded}, Leadwell International works across six initiatives
            to develop leaders who serve their communities with integrity and purpose.
          </p>

          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold-600 transition-colors hover:text-gold-700"
          >
            Read the full story
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
