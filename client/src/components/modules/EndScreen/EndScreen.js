import React, { useState } from "react";

import "../../../utilities.css";
import "./EndScreen.css";

const EndScreen = ({ enabled, ending, finalStats, resetFunc }) => {
  const endInfo = {
    lonely: {
      title: "Jobless... for only a couple of years",
      blurb:
        "You didn't get any job offers...for this semester. When you graduate, you end up getting a job regardless. Putting that MIT degree to work, after all.",
    },
    cooking: {
      title: "Ascension to Cookingdom",
      blurb:
        "You have ascended to cookingdom with how much you have cooked. All mortal worries wash away.",
    },
  };
  if (!enabled) {
    return <></>;
  }
  return (
    <div>
      <h1>Ending: {endInfo[ending].title}</h1>
      <p>{endInfo[ending].blurb}</p>
      <h3>Final Statistics</h3>
      <ul>
        <li>Stats (cooking, etc)</li>
        <li>Affection Stats: </li>
        <li>Events Played: </li>
      </ul>
      {`${finalStats}`}
      <div>
        <button onClick={resetFunc}>Play Again</button>
      </div>
    </div>
  );
};

export default EndScreen;
