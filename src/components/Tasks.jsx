import { Button } from './Button.jsx';
import {
  IconCloudFog,
  IconMoon,
  IconPlus,
  IconSun,
  IconTrash,
} from '@tabler/icons-react';
import { TaskTimeHeader } from './TaskTimeHeader.jsx';
import { useState } from 'react';
import { TASKS } from '../constants/tasks.js';
import { TaskItem } from './TaskItem.jsx';

export function Tasks() {
  //states
  const [tasks] = useState(TASKS);

  // computed
  const morningTasks = tasks.filter((task) => task.time === 'morning');
  const afternoonTasks = tasks.filter((task) => task.time === 'afternoon');
  const nightTasks = tasks.filter((task) => task.time === 'night');

  return (
    <div className="w-full px-8 py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xs font-semibold text-[#00ADB5]">
            Minhas tarefas
          </span>
          <h2 className="text-2xl font-semibold">Minhas Tarefas</h2>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost">
            Limpar tarefas
            <IconTrash size={16} />
          </Button>
          <Button>
            Nova tarefa
            <IconPlus size={16} />
          </Button>
        </div>
      </div>
      <div className="mt-6 space-y-6 rounded-lg bg-white p-6 shadow">
        <div className="space-y-3">
          <TaskTimeHeader label="Manhã" icon={<IconSun size={20} />} />
          {morningTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
        <div className="space-y-3">
          <TaskTimeHeader label="Tarde" icon={<IconCloudFog size={20} />} />
          {afternoonTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
        <div className="space-y-3">
          <TaskTimeHeader label="Noite" icon={<IconMoon size={20} />} />
          {nightTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
}
