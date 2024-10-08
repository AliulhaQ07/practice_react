import React from "react";
import image from "/src/assets/Islamic.png";
import image2 from "/src/assets/pex.jpg";

// created profile functional-Component to render image and return it in main Avatar Component

// passing props to the function. || default prop to size if no value given by parent the default image size will be
// 100px
function Profile({ person, size = 100 }) {
  return (
    <img
      /* tailwindcss styling */
      className="profile rounded"
      src={person.image}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

const Avatar = () => {
  return (
    <>
      {/*<div>*/}
      {/*  /!* RETURNING THE Profile image here and rendering in another component *!/*/}
      {/*  <Profile />*/}
      {/*</div>*/}

      {/*EXAMPLE OF PROPS || using one Profile component as many times as I want */}
      <div>
        <div className="mb-3">
          <Profile person={{ name: "Props Name", image: image2 }} size={300} />
        </div>

        <div className="rounded">
          <Profile person={{ name: "image ", image: image }} size={300} />
        </div>
      </div>
    </>
  );
};
export default Avatar;
