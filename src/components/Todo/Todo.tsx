import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { removeTodo, switchTodo } from "../../redux/modules/todosSlice";
import { Todo } from "../../types/global.d";
import axios from "axios";

type Props = {
  todo: Todo;
  isActive: boolean;
};

export default function Todo({ todo, isActive }: Props) {
  const dispatch = useDispatch();

  const removeHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await axios.delete(`http://localhost:3001/todos/${todo.id}`);
    dispatch(removeTodo(todo.id));
  };

  const switchHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    await axios.patch(`http://localhost:3001/todos/${todo.id}`);
    dispatch(switchTodo(todo.id));
  };

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
