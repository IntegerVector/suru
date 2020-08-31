<template>
  <article class="task-item-container">
    <input
      class="status-checkbox"
      title="set task as done"
      type="checkbox"
      id="status"/>
    <span
      class="task-text"
      v-bind:title="text">
      {{ text }}
    </span>
    <button
      title="delete task"
      class="delete-button">
      🗑
    </button>
  </article>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    id: Number,
    text: String
  }
}
</script>

<style scoped>
input, button, .task-item-container {
  cursor: pointer;
}

.task-item-container {
  padding: 0.5rem;
  display: flex;
  align-items: center;
  border-radius: 8px;
}

.task-item-container:hover {
  background-color: #eeeeee;
  transition: 400ms;
}

.task-item-container:active {
  background-color: #d4d4d4;
}

.status-checkbox, .delete-button {
  flex-grow: 0;
  margin: 0 0.5rem 0 0.5rem;
}

.status-checkbox {
  width: 1rem;
  height: 1rem;
}

.status-checkbox:hover {
  border: 2px solid #b8a8ff;
}

.task-text {
  flex-grow: 1;
  text-align: left;
  overflow: hidden;
}

.delete-button {
  font-size: x-large;
  background-color: transparent;
  border: 0 solid transparent;
  outline: none;
  vertical-align: middle;
}
</style>
