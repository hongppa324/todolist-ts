import { useState } from "react";
import shortid from "shortid";
import styled from "styled-components";
import { addTodo } from "../../redux/modules/todos";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/config/configStore";
import LabeledInput from "../common/LabeledInput";

export default function Input() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const contentChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title || !content) {
      alert("제목과 내용을 입력해주세요!");
    }

    const newTodo = {
      title,
      content,
      isDone: false,
      id: shortid.generate(),
    };

    dispatch(addTodo(newTodo));

    setTitle("");
    setContent("");
  };

  return (
    <StyledDiv>
      <form onSubmit={onSubmitHandler}>
        <LabeledInput
          id="title"
          label="제목"
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={titleChangeHandler}
        />
        <LabeledInput
          id="content"
          label="내용"
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={contentChangeHandler}
        />
        <StyledButton type="submit">제출</StyledButton>
      </form>
    </StyledDiv>
  );
}

const StyledDiv = styled.div``;
const StyledButton = styled.button``;
