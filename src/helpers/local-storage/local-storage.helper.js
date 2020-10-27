import { SURU_CONFIG_ITEM, USER_DATA_ITEM } from './local-storage.constants';
import { ErrorConstants } from '../../constants/errors.constants';

export class LocalStorageHelper {
  _localStorage = null;
  _configs = {};

  constructor() {
    this._init();
  }

  saveData(data) {
    if (!Array.isArray(data)) {
      throw ErrorConstants.INVALID_TYPE_ARRAY;
    }

    const dataAsString = JSON.stringify(data);
    this._localStorage.setItem(USER_DATA_ITEM, dataAsString);
  }

  loadData() {
    const dataAsString = this._localStorage.getItem(USER_DATA_ITEM);
    try {
      return JSON.parse(dataAsString) || [];
    }
    catch(err) {
      throw ErrorConstants.DATA_PARSING_ERROR;
    }
  }

  setConfig(key, value) {
    if (typeof key !== 'string') {
      throw ErrorConstants.INVALID_TYPE_STRING;
    }

    if (typeof value !== 'string') {
      throw ErrorConstants.INVALID_TYPE_STRING;
    }

    this._configs[key] = value;
    this._saveConfigs();
  }

  getConfig(key) {
    if (typeof key !== 'string') {
      throw ErrorConstants.INVALID_TYPE_STRING;
    }

    return this._configs[key];
  }

  _init() {
    if (!window.localStorage) {
      throw ErrorConstants.LOCAL_STORAGE_NOT_FOUND;
    } else {
      this._localStorage = window.localStorage;
      this._loadConfigs();
    }
  }

  _loadConfigs() {
    const configsString = this._localStorage.getItem(SURU_CONFIG_ITEM);
    try {
      if (configsString && configsString !== 'undefined') {
        this._configs = JSON.parse(configsString);
      } else {
        this._configs = {};
      }
    } catch (err) {
      console.log(err);
      throw ErrorConstants.CONFIGS_LOADING_ERROR;
    }
  }

  _saveConfigs() {
    const configsString = JSON.stringify(this._configs);
    this._localStorage.setItem(SURU_CONFIG_ITEM, configsString);
  }
}

export const localStorageHelper = new LocalStorageHelper();
