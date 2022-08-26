import React, { useEffect, useState } from "react";

export interface ISmallTazu {
  img: string;
}

const SmallTazu: React.FC<ISmallTazu> = ({ img }) => {
  return (
    <React.Fragment>
      <img className="animate__animated animate__bounce"
        width={40}
        src={img}
      />
    </React.Fragment>
  );
};

export default SmallTazu;
