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
 * Pass in the text to be displayed in the large box
 * @param {String} Script (the script text )
 *
 */

const DialogueBox = (props) => {
  return (
    <div className="scriptBox-container">
      <div className="scriptBox-text"> {props.Script}</div>
    </div>
  );
};

export { OptionsBox, DialogueBox };
