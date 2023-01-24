/**
 * Represents a clickable choice that the player can interact with during an event.
 * @typedef DialogueOption
 * @property {int} OptionIndex index within the option doc
 * @property {String} Text the actual text of the option
 * @property {int} AffectionChange
 *  @property {int} Destination or which script object it sends you to when clicked
 */

/**
 * Represents the main dialogue spoken to the player during an event.
 * @typedef ScriptObject
 *@property {int} Index index within the normal dialogue doc
 * @property {int} CharacterState facial expresssion of the character
 * @property {string} Text text of the interaction
 *@property {DialogueOption[]} Options
 */

const testInteraction = {
  Index: 0,
  CharacterState: 0,
  Text: "It's not like I like you or anything, baka!",
  Options: [
    {
      OptionIndex: 1,
      Text: "lol ok",
      AffectionChange: 1,
      Destination: 2,
    },
    {
      Index: 1,
      Text: "huh????",
      AffectionChange: -1,
      Destination: 2,
    },
  ],
};

export default testInteraction;
