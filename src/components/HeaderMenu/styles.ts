import { darken, transparentize } from "polished";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
display: flex;
flex: 1;
background-color: #14152c;

`
export const ContainerButton = styled.div`
width: 300px;
margin: 5px;
`
export const ContainerHeader = styled.div`
width: 100%;
display: flex;
flex: 1;
padding-right: 10px;
justify-content: space-between;
img{
    margin: 10px;
}

`
export const ConteinerTickets = styled.div`
font-size: 20px;
margin: 10px;
color: ${(props) => props.theme.white};
min-width: 10rem;
display: flex;
align-items: center;
justify-content: space-between;
`
export const LogoutButton = styled.div`
  width: 5rem;
  border-radius: 13px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) =>
    transparentize(0.75, darken(0.05, props.theme.primary))};
  border: 1rem;

  cursor: ${(props) => "pointer"};
  transition: 0.3s ease;

  span {
    color: ${(props) => props.theme.primary};
    font-size: 1rem;
  }

  &:hover {
    background-color: ${(props) =>
      transparentize(0.65, darken(0.05, props.theme.primary))};
  }
`;

export const DivLink = styled.div`
display: flex;
align-items: center;
`

export const SLink= styled(Link)`
    color: ${(props)=>props.theme.white};
    &:hover {
        color: ${(props) =>
            transparentize(0.65, darken(0.05, props.theme.primary))};
    }
`