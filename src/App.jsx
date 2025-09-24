import { Toaster } from 'sonner';

import { Sidebar } from './components/Sidebar';
import { Tasks } from './components/Tasks.jsx';

export default function App() {
  return (
    <div className="flex">
      <Toaster
        toastOptions={{
          style: {
            color: '#35383E',
          },
        }}
      />
      <Sidebar />
      <Tasks />
    </div>
  );
}
