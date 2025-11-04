import { Article } from '../../types/article';
import RichTextRenderer from '../atoms/RichTextRenderer';
import Breadcrumb from '../atoms/Breadcrumb';
import EventInfo from './EventInfo';
import RelatedEvents from './RelatedEvents';

interface ArticleDetailProps {
  article: Article;
  relatedArticles: Article[];
  onBack: () => void;
  onArticleClick: (article: Article) => void;
}

export default function ArticleDetail({ article, relatedArticles, onBack, onArticleClick }: ArticleDetailProps) {
  return (
    <div className="w-full">
      <Breadcrumb 
        category={article.category}
        title={article.title}
        onBack={onBack}
      />

      {/* Header: title + meta */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-unal text-white text-sm font-semibold">
            {article.category}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-text leading-tight mb-6">
          {article.title}
        </h1>

        <p className="text-lg text-muted leading-relaxed mb-6">
          {article.excerpt}
        </p>

        <EventInfo
          author={article.author}
          date={article.date}
          startDate={article.startDate}
          endDate={article.endDate}
          place={article.place}
          contactEmail={article.contactEmail}
        />
      </header>

      {/* Layout: contenido principal + sidebar de relacionados (como HomeView) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 items-start">
        {/* Main content */}
        <div className="lg:col-span-2">
          {/* Imagen centrada y reducida */}
            <figure className="w-full flex justify-center">
              <div className="w-full max-w-3xl overflow-hidden rounded-md">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-72 sm:h-80 md:h-96 object-cover"
                />
              </div>
            </figure>

          {/* Contenido / Descripción */}
          <section className="mt-8">
            <RichTextRenderer content={article.content} />
          </section>
        </div>

        {/* Sidebar: relacionados */}
        <div className="lg:col-span-1">
          <RelatedEvents 
            articles={relatedArticles}
            onArticleClick={onArticleClick}
          />
        </div>
      </div>
    </div>
  );
}
