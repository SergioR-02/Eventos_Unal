// Tipos para la API de Strapi

export interface StrapiImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    large?: ImageFormat;
  };
  url: string;
}

export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface Category {
  id: number;
  documentId: string;
  name: string;
  slug: string;
}

import type { BlocksContent } from '@strapi/blocks-react-renderer';

export interface Event {
  id: number;
  documentId: string;
  title: string;
  date: string;
  contactEmail: string;
  slug: string;
  excerpt: string;
  description: string | BlocksContent;
  publishedAt: string;
  startDate: string;
  endDate: string;
  author: string;
  place: string;
  image?: StrapiImage;
  categories?: Category[];
}

export interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiListResponse<T> {
  data: T[];
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
