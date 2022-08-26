import React, { useState, useEffect } from "react";
import { HandPic } from "../../assets";
import {
  HandContainer,
  HandImage
} from "./styles";

interface IKazu {
  animationState?: string;
  setAnimationState?: React.Dispatch<React.SetStateAction<string>>;
}

const Hand: React.FC<IKazu> = ({
  animationState = '',
  setAnimationState,
}) => {

  useEffect(() => {
    if (animationState !== '' && setAnimationState) {
      setTimeout(() => {
        setAnimationState('');
      }, 1450);
    }
  }, [animationState]);

  return (
    <HandContainer animation={animationState}>
      <HandImage src={HandPic} />
    </HandContainer>
  );
};

export default Hand;
