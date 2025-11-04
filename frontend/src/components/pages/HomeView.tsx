import { Article } from '../../types/article';
import { useMemo } from 'react';
import ArticleCard from '../molecules/ArticleCard';
import Sidebar from '../organisms/Sidebar';

interface HomeViewProps {
  articles: Article[];
  onArticleClick: (article: Article) => void;
  onCategoryClick: (category: string) => void;
  categories?: string[];
}

export default function HomeView({ articles, onArticleClick, onCategoryClick, categories }: HomeViewProps) {
  const recentSorted = useMemo(() => {
    return [...articles].sort((a, b) => {
      const da = new Date(a.date).getTime();
      const db = new Date(b.date).getTime();
      return db - da;
    });
  }, [articles]);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h2 className="text-3xl font-bold text-text mb-6">
          Eventos UNAL
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onClick={() => onArticleClick(article)}
            />
          ))}
        </div>
      </div>

      <div className="lg:col-span-1">
        <Sidebar
          recentArticles={recentSorted}
          onArticleClick={onArticleClick}
          onCategoryClick={onCategoryClick}
          categories={categories}
        />
      </div>
    </div>
  );
}
