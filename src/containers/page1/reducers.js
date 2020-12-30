import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes';

const getText = (state = '', action = {}) => {
  switch (action.type) {
    case actionTypes.GET_TEXT2:
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({
  getText: getText,
});
