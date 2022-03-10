import store from '../store';
import {
  SET_APP_MODE,
  SET_PROJECT_MODE,
} from '../types';

export function setAppMode(payload) {
  return {
    type: SET_APP_MODE,
    payload
  };
};

export function setProjectMode(payload) {
  return {
    type: SET_PROJECT_MODE,
    payload
  };
};
