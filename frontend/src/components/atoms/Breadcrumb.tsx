interface BreadcrumbProps {
  category: string;
  title: string;
  onBack: () => void;
}

export default function Breadcrumb({ category, title, onBack }: BreadcrumbProps) {
  return (
    <nav className="mb-6 text-sm text-muted" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <button
            onClick={onBack}
            className="text-text hover:text-unal transition-colors font-medium"
          >
            Inicio
          </button>
        </li>
        <li className="text-muted">/</li>
        <li className="text-muted">{category}</li>
        <li className="text-muted">/</li>
        <li className="font-medium text-text truncate max-w-xs">{title}</li>
      </ol>
    </nav>
  );
}
