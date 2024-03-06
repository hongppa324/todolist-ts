import "./App.css";
import GlobalStyle from "./GlobalStyles";
import Router from "./shared/Router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "./redux/modules/todosSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
