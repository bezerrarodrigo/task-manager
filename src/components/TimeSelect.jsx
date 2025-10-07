import { InputLabel } from './InputLabel';

export function TimeSelect(props) {
  return (
    <div>
      <InputLabel id="task-time">Período</InputLabel>
      <select
        {...props}
        className="placeholder-text-base-gray outline-[] border-light-gray w-full appearance-none rounded-lg border border-solid px-4 py-2 text-sm"
        id="task-time"
      >
        <option value="morning">Manhã</option>
        <option value="afternoon">Tarde</option>
        <option value="night">Noite</option>
      </select>
    </div>
  );
}
