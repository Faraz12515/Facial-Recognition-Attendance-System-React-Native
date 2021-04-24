import {combineReducers} from 'redux';
import Reducer from './Reducer';
import AuthReducer from './AuthReducer';
import ImageRedicer from './imageReducer';

export default combineReducers({
  root: Reducer,
  auth: AuthReducer,
  image: ImageRedicer,
});
