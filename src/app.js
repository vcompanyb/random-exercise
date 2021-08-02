/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let todos = loadTodos();
  console.log(todos);

  let dividedTodos = getSeparatedDoneAndUndoneTodos(todos);

  let doneTodos = dividedTodos.doneTodos;
  console.log(doneTodos);

  let undoneTodos = dividedTodos.undoneTodos;
  console.log(undoneTodos);

  writeNameAndTimeTodos(todos);
};

function loadTodos() {
  return [
    { value: "Tarea 1", done: false, estimatedTimeMins: 120 },
    { value: "Tarea 2", done: false, estimatedTimeMins: 60 },
    { value: "Tarea 3", done: true, estimatedTimeMins: 90 },
    { value: "Tarea 4", done: false, estimatedTimeMins: 115 }
  ];
}

function getSeparatedDoneAndUndoneTodos(todos) {
  let doneTodos = [];
  let undoneTodos = [];
  for (let i = 0; i < todos.length; i++) {
    let todo = todos[i];

    if (todos.done) {
      doneTodos.push(todo);
    } else {
      undoneTodos.push(todo);
    }
  }
  return { doneTodos: doneTodos, undoneTodos: undoneTodos };
}

function writeNameAndTimeTodos(todos) {
  for (let i = 0; i < todos.length; i++) {
    console.log(``);
  }
}
