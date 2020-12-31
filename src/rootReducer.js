import { combineReducers } from 'redux';
import home from './containers/home/reducers';
import page1 from './containers/login/reducers';

export default combineReducers({
  home,
  page1
});
