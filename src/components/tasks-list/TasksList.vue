<template>
  <section class="tasks-list">
    <ul class="tasks-list__list">
      <li
        class="tasks-list__item"
        :class="getStateClass(task.id)"
        v-for="task in tasks"
        :key="task.id"
        @mouseenter="onMouseover(task)">
        <TaskListItem
          :task="task"
          @change="onChange($event)"
          @delete="onDelete($event)">
        </TaskListItem>
      </li>
    </ul>
  </section>
</template>

<script>
import TaskListItem from './components/task-list-item/TaskListItem';

import { tasksHelper } from '../../helpers/tasks.helper';

export default {
  name: 'TasksList',
  components: {
    TaskListItem
  },
  data() {
    return {
      tasks: tasksHelper.getAllTasks(),
      selectedTask: tasksHelper.getSelectedTask()
    }
  },
  created() {
    tasksHelper.tasks.subscribe(tasks => {
      this.tasks = tasks;
    });
    tasksHelper.selectedTask.subscribe(task => {
      this.selectedTask = task;
    });
  },
  methods: {
    getStateClass(taskId) {
      return this.selectedTask && this.selectedTask.id === taskId
        ? 'tasks-list__item--hover'
        : '';
    },
    onChange($event) {
      tasksHelper.editTask($event);
      tasksHelper.refresh();
    },
    onDelete($event) {
      tasksHelper.deleteTask($event);
      tasksHelper.refresh();
    },
    onMouseover($event) {
      tasksHelper.selectedTask = $event;
    }
  }
}
</script>

<style scoped>
ul, li {
  list-style-type: none;
}

.tasks-list__list {
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100%;
}

.tasks-list__item--hover {
  box-shadow: 0 0 0.2rem -0.1rem rgba(0,0,0,0.6);
}
</style>
