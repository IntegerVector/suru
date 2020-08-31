<template>
  <section class="tasks-section-container">
    <ul class="tasks-list">
      <li
        class="tasks-item"
        v-for="task in tasks"
        v-bind:key="task.id">
        <TaskItem
          v-bind:id="task.id"
          v-bind:text="task.text">
        </TaskItem>
      </li>
    </ul>
  </section>
</template>

<script>
import TaskItem from './TaskItem';
export default {
  name: 'TasksList',
  props: {
    tasks: Array
  },
  components: {
    TaskItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
}

li {
  display: inline-block;
}

.tasks-section-container {
  padding: 0.5rem;
}

.tasks-list {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.tasks-item {
  padding: 0.25rem;
}
</style>
