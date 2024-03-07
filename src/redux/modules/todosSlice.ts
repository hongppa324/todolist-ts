import shortid from "shortid";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../types/global.d";

// initial state
export type Todos = Todo[];

const initialState: Todo[] = [];

// createSlice
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      return action.payload;
    },
    addTodo: (state, action: PayloadAction<Omit<Todo, "id">>) => {
      state.push({ id: shortid.generate(), ...action.payload });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.id !== action.payload);
    },
    switchTodo: (state, action: PayloadAction<string>) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    },
  },
});

export const { setTodos, addTodo, removeTodo, switchTodo } = todosSlice.actions;
export default todosSlice.reducer;
