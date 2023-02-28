import {configureStore} from '@reduxjs/toolkit';
import toDoListReducer from './toDoListSlice';

const reducer = {
  toDoList: toDoListReducer,
};

const store = configureStore({
  reducer: reducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
