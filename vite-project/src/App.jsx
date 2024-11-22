
import TaskComponent from './component/TaskComponent';
import { TaskProvider } from './context/TaskContext';

function App() {
  return (
    <TaskProvider>
      <TaskComponent />
    </TaskProvider>
  );
}

export default App;
