export function saveTasks(tasks) {
  checkForLocalStorage();
  const ls = window.localStorage;

  const tasksAsString = JSON.stringify(tasks);
  ls.setItem('suru:tasks-storage', tasksAsString);
}

export function loadTasks() {
  checkForLocalStorage();
  const ls = window.localStorage;

  const tasksAsString = ls.getItem('suru:tasks-storage');
  try {
    return JSON.parse(tasksAsString) || [];
  }
  catch(err) {
    return [];
  }
}

function checkForLocalStorage() {
  if (!window.localStorage) {
    throw new Error('Local storage not available on this browser');
  }
}
