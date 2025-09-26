export function Button({
  children,
  variant = 'primary',
  size = 'sm',
  className,
  ...props
}) {
  function getVariantStyles() {
    if (variant === 'ghost') {
      return 'bg-transparent text-[#818181]';
    }
    if (variant === 'primary') {
      return 'bg-[#00ADB5] text-white';
    }
    if (variant === 'secondary') {
      return 'bg-[#EEEEEE] text-[#35383E]';
    }
  }

  function getSizeStyles() {
    if (size === 'sm') {
      return 'py-1 text-xs rounded';
    }
    if (size === 'lg') {
      return 'py-2 text-sm rounded-lg';
    }
  }

  return (
    <button
      {...props}
      className={`flex items-center justify-center gap-1 px-3 ${getSizeStyles()} font-semibold transition hover:cursor-pointer hover:opacity-80 ${getVariantStyles()} ${className}`}
    >
      {children}
    </button>
  );
}
