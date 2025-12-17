import { getTasks, deleteTask, editTask } from "./tasks.js";

const list = document.getElementById("taskList");

export function renderTasks() {
  list.innerHTML = "";

  const tasks = getTasks();

  if (tasks.length === 0) {
    list.innerHTML = "<li>No tasks yet</li>";
    return;
  }

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task;

    
    const editBtn = document.createElement("button");
    editBtn.textContent = "✏️";

    editBtn.addEventListener("click", () => {
      const newText = prompt("Edit task:", task);

      if (newText !== null && newText.trim() !== "") {
        editTask(index, newText.trim());
        renderTasks();
      }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";

    deleteBtn.addEventListener("click", () => {
      deleteTask(index);
      renderTasks();
    });

    
    li.appendChild(span);
    li.appendChild(editBtn);    
    li.appendChild(deleteBtn); 

    list.appendChild(li);
  });
}
