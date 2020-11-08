<template>
  <div
    :id="'task_id_'+task.id"
    class="task-list-item">
    <Checkbox
      class="task-list-item__checkbox"
      v-model="taskStatus"
      @update:modelValue="onChange">
    </Checkbox>
    <EditableText
      class="task-list-item__text"
      v-model="taskText"
      :taskId="task.id"
      @update:modelValue="onChange">
    </EditableText>
    <DeleteButton
      :class="getClass(task.id)"
      @deleted="onDeleted">
    </DeleteButton>
  </div>
</template>

<script>
import Checkbox from './components/Checkbox';
import EditableText from './components/EditableText';
import DeleteButton from './components/DeleteButton';

import { tasksHelper } from '../../../../helpers/tasks.helper';

export default {
  name: 'TaskListItem',
  components: {
    Checkbox,
    EditableText,
    DeleteButton
  },
  props: {
    task: Object
  },
  emits: {
    change: null,
    delete: null
  },
  data() {
    return {
      taskStatus: this.task.done,
      taskText: this.task.text,
      selectedTask: tasksHelper.getSelectedTask()
    };
  },
  created() {
    tasksHelper.selectedTask.subscribe(task => {
      this.selectedTask = task;
    });
  },
  methods: {
    getClass(taskId) {
      return this.selectedTask && this.selectedTask.id === taskId
        ? 'task-list-item__delete-button'
        : 'task-list-item__delete-button--hidden';
    },
    onChange() {
      if (!this.taskText) {
        this.onDeleted();
      } else {
        this.$emit('change', {
          id: this.task.id,
          text: this.taskText,
          done: this.taskStatus
        });
      }
    },
    onDeleted() {
      this.$emit('delete', this.task.id);
    }
  }
}
</script>

<style scoped>
.task-list-item {
  margin: 0.25rem 0.3rem 0.25rem 0.5rem;
  display: flex;
  align-items: center;
}

.task-list-item__checkbox {
  margin-right: 0.8rem;
}

.task-list-item__text {
  min-width: 2rem;
  flex-grow: 1;
  text-align: start;
}

.task-list-item__delete-button {
  visibility: visible;
  margin-left: 0.5rem; 
}

.task-list-item__delete-button--hidden {
  visibility: hidden;
}
</style>
