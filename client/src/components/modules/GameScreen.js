import React, { useState } from "react";

import "../../utilities.css";
import "./GameScreen.css";
import ScheduleScreen from "./Scheduling/ScheduleScreen";
import DialogueScreen from "./Dialogue/DialogueScreen";
import StatsScreen from "./Stats/StatsScreen";

const GameScreen = (props) => {
  const [stats, setStats] = useState({
    technical: 0,
    presentation: 0,
    cooking: 0,
    networking: 0,
    stat5: 0,
    energy: 10,
    health: 10,
    currentTime: 2,
    reputation1: 0,
    reputation2: 0,
    reputation3: 0,
    reputation4: 0,
  });
  const EVENTS = {
    sleep: {
      name: "sleep",
      scriptName: "idfk",
      sideEffects: () => {
        setStats((prevStats) => {
          prevStats.energy += 5;
          prevStats.health += 3;
          prevStats.currentTime += 1;
          return prevStats;
        });
      },
      eventDisplay: {
        availableTimes: "111111111111111111111111",
        name: "Sleep",
        description: "ZZZ\n+5 energy, +3 health",
        limit: 12,
        cssClass: "purple",
      },
    },
    cook: {
      name: "cook",
      scriptName: "idfk",
      sideEffects: () => {
        setStats((prevStats) => {
          prevStats.cooking += 1;
          prevStats.energy -= 1;
          prevStats.health += 3;
          prevStats.currentTime += 1;
          return prevStats;
        });
      },
      eventDisplay: {
        availableTimes: "001111001111001111001111",
        name: "Cook!",
        description: "I hope it's edible...\n-1 energy, +3 health",
        limit: 8,
        cssClass: "orange",
      },
    },
    date_e1: {
      name: "career fair",
      scriptName: "idfk",
      sideEffects: () => {
        setStats((prevStats) => {
          prevStats.currentTime += 1;
          return prevStats;
        });
      },
      eventDisplay: {
        availableTimes: "000000000100000000000000",
        name: "Career Fair",
        description: "I wonder if I'll meet anyone interesting...?",
        limit: 1,
        cssClass: "important",
      },
    },
    empty: {
      name: "empty",
      scriptName: "idfk",
      sideEffects: () => {
        setStats((prevStats) => {
          prevStats.currentTime += 1;
          return prevStats;
        });
      },
      eventDisplay: {
        availableTimes: "000000000000000000000000",
        name: "",
        description: "",
        limit: 0,
        cssClass: "empty",
      },
    },
  };

  return (
    <>
      <DialogueScreen />
      <ScheduleScreen stats={stats} EVENTS={EVENTS} />
      <StatsScreen stats={stats} />
    </>
  );
};

export default GameScreen;
