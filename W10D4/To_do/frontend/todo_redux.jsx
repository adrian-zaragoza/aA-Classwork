import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { receiveTodo} from "./actions/todo_actions"
import { receiveTodos } from "./actions/todo_actions"
import { removeTodo } from "./actions/todo_actions"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  window.store = store;
  window.receiveTodo = receiveTodo;
  window.removeTodo = removeTodo;
  window.receiveTodos = receiveTodos;
  ReactDOM.render(<h1>Todos App</h1>, root);
})
