import React from "react";
import TodoListItem from "./todo_list_item.jsx"; // ../components/todos/

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
            this.props.todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)
          }
        </ul>
      </div>
    )
  }
} 


export default TodoList;