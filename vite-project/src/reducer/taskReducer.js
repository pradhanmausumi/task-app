function TaskReducer(state, action)  {
  if (action.type === 'ADD_TASK') {
    let newTask = action.payload;
    return [...state, newTask];
  } 
  
  else if (action.type === 'DELETE_TASK') {
    let taskId = action.payload;  // Assume task ID is provided directly
    return state.filter(task => task.id !== taskId);
  }
  
  else if (action.type === 'EDIT_TASK') {
    let updatedTask = action.payload;
    return state.map(task =>
      task.id === updatedTask.id ? { ...task, ...updatedTask } : task
    );
  }
  
  else if (action.type === 'TOGGLE_STATUS') {
    let taskId = action.payload;
    return state.map(task =>
      task.id === taskId ? { ...task, status: task.status === 'pending' ? 'complete' : 'pending' } : task
    );
  }

  return state; // Default case returns the current state unchanged
};
export default TaskReducer
