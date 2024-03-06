import styled from "styled-components";

type Props = {
  id: string;
  label: string;
  placeholder: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function LabeledInput({
  id,
  label,
  placeholder,
  value,
  onChange,
}: Props) {
  return (
    <>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

const StyledInput = styled.input``;
const StyledLabel = styled.label``;
