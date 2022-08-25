import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  height: 90%;
  margin: 26px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 24px;
  background-image: url('https://img.freepik.com/vetores-gratis/parede-brilhante-versus-fundo-da-tela_1017-32315.jpg?w=2000');
  background-repeat: no-repeat;
  opacity: 1;
  background-position: center;
`;
export const ValueContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 24px;
  font-size: 30px;
  background-color: #14152c;
  width: 400px;
  border-radius: 100px;
  margin: 10px;
`;
export const ValueContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const KazuCircle = styled.div`
  display: flex;

  width: 160px;
  height: 160px;
  border-radius: 80px;

  cursor: pointer;

  margin-right: 40px;

  background-color: beige;
  img{
    width: 160px;
    height: 160px;
    border-radius: 80px;

  }
`;
