import { User, Clock, Calendar, MapPin, Mail } from 'lucide-react';

interface EventInfoProps {
  author: string;
  date: string;
  startDate?: string;
  endDate?: string;
  place?: string;
  contactEmail?: string;
}

export default function EventInfo({
  author,
  date,
  startDate,
  endDate,
  place,
  contactEmail,
}: EventInfoProps) {
  const pad = (n: number) => n.toString().padStart(2, '0');
  const formatShortDate = (d: Date) => `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear().toString().slice(-2)}`;
  const formatTime = (d: Date) => `${pad(d.getHours())}:${pad(d.getMinutes())}`;
  const parseDate = (s?: string) => (s ? new Date(s) : null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-surface rounded-xl p-6 shadow-md border border-border">
      <div className="flex items-start space-x-3">
        <User className="h-5 w-5 text-unal mt-1 flex-shrink-0" />
        <div>
          <p className="text-xs text-muted font-medium uppercase tracking-wide">Organizado por</p>
          <p className="text-text font-semibold">{author}</p>
        </div>
      </div>

      {startDate && endDate && (
        <div className="flex items-start space-x-3">
          <Clock className="h-5 w-5 text-unal mt-1 flex-shrink-0" />
          <div>
            <p className="text-xs text-muted font-medium uppercase tracking-wide">Horario</p>
            <p className="text-text font-semibold">
              {(() => {
                const s = parseDate(startDate)!;
                const e = parseDate(endDate)!;
                return `${formatShortDate(s)} ${formatTime(s)} — ${formatShortDate(e)} ${formatTime(e)}`;
              })()}
            </p>
          </div>
        </div>
      )}

      <div className="flex items-start space-x-3">
        <Calendar className="h-5 w-5 text-unal mt-1 flex-shrink-0" />
        <div>
          <p className="text-xs text-muted font-medium uppercase tracking-wide">Fecha de publicación</p>
          <p className="text-text font-semibold">
            {date ? new Date(date).toLocaleDateString('es-CO', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            }) : '-'}
          </p>
        </div>
      </div>

      {place && (
        <div className="flex items-start space-x-3">
          <MapPin className="h-5 w-5 text-unal mt-1 flex-shrink-0" />
          <div>
            <p className="text-xs text-muted font-medium uppercase tracking-wide">Lugar</p>
            <p className="text-text font-semibold">{place}</p>
          </div>
        </div>
      )}

      {contactEmail && (
        <div className="flex items-start space-x-3 md:col-span-2">
          <Mail className="h-5 w-5 text-unal mt-1 flex-shrink-0" />
          <div>
            <p className="text-xs text-muted font-medium uppercase tracking-wide">Contacto</p>
            <a 
              href={`mailto:${contactEmail}`}
              className="text-unal font-semibold hover:underline"
            >
              {contactEmail}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
