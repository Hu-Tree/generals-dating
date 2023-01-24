import React, { useState, useEffect } from "react";
import { testInteraction, multiTestInteraction } from "./Script.js";
import { OptionsBox, DialogueBox } from "./DialogueBox.js";
import { DialogueOption, ScriptObject } from "./Script.js";

/**
 *
 * @param {ScriptObject[]} Scene containing info about text, options, facial expressions, etc.
 * @param {Function} setStats sets the new stat levels
 * @param {int} industry determines which character to summon
 */
const DialogueScreen = (props) => {
  const [nextText, setNextText] = useState(0);
  const [help, setHelp] = useState("");
  useEffect(() => {
    setNextText(0);
  }, []);

  useEffect(() => {
    setHelp(
      props.Scene[nextText].Options.map((DialogueOption) => (
        <OptionsBox
          Option={DialogueOption}
          Indexer={(x) => {
            setNextText(x);
            console.log(x);
          }}
        />
      ))
    );
  }, [nextText]);

  return (
    <div className="screenBackground">
      {console.log(props.Scene[nextText])}
      <DialogueBox Script={props.Scene[nextText].Text} />
      {help}
    </div>
  );
  //return <span> {"PAIN AND SUFFERING "} </span>;
};

export default DialogueScreen;
