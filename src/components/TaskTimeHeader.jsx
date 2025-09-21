export function TaskTimeHeader({ label, icon }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-1.5 border-b border-[#F4F4F5] text-[#9A9C9F]">
        {icon}
        <p className="mb-1 text-sm">{label}</p>
      </div>
    </div>
  );
}
