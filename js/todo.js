const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";


let toDos = [];

const savedToDos = JSON.parse(localStorage.getItem(TODOS_KEY));

function saveToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    const newToDosArr = toDos.filter((todo) => todo.id !== parseInt(li.id));
    toDos = newToDosArr;
    saveToDo();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;

    const span = document.createElement("span");
    span.innerText = newToDo.text;
    li.appendChild(span);
    
    const icon = document.createElement("i");
    icon.classList.add("fas","fa-minus-circle");
    li.appendChild(icon);

    icon.addEventListener("click", deleteToDo);

    toDoList.appendChild(li);
}

function handleToDo(event) {
    event.preventDefault();
    const toDoObj = {"text":toDoInput.value, "id":Date.now()};
    toDoInput.value = "";
    toDos.push(toDoObj);
    saveToDo();
    paintToDo(toDoObj);
}


if(savedToDos) {
    savedToDos.forEach(paintToDo);
    toDos = savedToDos;
}


toDoForm.addEventListener("submit", handleToDo);