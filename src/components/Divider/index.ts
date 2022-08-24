import styled from "styled-components";

const Divider = styled.div`
  height: 1px;
  width: 100%;

  background-color: ${(props) => props.theme.blur.white};
`;

export default Divider;
