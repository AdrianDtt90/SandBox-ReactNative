import { combineReducers } from 'redux';

const rootData = function (state = [], action) {
  switch (action.type) {
    case 'CHANGE_TODO':
      return Object.assign({}, state, { todos: action.payload });

    default:
      return state;
  }
}

const facebookData = function (state = [], action) {
  switch (action.type) {

    case 'SAVE_FB_DATA':
      return Object.assign({}, state, { user: action.payload });

    default:
      return state;
  }
}

const reducersApp = combineReducers({
  rootData,
  facebookData
});

export default reducersApp;