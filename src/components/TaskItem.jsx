import {
  IconCheck,
  IconExternalLink,
  IconProgress,
  IconTrash,
} from '@tabler/icons-react';

import { Button } from './Button.jsx';

export function TaskItem({ task, handleTask, handleDeleteClick }) {
  function getStatusStyles() {
    if (task.status === 'done') {
      return 'bg-primary/10 text-primary';
    } else if (task.status === 'in_progress') {
      return 'bg-process/10 text-process';
    } else {
      return 'bg-dark-blue/10';
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
            onChange={() => handleTask(task.id)}
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
