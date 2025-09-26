export function Input({ label, ...props }) {
  return (
    <div className="flex flex-col space-y-1">
      <label
        htmlFor={props.id}
        className="text-sm font-semibold text-[#35383E]"
      >
        {label}
      </label>
      <input
        {...props}
        id={props.id}
        className="h-10 w-[296px] rounded-lg border border-gray-100 px-2 py-3 outline-none placeholder:text-sm focus:border-[#00ADB5] focus:ring-1 focus:ring-[#00ADB5]"
      />
    </div>
  );
}
