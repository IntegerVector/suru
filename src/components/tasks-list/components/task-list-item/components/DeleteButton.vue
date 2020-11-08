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
  justify-content: center;
  align-items: center;
  width: 1.4rem;
  height: 1.4rem;
  user-select: none;
}

.delete-button__button {
  max-width: 1.4rem;
  max-height: 1.4rem;
  min-width: 1.4rem;
  min-height: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  border: 0 solid transparent;
  border-radius: 0.2rem;
  transition: background-color var(--transition-speed),
    border var(--transition-speed);
  background-color: transparent;
  outline: none;
  user-select: none;
}

.delete-button__button:focus {
  border: 0.2rem solid #DB545F;
}

.delete-button__button:focus, .delete-button__button:hover {
  background-color: #EEA3A3;
}
</style>
