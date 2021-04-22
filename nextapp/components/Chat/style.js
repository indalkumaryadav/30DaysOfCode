import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.color || "green"};
  width: 150px;
  height: 60px;
  border: none;
  border-radius: 10px;
  outline: none;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.hoverColor};
  }
`;
