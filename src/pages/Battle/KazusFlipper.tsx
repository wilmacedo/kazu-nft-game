import React, { useEffect, useState } from "react";
import Kazu from "../../components/Kazu";
import { Kazu as IKazu } from "../../types";

export interface IKazusFlipper {
  kazus: IKazu[];
}

const KazusFlipper: React.FC<IKazusFlipper> = ({ kazus }) => {
  return (
    <React.Fragment>
      {kazus.map((item, index) => (

        <Kazu key={index} frontImage={item.img} defaultSide={false} animationState="bb" />

      ))}
    </React.Fragment>
  );
};

export default KazusFlipper;
