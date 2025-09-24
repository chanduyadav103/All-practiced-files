let selectedId = 0;

function settodo() {
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();

    if (title === "") {
        alert('Enter title');
        return;
    }
    if (description === "") {
        alert('Enter description');
        return;
    }
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    if (selectedId > 0) {
        todos.forEach(t => {
            if (t.id === selectedId) {
                t.title = title;
                t.description = description
            }
        })
    } else {
        todos.push({
            id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
            title: title,
            description: description
        });
    }

    localStorage.setItem('todos', JSON.stringify(todos));
    reset();
    loadToDos();
}

function gettodos() {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

function loadToDos() {
    const todosTag = document.getElementById('todos');
    const todoFetched = gettodos();

    let todoTemplate = "";

    todoFetched.forEach(todo => {
        const templete = `
        <div class="todo">
          <h3>${todo.title}</h3>
          <p>${todo.description}</p>
          <div class="todo-actions">
            <button class="btn-2" onclick="updateToDo(${todo.id})">Update</button>
            <button class="btn-3" onclick="deleteToDo(${todo.id})">Delete</button>
          </div>
        </div>
      `;
        todoTemplate += templete;
    });

    todosTag.innerHTML = todoTemplate;
}

function deleteToDo(id) {
    let todos = gettodos();
    todos = todos.filter(todo => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(todos));
    loadToDos();
}

function updateToDo(id) {
    let todos = gettodos();
    const todo = todos.filter(todo => todo.id === id)[0];
    selectedId = todo.id;
    document.getElementById('title').value = todo.title;
    document.getElementById('description').value = todo.description;
}

function reset() {
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    todo = {
        title: '',
        description: '',
        id: 0
    };
}

loadToDos();
