import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import ReactMarkdown from 'react-markdown';

interface RichTextRendererProps {
  content: BlocksContent | string;
  className?: string;
}

export default function RichTextRenderer({ content, className = '' }: RichTextRendererProps) {
  // Si el contenido es string (markdown), usar ReactMarkdown
  if (typeof content === 'string') {
    return (
      <div className={`prose prose-lg max-w-none ${className}`}>
        <ReactMarkdown
          components={{
            p: ({ children }) => (
              <p className="text-text mb-4 leading-relaxed">{children}</p>
            ),
            strong: ({ children }) => (
              <strong className="font-bold text-text">{children}</strong>
            ),
            em: ({ children }) => (
              <em className="italic text-text">{children}</em>
            ),
            h1: ({ children }) => (
              <h1 className="text-4xl font-bold text-text mb-4 mt-8">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-3xl font-bold text-text mb-3 mt-6">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-2xl font-semibold text-text mb-2 mt-4">{children}</h3>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-outside ml-6 mb-4 space-y-2 text-text">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-outside ml-6 mb-4 space-y-2 text-text">{children}</ol>
            ),
            li: ({ children }) => (
              <li className="text-text leading-relaxed">{children}</li>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-unal hover:underline font-medium"
              >
                {children}
              </a>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-unal pl-4 italic text-muted my-4">
                {children}
              </blockquote>
            ),
            code: ({ children }) => (
              <code className="bg-surface px-2 py-1 rounded text-sm font-mono text-text">
                {children}
              </code>
            ),
            pre: ({ children }) => (
              <pre className="bg-surface p-4 rounded-lg overflow-x-auto mb-4">
                {children}
              </pre>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    );
  }

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      <BlocksRenderer
        content={content}
        blocks={{
          paragraph: ({ children }) => (
            <p className="text-text mb-4 leading-relaxed">{children}</p>
          ),
          heading: ({ children, level }) => {
            const Tag = `h${level}` as keyof JSX.IntrinsicElements;
            const styles = {
              1: 'text-4xl font-bold text-text mb-4 mt-8',
              2: 'text-3xl font-bold text-text mb-3 mt-6',
              3: 'text-2xl font-semibold text-text mb-2 mt-4',
              4: 'text-xl font-semibold text-text mb-2 mt-3',
              5: 'text-lg font-semibold text-text mb-2 mt-2',
              6: 'text-base font-semibold text-text mb-2 mt-2',
            };
            return <Tag className={styles[level as keyof typeof styles]}>{children}</Tag>;
          },
          list: ({ children, format }) => {
            if (format === 'ordered') {
              return <ol className="list-decimal list-inside mb-4 space-y-2 text-text">{children}</ol>;
            }
            return <ul className="list-disc list-inside mb-4 space-y-2 text-text">{children}</ul>;
          },
          'list-item': ({ children }) => (
            <li className="text-text">{children}</li>
          ),
          quote: ({ children }) => (
            <blockquote className="border-l-4 border-unal pl-4 italic text-muted my-4">
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <pre className="bg-surface p-4 rounded-lg overflow-x-auto mb-4">
              <code className="text-sm font-mono text-text">{children}</code>
            </pre>
          ),
          link: ({ children, url }) => (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-unal hover:underline font-medium"
            >
              {children}
            </a>
          ),
          image: ({ image }) => (
            <img
              src={image.url}
              alt={image.alternativeText || ''}
              className="rounded-lg my-4 max-w-full h-auto"
            />
          ),
        }}
        modifiers={{
          bold: ({ children }) => <strong className="font-bold text-text">{children}</strong>,
          italic: ({ children }) => <em className="italic text-text">{children}</em>,
          underline: ({ children }) => <u className="underline text-text">{children}</u>,
          strikethrough: ({ children }) => <s className="line-through text-text">{children}</s>,
          code: ({ children }) => (
            <code className="bg-surface px-2 py-1 rounded text-sm font-mono text-text">
              {children}
            </code>
          ),
        }}
      />
    </div>
  );
}
