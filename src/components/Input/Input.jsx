import { useState } from "react";
import shortid from "shortid";
import styled from "styled-components";
import { addTodo } from "../../redux/modules/todos";
import { useDispatch, useSelector } from "react-redux";

export default function Input() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  const onSubmitHandler = (event) => {
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
const LabeledInput = styled.input``;
const StyledButton = styled.button``;
