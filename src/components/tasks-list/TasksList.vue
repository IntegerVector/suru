<template>
  <section class="tasks-list">
    <ul class="tasks-list__list">
      <li
        class="tasks-list__item"
        v-for="task in tasks"
        :key="task.id">
        <TaskListItem
          :isDone="task.done"
          :text="task.text"
          :mode="'view'">
        </TaskListItem>
      </li>
    </ul>
  </section>
</template>

<script>
import TaskListItem from './components/task-list-item/TaskListItem';

export default {
  name: 'TasksList',
  components: {
    TaskListItem
  },
  props: {
    tasks: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}

li {
  display: inline-block;
}

.tasks-list {

}

.tasks-list__list {

}

.tasks-list__item {

}
</style>
