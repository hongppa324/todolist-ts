import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}
interface TodoState {
  todos: Todo[];
  isLoading: boolean;
  isError: boolean;
  error: any;
}

// initial state
const initialState: TodoState = {
  todos: [],
  isLoading: true,
  isError: false,
  error: null,
};

const JSON_SERVER_BASE_URL = "http://localhost:3001/todos";

// Thunk 함수
export const __getTodos = createAsyncThunk<Todo[]>(
  "getTodos",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(JSON_SERVER_BASE_URL);
      thunkAPI.dispatch(__getTodos());
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addTodo = createAsyncThunk<Todo[], {}>(
  "addTodo",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(JSON_SERVER_BASE_URL, payload);
      thunkAPI.dispatch(__getTodos());
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  }
);

export const __removeTodo = createAsyncThunk<Todo[], string>(
  "removeTodo",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.delete(`${JSON_SERVER_BASE_URL}/${payload}`);
      thunkAPI.dispatch(__getTodos());
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  }
);

export const __switchTodo = createAsyncThunk<
  Todo,
  { id: string; isDone: boolean }
>("switchTodo", async (payload, thunkAPI) => {
  try {
    const response = await axios.patch(
      `${JSON_SERVER_BASE_URL}/${payload.id}`,
      {
        isDone: !payload.isDone,
      }
    );
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    console.log("error", error);
    throw error;
  }
});

// createSlice
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getTodos.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__getTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.todos = action.payload;
    });
    builder.addCase(__getTodos.rejected, (state, action) => {
      console.log("rejected", action);
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    builder.addCase(__addTodo.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__addTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(__addTodo.rejected, (state, action) => {
      console.log("rejected", action);
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    builder.addCase(__removeTodo.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__removeTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(__removeTodo.rejected, (state, action) => {
      console.log("rejected", action);
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    builder.addCase(__switchTodo.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__switchTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(__switchTodo.rejected, (state, action) => {
      console.log("rejected", action);
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
