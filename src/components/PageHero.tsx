import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, description, image, children }: PageHeroProps) {
  return (
    <section className={`relative overflow-hidden ${image ? "min-h-[30rem]" : "bg-ink-900"}`}>
      {image && <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />}
      {image && <div className="absolute inset-0 bg-ink-950/70" />}
      <div className="container-lead relative flex min-h-[30rem] items-end py-24 sm:py-32">
        <div className="max-w-3xl text-cream-50">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">{eyebrow}</p>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">{title}</h1>
          {description && <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream-100/80 sm:text-lg">{description}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}
