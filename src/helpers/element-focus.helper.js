export function setFocusOnNewTask(taskId) {
  setTimeout(() => {
    const addedTask = document.getElementById('task_id_' + taskId);
    const textInput = addedTask.getElementsByClassName('editable-text__input')[0];
    textInput.focus();
    }, 50);
}

export function looseFocus(taskId) {
  setTimeout(() => {
    const addedTask = document.getElementById('task_id_' + taskId);
    const textInput = addedTask.getElementsByClassName('editable-text__input')[0];
    textInput.blur();
    }, 50);
}
