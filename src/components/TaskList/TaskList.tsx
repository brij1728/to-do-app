import { Box, Checkbox, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material';
import { deleteTask, updateTask } from '../../store/taskSlice';
import { useAppDispatch, useAppSelector } from '../../store';

import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import { Task } from '../../types';
import { theme } from '../../theme';

export const TaskList: React.FC = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.tasks);

  const handleDeleteTask = (taskId: number) => {
    dispatch(deleteTask(taskId));
  };

  const handleTaskDone = (task: Task) => {
    dispatch(updateTask({ ...task, completed: !task.completed }));
  };

  return (
    <Box mt={4}>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id} sx={{ '&:hover': { '& .MuiListItemSecondaryAction-root': { visibility: 'visible' }, backgroundColor: theme.palette.background.paper, color: theme.palette.text.secondary },
           color: theme.palette.text.primary,
           '& .MuiListItemText-secondary': {
               color: theme.palette.text.primary,
           },
          }}>
            <Checkbox
              checked={task.completed}
              onChange={() => handleTaskDone(task)} 
              style={{ color: task.completed ? 'green' : 'red' }}
            />
            <ListItemText 
              primary={task.title} 
              secondary={task.text} 
            />
            <Box className="delete-btn" style={{ visibility: 'hidden', paddingLeft: '4px'}}>
              <ListItemSecondaryAction >
                <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(task.id)}>
                  <DeleteIcon sx={{ '&:hover': { color: theme.palette.text.secondary } }} />
                </IconButton>
              </ListItemSecondaryAction>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
