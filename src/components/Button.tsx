import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline-light";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-gold-400 text-ink-900 hover:bg-gold-300 shadow-sm hover:shadow-md hover:-translate-y-0.5",
  secondary:
    "bg-ink-900 text-cream-50 hover:bg-ink-800 shadow-sm hover:shadow-md hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-ink-900 hover:bg-ink-900/5",
  "outline-light":
    "border border-cream-100/40 text-cream-50 hover:bg-cream-50 hover:text-ink-900 backdrop-blur-sm",
};

type ButtonAsLink = CommonProps & {
  to: string;
  size?: keyof typeof sizes;
  onClick?: () => void;
};

type ButtonAsAnchor = CommonProps & {
  href: string;
  size?: keyof typeof sizes;
};

type ButtonAsButton = CommonProps & {
  onClick: () => void;
  type?: "button" | "submit";
  size?: keyof typeof sizes;
  ariaLabel?: string;
};

export function ButtonLink({ children, variant = "primary", className = "", size = "md", to, onClick }: ButtonAsLink) {
  return (
    <Link to={to} onClick={onClick} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function ButtonAnchor({ children, variant = "primary", className = "", size = "md", href }: ButtonAsAnchor) {
  return (
    <a href={href} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}

export function Button({
  children,
  variant = "primary",
  className = "",
  size = "md",
  onClick,
  type = "button",
  ariaLabel,
}: ButtonAsButton) {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
