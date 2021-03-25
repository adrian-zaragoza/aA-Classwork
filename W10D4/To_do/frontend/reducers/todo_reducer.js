import {RECEIVE_TODO} from "../actions/todo_actions"
import {RECEIVE_TODOS} from "../actions/todo_actions"

const todosReducer = (state = {}, action)=>{
  Object.freeze(state);
  const nextState = Object.assign({}, state)

  switch (action.type) {
    default:
      return state;
  }

}

export default todosReducer;