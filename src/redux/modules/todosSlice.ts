import shortid from "shortid";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// initial state
export type Todo = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

export type Todos = Todo[];

const initialState: Todo[] = [
  {
    id: shortid.generate(),
    title: "타입스크립트 공부하기",
    content: "cookbook 영상 3회 반복",
    isDone: true,
  },
  {
    id: shortid.generate(),
    title: "리액트 쿼리 공부하기",
    content: "개념 정리하기",
    isDone: true,
  },
  {
    id: shortid.generate(),
    title: "RTK 공부하기",
    content: "개념정리하기",
    isDone: false,
  },
];

// createSlice
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
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

export const { addTodo, removeTodo, switchTodo } = todosSlice.actions;
export default todosSlice.reducer;
