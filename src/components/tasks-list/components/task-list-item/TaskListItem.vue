<template>
  <div class="task-list-item">
    <Checkbox
      class="task-list-item__checkbox"
      v-model="taskStatus"
      @update:modelValue="onChange">
    </Checkbox>
    <EditableText
      class="task-list-item__text"
      v-model="taskText"
      @update:modelValue="onChange">
    </EditableText>
    <DeleteButton
      class="task-list-item__delete-button"
      @deleted="onDeleted">
    </DeleteButton>
  </div>
</template>

<script>
import Checkbox from './components/Checkbox';
import EditableText from './components/EditableText';
import DeleteButton from './components/DeleteButton';

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
      taskText: this.task.text
    };
  },
  methods: {
    onChange() {
      this.$emit('change', {
        id: this.task.id,
        text: this.taskText,
        done: this.taskStatus
      });
    },
    onDeleted() {
      this.$emit('delete', this.task.id);
    }
  }
}
</script>

<style scoped>
.task-list-item {
  margin: 0.25rem 0.5rem 0.25rem 1rem;
  display: flex;
  align-items: center;
}

.task-list-item__checkbox {
  margin-right: 0.5rem;
}

.task-list-item__text {
  flex-grow: 1;
  text-align: start;
}
</style>
