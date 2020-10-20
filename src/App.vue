<template>
  <main>
    <TasksList
      class="task-list"
      v-model="tasks"
      :hoveredItemId="hoveredItemId"
      @update:modelValue="onChange">
    </TasksList>
    <AddTaskButton
      class="add-task-btn"
      @clicked="onNewTask">
    </AddTaskButton>
  </main>
</template>

<script>
import TasksList from './components/tasks-list/TasksList';
import AddTaskButton from './components/add-task-button/AddTaskButton';
import { loadTasks, saveTasks, getNewId } from './helpers/local-storage.helper';
import { setFocusOnNewTask } from './helpers/element-focus.helper'; 

export default {
  name: 'App',
  components: {
    TasksList,
    AddTaskButton
  },
  data() {
    return {
      tasks: [],
      hoveredItemId: null
    }
  },
  created() {
    this.tasks = loadTasks();
    document.onkeyup = ($event) => {
      const key = $event.key;
      const code = $event.code;
      
      if (code === 'Enter' && key === code) {
        this.onNewTask();
      }
      if (code === 'ArrowUp' && key === code) {
        this.onArrowUp();
      }
      if (code === 'ArrowDown' && key === code) {
        this.onArrowDown();
      }
    }
  },
  methods: {
    onChange() {
      saveTasks(this.tasks);
    },
    onNewTask() {
      const newId = getNewId();
      this.tasks.push({
        id: newId,
        text: '',
        done: false
      });

      setFocusOnNewTask(newId);
    },
    onArrowUp(){
      this.hoverNextItem('up');
    },
    onArrowDown() {
      this.hoverNextItem('down');
    },
    hoverNextItem(direction){
      if (!this.tasks.length) {
        return;
      }

      if (!this.hoveredItemId) {
        this.hoveredItemId = this.tasks[0].id;
      } else {
        const itemIndex = this.tasks.findIndex(task => {
          return task.id === this.hoveredItemId;
        });
        if (itemIndex !== -1) {
          const nextItemIndex = direction === 'up'
            ? itemIndex - 1
            : itemIndex + 1;
          const nextItem = this.tasks[nextItemIndex];
          this.hoveredItemId = nextItem && nextItem.id ? nextItem.id : this.hoveredItemId;
        }
      }
    }
  }
}
</script>

<style>
/* Global variables */
:root {
  font-size: x-large;
  --background-color: white;
  --background-color--hover: #DDDDDD;
  --focus-color: #239D72;
  --focus-color--light: #9CADBC;
  --focus-speed: 20ms;
  --main-color--active: #88c588;
  --main-color--hover: #00B17B;
  --main-color--inactive: #d2d7e0;
  --transition-speed: 200ms;
  --text-color: #1b1b1b;
  --text-color--light: #f2f2f2ff;
  --text-font--regular: Arial;
  --text-size--regular: 1rem;
}

/* Global */
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

html, body, main {
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
}

/* Scroll */
::-webkit-scrollbar {
  width: 0.25rem;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1c1;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--main-color--active);
}

/* Components */
.task-list {
  position: absolute;
  top: 0;
  bottom: 4rem;
  left: 0;
  right: 0;
  flex-grow: 1;
}

.add-task-btn {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  justify-content: flex-end;
}
</style>
