import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeTodo, switchTodo } from "../../redux/modules/todos";
import { ReactNode } from "react";

type TodoType = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  todo: TodoType;
  isActive: boolean;
};

export default function Todo({ todo, isActive }: Props) {
  const dispatch = useDispatch();

  const switchHandler = () => dispatch(switchTodo(todo.id));
  const removeHandler = () => dispatch(removeTodo(todo.id));
  return (
    <StyledDiv>
      <StyledTitle>{todo.title}</StyledTitle>
      <StyledContent>{todo.content}</StyledContent>
      <TodoButton onClick={switchHandler}>
        {isActive ? "완료" : "취소"}
      </TodoButton>
      <TodoButton onClick={removeHandler}>삭제</TodoButton>
    </StyledDiv>
  );
}

const StyledDiv = styled.div``;
const StyledTitle = styled.p``;
const StyledContent = styled.p``;
const TodoButton = styled.button``;
