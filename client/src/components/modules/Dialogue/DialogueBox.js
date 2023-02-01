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
      className="optionsBox-text"
      onClick={() => {
        props.Indexer(props.Option.Destination, props.Option.AffectionChange);
      }}
    >
      {props.Option.Text}
    </div>
  );
};

/**
 * Pass in the text to be displayed in the large box
 * @param {String} Script (the script text )
 * @param {Function} Indexer (Passes the destination back)
 *
 */

const DialogueBox = (props) => {
  if (props.Script.Destination) {
    return (
      <div
        className="scriptBox-container"
        onClick={() => {
          props.Indexer(props.Script.Destination);
        }}
      >
        <div className="scriptBox-text">{props.Script.Text}</div>
      </div>
    );
  }
  return (
    <div className="scriptBox-container">
      <div className="scriptBox-text">{props.Script.Text}</div>
    </div>
  );
};

export { OptionsBox, DialogueBox };
