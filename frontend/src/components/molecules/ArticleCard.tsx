import { Calendar, User, ArrowRight } from 'lucide-react';
import { Article } from '../../types/article';

interface ArticleCardProps {
  article: Article;
  onClick: () => void;
}

export default function ArticleCard({ article, onClick }: ArticleCardProps) {
  return (
    <article
      onClick={onClick}
      className="group bg-surface rounded-2xl shadow-md hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
    >
      <div className="flex flex-col md:flex-row">
        {/* Image column */}
        <div className="md:w-2/5 h-56 md:h-auto relative overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-unal text-white px-3 py-1 rounded-full text-xs font-semibold">
              {article.category}
            </span>
          </div>
        </div>

        {/* Content column */}
        <div className="md:w-3/5 p-5 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-extrabold text-text mb-2 line-clamp-2 transition-colors group-hover:text-unal">
              {article.title}
            </h3>

            <p className="text-muted text-sm mb-4 line-clamp-3">
              {article.excerpt}
            </p>
          </div>

          <div>
            <div className="flex items-center space-x-4 text-sm text-muted">
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span className="text-muted">{article.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span className="text-muted">{new Date(article.date).toLocaleDateString('es-CO', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric'
                })}</span>
              </div>
            </div>

            {/* CTA centered below */}
            <div className="mt-4 flex justify-center">
              <button className="inline-flex items-center gap-2 text-unal font-semibold px-4 py-2 rounded-md bg-unal/10 hover:bg-unal/20 transition-colors">
                Leer más
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
