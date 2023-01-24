import React, { useState } from "react";

import "../../../utilities.css";
import "./ScheduleScreen.css";

const ScheduleScreen = ({ stats, EVENTS }) => {
  const [activeScheduleList, setActiveScheduleList] = useState([
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "date_e1",
    "empty",
    "cook",
    "sleep",
    "sleep",
    "sleep",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
  ]); //24 long list of strings referring to ids of events.

  //what is the currently selected option
  const [activeOption, setActiveOption] = useState("empty");

  return (
    <>
      <div className="scheduleWrapper">
        <h2>Schedule</h2>
        Current Time: {stats.currentTime}
        <div className="u-flex">
          <div className="gridWrapper">
            {activeScheduleList.map((eventID, index) => {
              return (
                <div
                  className={`card ${EVENTS[eventID].eventDisplay.cssClass} ${
                    index < stats.currentTime ? "shaded" : ""
                  }`}
                  style={{ gridColumn: 1 + Math.floor(index / 6), gridRow: 1 + (index % 6) }}
                >
                  {eventID !== "empty" ? (
                    <button
                      className="deleteEventBox"
                      onClick={() => {
                        let newScheduleList = [...activeScheduleList];
                        newScheduleList[index] = "empty";
                        setActiveScheduleList(newScheduleList);
                      }}
                    >
                      ×
                    </button>
                  ) : (
                    <></>
                  )}
                  <h6>{EVENTS[eventID].eventDisplay.name}</h6>
                  <p>{EVENTS[eventID].eventDisplay.description}</p>
                </div>
              );
            })}

            {activeOption !== "empty" ? (
              EVENTS[activeOption].eventDisplay.availableTimes.map((allowed, index) => {
                if (allowed === "0") {
                  return <></>;
                }
                return (
                  <div
                    className={`card ${EVENTS[activeOption].eventDisplay.cssClass} shaded`}
                    style={{ gridColumn: 1 + Math.floor(index / 6), gridRow: 1 + (index % 6) }}
                    onClick={() => {
                      let newScheduleList = [...activeScheduleList];
                      newScheduleList[index] = activeOption;
                      setActiveScheduleList(newScheduleList);
                    }}
                  >
                    <h6>{EVENTS[activeOption].eventDisplay.name}</h6>
                    <p>{EVENTS[activeOption].eventDisplay.description}</p>
                  </div>
                );
              })
            ) : (
              <></>
            )}
          </div>
          <div>
            <button
              className="button"
              onClick={() => {
                EVENTS[activeScheduleList[stats.currentTime]].sideEffects();
              }}
            >
              Play Next Event!
            </button>

            <div className="optionsWrapper">
              {Object.keys(EVENTS).map((eventID) => {
                if (eventID === "empty") {
                  return <></>;
                }
                return (
                  <div
                    onClick={() => {
                      if (activeOption !== eventID) {
                        setActiveOption(eventID);
                      } else {
                        setActiveOption("empty");
                      }
                    }}
                    className={`card optionCard
                  ${EVENTS[eventID].eventDisplay.cssClass}
                  ${activeOption === eventID ? "activeOptionCard" : ""}`}
                  >
                    <h6>{EVENTS[eventID].eventDisplay.name}</h6>
                    <p>{EVENTS[eventID].eventDisplay.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleScreen;
