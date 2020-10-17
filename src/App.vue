<template>
  <main>
    <TasksList
      class="task-list"
      v-model="tasks"
      @update:modelValue="onChange">
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
    document.onkeyup = ($event) => {
      const key = $event.key;
      const code = $event.code;
      
      if (code === 'Enter' && key === code) {
        this.onNewTask();
      }
    }
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
      }, 50);
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
