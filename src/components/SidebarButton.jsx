import { tv } from 'tailwind-variants';

export function SidebarButton({ children, variant }) {
  const sidebar = tv({
    base: 'flex items-center gap-1 rounded-lg px-6 py-3 transition hover:cursor-pointer hover:opacity-80',
    variants: {
      variant: {
        default: 'text-dark-blue',
        selected: 'bg-primary/10 text-primary',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  });

  return (
    <a className={sidebar({ variant })} href="">
      {children}
    </a>
  );
}
