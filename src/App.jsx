import { Sidebar } from './components/Sidebar';
import { Tasks } from './components/Tasks.jsx';

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Tasks />
    </div>
  );
}
