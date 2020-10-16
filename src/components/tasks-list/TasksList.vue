<template>
  <section class="tasks-list">
    <ul class="tasks-list__list">
      <li
        class="tasks-list__item"
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
    }
  },
  data() {
    return {
      tasks: this.modelValue
    }
  },
  methods: {
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

.tasks-list {
  width: 100%;
  height: 100%;
}

.tasks-list__list {
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.tasks-list__item:hover {
  border-bottom: 1px solid #eeeeee;
}
</style>
