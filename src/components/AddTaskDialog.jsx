import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { v4 as uuidV4 } from 'uuid';

import { Button } from './Button';
import { Input } from './Input';
import { TimeSelect } from './TimeSelect';

export function AddTaskDialog({ isOpen, closeDialog, handleAddNewTask }) {
  //states
  const [time, setTime] = useState('morning');
  const [errors, setErrors] = useState([]);

  const taskNameInputRef = useRef();
  const taskDescInputRef = useRef();

  //functions
  function handleAdd() {
    const newErrors = [];

    const taskTitleInput = taskNameInputRef.current.value;
    const taskDescInput = taskDescInputRef.current.value;

    if (!taskTitleInput.trim()) {
      newErrors.push(...errors, {
        inputName: 'title',
        message: 'Título é obrigatório.',
      });
    }

    if (!taskDescInput.trim()) {
      newErrors.push(...errors, {
        inputName: 'description',
        message: 'Descrição é obrigatória.',
      });
    }

    setErrors(newErrors);

    if (newErrors.length > 0) {
      return;
    }

    handleAddNewTask({
      id: uuidV4(),
      title: taskTitleInput,
      time,
      description: taskDescInput,
      status: 'pending',
    });
    closeDialog();
  }

  useEffect(() => {
    if (!isOpen) {
      setTime('morning');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const titleError = errors.find((error) => error.inputName === 'title');
  const descriptionError = errors.find(
    (error) => error.inputName === 'description'
  );

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
      <div className="flex w-[336px] max-w-[400px] flex-col items-center rounded-xl bg-white p-5 shadow-2xl">
        <h2 className="text-dark-blue text-lg font-semibold">Nova Tarefa</h2>
        <p className="text-base-gray text-sm">Insira as informações abaixo</p>
        <div className="space-y-2 pt-6">
          <Input
            id="task-name"
            label="Título da tarefa"
            placeholder="Título da tarefa"
            errorMessage={titleError?.message}
            ref={taskNameInputRef}
          />

          <TimeSelect value={time} onChange={(e) => setTime(e.target.value)} />
          <Input
            id="task-description"
            label="Descrição"
            placeholder="Descrição"
            errorMessage={descriptionError?.message}
            ref={taskDescInputRef}
          />

          <div className="flex gap-3">
            <Button
              className="w-full"
              size="lg"
              color="secondary"
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
