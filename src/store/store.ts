import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
export const store = configureStore({
  reducer: rootReducer,
});

const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
store.dispatch({ type: 'tasks/loadTasks', payload: tasks });