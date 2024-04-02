import { TaskInput, TaskList } from '../../components'

import { Container } from '@mui/material'
import { Provider } from 'react-redux'
import React from 'react'
import { store } from '../../store'

export const Home = () => {
  return (
  <Provider store={store}>
    <Container maxWidth="sm">
      <h1>To-Do Application</h1>
      <TaskInput />
      <TaskList />
    </Container>
  </Provider>
  )
}
