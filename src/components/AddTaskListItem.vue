<template>
  <section class="add-task-section-container">
    ＋
  </section>
</template>

<script>
export default {
  name: 'AddTaskListItem'
}
</script>

<style scoped>
.add-task-section-container{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  user-select: none;
  outline: none;
  color: white;
  border-radius: 50%;
  border: 1px solid transparent;
  border-radius: 50%;
  background-color: #568bff;
  box-shadow: 0 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.8);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  cursor: pointer;
}

.add-task-section-container:hover {
  background-color: #3e6bff;
  transition: 400ms;
}

.add-task-section-container:active {
  background-color: #0000ff;
}
</style>
