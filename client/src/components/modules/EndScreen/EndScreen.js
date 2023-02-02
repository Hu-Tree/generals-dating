import React, { useState } from "react";

import "../../../utilities.css";
import "./EndScreen.css";

const EndScreen = ({ enabled, ending, finalStats, resetFunc }) => {
  const endInfo = {
    lonely: {
      title: "Jobless... for only a couple of years",
      blurb:
        "You didn't get any job offers...for this semester. When you graduate, you end up getting a job regardless. Putting that UIT degree to work, after all.",
    },
    cooking: {
      title: "Ascension to Cookingdom",
      blurb:
        "You have ascended to cookingdom with how much you have cooked. All mortal worries wash away.",
    },
    yay1: {
      title: "Ungulatory Innovation",
      blurb:
        "You have proved your worth, and can now ungulate with the best of them! May your days be filled with discovery and cute catgirls.",
    },
    yay2: {
      title: "Unlimited Investments",
      blurb:
        "You have achieved true stonks. Infinite growth, capped only by the size of your limitless ambition, you join JP sailing the seas of gold.",
    },
    yay3: {
      title: "Unified Interests",
      blurb:
        "You have secured a spot in one of the most prestigious national defense companies available. They seem cool, and you're well taken care of, but at what cost?",
    },
    yay4: {
      title: "Undefeatable Intern",
      blurb:
        "You have a solid start to your career as a software developer. Some may wonder if having a tsundere for a boss is all it's cracked up to be, though.",
    },
  };
  if (!enabled) {
    return <></>;
  }
  return (
    <div className="endScreenContainer">
      <h1>Ending: {endInfo[ending].title}</h1>
      <p>{endInfo[ending].blurb}</p>
      <h3>Final Statistics</h3>
      <ul>
        <li>Energy: {finalStats.energy}</li>
        <li>Technical Skills: {finalStats.technical}</li>
        <li>Networking Skills: {finalStats.networking}</li>
        <li>Presentation Skills: {finalStats.presentation}</li>
        <li>Cooking Skills: {finalStats.cooking}</li>
        <li>Ed G Tonne Affection: {finalStats.reputation1}</li>
        <li>JP Silverbags Affection: {finalStats.reputation2}</li>
        <li>Martin L Ray Affection: {finalStats.reputation3}</li>
        <li>Sylvia Besk Affection: {finalStats.reputation4}</li>
      </ul>
      <div>
        <button onClick={resetFunc}>Submit To Leaderboards and Start New Game!</button>
      </div>
    </div>
  );
};

export default EndScreen;
