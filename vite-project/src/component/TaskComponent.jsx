import  { useContext, useState } from 'react';
import TaskContext from '../context/TaskContext';

const TaskComponent = () => {
  const { tasks, dispatch } = useContext(TaskContext);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    dispatch({
      type: 'ADD_TASK',
      payload: { id: Date.now(), text: newTask, completed: false },
    });
    setNewTask('');
  };

  const toggleTaskStatus = (id) => {
    dispatch({ type: 'TOGGLE_TASK_STATUS', payload: id });
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <button onClick={() => toggleTaskStatus(task.id)}>
              {task.completed ? 'Mark as Pending' : 'Mark as Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskComponent;
