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

  const runScript = (script, target) => {
    setIndustry(target);
    setFlag(stats.currentTime + 100 * stats.energy);
    setScene(script);
    setActiveScreen("dialogue");
  };

  const dialogueCleanup = async () => {
    if (stats.currentTime >= ENDTIME && ending !== "going") {
      runEnding();
    } else {
      setActiveScreen("schedule");
    }
  };

  const passFail = (targetNum) => {
    let pass = false;
    if (
      targetNum === 1 &&
      stats.reputation1 >= 5 &&
      stats.technical >= 15 &&
      stats.presentation >= 5 &&
      stats.networking >= 0
    ) {
      pass = true;
    }
    if (
      targetNum === 2 &&
      stats.reputation2 >= 5 &&
      stats.technical >= 5 &&
      stats.presentation >= 5 &&
      stats.networking >= 5
    ) {
      pass = true;
    }
    if (
      targetNum === 3 &&
      stats.reputation3 >= 5 &&
      stats.technical >= 10 &&
      stats.presentation >= 5 &&
      stats.networking >= 5
    ) {
      pass = true;
    }
    if (
      targetNum === 4 &&
      stats.reputation4 >= 5 &&
      stats.technical >= 15 &&
      stats.presentation >= 5 &&
      stats.networking >= 5
    ) {
      pass = true;
    }
    return pass;
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
    //Dates; first meetings
    meet_ed1: {
      sideEffects: () => {
        setStats((prevStats) => {
          return { ...prevStats, currentTime: prevStats.currentTime + 1 };
        });
        runScript(Edna[0], 1);
      },
      eventDisplay: {
        availableTimes: "0000001",
        name: "Interview With Edna",
        description: "I hope to make a good impression!",
        cssClass: "important",
      },
    },
    meet_jp1: {
      sideEffects: () => {
        setStats((prevStats) => {
          return { ...prevStats, currentTime: prevStats.currentTime + 1 };
        });
        runScript(Jp[0], 2);
      },
      eventDisplay: {
        availableTimes: "000000" + "010000" + "000000" + "000000",
        name: "Interview With JP",
        description: "meet_jp1",
        cssClass: "important",
      },
    },
    meet_ma1: {
      sideEffects: () => {
        setStats((prevStats) => {
          return { ...prevStats, currentTime: prevStats.currentTime + 1 };
        });
        runScript(Martin[0], 3);
      },
      eventDisplay: {
        availableTimes: "000000001",
        name: "Interview With Martin",
        description: "Nothing quite like the military-industrial complex!",
        cssClass: "important",
      },
    },
    meet_sy1: {
      sideEffects: () => {
        setStats((prevStats) => {
          return { ...prevStats, currentTime: prevStats.currentTime + 1 };
        });
        runScript(Sylvia[0], 4);
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
        runScript(IntroSegment[0], 1); //CHANGE
      },
      eventDisplay: {
        availableTimes: "000000" + "000000" + "000000" + "000100",
        name: "meet_edna_2",
        description: "Edna",
        cssClass: "important",
      },
    },
    meet_jp2: {
      sideEffects: () => {
        setStats((prevStats) => {
          return { ...prevStats, currentTime: prevStats.currentTime + 1 };
        });
        runScript(Jp[0], 2); //CHANGE
      },
      eventDisplay: {
        availableTimes: "000000" + "000000" + "000000" + "001000",
        name: "Meet With JP 2",
        description: "meet_jp2",
        cssClass: "important",
      },
    },
    meet_ma2: {
      sideEffects: () => {
        setStats((prevStats) => {
          return { ...prevStats, currentTime: prevStats.currentTime + 1 };
        });
        runScript(IntroSegment[0], 3); //CHANGE
      },
      eventDisplay: {
        availableTimes: "000000" + "000000" + "000000" + "010000",
        name: "Meet With Martin 2",
        description: "Nothing quite like the military-industrial complex!",
        cssClass: "important",
      },
    },
    meet_sy2: {
      sideEffects: () => {
        setStats((prevStats) => {
          return { ...prevStats, currentTime: prevStats.currentTime + 1 };
        });
        runScript(Jp[0], 4); //CHANGE
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
        alert(
          `You learn something about props and React. +5 technical, +1 networking and -4 energy.`
        );

        setStats((prevStats) => {
          return {
            ...prevStats,
            currentTime: prevStats.currentTime + 1,
            technical: prevStats.technical + 5,
            networking: prevStats.networking + 1,
            energy: prevStats.energy - 4,
          };
        });
      },
      eventDisplay: {
        availableTimes: "001000" + "001000" + "001000" + "001000",
        name: "Attend {web.lab}",
        description: "You can feel your brain enlargen from web dev; -4 energy.",
        cssClass: "orange",
      },
    },
    poker: {
      sideEffects: () => {
        setStats((prevStats) => {
          return {
            ...prevStats,
            currentTime: prevStats.currentTime + 1,
            energy: prevStats.energy - 3,
            networking: prevStats.networking + 3,
            technical: prevStats.technical + 1,
          };
        });

        alert(
          "Is poker really that similar to trading? +3 networking, +1 technical and -3 energy."
        );
      },
      eventDisplay: {
        availableTimes: "000100" + "000100" + "000100" + "000100",
        name: "Poker Club",
        description: "Cards go brrrrrrrr. -3 energy",
        cssClass: "orange",
      },
    },
    urop: {
      sideEffects: () => {
        alert(`You work on your UROP! +3 technical and -2 energy.`);

        setStats((prevStats) => {
          return {
            ...prevStats,
            currentTime: prevStats.currentTime + 1,
            technical: prevStats.technical + 3,
            energy: prevStats.energy - 2,
          };
        });
      },
      eventDisplay: {
        availableTimes: "001111" + "111111" + "111111" + "111110",
        name: "Work on UROP",
        description: "Your code could use some work; -2 energy.",
        cssClass: "orange",
      },
    },
    speakingworkshop: {
      sideEffects: () => {
        alert(
          `It was a bit embarassing and very tiring, but ultimately useful for you. +6 presentation, +3 networking and -6 energy.`
        );

        setStats((prevStats) => {
          return {
            ...prevStats,
            currentTime: prevStats.currentTime + 1,
            networking: prevStats.networking + 3,
            presentation: prevStats.presentation + 6,
            energy: prevStats.energy - 6,
          };
        });
      },
      eventDisplay: {
        availableTimes: "000100" + "000000" + "000000" + "000000",
        name: "Public Speaking Workshop",
        description: "Presenting is hard! -6 energy.",
        cssClass: "orange",
      },
    },

    //resting events
    sleep: {
      sideEffects: () => {
        setStats((prevStats) => {
          return {
            ...prevStats,
            currentTime: prevStats.currentTime + 1,
            energy: prevStats.energy + 5,
          };
        });

        alert("Sweet dreams! +5 energy.");
      },
      eventDisplay: {
        availableTimes: "001111" + "111111" + "111111" + "111110",
        name: "Sleep",
        description: "ZZZ; +5 energy",
        cssClass: "purple",
      },
    },
    cook: {
      sideEffects: () => {
        alert(`You cooked a meal! +1 cooking and +${2 * (stats.cooking + 1)} energy.`);

        setStats((prevStats) => {
          return {
            ...prevStats,
            currentTime: prevStats.currentTime + 1,
            cooking: prevStats.cooking + 1,
            energy: prevStats.energy + 2 * (prevStats.cooking + 1),
          };
        });
      },
      eventDisplay: {
        availableTimes: "001100" + "111100" + "111100" + "111100",
        name: "Cook!",
        description: "Energize yourself with some of your own cooking! +?? energy.",
        cssClass: "purple",
      },
    },

    finale: {
      sideEffects: () => {
        setStats((prevStats) => {
          return { ...prevStats, currentTime: prevStats.currentTime + 1 };
        });

        if (passFail(1) || passFail(2) || passFail(3) || passFail(4)) {
          const bestAffection = Math.max(
            stats.reputation1,
            stats.reputation2,
            stats.reputation3,
            stats.reputation4
          );
          if (bestAffection === stats.reputation1) {
            setEnding("1");
            runScript(Edna[1], 1);
          } else if (bestAffection === stats.reputation2) {
            setEnding("2");
            runScript(Jp[3], 2);
          } else if (bestAffection === stats.reputation3) {
            setEnding("3");
            runScript(Martin[1], 3);
          } else if (bestAffection === stats.reputation4) {
            setEnding("4");
            runScript(Sylvia[2], 4);
          }
        } else {
          setEnding("lonely");
          runScript(IntroSegment[3], 0);
        }
      },
      eventDisplay: {
        availableTimes: "000000" + "000000" + "000000" + "000001",
        name: "Apply To Everyone",
        description: "Apply to everyone! I hope someone accepts you...",
        cssClass: "important",
      },
    },
    edfinale: {
      sideEffects: () => {
        setStats((prevStats) => {
          return { ...prevStats, currentTime: prevStats.currentTime + 1 };
        });

        if (passFail(1)) {
          setEnding("1");
          runScript(Edna[1], 1);
        } else {
          setEnding("lonely");
          runScript(Edna[2], 1);
        }
      },
      eventDisplay: {
        availableTimes: "000000" + "000000" + "000000" + "000001",
        name: "Apply To Edna",
        description: "Apply only to Edna",
        cssClass: "important",
      },
    },
    JPfinale: {
      sideEffects: () => {
        setStats((prevStats) => {
          return { ...prevStats, currentTime: prevStats.currentTime + 1 };
        });

        if (passFail(2)) {
          setEnding("2");
          runScript(Jp[3], 2);
        } else {
          setEnding("lonely");
          runScript(Jp[4], 2);
        }
      },
      eventDisplay: {
        availableTimes: "000000" + "000000" + "000000" + "000001",
        name: "Apply To JP",
        description: "Apply only to JP",
        cssClass: "important",
      },
    },
    martinfinale: {
      sideEffects: () => {
        setStats((prevStats) => {
          return { ...prevStats, currentTime: prevStats.currentTime + 1 };
        });

        if (passFail(3)) {
          setEnding("3");
          runScript(Martin[1], 3);
        } else {
          setEnding("lonely");
          runScript(Martin[2], 3);
        }
      },
      eventDisplay: {
        availableTimes: "000000" + "000000" + "000000" + "000001",
        name: "Apply To Martin",
        description: "Apply only to Martin",
        cssClass: "important",
      },
    },
    sylviafinale: {
      sideEffects: () => {
        setStats((prevStats) => {
          return { ...prevStats, currentTime: prevStats.currentTime + 1 };
        });

        if (passFail(4)) {
          setEnding("4");
          runScript(Sylvia[2], 4);
        } else {
          setEnding("lonely");
          runScript(Sylvia[3], 4);
        }
      },
      eventDisplay: {
        availableTimes: "000000" + "000000" + "000000" + "000001",
        name: "Apply To Sylvia",
        description: "Apply only to Sylvia",
        cssClass: "important",
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
  const [ending, setEnding] = useState("going");
  const [resetAllToggle, setResetAllToggle] = useState(false);
  const [industry, setIndustry] = useState(0);

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
    if (stats.currentTime < ENDTIME && stats.currentTime > 1) {
      console.log(stats);
      post("/api/save", stats);
    }
  }, [stats]);

  useEffect(() => {
    if (stats.energy < 0) {
      setStats((prevStats) => {
        return { ...prevStats, currentTime: 23, energy: 1 };
      });
      runScript(IntroSegment[2], 0);
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
            cleanup={dialogueCleanup}
            Flag={flag}
            industry={industry}
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
