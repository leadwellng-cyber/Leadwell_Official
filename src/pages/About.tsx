import { Link } from "react-router-dom";
import { ButtonLink } from "../components/Button";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import { ArrowRight } from "../components/icons";
import { aboutImage, organization } from "../data/site";

export default function About() {
  return (
    <>
      <PageHero eyebrow="About Leadwell" title="Faith, service and learning for a generation of leaders." description={organization.description} image={aboutImage} />
      <section className="py-20 sm:py-28">
        <div className="container-lead grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <ScrollReveal>
            <SectionHeading eyebrow="Our foundation" title="A Christian leadership development organization" description="Leadwell International is grounded in Christian faith and committed to the transformation of followers into empowered leaders." />
          </ScrollReveal>
          <ScrollReveal delay={0.12} className="rounded-2xl bg-cream-100 p-8 sm:p-10">
            <p className="eyebrow">Our history</p>
            <p className="mt-4 font-display text-3xl font-semibold text-ink-900">Founded {organization.founded}</p>
            <p className="mt-5 text-base leading-relaxed text-ink-700/80">Leadwell brings people together through faith, service, learning and community. Its work is expressed through eight independent ministries, each reporting directly to the President.</p>
          </ScrollReveal>
        </div>
      </section>
      <section className="bg-ink-900 py-20 text-cream-50 sm:py-28">
        <div className="container-lead grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <p className="eyebrow text-gold-300">Our vision</p>
          <blockquote className="font-display text-3xl font-medium leading-tight sm:text-5xl">“{organization.vision}”</blockquote>
        </div>
      </section>
      <section className="py-20 sm:py-28">
        <div className="container-lead flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Organizational leadership" title="Eight independent ministries, one shared direction." description="The eight ministry directors and the President constitute Leadwell's Elite Team executives. Each ministry has its own mandate and reports directly to the President." />
          <ButtonLink to="/ministries" variant="primary">Meet the ministries <ArrowRight size={16} /></ButtonLink>
        </div>
        <div className="container-lead mt-8"><Link to="/get-involved" className="text-sm font-semibold text-gold-600 hover:text-gold-700">Find a way to participate <ArrowRight size={16} className="ml-1 inline" /></Link></div>
      </section>
    </>
  );
}
