import React, { useState, useEffect } from "react";
import { get } from "../../utilities";

import "../../utilities.css";
import "./Leaderboard.css";

const Leaderboard = (props) => {
  const [bestList, setBestList] = useState([
    { name: "Arthur", content: 34 },
    { name: "Bruh", content: 100 },
  ]);
  return (
    <>
      <div>-</div>
      <div>-</div>
      <div className="leaderboardContainer">
        {bestList.map((value, index) => {
          return (
            <div className={"u-flex u-flex-alignCenter SingleMessage-container"}>
              <span className=" SingleMessage-sender u-bold">{value.name + ":"}</span>
              <span className="SingleMessage-content">{value.content}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Leaderboard;
