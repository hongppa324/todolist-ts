import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <StyledP>Nbcamp</StyledP>
      <StyledP>Todolist</StyledP>
    </StyledHeader>
  );
}

const StyledHeader = styled.div``;
const StyledP = styled.p``;
