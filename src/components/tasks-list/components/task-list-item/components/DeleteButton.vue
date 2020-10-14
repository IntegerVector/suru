<template>
  <div class="delete-button">
   <button
      title="delete task"
      class="delete-button__button"
      @click="$emit('deleted')">
      ✕
    </button>
  </div>
</template>

<script>
export default {
  name: 'DeleteButton',
  emits: {
    deleted: Function
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
  width: 1.5rem;
  height: 1.5rem;
  font-size: xx-large;
  user-select: none;
  cursor: pointer;
  border: 0 solid transparent;
  border-radius: 0.2rem;
  transition: background-color var(--transition-speed),
    color var(--transition-speed);
  background-color: transparent;
  color: #474747;
  outline: none;
  user-select: none;
}

.delete-button__button:focus, .delete-button__button:hover {
  background-color: #fc4242;
  color: white;
}
</style>
