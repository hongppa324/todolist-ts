import "./App.css";
import GlobalStyle from "./GlobalStyles";
import Router from "./shared/Router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { fetchTodos } from "./redux/modules/todosSlice";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       await dispatch(fetchTodos());
  //     } catch (error) {
  //       console.error("데이터를 불러오지 못 했습니다", error);
  //     }
  //   };
  //   fetchData();
  // }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
