import React from "react";
import image from "/src/assets/Islamic.png";

const Card = () => {
  return (
    <>
      <div className="border border-2 p-2">
        <img src={image} alt="idk" height={250} width={250} />
      </div>
    </>
  );
};
export default Card;
