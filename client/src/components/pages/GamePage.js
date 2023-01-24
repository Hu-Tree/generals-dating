import React from "react";

import "../../utilities.css";
import "./GamePage.css";

import GameScreen from "../modules/GameScreen";

const GamePage = (props) => {
  return (
    <div className="gameWrapper">
      <GameScreen userId={props.userId} />
    </div>
  );
};

export default GamePage;
