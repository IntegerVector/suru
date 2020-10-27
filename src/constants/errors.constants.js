export const ErrorConstants = {
  INVALID_TYPE_NUMBER: new Error('Invalid value type, should be "Number"'),
  INVALID_TYPE_STRING: new Error('Invalid value type, should be "String"'),
  INVALID_TYPE_BOOLEAN: new Error('Invalid value type, should be "Boolean"'),
  INVALID_TYPE_FUNCTION: new Error('Invalid value type, should be "Function"'),
  INVALID_TYPE_OBJECT: new Error('Invalid value type, should be "Object"'),
  INVALID_TYPE_ARRAY: new Error('Invalid value type, should be "Array"'),
  LOCAL_STORAGE_NOT_FOUND: new Error('Local storage not available on this browser'),
  DATA_PARSING_ERROR: new Error('Error while parsing data from local storage'),
  CONFIGS_LOADING_ERROR: new Error('Error while loading application configs'),
  TASK_INVALID_ID: new Error('Any task should has id, and it should be "Number"'),
  TASK_NOT_FOUND: new Error('Task with specified index or id not found')
}
