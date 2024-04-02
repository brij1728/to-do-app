import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

import { addTask } from '../../store/taskSlice';
import { useAppDispatch } from '../../store';

export const TaskInput: React.FC = () => {
  const [taskName, setTaskName] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  const handleAddTask = () => {
    dispatch(addTask({ id: Date.now(), title: taskName, completed: false })); 
    setTaskName('');
  };

  return (
    <Box mt={2}>
      <TextField
        label="Add Task"
        variant="outlined"
        value={taskName}
        onChange={handleChange}
      />
      <Button variant="contained" color="primary" onClick={handleAddTask} disabled={!taskName}>
        Add
      </Button>
    </Box>
  );
};

