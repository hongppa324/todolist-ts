import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/todosSlice";

// export type RootState = ReturnType<typeof rootReducer>;

// // create rootReducer
// const rootReducer = combineReducers({
//   todos,
// });

// create store
const store = configureStore{
  reducer: {todos: todos}
}

export default store;
