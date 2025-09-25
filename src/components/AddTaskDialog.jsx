import { createPortal } from 'react-dom';

export function AddTaskDialog({ isOpen }) {
  if (!isOpen) return null;
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xs">
      <div className="flex h-[371px] w-[336px] max-w-[400px] flex-col items-center rounded-xl bg-white p-5">
        <h2 className="text-lg font-semibold text-[#35383E]">Nova Tarefa</h2>
        <p className="text-sm text-[#9A9C9F]">Insira as informações abaixo</p>
      </div>
    </div>,
    document.body
  );
}
