import * as actionType from './actionTypes';

export const getText = (data) => ({
  type: actionType.GET_TEXT,
  data
});

export const setSidebarCollapse = (data) => ({
  type: actionType.SET_SIDEBAR_COLLAPSE,
  payload:{
    data
  }
});