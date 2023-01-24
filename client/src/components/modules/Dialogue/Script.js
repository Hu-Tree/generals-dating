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
      OptionIndex: 0,
      Text: "lol ok",
      AffectionChange: 1,
      Destination: 2,
    },
    {
      OptionIndex: 1,
      Text: "huh????",
      AffectionChange: -1,
      Destination: 2,
    },
  ],
};

const multiTestInteraction = [
  {
    Index: 0,
    CharacterState: 0,
    Text: "It's not like I like you or anything, baka!",
    Options: [
      {
        OptionIndex: 0,
        Text: "lol ok",
        AffectionChange: 1,
        Destination: 1,
      },
      {
        OptionIndex: 1,
        Text: "huh????",
        AffectionChange: -1,
        Destination: 2,
      },
    ],
  },
  {
    Index: 1,
    CharacterState: 1,
    Text: "How could you just say that??",
    Options: [
      {
        OptionIndex: 2,
        Text: "...",
        AffectionChange: 0,
        Destination: 3,
      },
    ],
  },
  {
    Index: 2,
    CharacterState: 1,
    Text: "Shut up!",
    Options: [
      {
        OptionIndex: 3,
        Text: "I didn't say anything!",
        AffectionChange: 1,
        Destination: 3,
      },
      {
        OptionIndex: 4,
        Text: "HUH??",
        AffectionChange: 1,
        Destination: 3,
      },
    ],
  },
  {
    Index: 3,
    CharacterState: 2,
    Text: "Well whatever, it's not important anyways. Let's get cracking on this web.lab project.",
    Options: [
      {
        OptionIndex: 5,
        Text: "Alright let's do this shit!!",
        AffectionChange: 1,
        Destination: -1,
      },
      {
        OptionIndex: 6,
        Text: "But web.lab is so boring...",
        AffectionChange: -1,
        Destination: -1,
      },
      {
        OptionIndex: 7,
        Text: "I brought tea!",
        AffectionChange: 2,
        Destination: -1,
      },
    ],
  },
];

export { testInteraction, multiTestInteraction };
