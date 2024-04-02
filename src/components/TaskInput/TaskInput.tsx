import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

import { addTask } from '../../store/taskSlice';
import { useAppDispatch } from '../../store';

export const TaskInput: React.FC = () => {
  const [showFields, setShowFields] = useState<boolean>(false); 
  const [taskName, setTaskName] = useState<string>('');
  const [taskText, setTaskText] = useState<string>('');
  const [error, setError] = useState<string>(''); 
  const dispatch = useAppDispatch();

  const handleToggleFields = () => {
    setShowFields(true); 
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
    setError(''); 
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value);
  };

  const handleAddTask = () => {
    if (!taskName) {
      setError('Title is required'); 
      return;
    }
    dispatch(addTask({ id: Date.now(), title: taskName, text: taskText, completed: false }));
    setTaskName('');
    setTaskText('');
    setShowFields(false); 
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12}>
        {!showFields && (
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleToggleFields}
          >
            Add Task
          </Button>
        )}
      </Grid>
      {showFields && (
        <>
          <Grid item xs={12}>
            <TextField
              label="Add Title"
              variant="outlined"
              fullWidth
              value={taskName}
              onChange={handleChange}
              error={Boolean(error)} 
              helperText={error} 
              required 
              autoFocus 
              inputProps={{ maxLength: 50 }} 
              
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Add Text"
              variant="outlined"
              multiline
              fullWidth
              value={taskText}
              onChange={handleTextChange}
             
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleAddTask}
              disabled={!taskName}
            >
              Add Task
            </Button>
          </Grid>
        </>
      )}
    </Grid>
  );
};
