import { Box, Checkbox, Grid, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, useTheme } from '@mui/material';
import { deleteTask, updateTask } from '../../store/taskSlice';
import { useAppDispatch, useAppSelector } from '../../store';

import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import { Task } from '../../types';

export const TaskList: React.FC = () => {
  const theme = useTheme()
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
          <ListItem key={task.id} sx={{ 
            '&:hover': { 
              '& .MuiListItemSecondaryAction-root': { visibility: 'visible' }, 
              backgroundColor: theme.palette.background.paper, 
              color: theme.palette.text.secondary,
              '& .MuiCheckbox-root': { color: theme.palette.text.primary } 
            },
            color: theme.palette.text.primary,
            '& .MuiListItemText-primary, & .MuiListItemText-secondary': {
                color: theme.palette.text.primary,
                textDecoration: task.completed ? 'line-through' : 'none', 
                
            },
            '& .MuiCheckbox-root': { color: theme.palette.primary.main },

          }}>
            <Grid container alignItems="center" gap={2}>
              <Grid item xs={1} >
                <Checkbox
                  checked={task.completed}
                  onChange={() => handleTaskDone(task)} 
                  color="primary"
                />
              </Grid>
              <Grid item xs={9}>
                <ListItemText 
                  primary={task.title} 
                  secondary={task.text} 
                />
              </Grid>
              <Grid item xs={2}>
                <Box className="delete-btn" style={{ visibility: 'hidden', paddingLeft: '4px'}}>
                  <ListItemSecondaryAction >
                    <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(task.id)}>
                      <DeleteIcon sx={{ '&:hover': { color: theme.palette.text.secondary } }} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </Box>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
