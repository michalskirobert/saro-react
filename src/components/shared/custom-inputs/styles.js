import styled from "styled-components";

export const Input = styled.input`
  border: 1.5px solid ${(props) => (props.invalid ? "red" : "#c4c4c4")};
`;
