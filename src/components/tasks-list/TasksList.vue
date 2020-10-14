<template>
  <section class="tasks-list">
    <ul class="tasks-list__list">
      <li
        class="tasks-list__item"
        v-for="task in tasks"
        :key="task.id">
        <TaskListItem
          :task="task"
          @change="onChange">
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
  },
  methods: {
    onChange() {

    }
  }
}
</script>

<style scoped>
ul, li {
  list-style-type: none;
}

.tasks-list {

}

.tasks-list__list {

}

.tasks-list__item {

}
</style>
