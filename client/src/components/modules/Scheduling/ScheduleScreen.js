import React, { useState } from "react";

import { INITIALSCHEDULE } from "../EventConstants";

import "../../../utilities.css";
import "./ScheduleScreen.css";

const ScheduleScreen = ({ enabled, stats, EVENTS }) => {
  const [activeScheduleList, setActiveScheduleList] = useState(INITIALSCHEDULE);

  const NUMWEEKS = 3;
  const DAYSPERWEEK = 4;
  const PERIODSPERDAY = 6;

  //what is the currently selected option
  const [activeOption, setActiveOption] = useState("empty");

  const getTime = () => {
    return convertTime(stats.currentTime);
  };

  const convertTime = (time) => {
    return {
      week: Math.floor(time / (PERIODSPERDAY * DAYSPERWEEK)) + 1,
      day: (Math.floor(time / PERIODSPERDAY) % DAYSPERWEEK) + 1,
      period: (time % PERIODSPERDAY) + 1,
    };
  };

  if (!enabled) {
    return <></>;
  }

  return (
    <>
      <div className="scheduleWrapper">
        <h2>Schedule</h2>
        <p>{`Week ${getTime().week} Day ${getTime().day} Period ${getTime().period}`}</p>
        <div className="calendarWrapper">
          <div className="gridWrapper">
            {activeScheduleList.map((eventID, index) => {
              if (getTime().week !== convertTime(index).week) {
                return <></>;
              }
              return (
                <div
                  className={`card ${EVENTS[eventID].eventDisplay.cssClass} ${
                    index < stats.currentTime ? "shaded" : ""
                  }`}
                  style={{
                    gridColumn: convertTime(index).day,
                    gridRow: convertTime(index).period,
                  }}
                >
                  {eventID !== "empty" &&
                  !(index === DAYSPERWEEK * PERIODSPERDAY - 1 && getTime().week == NUMWEEKS) ? (
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
                if (getTime().week !== convertTime(index).week) {
                  return <></>;
                }
                if (allowed === "0") {
                  return <></>;
                }
                return (
                  <div
                    className={`card ${EVENTS[activeOption].eventDisplay.cssClass} shaded`}
                    style={{
                      gridColumn: convertTime(index).day,
                      gridRow: convertTime(index).period,
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

            <div
              className={`card next1`}
              style={{
                gridColumn: getTime().day,
                gridRow: getTime().period,
              }}
            ></div>

            <div
              className={`card next2`}
              style={{
                gridColumn: getTime().day,
                gridRow: getTime().period,
              }}
            ></div>
          </div>
          <div className="divider"></div>
          <div>
            <button
              className="button"
              onClick={() => {
                EVENTS[activeScheduleList[stats.currentTime]].sideEffects();
              }}
            >
              Play Current Event!
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
