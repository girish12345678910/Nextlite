import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary:
      'bg-[#FF5A3C] text-white hover:bg-[#E44F35] focus:ring-[#FF5A3C] shadow-sm hover:shadow-md',
    secondary: 'bg-neutral-900 text-white hover:bg-neutral-800',
    outline:
      'border-2 border-[#FF5A3C] text-[#FF5A3C] hover:bg-[#FFF1ED] focus:ring-[#FF5A3C]',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
