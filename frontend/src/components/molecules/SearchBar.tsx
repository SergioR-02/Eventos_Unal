import { Search } from 'lucide-react';

interface SearchBarProps {
  value?: string;
  onChange?: (v: string) => void;
  onSubmit?: () => void;
  placeholder?: string;
  className?: string;
}

export default function SearchBar({ value = '', onChange, onSubmit, placeholder = 'Buscar noticias...', className = '' }: SearchBarProps) {
  return (
    <div className={`flex items-center space-x-2 bg-surface rounded-lg px-3 py-2 ${className}`}>
      <Search className="h-4 w-4 text-muted" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') onSubmit && onSubmit(); }}
        placeholder={placeholder}
        className="bg-transparent border-none outline-none text-sm text-text placeholder:text-muted w-48"
      />
    </div>
  );
}
