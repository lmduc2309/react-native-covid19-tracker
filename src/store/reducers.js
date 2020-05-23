import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import HomeReducer from '../components/Home/home.reducers';

const reducers = combineReducers({
    HomeReducer,
  });
  
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: []
  };
  
  const persistedReducer = persistReducer(persistConfig, reducers);
  export default persistedReducer;
  