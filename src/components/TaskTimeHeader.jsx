export function TaskTimeHeader({ label, icon }) {
  return (
    <div className="text-base-gray flex items-center gap-1.5 border-b border-[#F4F4F5] pb-1">
      {icon}
      <p className="mb-1 text-sm">{label}</p>
    </div>
  );
}
