import { useState, useMemo, useCallback } from 'react';
import { useEvents } from './useEvents';
import { useCategories } from './useCategories';
import { eventsToArticles } from '../utils/converters';
import type { Article } from '../types/article';

export function useArticles() {
  const { events, loading: eventsLoading, error: eventsError, refetch } = useEvents();
  const { categories, loading: categoriesLoading } = useCategories();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [view, setView] = useState<'home' | 'detail' | 'category'>('home');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [currentCategory, setCurrentCategory] = useState<string>('Inicio');

  // Convertir eventos a artículos memoizados
  const articles: Article[] = useMemo(() => {
    if (!events || events.length === 0) return [];
    return eventsToArticles(events);
  }, [events]);

  // Filtrar por búsqueda (memoizado)
  const filteredArticles = useMemo(() => {
    if (searchQuery.trim() === '') return articles;
    const q = searchQuery.toLowerCase();
    return articles.filter(a => (
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.author.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q)
    ));
  }, [searchQuery, articles]);

  const filteredByCategory = useMemo(() => {
    if (currentCategory === 'Inicio') return filteredArticles;
    return filteredArticles.filter(a => a.category === currentCategory);
  }, [filteredArticles, currentCategory]);

  // Callbacks
  const handleArticleClick = useCallback((article: Article) => {
    setSelectedArticle(article);
    setView('detail');
  }, []);

  const handleBack = useCallback(() => {
    setSelectedArticle(null);
    setView('home');
  }, []);

  const handleCategoryClick = useCallback((category: string) => {
    setSearchQuery('');
    if (category === 'Inicio') {
      setCurrentCategory('Inicio');
      setView('home');
    } else {
      setCurrentCategory(category);
      setView('category');
    }
  }, []);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    if (query.trim() !== '' && view !== 'detail') {
      setCurrentCategory('Inicio');
      setView('home');
    }
  }, [view]);

  const categoryNames = useMemo(() => ['Inicio', ...categories.map(c => c.name)], [categories]);

  return {
    // data
    articles,
    filteredArticles,
    filteredByCategory,
    categories,
    categoryNames,
    // ui state
    searchQuery,
    view,
    selectedArticle,
    currentCategory,
    // loading / error
    eventsLoading,
    categoriesLoading,
    eventsError,
    refetch,
    // actions
    handleArticleClick,
    handleBack,
    handleCategoryClick,
    handleSearch,
  } as const;
}
