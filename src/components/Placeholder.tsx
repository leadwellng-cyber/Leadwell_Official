import { Link, useParams } from "react-router-dom";
import { ButtonLink } from "./Button";
import { ArrowRight } from "./icons";
import { projects, organization } from "../data/site";
import Logo from "./Logo";

type PlaceholderProps = {
  title?: string;
  eyebrow?: string;
  description?: string;
};

export default function Placeholder({ title, eyebrow, description }: PlaceholderProps) {
  const { slug } = useParams();
  const project = slug ? projects.find((p) => p.slug === slug) : undefined;

  const heading = project ? project.name : title;
  const sub = project ? project.description : description;
  const eye = project ? "Our Projects" : eyebrow;

  return (
    <div className="flex min-h-[100svh] flex-col">
      <div className="border-b border-ink-900/10 bg-cream-50">
        <div className="container-lead flex h-16 items-center">
          <Link to="/" aria-label={`${organization.name} home`}>
            <Logo variant="dark" />
          </Link>
        </div>
      </div>

      <main className="container-lead flex flex-1 flex-col items-center justify-center py-24 text-center">
        <p className="eyebrow mb-3">{eye ?? "Leadwell International"}</p>
        <h1 className="font-display text-4xl font-semibold text-ink-900 sm:text-5xl">{heading}</h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-700/80">
          {sub ??
            "This page is part of the planned Leadwell International website and will be developed in a future phase."}
        </p>
        <p className="mt-3 max-w-lg text-sm text-ink-700/60">
          This is a Phase 1 placeholder. The full content for this section is coming soon.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink to="/" variant="secondary">
            Back to home
          </ButtonLink>
          {project && (
            <ButtonLink to="/projects" variant="ghost">
              All projects
              <ArrowRight size={16} />
            </ButtonLink>
          )}
        </div>
      </main>
    </div>
  );
}
