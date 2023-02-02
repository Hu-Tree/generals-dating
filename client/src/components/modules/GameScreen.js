import React, { useEffect, useState } from "react";

import "../../utilities.css";
import "./GameScreen.css";
import ScheduleScreen from "./Scheduling/ScheduleScreen";
import DialogueScreen from "./Dialogue/DialogueScreen";
import StatsScreen from "./Stats/StatsScreen";
import {
  ResettiTestySpaghetti,
  clickthroughTest,
  IntroSegment,
  Martin,
} from "./Dialogue/Script.js";
import { get, post } from "../../utilities.js";
import EndScreen from "./EndScreen/EndScreen";

const GameScreen = (props) => {
  const runScript = (script) => {
    getActiveScreen("dialogue");
    setFlag(stats.currentTime);
    setScene(script);
  };

  const EVENTS = {
    weblab: {
      sideEffects: () => {
        setStats((prevStats) => {
          return {
            ...prevStats,
            currentTime: prevStats.currentTime + 1,
            energy: prevStats.energy - 5,
            technical: prevStats.technical + 1,
          };
        });

        alert("Web dev is hard...");
      },
      eventDisplay: {
        availableTimes: "010000010000010000010000",
        name: "Web Lab",
        description: "It's time to learn!",
        cssClass: "orange",
      },
    },
    trading: {
      sideEffects: () => {
        setStats((prevStats) => {
          return {
            ...prevStats,
            currentTime: prevStats.currentTime + 1,
            energy: prevStats.energy - 5,
            networking: prevStats.networking + 1,
          };
        });

        alert("I made some useful connections, hehe.");
      },
      eventDisplay: {
        availableTimes: "010000010000010000010000",
        name: "Hudson River Trading",
        description: "HRT goes brrrr",
        cssClass: "orange",
      },
    },
    sleep: {
      sideEffects: () => {
        setStats((prevStats) => {
          return {
            ...prevStats,
            currentTime: prevStats.currentTime + 1,
            energy: prevStats.energy + 5,
          };
        });

        alert("Sweet dreams!");
        //setScene(IntroSegment[1]);
      },
      eventDisplay: {
        availableTimes: "111111111111111111111111111111111111111111111111111111111111111111111111",
        name: "Sleep",
        description: "ZZZ\n+5 energy",
        cssClass: "purple",
      },
    },
    cook: {
      sideEffects: () => {
        setActiveScreen("dialogue");
        setFlag(stats.currentTime);

        setStats((prevStats) => {
          return {
            ...prevStats,
            currentTime: prevStats.currentTime + 1,
            cooking: prevStats.cooking + 1,
            energy: prevStats.energy + 2 * (prevStats.cooking + 1),
          };
        });
        alert("You cooked a meal! You feel your cooking skill improve and energy replenished.");
        //setScene("hi");
      },
      eventDisplay: {
        availableTimes: "011100111100111100111100",
        name: "Cook!",
        description: "Energize yourself with cooking!\nI hope it's edible...",
        cssClass: "purple",
      },
    },
    date_e1: {
      sideEffects: () => {
        setStats((prevStats) => {
          return { ...prevStats, currentTime: prevStats.currentTime + 1 };
        });
        runScript(IntroSegment[1]);
      },
      eventDisplay: {
        availableTimes: "10000000000000000000000000000000000000000000000000000000000000000000000",
        name: "Career Fair",
        description: "I wonder if I'll meet anyone interesting...?",
        cssClass: "important",
        noList: true,
      },
    },
    empty: {
      sideEffects: () => {
        setStats((prevStats) => {
          return { ...prevStats, currentTime: prevStats.currentTime + 1 };
        });
      },
      eventDisplay: {
        availableTimes: "000000000000000000000000000000000000000000000000000000000000000000000000",
        name: "",
        description: "",
        cssClass: "empty",
        noList: true,
      },
    },
    finale: {
      sideEffects: () => {
        setActiveScreen("dialogue");
        setFlag(stats.currentTime);

        setStats((prevStats) => {
          return { ...prevStats, currentTime: prevStats.currentTime + 1 };
        });

        setScene(IntroSegment[0]);
      },
      eventDisplay: {
        availableTimes: "000000000000000000000000000000000000000000000000000000000000000000000000",
        name: "Job Applications",
        description: "The finale: Do you have the skills to get a job?",
        cssClass: "important",
        noList: true,
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
  const [scene, setScene] = useState(IntroSegment[0]);
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
    setScene(IntroSegment[0]);
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

  useEffect(() => {
    if (stats.energy < 0) {
      setActiveScreen("dialogue");
      setScene(IntroSegment[2]);
      setFlag(1000);
    }
  }, [stats]);

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
              if (
                stats.currentTime !== RESETSTATS.currentTime &&
                stats.currentTime < 21 &&
                stats.energy >= 0
              ) {
                await post("/api/save", stats);
              }

              if (stats.currentTime >= 21 || stats.energy < 0) {
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
