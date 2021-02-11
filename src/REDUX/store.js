import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './Reducer/index';

const persistedConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistedConfig, rootReducer);

const initialState = {};
const middleware = [thunk, logger];
const store = createStore(
  persistedReducer,
  initialState,
  compose(applyMiddleware(...middleware)),
);

const persistor = persistStore(store);

export {persistor, store};
