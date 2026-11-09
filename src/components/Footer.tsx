import { Link } from "react-router-dom";
import Logo from "./Logo";
import { navLinks, organization, projects } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-cream-100/70">
      <div className="container-lead py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-100/60">
              {organization.description}
            </p>
            <p className="mt-4 text-xs text-cream-100/40">
              Founded {organization.founded}
            </p>
          </div>

          <nav aria-label="Site pages">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold-300">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/" className="transition-colors hover:text-cream-50">Home</Link></li>
              {navLinks.map((l) => (
                <li key={l.href}><Link to={l.href} className="transition-colors hover:text-cream-50">{l.label}</Link></li>
              ))}
              <li><Link to="/get-involved" className="transition-colors hover:text-cream-50">Get Involved &amp; Contact</Link></li>
            </ul>
          </nav>

          <nav aria-label="Projects">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold-300">
              Our Projects
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {projects.map((p) => (
                <li key={p.slug}>
                  <Link to={`/projects/${p.slug}`} className="transition-colors hover:text-cream-50">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold-300">
              Connect
            </h3>
            <p className="mt-4 text-sm text-cream-100/60">
              Approved social media links and contact information will be listed here once available.
            </p>
            <Link
              to="/get-involved"
              className="mt-4 inline-flex items-center rounded-full border border-cream-50/20 px-5 py-2.5 text-sm font-medium text-cream-50 transition-colors hover:bg-cream-50 hover:text-ink-900"
            >
              Contact Leadwell
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream-50/10 pt-8 text-xs text-cream-100/50 sm:flex-row">
          <p>&copy; {year} {organization.name}. All rights reserved.</p>
          <p className="text-cream-100/40">{organization.vision}</p>
        </div>
      </div>
    </footer>
  );
}
