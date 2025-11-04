interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  ariaLabel: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'ghost';
}

export default function IconButton({ icon, ariaLabel, size = 'md', variant = 'default', className = '', ...rest }: IconButtonProps) {
  const sizes: Record<string, string> = {
    sm: 'p-1.5 h-8 w-8',
    md: 'p-2 h-10 w-10',
    lg: 'p-3 h-12 w-12',
  };

  const variants: Record<string, string> = {
    default: 'bg-surface rounded-lg',
    ghost: 'bg-transparent',
  };

  return (
    <button
      aria-label={ariaLabel}
      className={`${variants[variant]} ${sizes[size]} inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-unal/30 ${className}`}
      {...rest}
    >
      {icon}
    </button>
  );
}
