import React from "react";

class TodoList extends React.Component{
  constructor(props){
    super(props)
  }

  render(){

    console.log(this.props)

    return(
      <div>
        <h1>Todo List</h1>
        <ul>
          {
            
            this.props.todos.map(todo => <li key={todo.id}>{todo.title}</li>)
          }
        </ul>
      </div>
    )
  }
} 


export default TodoList;