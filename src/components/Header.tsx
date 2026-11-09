import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "./icons";
import Logo from "./Logo";
import { ButtonLink } from "./Button";
import { navLinks, organization } from "../data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-cream-50/90 backdrop-blur-md shadow-sm border-b border-ink-900/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-lead flex h-16 items-center justify-between sm:h-[4.5rem]">
        <Link to="/" aria-label={`${organization.name} home`} className="shrink-0">
          <Logo variant={solid ? "dark" : "light"} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  solid
                    ? "text-ink-800 hover:text-gold-600"
                    : "text-cream-50/90 hover:text-white"
                } ${active ? (solid ? "text-gold-600" : "text-white") : ""}`}
              >
                {link.label}
                {active && (
                  <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-gold-400" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink to="/get-involved" size="md">
            Get Involved
          </ButtonLink>
        </div>

        <button
          type="button"
          className={`lg:hidden inline-flex items-center justify-center rounded-full p-2 transition-colors ${
            solid ? "text-ink-900 hover:bg-ink-900/5" : "text-cream-50 hover:bg-white/10"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden lg:hidden border-t border-ink-900/5 bg-cream-50"
          >
            <nav className="container-lead flex flex-col py-4" aria-label="Mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="rounded-xl px-3 py-3 text-base font-medium text-ink-800 hover:bg-ink-900/5 hover:text-gold-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/get-involved"
                className="mt-3 inline-flex items-center justify-center rounded-full bg-gold-400 px-6 py-3 text-sm font-medium text-ink-900 hover:bg-gold-300 transition-colors"
              >
                Get Involved &amp; Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
