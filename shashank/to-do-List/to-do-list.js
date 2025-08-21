let titleTag = document.getElementById('title');
let descriptionTag = document.getElementById('description');
let todosTag = document.getElementById('todos');

function getToDo() {
    return JSON.parse(localStorage.getItem("todos")) || [];
}

function toLoadToDo() {
    let title = titleTag.value;
    let description = descriptionTag.value;

    if (!title || !description) {
        alert("Both fields are required!");
        return;
    }

    let todos = getToDo();
    let todo = {
        title: title,
        description: description,
        id: todos.length + 1
    };

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    reset();
}

function toFetchTodo() {
    let todoTemplate = '';
    let todos = getToDo();
    todos.forEach(todo => {
        const template = `
            <div class="todo-section">
                <h1 class="todo-title">${todo.title}</h1>
                <p class="todo-description">${todo.description}</p>
                <button class="btn">Update</button>
                <button class="btn">Delete</button>
            </div>
        `;
        todoTemplate = todoTemplate + template;
    });

    todosTag.innerHTML = todoTemplate;
}

function reset() {
    titleTag.value = "";
    descriptionTag.value = "";
}

toFetchTodo();



