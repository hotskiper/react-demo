import { call, put, take, select, delay } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import { getFiles } from './apis';

export function* getTextFlow() {
  while(true){
    try{
      yield take(actionTypes.GET_TEXT);
      // yield delay(3000);
      const res = yield call(getFiles);
      console.log(res);
      yield put({
        type: actionTypes.GET_TEXT,
        data: JSON.stringify(res)
      });
    }catch(err){
      throw(err);
    }
  }
}