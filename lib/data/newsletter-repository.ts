import type {
  NewsletterRepository,
  NewsletterSubscriberRecord,
} from "./interfaces";

class PreviewNewsletterRepository implements NewsletterRepository {
  async subscribe(
    _data: NewsletterSubscriberRecord
  ): Promise<{ subscribed: boolean }> {
    void _data;
    // Per V2 Rule 8: Do not log private email addresses to the server console.
    return { subscribed: false };
  }
}

export const newsletterRepository: NewsletterRepository =
  new PreviewNewsletterRepository();
