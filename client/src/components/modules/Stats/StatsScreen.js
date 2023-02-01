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
        Stats:
        <ul>
          {Object.keys(props.stats).map((property) => {
            return (
              <li>
                {property}: {props.stats[property]}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default StatsScreen;
