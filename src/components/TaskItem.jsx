import { IconCheck, IconExternalLink, IconProgress } from '@tabler/icons-react';

export function TaskItem({ task }) {
  function getStatusStyles() {
    if (task.status === 'done') {
      return 'bg-[#00ADB5]/10 text-[#00ADB5]';
    } else if (task.status === 'in_progress') {
      return 'bg-[#FFAA04]/10 text-[#FFAA04]';
    } else {
      return 'bg-[#35383E]/10';
    }
  }

  return (
    <div
      className={`flex items-center justify-between gap-2 rounded-[10px] px-4 py-3 text-sm ${getStatusStyles()}`}
    >
      <div className="flex items-center gap-2">
        <label
          className={`relative flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg ${getStatusStyles()}`}
        >
          <input
            checked={task.status === 'done'}
            type="checkbox"
            className="absolute h-full w-full cursor-pointer opacity-0"
          />
          {task.status === 'done' && (
            <IconCheck size={16} className="text-white" />
          )}
          {task.status === 'in_progress' && (
            <IconProgress size={16} className="text-amber-500" />
          )}
        </label>
        {task.title}
      </div>
      <a className="transition hover:opacity-75" href="#">
        <IconExternalLink className="text-gray-400" size={18} />
      </a>
    </div>
  );
}
