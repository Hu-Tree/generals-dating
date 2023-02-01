import React, { useState, useEffect } from "react";

import { INITIALSCHEDULE } from "../EventConstants";

import "../../../utilities.css";
import "./ScheduleScreen.css";

const ScheduleScreen = ({ enabled, stats, EVENTS, reset }) => {
  const [activeScheduleList, setActiveScheduleList] = useState(INITIALSCHEDULE);

  const NUMWEEKS = 3;
  const DAYSPERWEEK = 4;
  const PERIODSPERDAY = 6;

  const fixedEventTimes = [71, 9];

  //what is the currently selected option
  const [activeOption, setActiveOption] = useState("empty");

  useEffect(() => {
    setActiveScheduleList(INITIALSCHEDULE);
  }, [reset]);

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

  const drawBaseSchedule = () => {
    return activeScheduleList.map((eventID, index) => {
      if (getTime().week !== convertTime(index).week) {
        return <></>;
      }
      return (
        <div
          className={`card ${EVENTS[eventID].eventDisplay.cssClass} ${
            index < stats.currentTime ? "shaded" : ""
          } ${index === stats.currentTime ? "next2" : ""}`}
          style={{
            gridColumn: convertTime(index).day,
            gridRow: convertTime(index).period,
          }}
        >
          {eventID !== "empty" && fixedEventTimes.indexOf(index) === -1 ? (
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
    });
  };

  const drawGhostBoxes = () => {
    return EVENTS[activeOption].eventDisplay.availableTimes.map((allowed, index) => {
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
    });
  };

  const eventButton = () => {
    return (
      <button
        className="button"
        onClick={() => {
          EVENTS[activeScheduleList[stats.currentTime]].sideEffects();
        }}
      >
        Play Current Event!
      </button>
    );
  };

  const drawOptions = () => {
    return (
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
    );
  };

  if (!enabled) {
    return <></>;
  }

  return (
    <>
      <div className="scheduleWrapper">
        <h2>Schedule</h2>
        <p>{`Week ${getTime().week} Day ${getTime().day} Period ${getTime().period} | Energy ${
          stats.energy
        }`}</p>
        <div className="calendarWrapper">
          <div className="gridWrapper">
            {drawBaseSchedule()}
            {activeOption !== "empty" ? drawGhostBoxes() : <></>}
          </div>
          <div className="divider"></div>
          <div>
            {eventButton()}
            {drawOptions()}
          </div>
        </div>
        {enabled ? <></> : <div className="disableScreen"></div>}
      </div>
    </>
  );
};

export default ScheduleScreen;
