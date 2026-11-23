export type Ministry = {
  slug: string;
  name: string;
  director: string;
  summary: string;
  mandate: string;
  image: string;
  subMinistries: string[];
  responsibilities?: string[];
};

export type Activity = {
  id: string;
  title: string;
  date: string;
  ministrySlug: string;
  description: string;
  href?: string;
};

export type Publication = {
  slug: string;
  title: string;
  kind: "News" | "Publication";
  date: string;
  category: string;
  ministrySlug?: string;
  excerpt: string;
  image?: string;
  downloadableFile?: string;
};

export type Event = {
  slug: string;
  title: string;
  date: string;
  time?: string;
  venue?: string;
  description: string;
  ministrySlug: string;
  flyer?: string;
};

export const organization = {
  name: "Leadwell International",
  shortName: "Leadwell",
  founded: "January 2, 2017",
  vision: "To see the transformation of followers into empowered leaders.",
  description:
    "Leadwell International is a Christian faith-based leadership development organization committed to raising a generation of empowered leaders through faith, service, learning and community.",
};

export const navLinks = [
  { label: "About Leadwell", href: "/about" },
  { label: "Our Ministries", href: "/ministries" },
  { label: "News & Publications", href: "/news" },
  { label: "Calendar", href: "/calendar" },
  { label: "Events", href: "/events" },
] as const;

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/LeadwellIntl/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/leadwell-international-8767353b/" },
  { label: "WhatsApp", href: "https://chat.whatsapp.com/Jronk5mz2KsFFgB5ZBj18B" },
  { label: "Telegram", href: "https://t.me/+5MPMXPdyj505ZDk0" },
] as const;

const images = {
  books: "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1200",
  relationships: "https://images.pexels.com/photos/7669205/pexels-photo-7669205.jpeg?auto=compress&cs=tinysrgb&w=1200",
  service: "https://images.pexels.com/photos/6646926/pexels-photo-6646926.jpeg?auto=compress&cs=tinysrgb&w=1200",
  worship: "https://images.pexels.com/photos/10024790/pexels-photo-10024790.jpeg?auto=compress&cs=tinysrgb&w=1200",
  leadership: "https://images.pexels.com/photos/9034719/pexels-photo-9034719.jpeg?auto=compress&cs=tinysrgb&w=1200",
  school: "https://images.pexels.com/photos/12448839/pexels-photo-12448839.jpeg?auto=compress&cs=tinysrgb&w=1200",
  community: "https://images.pexels.com/photos/7156163/pexels-photo-7156163.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

export const ministries: Ministry[] = [
  {
    slug: "christian-faith-ministry",
    name: "Christian Faith & Ministry",
    director: "Ibinabo Prince Tubotamuno",
    summary: "Nurturing Christian faith, spiritual formation and a culture of learning.",
    mandate: "To strengthen Leadwell's Christian identity through faith, biblical learning, leadership formation and fellowship.",
    image: images.books,
    subMinistries: ["Bible Reading", "Leadership Development Service (LDS)", "Book Review", "Readers' Hub"],
  },
  {
    slug: "mission-outreach",
    name: "Mission & Outreach",
    director: "Benneth Tamunobarabi",
    summary: "Extending Leadwell's values through relationships, schools and community outreach.",
    mandate: "To serve people and communities through practical outreach, healthy relationships, skills expression and school-focused initiatives.",
    image: images.school,
    subMinistries: ["LoveRight", "Ignite", "School Affairs"],
    responsibilities: ["School Leaders' Summit", "Schools' Tour"],
  },
  {
    slug: "leadmill",
    name: "Leadmill",
    director: "Franknly Solomon",
    summary: "Creating spaces for leadership development, learning and fellowship.",
    mandate: "To develop purposeful leaders through structured learning experiences, community and meaningful connection.",
    image: images.leadership,
    subMinistries: ["Leadwell Academy", "Hangouts"],
  },
  {
    slug: "leadtech",
    name: "LeadTech",
    director: "Miebaka Atorudibo",
    summary: "Using technology to advance Leadwell's visibility and organizational development.",
    mandate: "To use technology to advance Leadwell International's visibility and organizational development.",
    image: images.community,
    responsibilities: ["Official website", "Digital platforms", "Technology infrastructure", "Digital visibility", "Technology-enabled organizational development"],
    subMinistries: [],
  },
  {
    slug: "leadpress",
    name: "LeadPress",
    director: "Samuel Abayomi",
    summary: "Managing Leadwell's publications, editorial work, media production and communications.",
    mandate: "To steward Leadwell's written, editorial and media communications with clarity and consistency.",
    image: images.books,
    responsibilities: ["Weekly NLC materials", "Weekly OLC materials", "The Visioner's books", "Organizational publications and productions", "Editorial content and communications"],
    subMinistries: [],
  },
  {
    slug: "leadcare",
    name: "LeadCare",
    director: "Stella Biebele",
    summary: "Serving people through care, inclusion, skills and community-focused action.",
    mandate: "To express Leadwell's values through humanitarian service and practical care for people and communities.",
    image: images.service,
    subMinistries: ["Boy Child Day", "Girl Child Day", "Ghetto"],
  },
  {
    slug: "finance-partnership",
    name: "Finance & Partnership",
    director: "Miracle Ezekiel",
    summary: "Supporting accountable financial management and meaningful partnerships.",
    mandate: "To provide responsible financial management, partnership coordination, accountability and general organizational support.",
    image: images.relationships,
    responsibilities: ["Financial management", "Financial remittance coordination", "Partnership commitments", "General organizational support", "Financial accountability"],
    subMinistries: [],
  },
  {
    slug: "admin",
    name: "Admin",
    director: "Biebele Samuel",
    summary: "Providing professional administrative coordination for Leadwell's work.",
    mandate: "To support the President and Leadwell's organizational coordination through professional administration and documentation.",
    image: images.leadership,
    responsibilities: ["Administrative support for external functions", "External training invitations", "Meeting secretarial support", "Camp documentation", "Administrative coordination"],
    subMinistries: [],
  },
];

export const activities: Activity[] = [];
export const events: Event[] = [];
export const publications: Publication[] = [];

export const heroSlides = [
  {
    image: "https://images.pexels.com/photos/34328505/pexels-photo-34328505.jpeg?auto=compress&cs=tinysrgb&w=1920",
    eyebrow: "Welcome to Leadwell International",
    title: "Transforming followers into empowered leaders",
    description: "A Christian faith-based leadership development organization raising a generation of purposeful leaders.",
  },
  {
    image: "https://images.pexels.com/photos/33176041/pexels-photo-33176041.jpeg?auto=compress&cs=tinysrgb&w=1920",
    eyebrow: "Eight Independent Ministries",
    title: "One shared mission, eight distinct expressions",
    description: "Our ministries serve directly under the President, each bringing a focused mandate to Leadwell's shared vision.",
  },
  {
    image: "https://images.pexels.com/photos/6647015/pexels-photo-6647015.jpeg?auto=compress&cs=tinysrgb&w=1920",
    eyebrow: "Faith, Service & Learning",
    title: "Building leaders for lasting impact",
    description: "We equip individuals to lead with integrity, vision and compassion in every sphere of life.",
  },
  {
    image: "https://images.pexels.com/photos/1198171/pexels-photo-1198171.jpeg?auto=compress&cs=tinysrgb&w=1920",
    eyebrow: "Community & Fellowship",
    title: "Leading with faith, serving together",
    description: "Anchored in Christian values, we build fellowship that strengthens leaders for lasting impact.",
  },
] as const;

export const aboutImage = "https://images.pexels.com/photos/6949925/pexels-photo-6949925.jpeg?auto=compress&cs=tinysrgb&w=1200";
export const getInvolvedImage = images.community;

export function getMinistry(slug: string | undefined): Ministry | undefined {
  return ministries.find((ministry) => ministry.slug === slug);
}

export function getPublication(slug: string | undefined): Publication | undefined {
  return publications.find((publication) => publication.slug === slug);
}

export function getEvent(slug: string | undefined): Event | undefined {
  return events.find((event) => event.slug === slug);
}
