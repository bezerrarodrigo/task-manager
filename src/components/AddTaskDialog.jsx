import { createPortal } from 'react-dom';

import { Button } from './Button';
import { Input } from './Input';
import { TimeSelect } from './TimeSelect';

export function AddTaskDialog({ isOpen, closeDialog }) {
  if (!isOpen) return null;
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xs">
      <div className="flex w-[336px] max-w-[400px] flex-col items-center rounded-xl bg-white p-5">
        <h2 className="text-lg font-semibold text-[#35383E]">Nova Tarefa</h2>
        <p className="text-sm text-[#9A9C9F]">Insira as informações abaixo</p>
        <div className="space-y-6 pt-6">
          <Input
            id="task-name"
            label="Título da tarefa"
            placeholder="Título da tarefa"
          />

          <TimeSelect />

          <Input
            id="task-description"
            label="Descrição"
            placeholder="Descrição"
          />
          <div className="flex gap-3">
            <Button
              className="w-full"
              size="lg"
              variant="secondary"
              onClick={closeDialog}
            >
              Cancelar
            </Button>
            <Button className="w-full" size="lg">
              Adicionar
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
