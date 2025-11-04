import { TrendingUp, Tag } from 'lucide-react';
import { Article } from '../../types/article';

interface SidebarProps {
  recentArticles: Article[];
  onArticleClick: (article: Article) => void;
  onCategoryClick: (category: string) => void;
  categories?: string[];
}

export default function Sidebar({ 
  recentArticles, 
  onArticleClick, 
  onCategoryClick,
  categories = ['Ciencia', 'Cultura', 'Deportes']
}: SidebarProps) {

  return (
    <aside className="space-y-6">
      <div className="bg-surface rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="h-5 w-5 text-unal" />
          <h3 className="text-lg font-bold text-text">Noticias Recientes</h3>
        </div>
        <div className="space-y-4">
          {recentArticles.slice(0, 4).map((article) => (
            <div
              key={article.id}
              onClick={() => onArticleClick(article)}
              className="flex space-x-3 cursor-pointer group"
            >
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-text line-clamp-2 group-hover:text-unal transition-colors">
                  {article.title}
                </h4>
                <p className="text-xs text-muted mt-1">
                  {new Date(article.date).toLocaleDateString('es-CO', {
                    day: 'numeric',
                    month: 'short'
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-surface rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Tag className="h-5 w-5 text-unal" />
          <h3 className="text-lg font-bold text-text">Categorías Populares</h3>
        </div>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryClick(category)}
              className="w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-text hover:bg-unal hover:text-white transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
