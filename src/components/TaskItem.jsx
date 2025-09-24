import {
  IconCheck,
  IconExternalLink,
  IconProgress,
  IconTrash,
} from '@tabler/icons-react';
import { Button } from './Button.jsx';

export function TaskItem({ task, handleCheckBoxClick, handleDeleteClick }) {
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
      className={`flex items-center justify-between gap-2 rounded-[10px] px-4 py-3 text-sm transition ${getStatusStyles()}`}
    >
      <div className="flex items-center gap-2">
        <label
          className={`relative flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg ${getStatusStyles()}`}
        >
          <input
            checked={task.status === 'done'}
            type="checkbox"
            className="absolute h-full w-full cursor-pointer opacity-0"
            onChange={() => handleCheckBoxClick(task.id)}
          />
          {task.status === 'done' && (
            <IconCheck size={16} className="text-white" />
          )}
          {task.status === 'in_progress' && (
            <IconProgress size={16} className="animate-spin text-amber-500" />
          )}
        </label>
        <span className="text-sm">{task.title}</span>
      </div>
      <div className={'flex items-center'}>
        <Button variant="ghost" onClick={() => handleDeleteClick(task.id)}>
          <IconTrash size={18} className="text-gray-400" />
        </Button>
        <a className="transition hover:opacity-75" href="#">
          <IconExternalLink className="text-gray-400" size={18} />
        </a>
      </div>
    </div>
  );
}
