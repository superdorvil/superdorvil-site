import {
  SET_APP_MODE,
  SET_PROJECT_MODE,
} from '../types';
import {STATES} from '../../../src/constants';

const initialState = {
  appMode: STATES.appMode.home,
  projectMode: STATES.projectMode.lavaNFT,
};

const modeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APP_MODE:
      return {
        ...state,
        appMode: action.payload,
      };
      break;

    case SET_PROJECT_MODE:
      return {
        ...state,
        projectMode: action.payload,
      };
      break;

    default:
      return state;
  }
};

export default modeReducer;
