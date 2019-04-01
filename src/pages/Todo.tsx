import React from 'react'
import TodoList from '../components/TodoList';

interface Props {}

const Todo: React.FunctionComponent<Props> = () => {
  return (
    <div>
      <TodoList />
    </div>
  )
}

export default Todo