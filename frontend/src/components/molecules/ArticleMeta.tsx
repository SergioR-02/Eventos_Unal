interface ArticleMetaProps {
  author?: string;
  date?: string | Date;
  className?: string;
}

export default function ArticleMeta({ author, date, className = '' }: ArticleMetaProps) {
  const formattedDate = (() => {
    if (!date) return '-';
    try {
      const d = typeof date === 'string' ? new Date(date) : date;
      if (isNaN(d.getTime())) return '-';
      return d.toLocaleDateString('es-CO', { day: 'numeric', month: 'short', year: 'numeric' });
    } catch {
      return '-';
    }
  })();

  return (
    <div className={`flex items-center space-x-4 text-sm text-muted ${className}`}>
      <div className="flex items-center space-x-1">
        <span className="text-muted">{author ?? 'Anónimo'}</span>
      </div>
      <div className="flex items-center space-x-1">
        <span className="text-muted">{formattedDate}</span>
      </div>
    </div>
  );
}
