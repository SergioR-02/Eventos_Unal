interface BadgeProps {
  children: React.ReactNode;
  colorClass?: string; // tailwind class for bg color
  size?: 'sm' | 'md';
  className?: string;
}

export default function Badge({ children, colorClass = 'bg-unal text-white', size = 'md', className = '' }: BadgeProps) {
  const sizes: Record<string, string> = {
    sm: 'px-2 py-0.5 text-xs rounded-full',
    md: 'px-3 py-1 text-sm rounded-full',
  };

  return (
    <span className={`${colorClass} ${sizes[size]} font-semibold ${className}`}>
      {children}
    </span>
  );
}
