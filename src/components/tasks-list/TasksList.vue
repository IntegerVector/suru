<template>
  <section class="tasks-list">
    <ul class="tasks-list__list">
      <li
        class="tasks-list__item"
        v-for="task in tasks"
        :class="getStateClass(task.id)"
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
  overflow-y: auto;
  height: 100%;

  background:
    linear-gradient(white 30%, rgba(255,255,255,0)),
    linear-gradient(rgba(255,255,255,0), white 70%) 0 100%,
    radial-gradient(50% 0, farthest-side, rgba(0,0,0,.2), rgba(0,0,0,0)),
    radial-gradient(50% 100%,farthest-side, rgba(0,0,0,.2), rgba(0,0,0,0)) 0 100%;
  background:
    linear-gradient(white 30%, rgba(255,255,255,0)),
    linear-gradient(rgba(255,255,255,0), white 70%) 0 100%,    
    radial-gradient(farthest-side at 50% 0, rgba(0,0,0,.2), rgba(0,0,0,0)),
    radial-gradient(farthest-side at 50% 100%, rgba(0,0,0,.2), rgba(0,0,0,0)) 0 100%;

  background-repeat: no-repeat;
  background-color: var(--background-color);
  background-size: 100% 5rem, 100% 5rem, 100% 0.25rem, 100% 0.25rem;
  background-attachment: local, local, scroll, scroll;
}

.tasks-list__item--hover {
  box-shadow: 0 0 0.2rem -0.1rem rgba(0,0,0,0.6);
}
</style>
