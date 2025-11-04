import { Article } from '../../types/article';
import ArticleCard from '../molecules/ArticleCard';

interface CategoryViewProps {
  category: string;
  articles: Article[];
  onBack: () => void;
  onArticleClick: (article: Article) => void;
}

export default function CategoryView({ category, articles, onBack, onArticleClick }: CategoryViewProps) {
  return (
    <div>
      <div className="mb-8">
        <nav className="mb-4 text-sm text-muted" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <button
                onClick={onBack}
                className="text-text hover:text-unal transition-colors"
              >
                Inicio
              </button>
            </li>
            <li className="text-muted">/</li>
            <li className="font-medium text-text">{category}</li>
          </ol>
        </nav>
        <h1 className="text-4xl font-bold text-text">{category}</h1>
        <p className="text-muted mt-2">
          {articles.length} {articles.length === 1 ? 'artículo' : 'artículos'} encontrados
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            onClick={() => onArticleClick(article)}
          />
        ))}
      </div>

      {articles.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted text-lg">No hay artículos disponibles en esta categoría</p>
        </div>
      )}
    </div>
  );
}
