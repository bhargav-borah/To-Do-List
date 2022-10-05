const addTaskButton = document.querySelector('.add-task-button');
const textInputElement = document.querySelector('.task-input');
const taskContainer = document.querySelector('.task-container');

addTaskButton.addEventListener('click', () => {
    
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    let item = document.createElement('li');
    item.innerText = `${textInputElement.value}`; // if-else check to be added later
    taskDiv.appendChild(item);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fa fa-check"></i>';
    taskDiv.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
    taskDiv.appendChild(checkButton);

    if(textInputElement.value.trim() === '') {
        alert("Please enter a task");
    } else {
        taskContainer.appendChild(taskDiv);
    }
    textInputElement.value = '';



})
