import React, { useState } from "react";

import "../../utilities.css";
import "./GameScreen.css";
import ScheduleScreen from "./Scheduling/ScheduleScreen";
import DialogueScreen from "./Dialogue/DialogueScreen";
import StatsScreen from "./Stats/StatsScreen";
import { testInteraction, multiTestInteraction, ResettiTestySpaghetti } from "./Dialogue/Script.js";

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
  const [activeScreen, setActiveScreen] = useState("schedule");
  const [activeScene, setActiveScene] = useState();
  const [flag, setFlag] = useState(34);
  const EVENTS = {
    sleep: {
      name: "sleep",
      scriptName: "idfk",
      sideEffects: () => {
        setActiveScreen("dialogue");
        setStats((prevStats) => {
          setFlag(prevStats.currentTime);
          return {
            ...prevStats,
            currentTime: prevStats.currentTime + 1,
            health: prevStats.health + 3,
            energy: prevStats.energy + 5,
          };
        });
        setActiveScene(multiTestInteraction);
      },
      eventDisplay: {
        availableTimes: "111111111111111111111111".split(""),
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
        setActiveScreen("dialogue");
        setStats((prevStats) => {
          setFlag(prevStats.currentTime);
          return {
            ...prevStats,
            currentTime: prevStats.currentTime + 1,
            cooking: prevStats.cooking + 1,
            health: prevStats.health + 3,
            energy: prevStats.energy - 1,
          };
        });
        setActiveScene(ResettiTestySpaghetti);
      },
      eventDisplay: {
        availableTimes: "001111001111001111001111".split(""),
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
        setActiveScreen("dialogue");
        setStats((prevStats) => {
          return { ...prevStats, currentTime: prevStats.currentTime + 1 };
        });
        setActiveScene(multiTestInteraction);
      },
      eventDisplay: {
        availableTimes: "000000000100000000000000".split(""),
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
          return { ...prevStats, currentTime: prevStats.currentTime + 1 };
        });
      },
      eventDisplay: {
        availableTimes: "000000000000000000000000".split(""),
        name: "",
        description: "",
        limit: 0,
        cssClass: "empty",
      },
    },
  };

  return (
    <>
      <DialogueScreen
        enabled={activeScreen === "dialogue"}
        Scene={activeScene}
        setStats={setStats}
        stats={stats}
        cleanup={() => {
          setActiveScreen("schedule");
        }}
        Flag={flag}
      />
      <ScheduleScreen enabled={activeScreen === "schedule"} stats={stats} EVENTS={EVENTS} />
      <StatsScreen stats={stats} />
    </>
  );
};

export default GameScreen;
