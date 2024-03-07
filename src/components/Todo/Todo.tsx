import styled from "styled-components";
import { __removeTodo, __switchTodo } from "../../redux/modules/todosSlice";
import { useAppDispatch } from "../../redux/config/configStore";
import { Todo } from "../../types/global.d";

type Props = {
  todo: Todo;
  isActive: boolean;
};

export default function Todo({ todo, isActive }: Props) {
  const dispatch = useAppDispatch();

  const removeHandler =
    (id: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
      dispatch(__removeTodo(id));
    };

  const switchHandler =
    (id: string, isDone: boolean) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      dispatch(__switchTodo({ id, isDone }));
    };

  return (
    <StyledDiv>
      <StyledTitle>{todo.title}</StyledTitle>
      <StyledContent>{todo.content}</StyledContent>
      <TodoButton onClick={switchHandler(todo.id, !isActive)}>
        {isActive ? "완료" : "취소"}
      </TodoButton>
      <TodoButton onClick={removeHandler(todo.id)}>삭제</TodoButton>
    </StyledDiv>
  );
}

const StyledDiv = styled.div``;
const StyledTitle = styled.p``;
const StyledContent = styled.p``;
const TodoButton = styled.button``;
