import React, { useEffect, useState } from "react";

import "../../utilities.css";
import "./GameScreen.css";
import ScheduleScreen from "./Scheduling/ScheduleScreen";
import DialogueScreen from "./Dialogue/DialogueScreen";
import StatsScreen from "./Stats/StatsScreen";
import { IntroSegment, Martin, Edna, Jp, Sylvia } from "./Dialogue/Script.js";
import { get, post } from "../../utilities.js";
import EndScreen from "./EndScreen/EndScreen";

const GameScreen = (props) => {
  const ENDTIME = 23; //final event should be at this time. Autosave occurs beforehand.

  const runScript = (script) => {
    setActiveScreen("dialogue");
    setFlag(stats.currentTime);
    setScene(script);
  };

  const dialogueCleanup = async () => {
    if (
      stats.currentTime !== RESETSTATS.currentTime &&
      stats.currentTime < ENDTIME &&
      stats.energy >= 0
    ) {
      await post("/api/save", stats);
    }

    if (stats.currentTime >= ENDTIME || stats.energy < 0) {
      runEnding();
    } else {
      setActiveScreen("schedule");
    }
  };

  const EVENTS = {
    intro1: {
      sideEffects: () => {
        setStats((prevStats) => {
          return { ...prevStats, currentTime: prevStats.currentTime + 1 };
        });
        runScript(IntroSegment[0]);
      },
      eventDisplay: {
        availableTimes: "",
        name: "Prep For Career Fair",
        description: "I have to be ready to make a good impression!",
        cssClass: "important",
        noList: true,
      },
    },
    intro2: {
      sideEffects: () => {
        setStats((prevStats) => {
          return { ...prevStats, currentTime: prevStats.currentTime + 1 };
        });
        runScript(IntroSegment[1]);
      },
      eventDisplay: {
        availableTimes: "",
        name: "Career Fair",
        description: "I wonder what I jobs I could do...",
        cssClass: "important",
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
        availableTimes: "",
        name: "Job Applications",
        description: "Apps are due tonight! Do I have the skills to get a job?",
        cssClass: "important",
        noList: true,
      },
    },
    //Dates; first meetings
    meet_ed1: {
      sideEffects: () => {
        setStats((prevStats) => {
          return { ...prevStats, currentTime: prevStats.currentTime + 1 };
        });
        runScript(Edna[0]);
      },
      eventDisplay: {
        availableTimes: "0000001",
        name: "Interview With Edna",
        description: "I hope to make a good impression!",
        cssClass: "important",
      },
    },
    meet_ma1: {
      sideEffects: () => {
        setStats((prevStats) => {
          return { ...prevStats, currentTime: prevStats.currentTime + 1 };
        });
        runScript(Martin[0]);
      },
      eventDisplay: {
        availableTimes: "00000001",
        name: "Interview With Martin",
        description: "Nothing quite like the military-industrial complex!",
        cssClass: "important",
      },
    },
    meet_jp1: {
      sideEffects: () => {
        setStats((prevStats) => {
          return { ...prevStats, currentTime: prevStats.currentTime + 1 };
        });
        runScript(Jp[0]);
      },
      eventDisplay: {
        availableTimes: "000000" + "001000" + "000000" + "000000",
        name: "Interview With JP",
        description: "meet_jp1",
        cssClass: "important",
      },
    },
    meet_sy1: {
      sideEffects: () => {
        setStats((prevStats) => {
          return { ...prevStats, currentTime: prevStats.currentTime + 1 };
        });
        runScript(Sylvia[0]);
      },
      eventDisplay: {
        availableTimes: "000000" + "000100" + "000000" + "000000",
        name: "Interview With Sylvia",
        description: "meet_sy1",
        cssClass: "important",
      },
    },
    //Second meetings
    meet_ed2: {
      sideEffects: () => {
        setStats((prevStats) => {
          return { ...prevStats, currentTime: prevStats.currentTime + 1 };
        });
        runScript(IntroSegment[0]); //CHANGE
      },
      eventDisplay: {
        availableTimes: "000000" + "000000" + "000000" + "000100",
        name: "meet_edna_2",
        description: "Edna",
        cssClass: "important",
      },
    },
    meet_ma2: {
      sideEffects: () => {
        setStats((prevStats) => {
          return { ...prevStats, currentTime: prevStats.currentTime + 1 };
        });
        runScript(IntroSegment[0]); //CHANGE
      },
      eventDisplay: {
        availableTimes: "000000" + "000000" + "000000" + "001000",
        name: "Meet With Martin 2",
        description: "Nothing quite like the military-industrial complex!",
        cssClass: "important",
      },
    },
    meet_jp2: {
      sideEffects: () => {
        setStats((prevStats) => {
          return { ...prevStats, currentTime: prevStats.currentTime + 1 };
        });
        runScript(Jp[0]); //CHANGE
      },
      eventDisplay: {
        availableTimes: "000000" + "000000" + "000000" + "010000",
        name: "Meet With JP 2",
        description: "meet_jp2",
        cssClass: "important",
      },
    },
    meet_sy2: {
      sideEffects: () => {
        setStats((prevStats) => {
          return { ...prevStats, currentTime: prevStats.currentTime + 1 };
        });
        runScript(Jp[0]); //CHANGE
      },
      eventDisplay: {
        availableTimes: "000000" + "000000" + "000000" + "100000",
        name: "Meet With Sylvia 2",
        description: "meet_sy2",
        cssClass: "important",
      },
    },

    //Mini-Events
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
        availableTimes: "001000001000001000001000",
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
            cleanup={dialogueCleanup}
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
