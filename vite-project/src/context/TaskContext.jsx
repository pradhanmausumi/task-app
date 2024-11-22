import { createContext, useReducer } from 'react';
import taskReducer from '../reducer/taskReducer';  // Correct import path

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
