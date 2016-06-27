import * as actType from './action-types';
import {combineReducers} from 'redux';

const initialState = {
  loadingApi: false,
  running: false,
  parsing: false,
  compiling: false,
  executing: false,
  pausing: false,
  runtimeApi: undefined,
  ast: undefined,
  bytecode: undefined,
  result: undefined
};

function loadApi(state = initialState, action) {
  switch (action.type) {
    case actType.START_LOAD_RUNTIME:
      return Object.assign({}, state, {loadingApi: true});
    case actType.FINISH_LOAD_RUNTIME:
      return Object.assign({}, state, {loadingApi: false, runtimeApi: action.payload});
    case actType.FAIL_LOAD_RUNTIME:
      return Object.assign({}, state, {loadingApi: false});
    default:
      return state;
  }
}

function runCode(state = initialState, action) {
  switch (action.type) {
    case actType.START_PARSE:
      return Object.assign({}, state, {parsing: true, running: true});
    case actType.FINISH_PARSE:
      return Object.assign({}, state, {parsing: false, ast: action.payload});
    case actType.FAIL_PARSE:
      return Object.assign({}, state, {parsing: false});
    case actType.START_COMPILE:
      return Object.assign({}, state, {compiling: true});
    case actType.FINISH_COMPILE:
      return Object.assign({}, state, {compiling: false, bytecode: action.payload});
    case actType.FAIL_COMPILE:
      return Object.assign({}, state, {compiling: false, running: false});
    case actType.START_EXECUTE:
      return Object.assign({}, state, {executing: true});
    case actType.FINISH_EXECUTE:
      return Object.assign({}, state, {executing: false, result: action.payload});
    case actType.FAIL_EXECUTE:
      return Object.assign({}, state, {executing: false, running: false});
    case actType.STOP_RUN:
      return Object.assign({}, state, {compiling: false, executing: false, running: false});
    case actType.PAUSE_RUN:
      return Object.assign({}, state, {pausing: true});
    case actType.CLEAR_STATE:
      return Object.assign({}, initialState);
    default:
      return state;
  }
}

const pyretReducer = combineReducers({
  loadApi,
  runCode
});

export default pyretReducer;
