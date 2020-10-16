const USER_DATA_ITEM = 'suru:tasks-storage';
const SURU_CONFIG_ITEM = 'suru:configs';

export function saveTasks(tasks) {
  const ls = getLocalStorage();

  const tasksAsString = JSON.stringify(tasks);
  ls.setItem(USER_DATA_ITEM, tasksAsString);
}

export function loadTasks() {
  const ls = getLocalStorage();

  const tasksAsString = ls.getItem(USER_DATA_ITEM);
  try {
    return JSON.parse(tasksAsString) || [];
  }
  catch(err) {
    return [];
  }
}

export function getNewId() {
  const configs = getConfigs();

  const lastId = !configs || configs.lastId === undefined
    ? 1
    : configs.lastId;

  setConfigs({
    ...configs,
    lastId: lastId + 1
  });

  return lastId;
}

function getConfigs() {
  const ls = getLocalStorage();

  const configsString = ls.getItem(SURU_CONFIG_ITEM);

  try {
    return JSON.parse(configsString);
  }
  catch (err) {
    return {};
  }
}

function setConfigs(configs) {
  const ls = getLocalStorage();

  const configsString = JSON.stringify(configs);
  ls.setItem(SURU_CONFIG_ITEM, configsString);
}

function getLocalStorage() {
  if (!window.localStorage) {
    throw new Error('Local storage not available on this browser');
  } else {
    return window.localStorage;
  }
}
