import React, { useState, useEffect } from "react";
import { Backside, Kazu1 } from "../../assets";
import {
  BackSide, Container, FrontSide, KazuSides,
} from "./styles";

interface IKazu {
  frontImage?: string;
  defaultSide?: boolean;
  animationState?: string;
  setAnimationState?: React.Dispatch<React.SetStateAction<string>>;
}

const Kazu: React.FC<IKazu> = ({
  frontImage = Kazu1,
  defaultSide = true,
  animationState = '',
  setAnimationState,
}) => {
  const [currentSide, setCurrentSide] = useState(defaultSide);

  useEffect(() => {
    setTimeout(() => {
      if (animationState !== '' && setAnimationState) {
        const side = animationState[1] === 'f'
        setCurrentSide(side);
        setAnimationState('');
      }
    }, 1400);
  }, [animationState]);

  return (
    <Container>
      <KazuSides animation={animationState} side={currentSide}>
        <FrontSide>
          <img src={frontImage} width={100} height={100} />
        </FrontSide>
        <BackSide>
          <img src={Backside} width={100} height={100} />
        </BackSide>
      </KazuSides>
    </Container>
  );
};

export default Kazu;
