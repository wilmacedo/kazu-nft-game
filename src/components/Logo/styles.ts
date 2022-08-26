import styled from "styled-components";

export const Wrapper = styled.span`
  font-family: 'DynaPuff', cursive;
  font-size: 46px;
  color: ${(props) => props.theme.primary};

  user-select: none;
`;