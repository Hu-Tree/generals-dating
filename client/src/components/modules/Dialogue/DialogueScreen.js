import React, { useState, useEffect } from "react";
import testInteraction from "./Script.js";
import { OptionsBox, DialogueBox } from "./DialogueBox.js";

const DialogueScreen = (props) => {
  return (
    <>
      <DialogueBox
        Script={testInteraction}
        Trigger={() => {
          console.log("NICE WORK");
        }}
      />
      <OptionsBox
        Option={testInteraction.Options[0]}
        Indexer={(x) => {
          console.log(x);
        }}
      />
      <OptionsBox
        Option={testInteraction.Options[1]}
        Indexer={(x) => {
          console.log(x);
        }}
      />
    </>
  );
  //return <span> {"PAIN AND SUFFERING "} </span>;
};

export default DialogueScreen;
