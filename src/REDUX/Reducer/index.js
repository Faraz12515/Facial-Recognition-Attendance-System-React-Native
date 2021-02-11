import {combineReducers} from 'redux';
import Reducer from './Reducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
  root: Reducer,
  auth: AuthReducer,
});
