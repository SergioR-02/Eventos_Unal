import { Article } from '../../types/article';

interface RecentItemProps {
  article: Article;
  onClick?: (a: Article) => void;
}

export default function RecentItem({ article, onClick }: RecentItemProps) {
  return (
    <div
      role="button"
      onClick={() => onClick && onClick(article)}
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
  );
}
