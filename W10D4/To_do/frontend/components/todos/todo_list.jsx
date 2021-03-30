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
        <div>
          <h1>Todo List</h1>
          <ul>
            {
              this.props.todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)
            }
          </ul>
        </div>
        <div>
            <h1>New Todo</h1>
            <ul>
              <TodoForm/>
            </ul>
        </div>
      </div>
    )
  }
} 


export default TodoList;