import React, { useState, useEffect } from "react";
import "./Dialogue.css";

//gotta pass some dark magic shit in here like a function???

/**
 * Pass in a function, and also the entire option object.
 * @param {DialogueOption} Option (the entire option object)
 * @param {Function} Indexer (Passes the destination back)
 */
const OptionsBox = (props) => {
  return (
    <div
      className="optionsBox-container"
      onClick={() => {
        props.Indexer(props.Option.Destination);
      }}
    >
      <div className="optionsBox-text"> {props.Option.Text}</div>
    </div>
  );
};

/**
 * Pass in the dialogue scenario and a trigger if there are no options.
 * @param {ScriptObject} Script (the script text and associated data for this box)
 * @param {Function} Trigger (triggers the next box when no options are present; otherwise does nothing.)
 */

const DialogueBox = (props) => {
  return (
    <div
      className="scriptBox-container"
      onClick={() => {
        props.Trigger();
      }}
    >
      <div className="scriptBox-text"> {props.Script.Text}</div>
    </div>
  );
};

export { OptionsBox, DialogueBox };
