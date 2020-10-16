<template>
  <main class="app">
    <TasksList
      class="app__task-list"
      v-model="tasks"
      @update:modelValue="onChange">
    </TasksList>
    <div class="app__add-task-container">
      <AddTaskButton
        class="app__add-task-btn"
        @clicked="onNewTask">
      </AddTaskButton>
    </div>
  </main>
</template>

<script>
import TasksList from './components/tasks-list/TasksList';
import AddTaskButton from './components/add-task-button/AddTaskButton';
import { loadTasks, saveTasks, getNewId } from './helpers/local-storage.helper'; 

export default {
  name: 'App',
  components: {
    TasksList,
    AddTaskButton
  },
  data() {
    return {
      tasks: []
    }
  },
  created() {
    this.tasks = loadTasks();
  },
  methods: {
    onChange() {
      saveTasks(this.tasks);
    },
    onNewTask() {
      const newId = getNewId();
      this.tasks.push({
        id: newId,
        text: '',
        done: false
      });

      this.setFocusOnNewTask(newId);
    },
    setFocusOnNewTask(taskId) {
      setTimeout(() => {
        const addedTask = document.getElementById('task_id_' + taskId);
        const textInput = addedTask.getElementsByClassName('editable-text__input')[0];
        textInput.focus();
      }, 100);
    }
  }
}
</script>

<style>
:root {
  font-size: x-large;
  background-color: white;
  --focus-color: #008000;
  --focus-speed: 20ms;
  --main-color--active: #88c588;
  --main-color--hover: #5faf5f;
  --main-color--inactive: #dddddd;
  --transition-speed: 200ms;
  --text-color: #1b1b1b;
  --text-color--light: #fcfcfc;
  --text-font--regular: Arial;
  --text-size--regular: 1rem;
}

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
}

.app {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.app__task-list {
  flex-grow: 1;
}

.app__add-task-container {
  margin: 1rem;
  display: flex;
  justify-content: flex-end;
}
</style>
