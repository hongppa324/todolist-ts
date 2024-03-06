import styled from "styled-components";
import { useSelector } from "react-redux";
import Todo from "../Todo/Todo";
import { RootState } from "../../redux/config/configStore";

type Props = {
  isActive: boolean;
};

export default function TodoList({ isActive }: Props) {
  const todos = useSelector((state: RootState) => state.todos);

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
