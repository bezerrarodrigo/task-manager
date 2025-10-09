import {
  IconCloudFog,
  IconMoon,
  IconPlus,
  IconSun,
  IconTrash,
} from '@tabler/icons-react';
import { useState } from 'react';
import { toast } from 'sonner';

import { TASKS } from '../constants/tasks.js';
import { AddTaskDialog } from './AddTaskDialog.jsx';
import { Button } from './Button.jsx';
import { TaskItem } from './TaskItem.jsx';
import { TaskTimeHeader } from './TaskTimeHeader.jsx';

export function Tasks() {
  //states
  const [tasks, setTasks] = useState(TASKS);
  const [isOpen, setIsOpen] = useState(false);

  // computed
  const morningTasks = tasks.filter((task) => task.time === 'morning');
  const afternoonTasks = tasks.filter((task) => task.time === 'afternoon');
  const nightTasks = tasks.filter((task) => task.time === 'night');

  //functions
  function handleTaskStatus(taskID) {
    const updatedTasks = tasks.map((task) => {
      if (task.id !== taskID) {
        return task;
      }

      if (task.status === 'done') {
        toast.success('Tarefa marcada como pendente!');
        return { ...task, status: 'pending' };
      }

      if (task.status === 'pending') {
        toast.success('Tarefa marcada como em andamento!');
        return { ...task, status: 'in_progress' };
      }

      if (task.status === 'in_progress') {
        toast.success('Tarefa marcada como concluída!');
        return { ...task, status: 'done' };
      }
    });

    setTasks(updatedTasks);
  }

  function handleDeleteClick(taskID) {
    const updatedTasks = tasks.filter((task) => task.id !== taskID);
    setTasks(updatedTasks);
    toast.success('Tarefa removida com sucesso!');
  }

  function handleAddTaskSubmit(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    toast.success('Tarefa adicionada com sucesso!');
  }

  return (
    <div className="w-full px-8 py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-primary text-xs font-semibold">
            Minhas tarefas
          </span>
          <h2 className="text-2xl font-semibold">Minhas Tarefas</h2>
        </div>
        <div className="flex items-center gap-3">
          <Button color="ghost">
            Limpar tarefas
            <IconTrash size={16} />
          </Button>
          <Button onClick={() => setIsOpen(true)}>
            Nova tarefa
            <IconPlus size={16} />
          </Button>

          <AddTaskDialog
            isOpen={isOpen}
            closeDialog={() => setIsOpen(false)}
            handleAddNewTask={handleAddTaskSubmit}
          />
        </div>
      </div>
      <div className="mt-6 space-y-6 rounded-lg bg-white p-6 shadow">
        <div className="space-y-3">
          <TaskTimeHeader label="Manhã" icon={<IconSun size={20} />} />
          {morningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleTask={handleTaskStatus}
              handleDeleteClick={handleDeleteClick}
            />
          ))}
        </div>
        <div className="space-y-3">
          <TaskTimeHeader label="Tarde" icon={<IconCloudFog size={20} />} />
          {afternoonTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleTask={handleTaskStatus}
              handleDeleteClick={handleDeleteClick}
            />
          ))}
        </div>
        <div className="space-y-3">
          <TaskTimeHeader label="Noite" icon={<IconMoon size={20} />} />
          {nightTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleTask={handleTaskStatus}
              handleDeleteClick={handleDeleteClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
