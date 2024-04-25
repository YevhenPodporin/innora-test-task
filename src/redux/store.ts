import { combineReducers, configureStore } from "@reduxjs/toolkit";
import TodoListSlice from './reducers/TodoListSlice';

const rootReducer = combineReducers({
  TodoListSlice,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

  export type RootState = ReturnType<typeof rootReducer>
  export type AppStore = ReturnType<typeof setupStore>
  export type AppDispatch = AppStore['dispatch']