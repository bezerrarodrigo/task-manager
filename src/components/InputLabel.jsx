export function InputLabel(props) {
  return (
    <label {...props} className="text-dark-blue text-sm font-semibold">
      {props.children}
    </label>
  );
}
