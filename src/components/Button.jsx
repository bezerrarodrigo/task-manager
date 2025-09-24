export function Button({ children, variant = 'primary', ...props }) {
  function getVariantStyles() {
    if (variant === 'ghost') {
      return 'bg-transparent text-[#818181]';
    }
    if (variant === 'primary') {
      return 'bg-[#00ADB5] text-white';
    }
  }

  return (
    <button
      {...props}
      className={`flex items-center gap-1 rounded-md px-3 py-1 text-xs font-semibold transition hover:cursor-pointer hover:opacity-80 ${getVariantStyles()}`}
    >
      {children}
    </button>
  );
}
