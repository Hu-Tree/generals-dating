import React, { useEffect, useState } from "react";

import "../../utilities.css";
import "./GameScreen.css";
import ScheduleScreen from "./Scheduling/ScheduleScreen";
import DialogueScreen from "./Dialogue/DialogueScreen";
import StatsScreen from "./Stats/StatsScreen";
import { multiTestInteraction, ResettiTestySpaghetti } from "./Dialogue/Script.js";
import { get, post } from "../../utilities.js";

const GameScreen = (props) => {
  const RESETSTATS = {
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
  };

  const [stats, setStats] = useState(RESETSTATS);

  const [activeScreen, setActiveScreen] = useState("dialogue");
  const [statsActive, setStatsActive] = useState(false);
  const [activeScene, setActiveScene] = useState(multiTestInteraction);
  const [flag, setFlag] = useState(-100);

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

  useEffect(() => {
    if (props.userId) {
      get("/api/save", {}).then((save) => {
        const { __v, _id, user_id, name, ...stats } = save[0];
        setStats(stats);
      });
    }
  }, [props.userId]);

  return (
    <>
      <div className="gameScreenWrapper">
        <div className="tabButtonContainer">
          <button
            onClick={() => {
              setStatsActive(false);
            }}
          >
            Game
          </button>
          <button
            onClick={() => {
              setStatsActive(true);
            }}
          >
            Stats
          </button>
        </div>
        <div className="gameScreen">
          <DialogueScreen
            enabled={activeScreen === "dialogue" && !statsActive}
            Scene={activeScene}
            setStats={setStats}
            stats={stats}
            cleanup={() => {
              setActiveScreen("schedule");
            }}
            Flag={flag}
          />
          <ScheduleScreen
            enabled={activeScreen === "schedule" && !statsActive}
            stats={stats}
            EVENTS={EVENTS}
          />
          <StatsScreen enabled={statsActive} stats={stats} />
        </div>

        {props.userId ? (
          <div>
            <button
              className="saveButton"
              onClick={() => {
                post("/api/save", stats).then(() => {
                  alert("Your data has been saved!");
                });
              }}
            >
              Save!
            </button>

            <button
              className="saveButton"
              onClick={() => {
                post("/api/save", RESETSTATS).then(() => {
                  alert("Your data has been reset!");
                });
                //post save but reset for testing purposes
                setStats(RESETSTATS);
              }}
            >
              Reset!
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
export default GameScreen;
