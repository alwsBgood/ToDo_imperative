function createTodoItem(title) {
  const checkbox = documnet.createElement('input');
}

function addTodoItem(event) {
  event.preventDefault();

  if (!addInput.value) {
    return alert('Необходимо ввести название задачи')
  }
  const listItem = createTodoItem(addInput.value);
}


const todoForm = document.getElementById('todo-form');
const addInput = document.getElementById('add-input');
const todoList = document.getElementById('todo-list');
const todoItems = document.querySelectorAll('.todo-item');

todoForm.addEventListener('submit', addTodoItem);
