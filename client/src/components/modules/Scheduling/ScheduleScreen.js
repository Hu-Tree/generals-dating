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
    "empty",
    "empty",
  ]); //24 long list of strings referring to ids of events.
  return (
    <>
      <div>
        <h2>Schedule</h2>
        <div className="gridWrapper">
          {activeScheduleList.map((eventID, index) => {
            return (
              <div className="card">
                <h6>Hi</h6>
                <p>Wee</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ScheduleScreen;
