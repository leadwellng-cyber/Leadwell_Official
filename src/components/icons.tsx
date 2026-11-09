import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const make = (path: React.ReactNode) =>
  function Icon({ size = 20, ...props }: IconProps) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        {path}
      </svg>
    );
  };

export const Menu = make(<><path d="M4 6h16M4 12h16M4 18h16" /></>);
export const X = make(<><path d="M18 6 6 18M6 6l12 12" /></>);
export const Moon = make(<><path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z" /></>);
export const Sun = make(<><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></>);
export const ChevronLeft = make(<><path d="m15 18-6-6 6-6" /></>);
export const ChevronRight = make(<><path d="m9 18 6-6-6-6" /></>);
export const ArrowRight = make(<><path d="M5 12h14M13 6l6 6-6 6" /></>);
export const Calendar = make(<><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M3 10h18M8 2v4M16 2v4" /></>);
export const MapPin = make(<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>);
export const Heart = make(<><path d="M19 14c1.5-1.5 3-3.5 3-5.5A4.5 4.5 0 0 0 12 5.5 4.5 4.5 0 0 0 2 8.5c0 2 1.5 4 3 5.5l7 7Z" /></>);
export const BookOpen = make(<><path d="M12 7v14M3 4h6a3 3 0 0 1 3 3v13a2.5 2.5 0 0 0-2.5-2.5H3ZM21 4h-6a3 3 0 0 0-3 3v13a2.5 2.5 0 0 1 2.5-2.5H21Z" /></>);
export const Users = make(<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>);
export const Sparkles = make(<><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" /></>);
export const Compass = make(<><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5Z" /></>);
export const GraduationCap = make(<><path d="M22 9 12 5 2 9l10 4 10-4ZM6 11v5a6 3 0 0 0 12 0v-5" /></>);
export const HandsHelping = make(<><path d="M11 12 5.5 6.5a2 2 0 0 0-2.8 2.8L8 14M14 9l5.5 5.5a2 2 0 0 1-2.8 2.8L11 14M8 14l-3 3a2 2 0 0 0 2.8 2.8L11 16" /></>);
export const Mail = make(<><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></>);
export const Quote = make(<><path d="M10 7H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v3a2 2 0 0 1-2 2M18 7h-4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v3a2 2 0 0 1-2 2" /></>);
