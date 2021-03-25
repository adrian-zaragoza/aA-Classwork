export const RECEIVE_TODO = "RECEIVE_TODO";
export const RECEIVE_TODOS = "RECEIVE_TODOS";

export const receiveTodo = (todoPayload)=>{
  return {
    type: RECEIVE_TODO,
    todo: todoPayload
  }
}

export const receiveTodos = (todosPayload) => {
  return {
    type: RECEIVE_TODOS,
    todos: todosPayload
  }
}