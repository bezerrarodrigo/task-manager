import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { v4 as uuidV4 } from 'uuid';

import { Button } from './Button';
import { Input } from './Input';
import { TimeSelect } from './TimeSelect';

export function AddTaskDialog({ isOpen, closeDialog, handleAddNewTask }) {
  //states
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('morning');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState([]);

  //functions
  function handleAdd() {
    const newErrors = [];

    if (!title.trim()) {
      newErrors.push(...errors, {
        inputName: 'title',
        message: 'Título é obrigatório.',
      });
    }

    if (!description.trim()) {
      newErrors.push(...errors, {
        inputName: 'description',
        message: 'Descrição é obrigatória.',
      });
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    handleAddNewTask({
      id: uuidV4(),
      title,
      time,
      description,
      status: 'pending',
    });
    closeDialog();
  }

  useEffect(() => {
    if (!isOpen) {
      setTitle('');
      setTime('morning');
      setDescription('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const titleError = errors.find((error) => error.inputName === 'title');
  const descriptionError = errors.find(
    (error) => error.inputName === 'description'
  );

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xs">
      <div className="flex w-[336px] max-w-[400px] flex-col items-center rounded-xl bg-white p-5">
        <h2 className="text-lg font-semibold text-[#35383E]">Nova Tarefa</h2>
        <p className="text-sm text-[#9A9C9F]">Insira as informações abaixo</p>
        <div className="space-y-2 pt-6">
          <Input
            id="task-name"
            label="Título da tarefa"
            placeholder="Título da tarefa"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            errorMessage={titleError?.message}
          />

          <TimeSelect value={time} onChange={(e) => setTime(e.target.value)} />
          <Input
            id="task-description"
            label="Descrição"
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            errorMessage={descriptionError?.message}
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
            <Button
              className="w-full disabled:cursor-not-allowed disabled:opacity-50"
              size="lg"
              onClick={handleAdd}
            >
              Adicionar
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
