import React, { useState, useEffect } from "react";
import { testInteraction, multiTestInteraction } from "./Script.js";
import { OptionsBox, DialogueBox } from "./DialogueBox.js";
import { DialogueOption, ScriptObject } from "./Script.js";

/**
 *
 * @param {ScriptObject[]} Scene containing info about text, options, facial expressions, etc.
 * @param {Function} setStats sets the new stat levels
 * @param {int} industry determines which character to summon
 * @param {*} stats is all the stats
 * @param {Function} cleanup cleans up
 * @param {int} Flag triggers reset to fix a bug (ty rey)
 */
const DialogueScreen = (props) => {
  const [nextText, setNextText] = useState(0);
  const [help, setHelp] = useState("");
  const [affectionChange, setAffectionChange] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active) {
      props.setStats({ ...props.stats, reputation1: props.stats.reputation1 + affectionChange });
      props.cleanup();
    }
  }, [active]);

  useEffect(() => {
    setActive(true);
    setAffectionChange(0);
    setHelp("");
    setNextText(0);
  }, [props.Scene, props.Flag]);

  useEffect(() => {
    setHelp(
      props.Scene[nextText].Options.map((DialogueOption) => (
        <OptionsBox
          Option={DialogueOption}
          Indexer={(Destination, affection) => {
            if (Destination < 0) {
              console.log("well shit");
              setActive(false);
            } else {
              setNextText(Destination);
              console.log(Destination);
              setAffectionChange(affectionChange + affection);
            }
          }}
        />
      ))
    );
  }, [nextText]);

  if (!active) {
    return (
      <div className="dialogueFullScreen">
        <div className="screenBackground"></div>;
        {props.enabled ? <></> : <div className="disableScreen"></div>}
      </div>
    );
  }

  return (
    <div className="dialogueFullScreen">
      <div className="screenBackground">
        {console.log(props.Scene[nextText])}
        <div className={"cP_".concat(props.Scene[nextText].CharacterState)}></div>
        {console.log("cP_".concat(props.Scene[nextText].CharacterState))}
        <DialogueBox Script={props.Scene[nextText].Text} />
        <div className="optionsBox-container">{help}</div>
      </div>
      {props.enabled ? <></> : <div className="disableScreen"></div>}
    </div>
  );
  //return <span> {"PAIN AND SUFFERING "} </span>;
};

export default DialogueScreen;
