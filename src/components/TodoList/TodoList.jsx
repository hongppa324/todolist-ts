import styled from "styled-components";
import { useSelector } from "react-redux";
import Todo from "../Todo/Todo";

export default function TodoList({ isActive }) {
  const todos = useSelector((state) => state.todos);

  return (
    <StyledDiv>
      <StyledTodoListHeader>
        {isActive ? "해야 할 일" : "완료할 일"}
      </StyledTodoListHeader>
      <StyledTodoListBox>
        {todos
          .filter((item) => item.isDone === !isActive)
          .map((item) => {
            return <Todo key={item.id} todo={item} isActive={isActive} />;
          })}
      </StyledTodoListBox>
    </StyledDiv>
  );
}

const StyledDiv = styled.div``;
const StyledTodoListHeader = styled.h3``;
const StyledTodoListBox = styled.div``;
