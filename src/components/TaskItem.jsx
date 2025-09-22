export function TaskItem({ task }) {
  function getStatusStyles() {
    if (task.status === 'done') {
      return 'bg-[#00ADB51A] text-[#00ADB5]';
    } else if (task.status === 'in_progress') {
      return 'bg-[#FFAA041A] text-[#FFAA04]';
    } else {
      return 'bg-[#35383E0D]';
    }
  }

  return (
    <div
      className={`flex items-center gap-3 rounded-[10px] px-4 py-3 text-sm ${getStatusStyles()}`}
    >
      {task.title}
    </div>
  );
}
