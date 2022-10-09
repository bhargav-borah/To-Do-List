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
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('check-button');
    taskDiv.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('delete-button');
    taskDiv.appendChild(deleteButton);

    if(textInputElement.value.trim() === '') {
        alert("Please enter a task");
    } else {
        taskContainer.appendChild(taskDiv);
    }
    textInputElement.value = '';

    let checked = false;
    checkButton.addEventListener('click', () => {

        if(!checked) {
            checkButton.parentElement.style.textDecoration = 'line-through';
            checked = true;
        } else {
            checkButton.parentElement.style.textDecoration = 'none';
            checked = false;
        }
    })

    deleteButton.addEventListener('click', e => {
        let target = e.target;
        if (target.parentElement.parentElement == taskDiv) {
            target.parentElement.parentElement.remove();
        } else {
            target.parentElement.remove();
        }
    })

})
