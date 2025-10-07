export function SidebarButton({ children, variant }) {
  function getVariantStyles() {
    if (variant === 'default') {
      return 'text-dark-blue';
    }

    if (variant === 'selected') {
      return 'bg-primary/10 text-primary';
    }
  }

  return (
    <a
      className={`flex items-center gap-1 rounded-lg px-6 py-3 ${getVariantStyles()}`}
      href=""
    >
      {children}
    </a>
  );
}
