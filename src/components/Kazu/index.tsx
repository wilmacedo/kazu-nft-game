import React, { useState, useEffect } from "react";
import { Backside, Kazu1 } from "../../assets";
import {
  BackSide, Container, FrontSide, KazuSides,
} from "./styles";

interface IKazu {
  frontImage?: string;
  defaultSide?: boolean;
  animationState?: string;
  setAnimationState: React.Dispatch<React.SetStateAction<string>>;
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
      if (animationState !== '') {
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
          <img src={frontImage} />
        </FrontSide>
        <BackSide>
          <img src={Backside} />
        </BackSide>
      </KazuSides>
    </Container>
  );
};

export default Kazu;
