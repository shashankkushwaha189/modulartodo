import { saveTasks, loadTasks } from "./storage.js";

let tasks = loadTasks();

export function getTasks() {
  return tasks;
}

export function addTask(text) {
  tasks.push(text);
  saveTasks(tasks);
}

export function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks(tasks);
}


export function editTask(index, newText) {
  tasks[index] = newText;
  saveTasks(tasks);
}
