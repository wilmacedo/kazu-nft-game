import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import {
  CardConteiner,
  Container,
  ScoreboardContainer,
  FlipContainer,
  Flipper,
  Front,
  Back,
} from "./styles";
import hand from "../../assets/hand.png";

export interface ISmallTazu {
  img: string;
}

const SmallTazu: React.FC<ISmallTazu> = ({ img }) => {
  return (
    <React.Fragment>
      <img
        width={20}
        src={img}
      />
    </React.Fragment>
  );
};

export default SmallTazu;
