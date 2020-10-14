<template>
  <section
    class="add-task-section-container"
    title="Add task button"
    @click="$emit('clicked')">
    + New task
  </section>
</template>

<script>
export default {
  name: 'AddTaskButton',
  emits: {
    clicked: null
  }
}
</script>

<style scoped>
.add-task-section-container{
  padding: 0.5rem 1rem 0.5rem 1rem;
  display: flex;
  cursor: pointer;
  align-items: center;
  font-size: x-large;
  user-select: none;
  outline: none;
  color: white;
  border-radius: 5rem;
  border: 1px solid transparent;
  background-color: var(--main-color--active);
  box-shadow: 0 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.8);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  transition: background-color var(--transition-speed);
}

.add-task-section-container:hover {
  background-color: var(--main-color--hover);
}

.add-task-section-container:active {
  background-color: var(--main-color--active);
}
</style>
