import React from "react";
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${(props) => (props.primary ? "blue" : "gray")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => (props.primary ? "darkblue" : "darkgray")};
  }
`;

function Button({ primary, children }) {
    return <StyledButton primary={primary}>{children}</StyledButton>
}

export default Button
