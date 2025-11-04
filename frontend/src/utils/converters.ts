import type { Event } from '../types/api';
import type { Article } from '../types/article';
import { getImageUrl } from '../config/api';

export function eventToArticle(event: Event): Article {
  const imageUrl = event.image?.formats?.medium?.url 
    || event.image?.formats?.small?.url 
    || event.image?.url 
    || '';

  // Obtener la primera categoría del array
  const categoryName = event.categories && event.categories.length > 0 
    ? event.categories[0].name 
    : 'Sin categoría';

  return {
    id: event.documentId,
    title: event.title,
    author: event.author,
    category: categoryName,
    excerpt: event.excerpt,
    content: event.description,
    imageUrl: getImageUrl(imageUrl),
    date: event.date || event.startDate,
    contactEmail: event.contactEmail,
    place: event.place,
    startDate: event.startDate,
    endDate: event.endDate,
  };
}

export function eventsToArticles(events: Event[]): Article[] {
  return events.map(eventToArticle);
}
