export function SidebarButton({ children, variant }) {
  function getVariantStyles() {
    if (variant === 'default') {
      return 'text-[#35383E]';
    }

    if (variant === 'selected') {
      return 'bg-[#e6f7f8] text-[#00adb5]';
    }
  }

  return (
    <a className={`rounded-lg px-6 py-3 ${getVariantStyles()}`} href="">
      {children}
    </a>
  );
}
