import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <StyledP>Todolist</StyledP>
      <StyledP>TypeScript ver.</StyledP>
    </StyledHeader>
  );
}

const StyledHeader = styled.div``;
const StyledP = styled.p``;
