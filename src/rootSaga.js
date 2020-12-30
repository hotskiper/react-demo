import { fork } from 'redux-saga/effects';
import * as home from './containers/home/sagas';

export default function* rootSaga(){
  yield fork(home.getTextFlow);
}