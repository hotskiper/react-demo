import {combineReducers} from 'redux';
import * as actionTypes from './actionTypes';

const getText = (state = '', action = {}) => {
  switch(action.type) {
    case actionTypes.GET_TEXT:
      return action.data || 'hhh';
      // return 'hhhhhh';
    default:
      return state;
  }
}

const setSidebarCollapse = (state = false, action = {}) => {
  switch (action.type) {
    case actionTypes.SET_SIDEBAR_COLLAPSE:
      return action.payload.data;
    default:
      return state;
  }
}

export default combineReducers({
  text: getText,
  siderCollapse: setSidebarCollapse
});