import { lighten } from "polished";
import styled, { css } from "styled-components";

import { Container as DefaultCard } from "../../components/Card/styles";

interface IBattleKazuCard {
  selected: boolean;
}
interface IFlipContainer {
  isActive: boolean;
}

export const Container = styled.div`
  margin-top: 2rem;

  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ScoreboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;
export const RawConteiner = styled.div`
  display: flex;
  gap: 0.25rem;
`
export const ListConteiner = styled(DefaultCard)`
  padding: 1rem;
  width: 600px;
  height: 400px;
  flex-wrap: wrap;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  h1{
    font-size: 16px;
  }
`

export const CardConteiner = styled(DefaultCard)`
  padding: 1rem;
  width: 600px;
  height: 400px;
  flex-wrap: wrap;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  h1{
    font-size: 16px;
  }


  color: ${(props) => props.theme.white};
  /* .flip-container { perspective: 1000; }
  /* vira os containers frente e verso quando o mouse passa em cima */
  /* .flip-container.active .flipper, .flip-container.hover .flipper {  		
    transform: rotateY(180deg);  	
  }     */
  /* .flip-container, .front, .back {  	
    width: 320px;  	
    height: 480px;
    padding: 1rem;
  } */

  /* define a velocidade da transição */
  /* .flipper {  	
    transition: 0.6s;  	
    transform-style: preserve-3d;    	
    position: relative;  
    display: flex;
    align-items: center;
    justify-content: center;
  } */
      
  /* esconde o verso durante a animação */
  /* .front, .back {  	
    backface-visibility: hidden;    	
    position: absolute;  	
    top: 0;  	
  left: 0;  
  } */
      
  /* frente posicionada sobre o verso */
  /* .front { z-index: 2;  }     */

  /* verso inicialmente escondido */
  /* .back { transform: rotateY(180deg); } */
`;

export const FlipContainer = styled.div<IFlipContainer>`
  perspective: 1000;
  width: 320px;  	
  height: 480px;
  padding: 1rem;
  transform: ${(props) => props.isActive ? 'rotateY(180deg)' : ''};
  
`
export const Flipper = styled.div`
 transition: 0.6s;  	
    transform-style: preserve-3d;    	
    position: relative;  
    display: flex;
    align-items: center;
    justify-content: center;

`


export const Front = styled.div`
  width: 320px;  	
  height: 480px;
  padding: 1rem;
  backface-visibility: hidden;    	
  position: absolute;  	
  top: 0;  	
  left: 0;
  transform: rotateY(180deg);

`

export const Back = styled.div`
  width: 320px;  	
  height: 480px;
  padding: 1rem;
  backface-visibility: hidden;    	
  position: absolute;  	
  top: 0;  	
  left: 0;
  z-index: 2;  

`
export const BattleKazuCard = styled.div<IBattleKazuCard>`
  padding: 0.5rem 1.25rem;

  width: fit-content;

  border: 1px solid ${(props) => lighten(0.5, props.theme.blur.black)};
  border-radius: 0.5rem;

  transition: 0.3s ease;

  cursor: pointer;

  ${(props) =>
    props.selected &&
    css`
      border-color: ${(props) => lighten(0.7, props.theme.blur.black)};
    `};

  ${(props) =>
    !props.selected &&
    css`
      opacity: 0.5;
    `};

  &:hover {
    border-color: ${(props) => lighten(0.7, props.theme.blur.black)};
  }

  img {
    width: 5.5rem;
    height: auto;
  }
`;
