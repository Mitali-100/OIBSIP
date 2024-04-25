const form = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const pendingTasksList = document.getElementById('pending-tasks');
const completedTasksList = document.getElementById('completed-tasks');

form.addEventListener('submit', addTask);
pendingTasksList.addEventListener('click', completeTask);
completedTasksList.addEventListener('click', deleteTask);

function addTask(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText === '') return;
    const taskItem = createTaskItem(taskText);
    pendingTasksList.appendChild(taskItem);
    taskInput.value = '';
}

function createTaskItem(taskText) {
    const taskItem = document.createElement('li');
    taskItem.innerText = taskText;
    const completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    completeButton.classList.add('complete-btn');
    taskItem.appendChild(completeButton);
    return taskItem;
}

function completeTask(event) {
    const task = event.target.parentElement;
    if (!task.classList.contains('completed')) {
        task.classList.add('completed');
        const completedTask = task.cloneNode(true);
        completedTasksList.appendChild(completedTask);
        task.remove();
    }
}

function deleteTask(event) {
    const task = event.target.parentElement;
    if (task.classList.contains('completed')) {
        task.remove();
    }
}
