import { memo } from 'react';
import Header from './organisms/Header';
import Footer from './organisms/Footer';
import HomeView from './pages/HomeView';
import ArticleDetail from './molecules/ArticleDetail';
import CategoryView from './templates/CategoryView';
import LoadingSpinner from './atoms/LoadingSpinner';
import ErrorMessage from './atoms/ErrorMessage';
import { useArticles } from '../hooks/useArticles';

export default memo(function AppMain() {
  const {
    filteredArticles,
    filteredByCategory,
    categoryNames,
    categories,
    eventsLoading,
    categoriesLoading,
    eventsError,
    refetch,
    view,
    selectedArticle,
    currentCategory,
    handleArticleClick,
    handleBack,
    handleCategoryClick,
    handleSearch,
    searchQuery,
  } = useArticles();

  return (
    <>
      <div className="flex flex-col flex-1">
        <Header 
          onCategoryClick={handleCategoryClick}
          currentView={currentCategory}
          categories={categoryNames}
          loading={categoriesLoading}
          onSearch={handleSearch}
        />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {eventsLoading ? (
          <LoadingSpinner size="lg" text="Cargando eventos..." />
        ) : eventsError ? (
          <ErrorMessage message={eventsError.message} onRetry={refetch} />
        ) : (
          <>
            {view === 'home' && (
              <>
                {searchQuery && (
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-text">
                      Resultados para: <span className="text-unal">"{searchQuery}"</span>
                    </h2>
                    <p className="text-muted mt-2">{filteredArticles.length} {filteredArticles.length === 1 ? 'evento encontrado' : 'eventos encontrados'}</p>
                  </div>
                )}
                <HomeView
                  articles={filteredArticles}
                  onArticleClick={handleArticleClick}
                  onCategoryClick={handleCategoryClick}
                  categories={categories.map(cat => cat.name)}
                />
              </>
            )}

            {view === 'detail' && selectedArticle && (
              <ArticleDetail
                article={selectedArticle}
                relatedArticles={filteredArticles.filter((a) => a.category === selectedArticle.category && a.id !== selectedArticle.id)}
                onBack={handleBack}
                onArticleClick={handleArticleClick}
              />
            )}

            {view === 'category' && (
              <CategoryView
                category={currentCategory}
                articles={filteredByCategory}
                onBack={handleBack}
                onArticleClick={handleArticleClick}
              />
            )}
          </>
        )}
        </main>
      </div>

      <Footer />
    </>
  );
});
