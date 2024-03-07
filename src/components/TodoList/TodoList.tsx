import styled from "styled-components";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Todo from "../Todo/Todo";
import { RootState } from "../../redux/config/configStore";
import { __getTodos } from "../../redux/modules/todosSlice";
import { useAppDispatch } from "../../redux/config/configStore";
import { Todo as TodoType } from "../../types/global.d";

type Props = {
  isActive: boolean;
};

export default function TodoList({ isActive }: Props) {
  const dispatch = useAppDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  return (
    <StyledDiv>
      <StyledTodoListHeader>
        {isActive ? "해야 할 일" : "완료한 일"}
      </StyledTodoListHeader>
      <StyledTodoListBox>
        {todos
          .filter((item: TodoType) => item.isDone === !isActive)
          .map((item: TodoType) => {
            return <Todo key={item.id} todo={item} isActive={isActive} />;
          })}
      </StyledTodoListBox>
    </StyledDiv>
  );
}

const StyledDiv = styled.div``;
const StyledTodoListHeader = styled.h3``;
const StyledTodoListBox = styled.div``;
