import React from "react";
import Avatar from "../propsComponents/Avatar.jsx";
import Card from "./Card.jsx";
import Cards from "../propsComponents/Cards.jsx";

const Main = () => {
  return (
    <>
      <div className="h-screen flex items-start p-6 gap-4">
        {/*<Avatar />*/}
        {/*<Card />*/}
        <Cards />
      </div>
    </>
  );
};
export default Main;
