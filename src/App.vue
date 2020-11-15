<template>
  <main>
    <TasksList class="task-list">
    </TasksList>
    <AddTaskButton
      class="add-task-btn"
      @clicked="onNewTask">
    </AddTaskButton>
  </main>
</template>

<script>
import TasksList from './components/tasks-list/TasksList';
import AddTaskButton from './components/add-task-button/AddTaskButton';

import { elementsFocusHelper } from './helpers/element-focus.helper'; 
import { tasksHelper } from './helpers/tasks.helper';
import { keyboardHelper } from './helpers/keyboard.helper';

export default {
  name: 'App',
  components: {
    TasksList,
    AddTaskButton
  },
  created() {
    keyboardHelper.startObserve();
    keyboardHelper.onEnter$.subscribe(() => {
      this.onNewTask();
    });
    keyboardHelper.onEscape$.subscribe(() => {
      if (elementsFocusHelper.focusedTaskId) {
        elementsFocusHelper.looseFocus();
        return;
      }
      if (tasksHelper.selectedTask) {
        tasksHelper.selectedTask = null;
      }
    });
    keyboardHelper.onArrowUp$.subscribe(() => {
      tasksHelper.selectUpperTask();
      elementsFocusHelper.looseFocus();
    });
    keyboardHelper.onArrowDown$.subscribe(() => {
      tasksHelper.selectLowerTask();
      elementsFocusHelper.looseFocus();
    });
    keyboardHelper.onSpace$.subscribe(() => {
      if (elementsFocusHelper._focusedTaskId) {
        return;
      }

      const selectedTask = tasksHelper.getSelectedTask();

      if (selectedTask) {
        elementsFocusHelper.setFocusOnEditor(selectedTask.id);
      }
    });
    keyboardHelper.onDelete$.subscribe(() => {
      const selectedTask = tasksHelper.getSelectedTask();

      if (selectedTask) {
        tasksHelper.deleteTask(selectedTask.id);
        tasksHelper.refresh();
      }
    });
    keyboardHelper.onTab$.subscribe(() => {
      const selectedTask = tasksHelper.getSelectedTask();

      if (selectedTask) {
        elementsFocusHelper.focusNext(selectedTask.id);
      }
    });
  },
  unmounted() {
    keyboardHelper.stopObserve();
  },
  methods: {
    onNewTask() {
      const newTaskId = tasksHelper.addNewTask();
      tasksHelper.refresh();
      elementsFocusHelper.setFocusOnEditor(newTaskId);

      const task = tasksHelper.getTaskById(newTaskId);
      tasksHelper.selectedTask = task; 
    }
  }
}
</script>

<style>
/* Global variables */
:root {
  font-size: x-large;
  --background-color: white;
  --background-color--hover: #DDDDDD;
  --focus-color: #239D72;
  --focus-color--light: #9CADBC;
  --focus-speed: 20ms;
  --main-color--active: #88c588;
  --main-color--hover: #00B17B;
  --main-color--inactive: #d2d7e0;
  --transition-speed: 200ms;
  --text-color: #1b1b1b;
  --text-color--light: #f2f2f2ff;
  --text-color--not-important: #B7B5CF;
  --text-color--not-important-light: #c9c9c9;
  --text-font--regular: Arial;
  --text-size--regular: 1rem;
}

/* Global */
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

html, body, main {
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
}

/* Scroll */
::-webkit-scrollbar {
  width: 0.25rem;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1c1;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--main-color--active);
}

/* Components */
.task-list {
  position: absolute;
  top: 0;
  bottom: 4rem;
  left: 0;
  right: 0;
  flex-grow: 1;
}

.add-task-btn {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  justify-content: flex-end;
}
</style>
