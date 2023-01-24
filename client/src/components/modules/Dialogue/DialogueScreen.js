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
  const [nextText, setNextText] = useState(-2);
  const [affectionChange, setAffectionChange] = useState(0);
  const [active, setActive] = useState(false);

  let help = "";
  let flag2 = true;

  useEffect(() => {
    if (!active) {
      props.setStats({ ...props.stats, reputation1: props.stats.reputation1 + affectionChange });
      props.cleanup();
    }
  }, [active]);

  useEffect(() => {
    if (props.Scene) {
      setActive(true);
      setAffectionChange(0);
      help = "";
      setNextText(0);
      console.log(help);
    } else {
      flag2 = !flag2;
      console.log(flag2);
    }
  }, [props.Scene, props.Flag, flag2]);

  if (!active) {
    return (
      <div className="dialogueFullScreen">
        <div className="screenBackground"></div>;
        {props.enabled ? <></> : <div className="disableScreen"></div>}
      </div>
    );
  }

  if (props.Scene) {
    help = props.Scene[nextText].Options.map((DialogueOption) => (
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
    ));
  } else {
    setActive(false);
    console.log("whew");
  }
  console.log(props.Scene, help);
  return (
    <div className="dialogueFullScreen">
      <div className="screenBackground">
        <div className={"cP_".concat(props.Scene[nextText].CharacterState)}></div>
        <DialogueBox Script={props.Scene[nextText].Text} />
        <div className="optionsBox-container">{help}</div>
      </div>
      {props.enabled ? <></> : <div className="disableScreen"></div>}
    </div>
  );
  //return <span> {"PAIN AND SUFFERING "} </span>;
};

export default DialogueScreen;
