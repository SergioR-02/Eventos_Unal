import { Calendar, BookOpen, Info } from 'lucide-react';
import { Article } from '../../types/article';

interface RelatedEventsProps {
  articles: Article[];
  onArticleClick: (article: Article) => void;
}

export default function RelatedEvents({ articles, onArticleClick }: RelatedEventsProps) {
  return (
    <aside className="sticky top-24">
      <div className="bg-surface rounded-xl shadow-md p-6 border border-border">
        <div className="flex items-center space-x-2 mb-4">
          <BookOpen className="h-5 w-5 text-unal" />
          <h3 className="text-lg font-bold text-text">Eventos relacionados</h3>
        </div>

        {articles.length > 0 ? (
          <div className="space-y-4">
            {articles.slice(0, 6).map((article) => (
              <div
                key={article.id}
                onClick={() => onArticleClick(article)}
                className="flex space-x-3 cursor-pointer group p-3 rounded-lg hover:bg-page transition-colors"
              >
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-text line-clamp-2 group-hover:text-unal transition-colors mb-1">
                    {article.title}
                  </h4>
                  <div className="flex items-center text-xs text-muted">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(article.date).toLocaleDateString('es-CO', {
                      day: 'numeric',
                      month: 'short'
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <Info className="h-12 w-12 text-muted mx-auto mb-3 opacity-50" />
            <p className="text-muted text-sm">
              No hay eventos relacionados en esta categoría
            </p>
          </div>
        )}
      </div>
    </aside>
  );
}
