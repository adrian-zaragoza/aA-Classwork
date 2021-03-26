import {RECEIVE_TODO, REMOVE_TODO} from "../actions/todo_actions"
import {RECEIVE_TODOS} from "../actions/todo_actions"


const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
}

const todosReducer = (state = initialState, action)=>{
  Object.freeze(state);
  const nextState = Object.assign({}, state)
  // debugger
  switch (action.type) {
    case RECEIVE_TODO:
      nextState[action.todo.id] = action.todo;
      return nextState;
      case RECEIVE_TODOS:
        let obj = {};
        action.todos.forEach((todo)=>{
          obj[todo.id] = todo;
        })
        return obj;
    case REMOVE_TODO:
      debugger
      let deleted = action.todo.id;
      let stateCopy = state;
      for (const key in stateCopy) {
        if (key.id === action.todo.id) {
          delete stateCopy[key.id]  
        }
      }
      return stateCopy
    default:
      return state;
  }

}

export default todosReducer;