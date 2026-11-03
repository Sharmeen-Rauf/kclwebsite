export interface PermitRequestRecord {
  id?: string;
  operatorName: string;
  contactName: string;
  email: string;
  phoneOrWhatsapp: string;
  flightType: "schedule" | "non-schedule";
  permitType: "overflight" | "landing" | "both";
  routeFrom: string;
  routeTo: string;
  dateTimeUtc: string;
  aircraftTypeAndReg: string;
  servicesNeeded: string[];
  notes?: string;
  createdAt?: string;
}

export interface ContactMessageRecord {
  id?: string;
  name: string;
  company: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt?: string;
}

export interface NewsletterSubscriberRecord {
  id?: string;
  email: string;
  createdAt?: string;
}

export interface NewsPostMeta {
  title: string;
  slug: string;
  date: string;
  category: string;
  author: string;
  readingTime: string;
  coverImage: string;
  coverAlt: string;
  excerpt: string;
  relatedSlugs: string[];
}

export interface NewsPost extends NewsPostMeta {
  content: string;
}

export interface PermitRequestRepository {
  create(data: PermitRequestRecord): Promise<{ referenceId: string }>;
}

export interface ContactMessageRepository {
  create(data: ContactMessageRecord): Promise<{ referenceId: string }>;
}

export interface NewsletterRepository {
  subscribe(data: NewsletterSubscriberRecord): Promise<{ subscribed: boolean }>;
}

export interface NewsRepository {
  getAllPosts(): Promise<NewsPostMeta[]>;
  getPostBySlug(slug: string): Promise<NewsPost | null>;
}

