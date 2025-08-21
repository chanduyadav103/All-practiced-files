
const titleTag = document.getElementById('title');
const descriptionTag = document.getElementById('description');

function setToDo() {

    // Comment: Creating a ToDo object with title and description from input tags
    const todo = {
        title: titleTag.value,
        description: descriptionTag.value,
        id: getToDos().length + 1,
    };

    // Comments: Doing form validation
    if (todo.title === undefined || todo.title === null || todo.title.length <= 0) {
        alert('Enter ToDO title');
    }

    if (todo.description === undefined || todo.description === null || todo.description.length <= 0) {
        alert('Enter ToDo Description');
    }

    // Comments: Fetching existing ToDos and pushing new Todo to the ToDos list
    const todos = getToDos();
    todos.push(todo);

    const stringifiedToDos = JSON.stringify(todos);

    localStorage.setItem('todos', stringifiedToDos);

    reset();
    loadToDos();
}

function getToDos() {
    const todos = localStorage.getItem('todos');
    const parsedToDos = JSON.parse(todos)
    if (parsedToDos !== null && parsedToDos !== undefined) {
        return parsedToDos;
    } else {
        return [];
    }
}

function reset() {
    // Comments: Clearing or reseting form values to empty.
    titleTag.value = "";
    descriptionTag.value = "";
}

const todosTag = document.getElementById('todos');

// Comments: Rendering the todos in the right section
function loadToDos() {

    const todoFetched = getToDos();

    let todoTemplate = ``;

    todoFetched.forEach(todo => {
        const templete = `
        <div class="todo">
            <h1 class="todo-title">${todo.title}</h1>
            <p class="todo-description">
                ${todo.description}
            </p>
            <div class="todo-actions">
                <button class="btn btn-warning" onclick="updateToDo(${todo.id})">Update</button>
                <button class="btn btn-danger" onclick="deleteToDo(${todo.id})">Delete</button>
            </div>
        </div>`;

        todoTemplate = todoTemplate + templete;
    });

    todosTag.innerHTML = todoTemplate;
}

loadToDos();


function deleteToDo(id) {
    // Comments: Use Array.filter predefined method  to remove the selected todo from 
    // todos array and set it in local sotrage.
}

function updateToDo(id) {
    // Comments: Get the selected ToDo, update it, and save it in localstorage.
}