const button = document.getElementById('tasks__add');
const input = document.getElementById('task__input');
let tasksList = document.getElementById('tasks__list');

button.addEventListener('click', (event) => {
    event.preventDefault();
    if (input.value.length > 0) {
        const task = document.createElement('div');
        task.className = 'task';
        const taskTitle = document.createElement('div');
        taskTitle.className = 'task__title';
        taskTitle.innerHTML = input.value;
        task.appendChild(taskTitle);
        const taskRemove = document.createElement('a');
        taskRemove.href = '#';
        taskRemove.className = 'task__remove';
        taskRemove.innerHTML = '&times;';
        taskRemove.addEventListener('click', (event) => {
            event.preventDefault();
            task.remove();
        });
        task.appendChild(taskRemove);
        tasksList.appendChild(task);
        input.value = '';
    }
});

