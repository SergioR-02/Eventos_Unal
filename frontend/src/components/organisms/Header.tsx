import { useState } from 'react';
import { Search, Moon, Sun, Newspaper, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface HeaderProps {
  onCategoryClick: (category: string) => void;
  currentView: string;
  categories?: string[];
  loading?: boolean;
  onSearch?: (query: string) => void;
}

export default function Header({ 
  onCategoryClick, 
  currentView, 
  categories = ['Inicio', 'Ciencia', 'Cultura', 'Deportes'],
  loading = false,
  onSearch
}: HeaderProps) {
  const { isDark, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    if (onSearch) {
      onSearch('');
    }
  };

  return (
    <header className="bg-surface shadow-md sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 relative">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => onCategoryClick('Inicio')}
          >
            <div className="bg-unal p-2 rounded-lg">
              <Newspaper className="h-8 w-8 text-white" />
            </div>
          </div>

          {/* Centered title */}
          <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold text-text flex items-center pointer-events-none">
            Events
            {/* Use the UNAL icon from public/; spaces encoded as %20 for safety */}
            <img src="/image%207.svg" alt="UNAL" className="h-[80px] w-auto ml-2 object-contain" />
          </h1>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-surface header-btn transition-colors group hover:bg-unal/10 focus:outline-none focus:ring-2 focus:ring-unal/30"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-yellow-500 transition-colors group-hover:text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-muted transition-colors group-hover:text-unal" />
            )}
          </button>
        </div>

  <nav className="flex items-center justify-between pb-4 border-b border-border">
          <div className="flex space-x-1 sm:space-x-2">
            {loading ? (
              <div className="px-4 py-2 text-muted text-sm">Cargando categorías...</div>
            ) : (
              categories.map((category) => (
                <button
                  key={category}
                  onClick={() => onCategoryClick(category)}
                  className={`px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-colors ${
                    currentView === category
                      ? 'bg-unal text-white'
                      : 'text-text header-btn'
                  }`}
                >
                  {category}
                </button>
              ))
            )}
          </div>

          <div className="hidden sm:flex items-center space-x-2 bg-surface rounded-lg px-3 py-2 border border-border focus-within:border-unal transition-colors">
            <Search className="h-4 w-4 text-muted" />
            <input
              type="text"
              placeholder="Buscar eventos..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="bg-transparent border-none outline-none text-sm text-text placeholder:text-muted w-48"
            />
            {searchQuery && (
              <button
                onClick={handleClearSearch}
                className="p-1 hover:bg-unal/10 rounded transition-colors"
                aria-label="Limpiar búsqueda"
              >
                <X className="h-4 w-4 text-muted hover:text-unal" />
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
