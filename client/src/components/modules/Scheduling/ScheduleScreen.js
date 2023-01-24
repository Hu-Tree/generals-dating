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
  return (
    <>
      <div className="scheduleWrapper">
        <h2>Schedule</h2>
        Current Time: {stats.currentTime}
        <div className="u-flex">
          <div className="gridWrapper">
            {activeScheduleList.map((eventID, index) => {
              console.log(index);
              return (
                <div
                  className={`card ${EVENTS[eventID].eventDisplay.cssClass} ${
                    index < stats.currentTime ? "passed" : ""
                  }`}
                  style={{ gridColumn: 1 + Math.floor(index / 6), gridRow: 1 + (index % 6) }}
                >
                  <h6>{EVENTS[eventID].eventDisplay.name}</h6>
                  <p>{EVENTS[eventID].eventDisplay.description}</p>
                </div>
              );
            })}
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
                  <div className={`card optionCard ${EVENTS[eventID].eventDisplay.cssClass}`}>
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
