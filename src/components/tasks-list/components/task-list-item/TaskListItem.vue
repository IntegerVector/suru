<template>
  <div class="task-list-item">
    <Checkbox
      class="task-list-item__checkbox">
    </Checkbox>
    <EditableText
      class="task-list-item__text"
      :mode="mode"
      :text="text">
    </EditableText>
    <DeleteButton
      class="task-list-item__delete-button">
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
    isDone: {
      type: Boolean,
      default: false
    },
    text: String,
    mode: String
  }
}
</script>

<style scoped>
.task-list-item {

}

.task-list-item__checkbox {

}

.task-list-item__text {

}

.task-list-item__delete-button {
  
}
</style>
