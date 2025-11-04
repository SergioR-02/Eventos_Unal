import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
  <footer className="bg-unal text-white dark:text-surface mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Eventos UNAL Digital</h3>
            <p className="text-white/90 dark:text-surface/90 text-sm">
              Portal de eventos de la Universidad Nacional de Colombia.
              Información académica, cultural y deportiva.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Institucionales</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/90 dark:text-surface/90 hover:text-white dark:hover:text-unal-light transition-colors">
                  Universidad Nacional
                </a>
              </li>
              <li>
                <a href="#" className="text-white/90 dark:text-surface/90 hover:text-white dark:hover:text-unal-light transition-colors">
                  Admisiones
                </a>
              </li>
              <li>
                <a href="#" className="text-white/90 dark:text-surface/90 hover:text-white dark:hover:text-unal-light transition-colors">
                  Investigación
                </a>
              </li>
              <li>
                <a href="#" className="text-white/90 dark:text-surface/90 hover:text-white dark:hover:text-unal-light transition-colors">
                  Bienestar Universitario
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-surface p-2 rounded-lg hover:bg-surface/90 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-unal dark:text-white" />
              </a>
              <a href="#" className="bg-surface p-2 rounded-lg hover:bg-surface/90 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-unal dark:text-white" />
              </a>
              <a href="#" className="bg-surface p-2 rounded-lg hover:bg-surface/90 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-unal dark:text-white" />
              </a>
              <a href="#" className="bg-surface p-2 rounded-lg hover:bg-surface/90 transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5 text-unal dark:text-white" />
              </a>
              <a href="#" className="bg-surface p-2 rounded-lg hover:bg-surface/90 transition-colors" aria-label="Email">
                <Mail className="h-5 w-5 text-unal dark:text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-white/80 dark:text-surface/80 text-sm">© 2025 Universidad Nacional de Colombia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
