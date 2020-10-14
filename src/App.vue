<template>
  <main class="app">
    <TasksList
      class="app__task-list"
      v-model="mockData.tasks">
    </TasksList>
    <AddTaskButton
      class="app__add-task-btn">
    </AddTaskButton>
  </main>
</template>

<script>
import TasksList from './components/tasks-list/TasksList';
import AddTaskButton from './components/add-task-button/AddTaskButton';

export default {
  name: 'App',
  components: {
    TasksList,
    AddTaskButton
  },
  data() {
    return {
      mockData: {
        tasks: [
          {
            id: 1,
            text: 'Task №1',
            done: true
          },
          {
            id: 2,
            text: 'Task №2',
            done: true
          },
          {
            id: 3,
            text: 'Task №3',
            done: false
          },
          {
            id: 4,
            text: 'Task №4',
            done: false
          },
          {
            id: 5,
            text: 'Task №5',
            done: false
          }
        ]
      }
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
  --main-color--hover: #88c588;
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

.app__add-task-btn {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
}
</style>
