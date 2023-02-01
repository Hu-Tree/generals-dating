import React from "react";

import "../../utilities.css";
import "./GamePage.css";

import GameScreen from "../modules/GameScreen";

const GamePage = (props) => {
  return (
    <>
      <div className="gameWrapper">
        <div className="instructionWrapper">
          Tutorial: <br />
          <ul>
            <li>
              Hit the "Play Current Event!" button to play the highlighted event and move forward in
              time!
            </li>
            <li>
              After the dialogue completes, you can change the schedule by selecting an event from
              the right, and placing it in a valid location (indicated by the faint outlines).
            </li>
            <li>
              You can view your stats by hitting the stats tab. Make sure to train to impress your
              job prospects!
            </li>
            <li>Also make sure to keep track of your energy...</li>
          </ul>
        </div>
        <GameScreen userId={props.userId} />
      </div>
    </>
  );
};

export default GamePage;
