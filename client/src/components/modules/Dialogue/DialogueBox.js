import react from "react";
import "./Dialogue.css";


//gotta pass some dark magic shit in here like a function???

/**
 * Pass in a function, and also the entire option object.
 * @param {DialogueOption} Option (the entire option object)
 * @param {Function} Indexer (Passes the destination back)
 */
const OptionsBox = (props) => {
    
    return(
    <div className = "optionsBox-container">
        <div className = "optionsBox-text"> {props.DialogueOption.Text}
        </div>
    </div>
    )
}



const DialogueBox = (props) => {


return(
< div onClick={() => {
    summon();
  }}

)}