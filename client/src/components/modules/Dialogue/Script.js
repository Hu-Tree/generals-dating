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
 * @property {String} CharacterState facial expresssion of the character
 * @property {string} Text text of the interaction
 *@property {DialogueOption[]} Options Included choices the player can make
 *@property {String} Background The background selection for the scene
 */

const multiTestInteraction = [
  {
    Index: 0,
    CharacterState: "empty",
    Text: "It's not like I like you or anything, baka!",
    Background: "Room",
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
    CharacterState: "gloom",
    Text: "How could you just say that??",
    Background: "Room",
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
    CharacterState: "gloom",
    Text: "Shut up!",
    Background: "Room",
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
    CharacterState: "neut",
    Text: "Well whatever, it's not important anyways. Let's get cracking on this web.lab project.",
    Background: "Room",
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

const ResettiTestySpaghetti = [
  {
    Index: 0,
    CharacterState: "rizz",
    Text: "Hello there! How ya doing?",
    Background: "Room",
    Options: [
      {
        OptionIndex: 0,
        Text: "good",
        AffectionChange: 0,
        Destination: 1,
      },
      {
        OptionIndex: 1,
        Text: "ok",
        AffectionChange: 0,
        Destination: 1,
      },
      {
        OptionIndex: 2,
        Text: "...",
        AffectionChange: -1,
        Destination: 2,
      },
    ],
  },
  {
    Index: 1,
    CharacterState: "myst",
    Text: "Very cool! By the way, do you have a spare moment to talk about our lord and savior, Trevor Johst?",
    Background: "Room",
    Options: [
      {
        OptionIndex: 3,
        Text: "Trevor? I barely know her!",
        AffectionChange: 2,
        Destination: 3,
      },
      {
        OptionIndex: 4,
        Text: "Of course!",
        AffectionChange: 1,
        Destination: 3,
      },
    ],
  },
  {
    Index: 2,
    CharacterState: "gloom",
    Text: "...that bad, huh?",
    Background: "Room",
    Options: [
      {
        OptionIndex: 5,
        Text: "...huh? Oh sorry, I was too busy staring into your eyes...",
        AffectionChange: 4,
        Destination: 1,
      },
    ],
  },
  {
    Index: 3,
    CharacterState: "ibuk",
    Text: "I'm glad to have met a fellow Trevor CONEussier! ",
    Background: "Room",
    Options: [
      {
        OptionIndex: 6,
        Text: "I love cones!",
        AffectionChange: -2,
        Destination: -1,
      },
      {
        OptionIndex: 7,
        Text: "So true!",
        AffectionChange: 1,
        Destination: -1,
      },
    ],
  },
];

const clickthroughTest = [
  {
    Index: 0,
    CharacterState: "rizz",
    Text: "TESTING TESTING, OUT OF THE WAY",
    Background: "Room",
    Destination: 1,
  },
  {
    Index: 1,
    CharacterState: "empty",
    Text: "WOOSH! DISAPPEARED!",
    Background: "Room",
    Destination: -1,
  },
];

export { multiTestInteraction, ResettiTestySpaghetti, clickthroughTest };
