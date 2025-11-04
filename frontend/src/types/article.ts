import type { BlocksContent } from '@strapi/blocks-react-renderer';

export interface Article {
  id: string;
  title: string;
  author: string;
  category: string;
  excerpt: string;
  content: string | BlocksContent;
  imageUrl: string;
  date: string;
  contactEmail?: string;
  place?: string;
  startDate?: string;
  endDate?: string;
}
