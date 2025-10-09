import { tv } from 'tailwind-variants';

export function Button({
  children,
  color = 'primary',
  size = 'sm',
  className,
  ...props
}) {
  const button = tv({
    base: 'flex items-center justify-center gap-1 px-3 font-semibold transition hover:cursor-pointer hover:opacity-80',
    variants: {
      color: {
        ghost: 'bg-transparent text-[#818181]',
        primary: 'bg-primary text-white',
        secondary: 'bg-[#EEEEEE] text-dark-blue',
      },
      size: {
        sm: 'py-1 text-xs rounded',
        lg: 'py-2 text-sm rounded-lg',
      },
    },
    defaultVariants: {
      variant: {
        color: 'primary',
        size: 'sm',
      },
    },
  });

  return (
    <button {...props} className={button({ color, size, className })}>
      {children}
    </button>
  );
}
