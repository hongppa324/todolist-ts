import shortid from "shortid";

// action value
const ADD_TODO = "ADD_TODO" as const;
const REMOVE_TODO = "REMOVE_TODO" as const;
const SWITCH_TODO = "SWITCH_TODO" as const;

// action creator
type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof removeTodo>
  | ReturnType<typeof switchTodo>;

export const addTodo = (payload: Todo) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const removeTodo = (payload: string) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

export const switchTodo = (payload: string) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

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

// reducers
const todos = (state: Todos = initialState, action: TodosAction) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((item) => item.id !== action.payload);
    case SWITCH_TODO:
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });

    default:
      return state;
  }
};

export default todos;
