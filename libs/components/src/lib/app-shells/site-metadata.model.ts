export interface SiteMetadata {
  url: string;
  title: string;
  description: string;
  language: string;
  locale: string;
  author: string;
  email: string;
  social?: {
    github?: string;
    twitter?: string;
    twitterUsername?: string;
    facebook?: string;
    youtube?: string;
    linkedin?: string;
  };
}
