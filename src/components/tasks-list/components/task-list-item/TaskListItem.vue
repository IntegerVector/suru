<template>
  <div class="task-list-item">
    <Checkbox
      class="task-list-item__checkbox"
      v-model="taskStatus">
    </Checkbox>
    <EditableText
      class="task-list-item__text"
      v-model="taskText">
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
    isDone: Boolean,
    text: String
  },
  data() {
    return {
      taskStatus: this.isDone,
      taskText: this.text
    };
  },
  methods: {
    onDeleted() {
      console.log('D');
    }
  }
}
</script>

<style scoped>
.task-list-item {
  margin: 0.25rem 1rem 0.25rem 1rem;
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
