    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', () => {
    const task = todoInput.value.trim();
    if (task !== '') {
        addTask(task);
        todoInput.value = ''; // Clear input field
    } else {
        alert('Please enter a task!');
    }
    });

    function addTask(task) {
    // Create list item
    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');

    // Add task text
    const taskText = document.createElement('span');
    taskText.textContent = task;

    // Add delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        todoList.removeChild(listItem); // Remove the task
    });

    // Append taskText and deleteButton to listItem
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);

    // Add listItem to the todoList
    todoList.appendChild(listItem);
    }

    todoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addButton.click(); // Trigger the click event on Enter key press
    }
    });
