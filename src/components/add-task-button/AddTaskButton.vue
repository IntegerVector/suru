<template>
  <section
    class="add-task-section-container"
    title="Add task button"
    @click="$emit('clicked')">
    <img
      src="/icons/plus.svg"
      alt="+"
      class="add-task-section-container__icon">
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
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  outline: none;
  color: var(--text-color--light);
  border-radius: 50%;
  border: 1px solid transparent;
  background-color: var(--main-color--active);
  box-shadow: 0 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  transition: background-color var(--transition-speed);
}

.add-task-section-container:hover {
  background-color: var(--main-color--hover);
}

.add-task-section-container:active {
  background-color: var(--main-color--active);
}

.add-task-section-container__icon {
  width: 1rem;
  height: 1rem;;
}
</style>
