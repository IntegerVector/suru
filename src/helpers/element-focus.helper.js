class ElementsFocusHelper {
  _focusedTaskId = null;

  constructor() {}

  setFocusOnTask(taskId) {
    setTimeout(() => {
      const addedTask = document.getElementById('task_id_' + taskId);
      const textInput = addedTask.getElementsByClassName('editable-text__input')[0];

      if (textInput) {
        this._focusedTaskId = taskId;
      }

      textInput.focus();
      }, 50);
  }

  looseFocus() {
    if (!this._focusedTaskId) {
      return;
    }

    setTimeout(() => {
      const addedTask = document.getElementById('task_id_' + this._focusedTaskId);
      const textInput = addedTask.getElementsByClassName('editable-text__input')[0];
      textInput.blur();
      }, 50);
  }
}

export const elementsFocusHelper = new ElementsFocusHelper();
