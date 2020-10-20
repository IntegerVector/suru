<template>
  <section class="tasks-list">
    <ul class="tasks-list__list">
      <li
        class="tasks-list__item"
        :class="getStateClass(task.id)"
        v-for="task in tasks"
        :key="task.id">
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

export default {
  name: 'TasksList',
  components: {
    TaskListItem
  },
  props: {
    modelValue: {
      type: Array,
      default: function() {
        return [];
      }
    },
    hoveredItemId: Number
  },
  data() {
    return {
      tasks: this.modelValue,
    }
  },
  methods: {
    getStateClass(taskId) {
      return this.hoveredItemId === taskId
        ? 'tasks-list__item--hover'
        : '';
    },
    onChange($event) {
      const taskId = $event.id === undefined
        ? -1
        : $event.id;

      this.tasks = this.tasks.map(task => {
        return task.id === taskId
          ? {
              id: task.id,
              text: $event.text,
              done: $event.done
            }
          : task;
      });

      this.emitChanges();
    },
    onDelete($event) {
      const taskId = $event;

      if (taskId === undefined) {
        return;
      }

      const taskIndex = this.tasks.findIndex(task => {
        return task.id === taskId;
      });

      if (taskIndex === -1) {
        return;
      }

      this.tasks.splice(taskIndex, 1);
      this.emitChanges();
    },
    emitChanges() {
      this.$emit('update:modelValue', this.tasks);
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

.tasks-list__item:hover, .tasks-list__item--hover {
  box-shadow: 0 0 0.2rem -0.1rem rgba(0,0,0,0.6);
}
</style>
