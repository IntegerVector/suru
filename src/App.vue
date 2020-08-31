<template>
  <main class="main-container">
    <TasksList
      class="task-list-container"
      v-bind:tasks="mockData.tasks">
    </TasksList>
    <AddTaskListItem
      class="add-task-list-item-container">
    </AddTaskListItem>
  </main>
</template>

<script>
import TasksList from './components/TasksList.vue';
import AddTaskListItem from './components/AddTaskListItem.vue';

export default {
  name: 'App',
  components: {
    TasksList,
    AddTaskListItem
  },
  data() {
    return {
      mockData: {
        tasks: [
          {
            id: 1,
            text: 'Task №1'
          },
          {
            id: 2,
            text: 'Task №2'
          },
          {
            id: 3,
            text: 'Task №3'
          },
          {
            id: 4,
            text: 'Task №4'
          },
          {
            id: 5,
            text: 'Task №5'
          },
        ]
      }
    };
  }
}
</script>

<style>
:root {
  font-size: x-large;
  background-color: white;
}

* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

html, body, main {
  width: 100%;
  height: 100%;
}

.main-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.task-list-container {
  flex-grow: 1;
}

.add-task-list-item-container {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
}
</style>
