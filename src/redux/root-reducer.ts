import { combineReducers } from 'redux';
import { persistReducer, PersistConfig } from 'redux-persist';
import { taskReducer } from './task/task.reducer';
import storage from 'redux-persist/lib/storage';
// import { History } from 'history';
import { TodoInterface } from '../interfaces';

const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage,
  whitelist: ['task'],
};

export interface RootState {
  todos: TodoInterface[];
}

const rootReducer = combineReducers({
  task: taskReducer,
});

export default persistReducer(persistConfig, rootReducer);
