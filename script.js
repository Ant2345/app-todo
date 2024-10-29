let todoList = [
    "Demo Task 1",
    "Demo Task 2"
]

const listElement = document.getElementById("list");
const addButton = document.getElementById("addbtn");
const deleteButton = document.getElementById("delbtn");

function updateTasks() {
    listElement.innerHTML = "";
    for (i = 0; i < todoList.length; i++) {
        let newTaskElement = document.createElement("li"); // telling javascript to make a new list element on the page (currently empty)
        newTaskElement.textContent = todoList[i];
        listElement.appendChild(newTaskElement);
    }
}

function addTask(task) { // don't need to define the type of input variable
    todoList.push(task);
    updateTasks();
}

function deleteTask(task) {
    // const index = 0;
    // for (i = 0; i < todoList.length; i++) {
    //     index++;
    // }
    todoList.pop();
    // todoList.filter(task => task !== '');
    updateTasks();
}

addButton.addEventListener("click", () => {
    const task = prompt("Enter task: ") // prompt is the input method for javascript
    addTask(task);
}); // => arrow functions, write functions without giving them a name

deleteButton.addEventListener("click", () => {
    // const task = prompt("What to delete: ")
    // deleteTask(task);
    deleteTask();
});

updateTasks();

console.log(listElement);