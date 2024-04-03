import { Container, Typography } from '@mui/material'
import { TaskInput, TaskList } from '../../components'

import { Provider } from 'react-redux'
import React from 'react'
import { store } from '../../store'

export const Home = () => {
  return (
  <Provider store={store}>
    <Container maxWidth="sm">
      <Typography variant="h4"  padding="8px">To-Do Application</Typography>
      <TaskInput />
      <TaskList />
    </Container>
  </Provider>
  )
}
