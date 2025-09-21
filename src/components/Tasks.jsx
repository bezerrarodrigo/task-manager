import { Button } from './Button.jsx';
import {
  IconCloud,
  IconMoon,
  IconPlus,
  IconSun,
  IconTrash,
} from '@tabler/icons-react';
import { TaskTimeHeader } from './TaskTimeHeader.jsx';

export function Tasks() {
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
        <TaskTimeHeader label="Manhã" icon={<IconSun size={20} />} />
        <TaskTimeHeader label="Tarde" icon={<IconCloud size={20} />} />
        <TaskTimeHeader label="Noite" icon={<IconMoon size={20} />} />
      </div>
    </div>
  );
}
