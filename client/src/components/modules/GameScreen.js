import React, { useEffect, useState } from "react";

import "../../utilities.css";
import "./GameScreen.css";
import ScheduleScreen from "./Scheduling/ScheduleScreen";
import DialogueScreen from "./Dialogue/DialogueScreen";
import StatsScreen from "./Stats/StatsScreen";
import {
  multiTestInteraction,
  ResettiTestySpaghetti,
  clickthroughTest,
} from "./Dialogue/Script.js";
import { get, post } from "../../utilities.js";
import EndScreen from "./EndScreen/EndScreen";

const GameScreen = (props) => {
  const EVENTS = {
    weblab: {
      sideEffects: () => {
        setActiveScreen("dialogue");
        setFlag(stats.currentTime);

        setStats((prevStats) => {
          return {
            ...prevStats,
            currentTime: prevStats.currentTime + 1,
            energy: prevStats.energy + 5,
          };
        });

        console.log("weblab");
      },
      eventDisplay: {
        availableTimes: "111111111111111111111111".split(""),
        name: "Sleep",
        description: "ZZZ\n+5 energy",
        limit: 12,
        cssClass: "purple",
      },
    },
    sleep: {
      name: "sleep",
      scriptName: "idfk",
      sideEffects: () => {
        setActiveScreen("dialogue");
        setFlag(stats.currentTime);

        setStats((prevStats) => {
          return {
            ...prevStats,
            currentTime: prevStats.currentTime + 1,
            energy: prevStats.energy + 5,
          };
        });
        console.log("sleep");
        setScene(clickthroughTest);
      },
      eventDisplay: {
        availableTimes:
          "111111111111111111111111111111111111111111111111111111111111111111111111".split(""),
        name: "Sleep",
        description: "ZZZ\n+5 energy",
        limit: 12,
        cssClass: "purple",
      },
    },
    cook: {
      name: "cook",
      scriptName: "idfk",
      sideEffects: () => {
        setActiveScreen("dialogue");
        setFlag(stats.currentTime);

        setStats((prevStats) => {
          return {
            ...prevStats,
            currentTime: prevStats.currentTime + 1,
            cooking: prevStats.cooking + 1,
            energy: prevStats.energy - 1,
          };
        });
        console.log("cook");
        setScene(ResettiTestySpaghetti);
      },
      eventDisplay: {
        availableTimes:
          "001111001111001111001111001111001111001111001111001111001111001111001110".split(""),
        name: "Cook!",
        description: "Energize yourself with cooking!\nI hope it's edible...",
        limit: 8,
        cssClass: "orange",
      },
    },
    date_e1: {
      name: "career fair",
      scriptName: "idfk",
      sideEffects: () => {
        setActiveScreen("dialogue");
        setFlag(stats.currentTime);

        setStats((prevStats) => {
          return { ...prevStats, currentTime: prevStats.currentTime + 1 };
        });
        console.log("career fair");
        setScene(multiTestInteraction);
      },
      eventDisplay: {
        availableTimes:
          "000000000100000000000000000000000000000000000000000000000000000000000000".split(""),
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

        console.log("empty");
      },
      eventDisplay: {
        availableTimes:
          "000000000000000000000000000000000000000000000000000000000000000000000000".split(""),
        name: "",
        description: "",
        limit: 0,
        cssClass: "empty",
      },
    },
    finale: {
      name: "finale",
      scriptName: "idfk",
      sideEffects: () => {
        setActiveScreen("dialogue");
        setFlag(stats.currentTime);

        setStats((prevStats) => {
          return { ...prevStats, currentTime: prevStats.currentTime + 1 };
        });

        console.log("finale");
        setScene(multiTestInteraction);
      },
      eventDisplay: {
        availableTimes:
          "000000000000000000000000000000000000000000000000000000000000000000000001".split(""),
        name: "Job Applications",
        description: "Do you have the skills and relationship to get a job?",
        limit: 0,
        cssClass: "important",
      },
    },
  };

  const RESETSTATS = {
    technical: 0,
    presentation: 0,
    cooking: 0,
    networking: 0,
    energy: 10,
    currentTime: 0,
    reputation1: 0,
    reputation2: 0,
    reputation3: 0,
    reputation4: 0,
  };

  const [stats, setStats] = useState(RESETSTATS);
  const [activeScreen, setActiveScreen] = useState("schedule");
  const [isStatsScreenActive, setIsStatsScreenActive] = useState(false);
  const [scene, setScene] = useState(multiTestInteraction);
  const [flag, setFlag] = useState(-100);
  const [ending, setEnding] = useState("lonely");
  const [resetAllToggle, setResetAllToggle] = useState(false);

  const runEnding = () => {
    //TOCHANGE
    if (stats.cooking > 2) {
      setEnding("cooking");
    } else {
      setEnding("lonely");
    }
    setActiveScreen("end");
  };

  const resetFunc = async () => {
    await post("/api/endingStats", stats);
    await post("/api/save", RESETSTATS);

    //reset everything
    setStats(RESETSTATS);
    setActiveScreen("schedule");
    setIsStatsScreenActive(false);
    setScene(multiTestInteraction);
    setFlag(-100);
    setResetAllToggle(!resetAllToggle);
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
              setIsStatsScreenActive(false);
            }}
          >
            Game
          </button>
          <button
            onClick={() => {
              setIsStatsScreenActive(true);
            }}
          >
            Stats
          </button>
        </div>
        <div className="gameScreen">
          <DialogueScreen
            enabled={activeScreen === "dialogue" && !isStatsScreenActive}
            Scene={scene}
            setStats={setStats}
            stats={stats}
            cleanup={async () => {
              if (stats.currentTime !== RESETSTATS.currentTime && stats.currentTime < 5) {
                //TOCHANGE
                await post("/api/save", stats);
              }

              if (stats.currentTime >= 5) {
                runEnding();
              } else {
                setActiveScreen("schedule");
              }
            }}
            Flag={flag}
          />
          <ScheduleScreen
            enabled={activeScreen === "schedule" && !isStatsScreenActive}
            stats={stats}
            EVENTS={EVENTS}
            reset={resetAllToggle}
          />
          <EndScreen
            enabled={activeScreen === "end" && !isStatsScreenActive}
            ending={ending}
            finalStats={stats}
            resetFunc={resetFunc}
          />
          <StatsScreen enabled={isStatsScreenActive} stats={stats} />
          {props.userId ? (
            <></>
          ) : (
            <div>
              <div className="disableScreen">
                <div className="angry">
                  <div>You must login to play!</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* {props.userId ? (
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
        )} */}
      </div>
    </>
  );
};
export default GameScreen;
