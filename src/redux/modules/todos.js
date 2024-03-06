import shortid from "shortid";

// action value
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

// action creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

// initial state
const initialState = [
  {
    id: shortid.generate(),
    title: "타입스크립트 공부하기",
    contents: "cookbook 영상 3회 반복",
    isDone: true,
  },
  {
    id: shortid.generate(),
    title: "리액트 쿼리 공부하기",
    contents: "개념 정리하기",
    isDone: true,
  },
  {
    id: shortid.generate(),
    title: "RTK 공부하기",
    contents: "개념정리하기",
    isDone: false,
  },
];

// reducers
const todos = (state = initialState, action) => {
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
