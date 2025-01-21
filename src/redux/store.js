import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appReducer from './features/appSlice';

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['app']
};

export const rootReducer = combineReducers({
  app: appReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export function setupStore (preloadedState) {
  return configureStore({
    reducer: persistedReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
        ]
      }
    }).concat(thunk),
    // eslint-disable-next-line no-undef
    devTools: process.env.NODE_ENV !== 'production'
  });
}
