import { Box, Grid, List, ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store';

import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import { deleteTask } from '../../store/taskSlice';

export const TaskList: React.FC = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.tasks);
  console.log(tasks);

  const handleDeleteTask = (taskId: number) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <Box mt={4}>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={10}>
                <ListItemText primary={task.title} secondary={task.text} secondaryTypographyProps={{ style: { color: '#333' } }} />
              </Grid>
              <Grid item xs={2}>
                <ListItemSecondaryAction>
                  <DeleteIcon onClick={() => handleDeleteTask(task.id)} />
                </ListItemSecondaryAction>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
