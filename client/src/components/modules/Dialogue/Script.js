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

const Martin = [
  [
    {
      Index: 0,
      CharacterState: "MartinRizz",
      Text: "Hey! So nice to see you again! How's it been?",
      Background: "Meeting",
      Destination: -1,
    },
    {
      Index: 1,
      CharacterState: "nan",
      Text: "Terrible! ",
      Background: "Meeting",
      Destination: 3,
      Options: [
        { OptionIndex: 0.0, Text: "It's great to see you too!", Destination: 2 },
        { OptionIndex: 1.0, Text: "It's been swell.", Destination: 2 },
      ],
    },
    {
      Index: 2,
      CharacterState: "MartinNeut",
      Text: "That's great to hear! Greetings aside though, it's time to get into the meat and potatoes of this meeting.",
      Background: "Meeting",
      Destination: 4,
    },
    {
      Index: 3,
      CharacterState: "MartinGloom",
      Text: "That's unfortunate. I wish I had time to mourn your loss, but unfortunately we have other topics to discuss.",
      Background: "Meeting",
      Destination: 4,
    },
    {
      Index: 4,
      CharacterState: "MartinNeut",
      Text: "Let's get down to business. Our company has a few openings, but they're nothing official.",
      Background: "Meeting",
      Destination: 5,
    },
    {
      Index: 5,
      CharacterState: "MartinRizz",
      Text: 'You\'re under consideration but we need to see a bit... "more" before we can make a decision. ',
      Background: "Meeting",
      Destination: 6,
    },
    {
      Index: 6,
      CharacterState: "MartinRizz",
      Text: "We're going to start off with a few questions. First off: What do you find most fulfilling in life?",
      Background: "Meeting",
      Destination: -1,
      Options: [
        { OptionIndex: 2.0, Text: "Defending my nation at any and all costs!", Destination: 7 },
        { OptionIndex: 3.0, Text: "Churning out software faster than ChatGPT!", Destination: 7 },
        { OptionIndex: 4.0, Text: "Talking to you <3", Destination: 8 },
      ],
    },
    {
      Index: 7,
      CharacterState: "MartinMyst",
      Text: "That's what I like to hear! On to the next question!",
      Background: "Meeting",
      Destination: 9,
    },
    {
      Index: 8,
      CharacterState: "MartinFlus",
      Text: "Oh my~ Maybe some other time- the interview must continue!",
      Background: "Meeting",
      Destination: 9,
    },
    {
      Index: 9,
      CharacterState: "MartinNeut",
      Text: "Where do you see yourself in 5 years?",
      Background: "Meeting",
      Destination: -1,
      Options: [
        { OptionIndex: 5.0, Text: "At your mom's house", Destination: 10 },
        {
          OptionIndex: 6.0,
          Text: "A succesful SWE at Raylock, climbing the corporate ladder",
          Destination: 11,
        },
        { OptionIndex: 7.0, Text: "Working at another company, probably", Destination: 10 },
      ],
    },
    {
      Index: 10,
      CharacterState: "MartinGloom",
      Text: "Well that's rather rude of you to say...",
      Background: "Meeting",
      Destination: 11,
    },
    {
      Index: 11,
      CharacterState: "MartinNeut",
      Text: "Final question: Why did you get into computer science to start with?",
      Background: "Meeting",
      Destination: -1,
      Options: [
        { OptionIndex: 8.0, Text: "For the money", Destination: 12 },
        { OptionIndex: 9.0, Text: "To help out the people I love", Destination: 13 },
        { OptionIndex: 10.0, Text: "Because it's fun!", Destination: 12 },
      ],
    },
    {
      Index: 12,
      CharacterState: "MartinNeut",
      Text: "That's it for now! Thanks for coming out today. If you keep doing this well, expect more from us soon!",
      Background: "Meeting",
      Destination: -1,
    },
    {
      Index: 13,
      CharacterState: "MartinIbuk",
      Text: "What a noble goal!",
      Background: "Meeting",
      Destination: 12,
    },
  ],
];

const IntroSegment = [
  [
    {
      Index: 0,
      CharacterState: "Empty",
      Text: "I can’t believe this! Is it really the career fair already? I barely got my resume together in time last night, I’m totally unprepared!",
      Background: "Room",
      Destination: 1,
      Options: [],
    },
    {
      Index: 1,
      CharacterState: "Empty",
      Text: "Shoot, it’s already almost noon! I need to get going soon or I’m dead meat!",
      Background: "Room",
      Destination: -1,
      Options: [],
    },
  ],
  [
    {
      Index: 0,
      CharacterState: "Empty",
      Text: "I made it in time! But barely! Gotta get to the tech section quick! But where is it?",
      Background: "Conference",
      Destination: -1,
      Options: [
        { OptionIndex: 0.0, Text: "Go Left", Destination: 19 },
        { OptionIndex: 1.0, Text: "Go Right", Destination: 1 },
      ],
    },
    {
      Index: 1,
      CharacterState: "Empty",
      Text: "Hm, this looks right... there's only 4 tables though. I hoped there'd be more than this... I guess I'll start from the close end.",
      Background: "Corridor",
      Destination: -1,
      Options: [
        { OptionIndex: 2.0, Text: "Visit the table with the model rocket", Destination: 2 },
      ],
    },
    {
      Index: 2,
      CharacterState: "MartinNeut",
      Text: "Howdy there! Are you here for the career fair? My name is Martin L. Ray, but you can just call me Marty!",
      Background: "Table",
      Destination: 3,
      Options: [],
    },
    {
      Index: 3,
      CharacterState: "MartinMyst",
      Text: "My company Raylock specializes in the development of new technology, for the sake of protecting our dear home nation, Web.Landia!",
      Background: "Table",
      Destination: 4,
      Options: [],
    },
    {
      Index: 4,
      CharacterState: "MartinIbuk",
      Text: "Here's the number for later. So whaddya say, are you interested?",
      Background: "Table",
      Destination: -1,
      Options: [
        { OptionIndex: 3.0, Text: "Yeah, of course!", Destination: 5 },
        {
          OptionIndex: 5.0,
          Text: "Sorry, could you repeat that? I was too busy staring into your eyes...",
          Destination: 5,
        },
      ],
    },
    {
      Index: 5,
      CharacterState: "MartinFlus",
      Text: "It was nice talking to you, but I you should probably move on! Wouldn't want to keep the others waiting, after all.",
      Background: "Table",
      Destination: 6,
      Options: [],
    },
    {
      Index: 6,
      CharacterState: "EdnaNeut",
      Text: "Hello, my name is Edna Tonne, and I am a Junior Researcher at the Ungulate Institute of Technology.",
      Background: "Table",
      Destination: 7,
      Options: [],
    },
    {
      Index: 7,
      CharacterState: "EdnaNeut",
      Text: "My lab here studies the depths of advanced computer science. Our work isn't easy; you really have to know what you're doing to get far in this field.",
      Background: "Table",
      Destination: 8,
      Options: [],
    },
    {
      Index: 8,
      CharacterState: "EdnaHappy",
      Text: "We happen to be looking for new assistants. I think you have potential.. Take a card, won't you?",
      Background: "Table",
      Destination: -1,
      Options: [{ OptionIndex: 9.0, Text: "I'll be in touch!", Destination: 9 }],
    },
    {
      Index: 9,
      CharacterState: "EdnaNeut",
      Text: "Why don't you move along now?  It's almost lunchtime.",
      Background: "Table",
      Destination: 10,
      Options: [],
    },
    {
      Index: 10,
      CharacterState: "JpRizz",
      Text: "Hey kid, how're doing? Good? Good. I'm doing good too. My name is JP Silverbags, by the way, and I'm a consultant for the Castle Avenue Bank. ",
      Background: "Table",
      Destination: 11,
      Options: [],
    },
    {
      Index: 11,
      CharacterState: "JpNeut",
      Text: 'We have a motto here:  "avarice is awesome". You know the right people, push the right buttons, you can go far.',
      Background: "Table",
      Destination: 12,
      Options: [],
    },
    {
      Index: 12,
      CharacterState: "JpNeut",
      Text: "You might not look like much now, but I think you'll be worth something. Have this. On me.",
      Background: "Table",
      Destination: -1,
      Options: [
        { OptionIndex: 10.0, Text: '"Avarice is awesome," huh. ', Destination: 13 },
        { OptionIndex: 11.0, Text: "Avarice is awesome, and so are you!", Destination: 13 },
      ],
    },
    {
      Index: 13,
      CharacterState: "JpAgit",
      Text: "Yeah, you're getting it! Now run along kiddo, that next guy seems a little impatient...",
      Background: "Table",
      Destination: 14,
      Options: [],
    },
    {
      Index: 14,
      CharacterState: "SylviaNeut",
      Text: "Welcome welcome, one and all, to the tablke of Sylvia Besk, CEO of Nile Technologies! Now come on, hurry it up, I haven't got all day.",
      Background: "Table",
      Destination: 15,
      Options: [],
    },
    {
      Index: 15,
      CharacterState: "SylviaAgit",
      Text: "You know, you're lucky I'm even still here. This is the future of tech, and you think it's acceptable to show up 5 minutes before closing?",
      Background: "Table",
      Destination: 16,
      Options: [],
    },
    {
      Index: 16,
      CharacterState: "SylviaNeut",
      Text: "Well whatever. You still came, so you're willing to work. Take this and go already, I'm starving here. ",
      Background: "Table",
      Destination: 17,
      Options: [],
    },
    {
      Index: 17,
      CharacterState: "Empty",
      Text: "That was definitely an experience... it looks like all of these cards have times for other meetings on the back. I wonder if I can fit those into my schedule?",
      Background: "Conference",
      Destination: 18,
      Options: [],
    },
    {
      Index: 18,
      CharacterState: "Empty",
      Text: "Honestly though with how underqualified they made me out to be, maybe I should take some time to grind first. I'll just head home for the day.",
      Background: "Conference",
      Destination: -1,
      Options: [],
    },
    {
      Index: 19,
      CharacterState: "Empty",
      Text: "Oh no! This is a dead end. Maybe the other way instead?",
      Background: "Conference",
      Destination: 0,
      Options: [],
    },
  ],
  [
    {
      Index: 0,
      CharacterState: "Empty",
      Text: "Oh Jesus Christ, oh God, oh man. Why do I suddenly feel so tired? My body refuses to move. What is this?",
      Background: "Room",
      Destination: 1,
      Options: [],
    },
    {
      Index: 1,
      CharacterState: "Empty",
      Text: "Wait, that's right! I did so much last week... maybe too much. I'm feeling faint...",
      Background: "Room",
      Destination: 2,
      Options: [],
    },
    {
      Index: 2,
      CharacterState: "Empty",
      Text: "You find yourself passing out onto the nearest soft object. You do not wake up for the next 2 days.",
      Background: "nan",
      Destination: -1,
      Options: [],
    },
  ],
];

const ResettiTestySpaghetti = [
  {
    Index: 0,
    CharacterState: "Empty",
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

export { ResettiTestySpaghetti, clickthroughTest, IntroSegment, Martin };
