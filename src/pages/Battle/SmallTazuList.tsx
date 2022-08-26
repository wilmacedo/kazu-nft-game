import React from "react";
import SmallTazu, { ISmallTazu } from "./SmallTazu";

export interface ISmallTazuList {
  images: ISmallTazu[];
}

const SmallTazuList: React.FC<ISmallTazuList> = ({ images }) => {
  return (
    <React.Fragment>
      {images.map((image, index) => {
        return (
          <div key={index}>
            <SmallTazu img={image.img} />
          </div>
        )
      })}
    </React.Fragment>
  );
};

export default SmallTazuList;
