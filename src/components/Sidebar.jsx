import { IconHome2, IconListCheck } from '@tabler/icons-react';
import { SidebarButton } from './SidebarButton';

export function Sidebar() {
  return (
    <div className="h-screen w-72 bg-white">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-xl font-semibold text-[#00adb5]">Task Manager</h1>
        <p>
          Um simples{' '}
          <span className="text-[#00adb5]">organizador de tarefas</span>
        </p>
      </div>
      <div className="flex flex-col gap-2 space-y-2 px-2">
        <SidebarButton variant="default">
          <IconHome2 size={24} />
          Início
        </SidebarButton>
        <SidebarButton variant="selected">
          <IconListCheck size={24} />
          Minhas Tarefas
        </SidebarButton>
      </div>
    </div>
  );
}
