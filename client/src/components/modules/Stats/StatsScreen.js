import React from "react";

import "../../../utilities.css";
import "./StatsScreen.css";

// const [stats, setStats] = useState({
//   technical: 0,
//   presentation: 0,
//   cooking: 0,
//   networking: 0,
//   stat5: 0,
//   energy: 10,
//   health: 10,
//   currentTime: 2,
//   reputation1: 0,
//   reputation2: 0,
//   reputation3: 0,
//   reputation4: 0,
// });

const StatsScreen = (props) => {
  if (!props.enabled) {
    return <></>;
  }

  return (
    <>
      <div>
        <h1 className="statsHeader">Stats!</h1>
        <ul>
          <li>Energy: {props.stats.energy}</li>
          <li>Technical Skills: {props.stats.technical}</li>
          <li>Networking Skills: {props.stats.networking}</li>
          <li>Presentation Skills: {props.stats.presentation}</li>
          <li>Cooking Skills: {props.stats.cooking}</li>
          <li>Ed G Tonne Affection: {props.stats.reputation1}</li>
          <li>JP Silverbags Affection: {props.stats.reputation2}</li>
          <li>Martin L Ray Affection: {props.stats.reputation3}</li>
          <li>Sylvia Besk Affection: {props.stats.reputation4}</li>
        </ul>
      </div>
    </>
  );
};

export default StatsScreen;
