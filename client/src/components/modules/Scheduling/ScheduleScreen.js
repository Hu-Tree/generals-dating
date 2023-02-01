import React, { useState } from "react";

import "../../../utilities.css";
import "./ScheduleScreen.css";

const ScheduleScreen = ({ enabled, stats, EVENTS }) => {
  const [activeScheduleList, setActiveScheduleList] = useState([
    "sleep",
    "sleep",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "date_e1",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "finale",
  ]); //24 long list of strings referring to ids of events.

  const NUMWEEKS = 3;
  const DAYSPERWEEK = 4;
  const PERIODSPERDAY = 6;

  //what is the currently selected option
  const [activeOption, setActiveOption] = useState("empty");

  if (!enabled) {
    return <></>;
  }

  return (
    <>
      <div className="scheduleWrapper">
        <h2>Schedule</h2>
        <p>
          {`Week ${Math.floor(stats.currentTime / (PERIODSPERDAY * DAYSPERWEEK)) + 1} Day ${
            (Math.floor(stats.currentTime / PERIODSPERDAY) % DAYSPERWEEK) + 1
          } Period ${(stats.currentTime % PERIODSPERDAY) + 1}`}
        </p>
        <div className="calendarWrapper">
          <div className="gridWrapper">
            {activeScheduleList.map((eventID, index) => {
              return (
                <div
                  className={`card ${EVENTS[eventID].eventDisplay.cssClass} ${
                    index < stats.currentTime ? "shaded" : ""
                  }`}
                  style={{
                    gridColumn: 1 + Math.floor(index / PERIODSPERDAY),
                    gridRow: 1 + (index % PERIODSPERDAY),
                  }}
                >
                  {eventID !== "empty" &&
                  stats.currentTime != NUMWEEKS * DAYSPERWEEK * PERIODSPERDAY - 1 ? (
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
                    style={{
                      gridColumn: 1 + Math.floor(index / PERIODSPERDAY),
                      gridRow: 1 + (index % PERIODSPERDAY),
                    }}
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
          <div className="divider"></div>
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
                if (eventID === "empty" || eventID === "finale") {
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
        {enabled ? <></> : <div className="disableScreen"></div>}
      </div>
    </>
  );
};

export default ScheduleScreen;
