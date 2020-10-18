<template>
  <div class="delete-button">
   <button
      title="delete task"
      class="delete-button__button"
      @click="$emit('deleted')">
      <img src="/icons/delete.svg" alt="delete task">
    </button>
  </div>
</template>

<script>
export default {
  name: 'DeleteButton',
  emits: {
    deleted: null
  }
}
</script>

<style scoped>
.delete-button {
  display: flex;
  align-items: center;
  justify-content: center;
}

.delete-button__button {
  min-width: 1rem;
  min-height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: xx-large;
  user-select: none;
  cursor: pointer;
  border: 0.2rem solid transparent;
  border-radius: 0.2rem;
  transition: background-color var(--transition-speed),
    color var(--transition-speed);
  background-color: transparent;
  color: #474747;
  outline: none;
  user-select: none;
}

.delete-button__button:focus, .delete-button__button:hover {
  background-color: #EEA3A3;
  border: 0.2rem solid #DB545F;
  color: white;
}
</style>
