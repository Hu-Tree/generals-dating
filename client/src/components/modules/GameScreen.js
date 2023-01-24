import React from "react";

import "../../utilities.css";
import "./GameScreen.css";
import ScheduleScreen from "./Scheduling/ScheduleScreen";
import DialogueScreen from "./Dialogue/DialogueScreen";
import StatsScreen from "./Stats/StatsScreen";

const GameScreen = (props) => {
  return (
    <>
      <DialogueScreen />
      <ScheduleScreen />
      <StatsScreen />
    </>
  );
};

export default GameScreen;
