import React from 'react';
import TodoListContainer from "./todos/todo_list_container"

const App = () => {
  return (
    <div>
      <h1>I'm inside App</h1>
      <TodoListContainer />
    </div>
  )
}

export default App;