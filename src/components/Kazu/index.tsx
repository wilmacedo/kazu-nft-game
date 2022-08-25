import React, { useState } from "react";
import { Backside, Kazu1 } from "../../assets";
import {
  BackSide, Container, FrontSide, KazuSides,
} from "./styles";

interface IKazu {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  onConfirm?: Function;
}

const Kazu: React.FC<IKazu> = ({
  setOpen,
  onConfirm,
}) => {
  const [x, setX] = useState(0);

  const handle = () => {
    if (x < 3) {
      setX(x+1);
    } else {
      setX(0);
    }

    // if (x === 2) {
    //   setX(3);
    // } else {
    //   setX(2);
    // }
  }

  return (
    <Container>
      <button style={{ width: '40px', height: '40px' }} onClick={handle}/>
      <span>{x}</span>
      <KazuSides anim={x}>
        <FrontSide>
          <img src={Kazu1} />
        </FrontSide>
        <BackSide>
          <img src={Backside} />
        </BackSide>
      </KazuSides>
    </Container>
  );
};

export default Kazu;
