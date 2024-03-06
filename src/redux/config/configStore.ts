import { createStore, combineReducers } from "redux";
import todos from "../modules/todos";

export type RootState = ReturnType<typeof rootReducer>;

// create rootReducer
const rootReducer = combineReducers({
  todos,
});

// create store
const store = createStore(rootReducer);

export default store;
