import { ErrorConstants } from '../constants/errors.constants';

class ElementsFocusHelper {
  _focusedTaskId = null;
  _currentFocusedType = '';
  _focusableElementsTypes = ['checkbox', 'editor'];

  constructor() {}

  set focusedTaskId(taskId) {
    this._focusedTaskId = taskId;
  }

  get focusedTaskId() {
    return this._focusedTaskId;
  }

  focusNext(taskId) {
    const nextElementType = this._getNextElementType();
    this._setFocusByType(taskId, nextElementType);
  }

  focusPrev(taskId) {
    const prevElementType = this._getPrevElementType();
    this._setFocusByType(taskId, prevElementType);
  }

  setFocusOnCheckbox(taskId) {
    setTimeout(() => {
      const checkbox = this._getCheckbox(taskId);

      if (checkbox) {
        this._focusedTaskId = taskId;
      }

      checkbox.focus();
      }, 50);
  }

  setFocusOnEditor(taskId) {
    setTimeout(() => {
      const textInput = this._getEditor(taskId);

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
      const checkbox = this._getCheckbox(this._focusedTaskId);
      const editor = this._getEditor(this._focusedTaskId);
      this._focusedTaskId = null;

      if (checkbox) {
        checkbox.blur();
      }
      if (editor) {
        editor.blur();
      }

      this._currentFocusedType = '';
      }, 50);
  }

  _getTaskElement(taskId) {
    if (typeof taskId !== 'number') {
      throw ErrorConstants.INVALID_TYPE_NUMBER;
    }

    return document.getElementById('task_id_' + taskId);
  }

  _getCheckbox(taskId) {
    const task = this._getTaskElement(taskId);
    if (task) {
      return task.getElementsByClassName('checkbox__hidden-input')[0];
    }
  }

  _getEditor(taskId) {
    const task = this._getTaskElement(taskId);
    if (task) {
      return task.getElementsByClassName('editable-text__input')[0];
    }
  }

  _getNextElementType() {
    const currentTypeIndex = this._focusableElementsTypes.indexOf(this._currentFocusedType);
    const nextElement = this._focusableElementsTypes[currentTypeIndex + 1];

    return nextElement
      ? nextElement
      : this._focusableElementsTypes[0];
  }

  _getPrevElementType() {
    const currentTypeIndex = this._focusableElementsTypes.indexOf(this._currentFocusedType);
    const nextElement = this._focusableElementsTypes[currentTypeIndex - 1];

    return nextElement
      ? nextElement
      : this._focusableElementsTypes[2];
  }

  _setFocusByType(taskId, type) {
    switch (type) {
      case 'editor':
        this._currentFocusedType = 'editor';
        this.setFocusOnEditor(taskId);
        break;
      case 'checkbox':
      default:
        this._currentFocusedType = 'checkbox';
        this.setFocusOnCheckbox(taskId);
        break;
    }
  }
}

export const elementsFocusHelper = new ElementsFocusHelper();
