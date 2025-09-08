//  DOM Elements
const plusBtn = document.querySelector('.plusBtn');
const formContainer = document.querySelector('.form');
const form = document.querySelector('form');
const closeBtn = document.querySelector('.close');
const input = document.querySelector('.inp');
const todoBox = document.querySelector('.todo-boxs');
const filterButtons = document.querySelectorAll('.category button');

// Show form
plusBtn.addEventListener('click', () => {
    formContainer.style.display = 'initial';
});

// Hide form
closeBtn.addEventListener('click', () => {
    formContainer.style.display = 'none';
});

// Add new todo
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputValue = input.value.trim();
    if (!inputValue) return;

    const todoItem = createTodoItem(inputValue);
    todoBox.appendChild(todoItem);

    input.value = '';
    formContainer.style.display = 'none';

    applyCurrentFilter();
});

//  Delete or toggle complete
todoBox.addEventListener('click', (e) => {
    const todoItem = e.target.closest('.todo-item');

    if (e.target.classList.contains('delete-button')) {
        todoItem.remove();
        applyCurrentFilter(); // reapply filter after deletion
    }
});

todoBox.addEventListener('change', (e) => {
    if (e.target.classList.contains('todo-checkbox')) {
        const todoText = e.target.closest('.todo-item').querySelector('.todo-text');
        const isChecked = e.target.checked;

        todoText.style.textDecoration = isChecked ? 'line-through' : 'none';
        todoText.style.fontStyle = isChecked ? 'italic' : 'normal';

        applyCurrentFilter(); // reapply filter after marking complete/incomplete
    }
});

//  Filter buttons logic
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterTodos(button.textContent.trim());
    });
});

//  Create Todo Item DOM
function createTodoItem(text) {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('todo-checkbox');

    const todoText = document.createElement('span');
    todoText.classList.add('todo-text');
    todoText.textContent = text;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = '×';

    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteButton);

    return todoItem;
}

// Filtering Function
function filterTodos(filterType) {
    const todos = document.querySelectorAll('.todo-item');

    todos.forEach(todo => {
        const checkbox = todo.querySelector('.todo-checkbox');
        const isChecked = checkbox.checked;

        if (filterType === 'Active' && isChecked) {
            todo.style.display = 'none';
        } else if (filterType === 'Completed' && !isChecked) {
            todo.style.display = 'none';
        } else {
            todo.style.display = 'flex';
        }
    });
}

//  Apply current active filter (after add/delete/change)
function applyCurrentFilter() {
    const activeBtn = document.querySelector('.category button.active');
    if (activeBtn) {
        filterTodos(activeBtn.textContent.trim());
    }
}
