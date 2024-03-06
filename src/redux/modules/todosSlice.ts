import shortid from "shortid";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "http://localhost:3001";

// initial state
export type Todo = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

export type Todos = Todo[];

const initialState: Todo[] = [];

// 비동기함수
export const fetchTodos = () => async (dispatch) => {
  try {
    const response = await axios.get(`${apiUrl}/todos`);
    dispatch(setTodos(response.data));
  } catch (error) {
    console.error("데이터를 불러오지 못 했습니다", error);
  }
};

export const addTodos = (newTodo: Omit<Todo, "id">) => async (dispatch) => {
  try {
    const response = await axios.post(apiUrl, {
      ...newTodo,
      id: shortid.generate(),
    });
    dispatch(addTodo(response.data));
  } catch (error) {
    console.log("목록을 추가하는 데에 오류가 생겼습니다", error);
  }
};

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
