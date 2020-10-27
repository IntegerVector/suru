import { Subject } from 'rxjs';

import { localStorageHelper } from './local-storage/local-storage.helper';
import { ErrorConstants } from '../constants/errors.constants';

class TasksHelper {
  get tasks() {
    return this._tasksChanged$;
  }

  set tasks(tasks) {
    this._tasksArray = tasks
    this._tasksChanged$.next(tasks);
  }

  get selectedTask() {
    return this._taskSelected$;
  }

  set selectedTask(task) {
    this._selectedTask = task;
    this._taskSelected$.next(task);
  }

  _tasksChanged$ = new Subject();
  _taskSelected$ = new Subject();
  _tasksArray = [];
  _selectedTask = null;

  constructor() {
    this._init();
  }

  _init() {
    const tasks = localStorageHelper.loadData();
    this._selectedTask = tasks.length
      ? tasks[0]
      : null;

    this.tasks = tasks;
  }

  _getNewId() {
    const lastId = +localStorageHelper.getConfig('lastId') || 1;
    localStorageHelper.setConfig('lastId', lastId + 1 + '');

    return lastId;
  }

  saveTasks() {

    localStorageHelper.saveData(this._tasksArray);
  }

  refresh() {
    this.saveTasks();
    this._init();
  }

  getIndexById(taskId) {
    if (typeof taskId !== 'number') {
      throw ErrorConstants.INVALID_TYPE_NUMBER;
    }

    return this._tasksArray.findIndex(task => {
      return task.id === taskId;
    });
  }

  getIdByIndex(taskIndex) {
    if (typeof taskId !== 'number') {
      throw ErrorConstants.INVALID_TYPE_NUMBER;
    }

    const task = this._tasksArray[taskIndex];
    return task
      ? task.id
      : null;
  }

  getTaskById(taskId) {
    if (typeof taskId !== 'number') {
      throw ErrorConstants.INVALID_TYPE_NUMBER;
    }

    const taskIndex = this.getIndexById(taskId);
    return this._tasksArray[taskIndex] || null;
  }

  getAllTasks() {
    return this._tasksArray;
  }

  addNewTask() {
    const id = this._getNewId();
    const newTask = {
      id,
      text: '',
      done: false
    }

    this._tasksArray.push(newTask);
    return id;
  }

  editTask(editedTask) {
    if (typeof editedTask !== 'object') {
      throw ErrorConstants.INVALID_TYPE_OBJECT;
    }

    if (typeof editedTask.id !== 'number') {
      throw ErrorConstants.TASK_INVALID_ID;
    }

    const taskIndex = this.getIndexById(editedTask.id);

    if (taskIndex === -1) {
      throw ErrorConstants.TASK_NOT_FOUND;
    }

    const task = this._tasksArray[taskIndex];

    const newTask = {
      ...task,
      text: editedTask.text,
      done: editedTask.done
    };

    this._tasksArray.splice(taskIndex, 1, newTask);
  }

  deleteTask(taskId) {
    const itemIndex = this.getIndexById(taskId);
    this._tasksArray.splice(itemIndex, 1);
    return itemIndex;
  }

  getSelectedTask() {
    return this._selectedTask;
  }

  selectUpperTask() {
    if (!this._selectedTask) {
      return;
    }

    const currentSelectedTaskIndex = this.getIndexById(this._selectedTask.id);
    if (currentSelectedTaskIndex !== -1) {
      const nextItemIndex = currentSelectedTaskIndex - 1;
      const nextItem = this._tasksArray[nextItemIndex];
      this.selectedTask = nextItem && nextItem.id ? nextItem : this._selectedTask;
    }
  }

  selectLowerTask() {
    if (!this._selectedTask) {
      return;
    }

    const currentSelectedTaskIndex = this.getIndexById(this._selectedTask.id);
    if (currentSelectedTaskIndex !== -1) {
      const nextItemIndex = currentSelectedTaskIndex + 1;
      const nextItem = this._tasksArray[nextItemIndex];
      this.selectedTask = nextItem && nextItem.id ? nextItem : this._selectedTask;
    }
  }
}

export const tasksHelper = new TasksHelper();
