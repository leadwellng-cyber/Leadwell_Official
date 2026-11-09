import ScrollReveal from "./ScrollReveal";
import { ButtonLink } from "./Button";
import { ArrowRight, Heart, HandsHelping, Users, Mail } from "./icons";
import { getInvolvedImage, organization } from "../data/site";

const pathways = [
  {
    icon: <Users size={22} />,
    title: "Get involved",
    description: "Take part in any of the six initiatives across our community.",
  },
  {
    icon: <HandsHelping size={22} />,
    title: "Volunteer",
    description: "Give your time and skills to serve alongside Leadwell teams.",
  },
  {
    icon: <Heart size={22} />,
    title: "Partner with us",
    description: "Partner with Leadwell to expand leadership development.",
  },
  {
    icon: <Mail size={22} />,
    title: "Make an enquiry",
    description: "Reach out with questions about our work and how to connect.",
  },
];

export default function GetInvolved() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28" aria-labelledby="get-involved-heading">
      <img
        src={getInvolvedImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-ink-950/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/70" />

      <div className="container-lead relative z-10">
        <ScrollReveal className="max-w-2xl">
          <p className="eyebrow mb-3 text-gold-300">Get Involved &amp; Contact</p>
          <h2
            id="get-involved-heading"
            className="font-display text-3xl font-semibold leading-tight text-cream-50 sm:text-4xl lg:text-5xl"
          >
            Join the movement of empowered leaders
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream-100/80">
            There are many ways to connect with {organization.name}. Whether you want to
            participate, volunteer, partner or simply learn more, we'd love to hear from you.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pathways.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-cream-50/10 bg-cream-50/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gold-300/40 hover:bg-cream-50/10">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold-400/15 text-gold-300 transition-colors group-hover:bg-gold-400 group-hover:text-ink-900">
                  {p.icon}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-cream-50">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-100/70">{p.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2} className="mt-12">
          <ButtonLink to="/get-involved" variant="primary" size="lg">
            Get Involved &amp; Contact
            <ArrowRight size={18} />
          </ButtonLink>
        </ScrollReveal>
      </div>
    </section>
  );
}
