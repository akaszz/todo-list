alert("okk");
//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//event listener
todoButton.addEventListener("click", addTodo);

//function
function addTodo(event) {
  event.preventDefault();

  //div.class.todo
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //creat li
  const newTodo = document.createElement("li");
  newTodo.innerText = "jygvyv";
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //check mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //check trash button
  const completedButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("complete-btn");
  todoDiv.appendChild(trashButton);
  //append to list
  todoList.appendChild(todoDiv);
}
