import {
  SET_APP_MODE,
  SET_PROJECT_MODE,
} from '../types';
import {STATES} from '../../../src/constants';

const initialState = {
  appMode: STATES.appMode.home,
  projectMode: STATES.projectMode.lavaNFT,
  appModeIndex: 0,
  projectModeIndex: 0,
};

const modeReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_APP_MODE:
      let appModeIndex = 0;
      switch (action.payload) {
        case STATES.appMode.home:
          appModeIndex = 0;
          break;
        case STATES.appMode.portfolio:
          appModeIndex = 1;
          break;
        case STATES.appMode.skills:
          appModeIndex = 2;
          break;
        case STATES.appMode.contact:
          appModeIndex = 3;
          break;
        case STATES.appMode.freedom:
          appModeIndex = 4;
          break;
        case STATES.appMode.about:
          appModeIndex = 5;
          break;
        default:
          appModeIndex = 0;
      }

      return {
        ...state,
        appMode: action.payload,
        appModeIndex,
      };
      break;

    case SET_PROJECT_MODE:
      let projectModeIndex;
      switch (action.payload) {
        case STATES.projectMode.lavaNFT:
          projectModeIndex = 0;
          break;
        case STATES.projectMode.timeIsLife:
          projectModeIndex = 1;
          break;
        case STATES.projectMode.superdorvil:
          projectModeIndex = 2;
          break;
        case STATES.projectMode.lavaDAO:
          projectModeIndex = 3;
          break;
        case STATES.projectMode.ethDAO:
          projectModeIndex = 4;
          break;
        default:
          projectModeIndex = 0;
      }

      return {
        ...state,
        projectMode: action.payload,
        projectModeIndex
      };
      break;

    default:
      return state;
  }
};

export default modeReducer;
