type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center rounded-lg ${
        variant === "light" ? "bg-ink-900/20" : "bg-cream-50/90"
      } ${className}`}
      aria-label="Leadwell International official logo"
    >
      <img
        src="/images/Leadwell_Official_Logo.png"
        alt="Leadwell International"
        className="h-auto w-[9.5rem] object-contain sm:w-[11rem]"
      />
    </span>
  );
}
