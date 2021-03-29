import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store";

import { receiveTodo } from "./actions/todo_actions"
  import { receiveTodos } from "./actions/todo_actions"
  import { removeTodo } from "./actions/todo_actions"

import { receiveStep } from "./actions/step_actions"
  import { receiveSteps } from "./actions/step_actions"
  import { removeStep } from "./actions/step_actions"

import App from "./components/app"
import {allTodos} from "./reducers/selectors"


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  window.store = store;
  window.receiveTodo = receiveTodo;
  window.removeTodo = removeTodo;
  window.receiveTodos = receiveTodos;
  window.receiveStep = receiveStep;
  window.removeStep = removeStep;
  window.receiveSteps = receiveSteps;
  window.allTodos = allTodos;
  
  ReactDOM.render(<App />, root);
})