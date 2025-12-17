import { addTask } from "./tasks.js";
import { renderTasks } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("taskInput");
  const btn = document.getElementById("addBtn");

  btn.addEventListener("click", () => {
    if (input.value.trim() === "") return;

    addTask(input.value);
    input.value = "";
    renderTasks();
  });

  renderTasks();
});
