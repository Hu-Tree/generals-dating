import React, { useEffect } from "react";

import "../../utilities.css";
import "./GamePage.css";

import GameScreen from "../modules/GameScreen";

/**
 *
 * @param {Function} statPasser passes stats up another layer
 * @returns
 */
const GamePage = (props) => {
  const [data, setData] = useState("");

  const childToParent = (stats) => {
    setData(stats);
  };

  useEffect(() => {
    props.statPasser(data);
  }, [data]);

  return (
    <div className="gameWrapper">
      <GameScreen statpasser={childToParent} />
    </div>
  );
};

export default GamePage;
