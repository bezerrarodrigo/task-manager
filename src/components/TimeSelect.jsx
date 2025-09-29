import { InputLabel } from './InputLabel';

export function TimeSelect() {
  return (
    <div>
      <InputLabel id="task-time">Período</InputLabel>
      <select
        className="placeholder-text-[#9A9C9F] w-full appearance-none rounded-lg border border-solid border-[#ececec] px-4 py-2 text-sm outline-[#00ADB5]"
        id="task-time"
      >
        <option value="morning">Manhã</option>
        <option value="afternoon">Tarde</option>
        <option value="evening">Noite</option>
      </select>
    </div>
  );
}
