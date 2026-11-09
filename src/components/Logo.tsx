type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

/**
 * Leadwell International wordmark.
 *
 * NOTE: The official Leadwell logo has not yet been uploaded to this project.
 * This is a clearly-identifiable placeholder wordmark using the brand palette.
 * Once the official logo asset is available, replace the markup below with an
 * <img src="/logo.svg" /> tag in public/.
 */
export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const primary = variant === "light" ? "#f6ebcc" : "#173a30";
  const accent = "#c08a1f";

  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="Leadwell International — official logo placeholder"
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M18 2.5 L31.5 10.25 V25.75 L18 33.5 L4.5 25.75 V10.25 Z"
          stroke={accent}
          strokeWidth="1.6"
          fill={variant === "light" ? "rgba(246,235,204,0.08)" : "rgba(23,58,48,0.06)"}
        />
        <path
          d="M12.5 24 V13 h6 a4.5 4.5 0 0 1 0 9 h-3"
          stroke={primary}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="23.5" cy="22" r="1.8" fill={accent} />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className="font-display text-lg font-semibold tracking-tight"
          style={{ color: primary }}
        >
          Leadwell
        </span>
        <span
          className="text-[0.6rem] font-semibold uppercase tracking-[0.22em]"
          style={{ color: accent }}
        >
          International
        </span>
      </span>
    </span>
  );
}
