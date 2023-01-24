import React, { useState, useEffect } from "react";
import { get } from "../../utilities.js";

import "../../utilities.css";
import "./Leaderboard.css";

const Leaderboard = (props) => {
  const [bestList, setBestList] = useState([{ name: "NaN", cooking: NaN }]);

  useEffect(() => {
    get("/api/leaderboard-profiles", {
      property: "cooking",
    }).then((result) => {
      console.log(result);
      setBestList(result);
    });
  }, []);

  return (
    <>
      <div className="leaderboardContainer">
        <div className="leaderboard">
          <div>
            <h1>Best Cook!</h1>
          </div>
          {bestList.map((value, index) => {
            return (
              <div className={"u-flex u-flex-alignCenter SingleMessage-container"}>
                <span className=" SingleMessage-sender u-bold">{value.name + ":"}</span>
                <span className="SingleMessage-content">{value.cooking}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
