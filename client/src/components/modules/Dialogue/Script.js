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

const Edna = [
  [
    {
      Index: 0,
      CharacterState: "EdnaNeut",
      Text: "Hello. I see that you came on time. Please, take a seat.",
      Background: "Meeting",
      Destination: 1,
    },
    {
      Index: 1,
      CharacterState: "EdnaNeut",
      Text: "So first, the good news. You have not been rejected.",
      Background: "Meeting",
      Destination: -1,
      Options: [
        { OptionIndex: 0.0, Text: "Hooray?", Destination: 2 },
        { OptionIndex: 1.0, Text: "Noted.", Destination: 2 },
      ],
    },
    {
      Index: 2,
      CharacterState: "EdnaNeut",
      Text: "Indeed. But do not celebrate just yet.",
      Background: "Meeting",
      Destination: 3,
    },
    {
      Index: 3,
      CharacterState: "EdnaHappy",
      Text: "We project that your growth through the near future may place you as a potential candidate for one of our lab positions.",
      Background: "Meeting",
      Destination: 4,
    },
    {
      Index: 4,
      CharacterState: "EdnaNeut",
      Text: "This is, however, in no way a guarantee of your success. Before we progress any further, you must first answer some questions for us.",
      Background: "Meeting",
      Destination: 5,
    },
    {
      Index: 5,
      CharacterState: "EdnaNeut",
      Text: "First: How many hours are you willing to commit to the project per week?",
      Background: "Meeting",
      Destination: -1,
      Options: [
        { OptionIndex: 2.0, Text: "Two hundred.", Destination: 6 },
        { OptionIndex: 3.0, Text: "Around ten?", Destination: 7 },
        { OptionIndex: 4.0, Text: "As many as it takes!", Destination: 8 },
      ],
    },
    {
      Index: 6,
      CharacterState: "EdnaNeut",
      Text: "While I admire your dedication, I doubt your physical ability to follow through. After all, there are only 4 days in a week.",
      Background: "Meeting",
      Destination: 9,
    },
    {
      Index: 7,
      CharacterState: "EdnaSad",
      Text: "Unfortunate.",
      Background: "Meeting",
      Destination: 9,
    },
    {
      Index: 8,
      CharacterState: "EdnaShook",
      Text: "An optimal response. I do hope you grasp the full meaning of your words.",
      Background: "Meeting",
      Destination: 9,
    },
    {
      Index: 9,
      CharacterState: "EdnaNeut",
      Text: "Second: Why choose academia? Surely the other options are cushier with the pay. What draws you to science?",
      Background: "Meeting",
      Destination: -1,
      Options: [
        { OptionIndex: 5.0, Text: "The hot researchers, of course!", Destination: 11 },
        {
          OptionIndex: 6.0,
          Text: "Uncovering the deep mysteries of nature gives me a special feeling of wonder.",
          Destination: 10,
        },
      ],
    },
    {
      Index: 10,
      CharacterState: "EdnaHappy",
      Text: "Ah, a kindred spirit. ",
      Background: "Meeting",
      Destination: 12,
    },
    {
      Index: 11,
      CharacterState: "EdnaShook",
      Text: "Surely there must be a better time for this...",
      Background: "Meeting",
      Destination: 12,
    },
    {
      Index: 12,
      CharacterState: "EdnaNeut",
      Text: "Final question: Why computer science?",
      Background: "Meeting",
      Destination: -1,
      Options: [
        { OptionIndex: 7.0, Text: "To help the people I love", Destination: 13 },
        { OptionIndex: 8.0, Text: "Because it's fun!", Destination: 13 },
        { OptionIndex: 9.0, Text: "Because it can be made better.", Destination: 13 },
      ],
    },
    {
      Index: 13,
      CharacterState: "EdnaNeut",
      Text: "A very interesting set of responses. We may report back after our analysis. Until then, continue to grow.",
      Background: "Meeting",
      Destination: 14,
    },
    {
      Index: 14,
      CharacterState: "EdnaFlus",
      Text: "Thank you for coming to this meeting. It was not unpleasant.",
      Background: "Meeting",
      Destination: -1,
    },
  ],
];
const Sylvia = [
  [
    {
      Index: 0,
      CharacterState: "SylviaNeut",
      Text: "Welcome. I'm surprised you actually showed up on time for once. Take a seat.",
      Background: "nan",
      Destination: 1,
    },
    {
      Index: 1,
      CharacterState: "SylviaAgit",
      Text: "Let's cut the chit chat. We both know why you're here. Buckle up, idiot.",
      Background: "nan",
      Destination: 2,
    },
    {
      Index: 2,
      CharacterState: "SylviaNeut",
      Text: "First question.",
      Background: "nan",
      Destination: 3,
    },
    {
      Index: 3,
      CharacterState: "SylviaNeut",
      Text: "What are is favorite technology brand?",
      Background: "nan",
      Destination: -1,
      Options: [
        { OptionIndex: 0.0, Text: "Bapple", Destination: 4 },
        { OptionIndex: 1.0, Text: "Bandroid", Destination: 4 },
        {
          OptionIndex: 2.0,
          Text: "Nile Technologies because the precise and refined combination of top notch hardware and software perfectly suits my fancy!",
          Destination: 5,
        },
      ],
    },
    {
      Index: 4,
      CharacterState: "SylviaAgit",
      Text: "Tsk. My rivals may have ... a few commendable qualities, but I must say your judgement is questionable!",
      Background: "nan",
      Destination: 6,
    },
    {
      Index: 5,
      CharacterState: "SylviaFlus",
      Text: "Indeed, my company is one of many great capabilities. It's what we pride ourselves on here at Nile. ",
      Background: "nan",
      Destination: 6,
    },
    {
      Index: 6,
      CharacterState: "SylviaNeut",
      Text: "Now, tell me about your experience in the industry. Let's see what you've got to offer.",
      Background: "nan",
      Destination: -1,
      Options: [
        {
          OptionIndex: 3.0,
          Text: "I'm just a tech enthusiast who's passionate about Nile Technologies! I've collected ever model of computer you've released eheh!",
          Destination: 7,
        },
        {
          OptionIndex: 4.0,
          Text: "I'm a computer science student from one of the best schools in the world.",
          Destination: 8,
        },
        {
          OptionIndex: 5.0,
          Text: "I haven't had any experience yet, but just you wait and see! I'll be the best!",
          Destination: 9,
        },
      ],
    },
    {
      Index: 7,
      CharacterState: "SylviaFlus",
      Text: "Really now? I'm impressed that someone as lowly as you can even afford them.",
      Background: "nan",
      Destination: -1,
      Options: [
        {
          OptionIndex: 6.0,
          Text: "I sold everything I had to buy the Papyrus 84 RGB edition!",
          Destination: 10,
        },
      ],
    },
    {
      Index: 8,
      CharacterState: "SylviaNeut",
      Text: "Eh, whatever. You're all the same. A dime a dozen.",
      Background: "nan",
      Destination: 11,
    },
    {
      Index: 9,
      CharacterState: "SylviaTsun",
      Text: "We'll see about that.",
      Background: "nan",
      Destination: 11,
    },
    {
      Index: 10,
      CharacterState: "SylviaNeut",
      Text: "Hmph. You're a bold one. I can't imagine what gives you that confidence.",
      Background: "nan",
      Destination: 11,
    },
    {
      Index: 11,
      CharacterState: "SylviaNeut",
      Text: "Anyways, final question.",
      Background: "nan",
      Destination: 12,
    },
    {
      Index: 12,
      CharacterState: "SylviaNeut",
      Text: "Why are you even trying? To be a computer scientist, I mean. What made you even consider it?",
      Background: "nan",
      Destination: -1,
      Options: [
        { OptionIndex: 7.0, Text: "The money.", Destination: 13 },
        { OptionIndex: 8.0, Text: "To help other people!", Destination: 13 },
        { OptionIndex: 9.0, Text: "Because computers can always be improved.", Destination: 14 },
      ],
    },
    {
      Index: 13,
      CharacterState: "SylviaNeut",
      Text: "That's the end. Thanks for keeping it short. Who knows, maybe if you keep being this stubborn you might actually see me again.",
      Background: "nan",
      Destination: -1,
    },
    {
      Index: 14,
      CharacterState: "SylviaFlus",
      Text: "Is that so? You might just be worth something after all.",
      Background: "nan",
      Destination: 13,
    },
  ],
];

const Martin = [
  [
    {
      Index: 0,
      CharacterState: "MartinRizz",
      Text: "Hey! So nice to see you again! How's it been?",
      Background: "Meeting",
      Destination: -1,
      Options: [
        { OptionIndex: 0.0, Text: "Terrible! ", Destination: 2 },
        { OptionIndex: 1.0, Text: "It's great to see you too!", Destination: 1 },
        { OptionIndex: 2.0, Text: "It's been swell.", Destination: 1 },
      ],
    },
    {
      Index: 1,
      CharacterState: "MartinNeut",
      Text: "That's great to hear! Greetings aside though, it's time to get into the meat and potatoes of this meeting.",
      Background: "Meeting",
      Destination: 3,
    },
    {
      Index: 2,
      CharacterState: "MartinGloom",
      Text: "That's unfortunate. I wish I had time to mourn your loss, but unfortunately we have other topics to discuss.",
      Background: "Meeting",
      Destination: 3,
    },
    {
      Index: 3,
      CharacterState: "MartinNeut",
      Text: "Let's get down to business. Our company has a few openings, but they're nothing official.",
      Background: "Meeting",
      Destination: 4,
    },
    {
      Index: 4,
      CharacterState: "MartinRizz",
      Text: 'You\'re under consideration but we need to see a bit... "more" before we can make a decision. ',
      Background: "Meeting",
      Destination: 5,
    },
    {
      Index: 5,
      CharacterState: "MartinRizz",
      Text: "We're going to start off with a few questions. First off: What do you find most fulfilling in life?",
      Background: "Meeting",
      Destination: -1,
      Options: [
        { OptionIndex: 3.0, Text: "Defending my nation at any and all costs!", Destination: 6 },
        { OptionIndex: 4.0, Text: "Churning out software faster than ChatGPT!", Destination: 6 },
        { OptionIndex: 5.0, Text: "Talking to you <3", Destination: 7 },
      ],
    },
    {
      Index: 6,
      CharacterState: "MartinMyst",
      Text: "That's what I like to hear! On to the next question!",
      Background: "Meeting",
      Destination: 8,
    },
    {
      Index: 7,
      CharacterState: "MartinFlus",
      Text: "Oh my~ Maybe some other time- the interview must continue!",
      Background: "Meeting",
      Destination: 8,
    },
    {
      Index: 8,
      CharacterState: "MartinNeut",
      Text: "Where do you see yourself in 5 years?",
      Background: "Meeting",
      Destination: -1,
      Options: [
        { OptionIndex: 6.0, Text: "At your mom's house", Destination: 9 },
        {
          OptionIndex: 7.0,
          Text: "A succesful SWE at Raylock, climbing the corporate ladder",
          Destination: 10,
        },
        { OptionIndex: 8.0, Text: "Working at another company, probably", Destination: 9 },
      ],
    },
    {
      Index: 9,
      CharacterState: "MartinGloom",
      Text: "Well that's rather rude of you to say...",
      Background: "Meeting",
      Destination: 10,
    },
    {
      Index: 10,
      CharacterState: "MartinNeut",
      Text: "Final question: Why did you get into computer science to start with?",
      Background: "Meeting",
      Destination: -1,
      Options: [
        { OptionIndex: 9.0, Text: "For the money", Destination: 11 },
        { OptionIndex: 10.0, Text: "To help out the people I love", Destination: 12 },
        { OptionIndex: 11.0, Text: "Because it's fun!", Destination: 11 },
      ],
    },
    {
      Index: 11,
      CharacterState: "MartinNeut",
      Text: "That's it for now! Thanks for coming out today. If you keep doing this well, expect more from us soon!",
      Background: "Meeting",
      Destination: -1,
    },
    {
      Index: 12,
      CharacterState: "MartinIbuk",
      Text: "What a noble goal!",
      Background: "Meeting",
      Destination: 11,
    },
  ],
];

const Jp = [
  [
    {
      Index: 0,
      CharacterState: "JpRizz",
      Text: "Hey kiddo, welcome to the meeting! Let's get right into it.",
      Background: "Meeting",
      Destination: 1,
    },
    {
      Index: 1,
      CharacterState: "JpRizz",
      Text: "Look. I'm a businessman, I do business. But what I really need to know, is...",
      Background: "Meeting",
      Destination: 2,
    },
    {
      Index: 2,
      CharacterState: "JpTrade",
      Text: "are YOU a businessman?",
      Background: "Meeting",
      Destination: -1,
      Options: [
        { OptionIndex: 0.0, Text: "Yes.", Destination: 3 },
        { OptionIndex: 1.0, Text: "No.", Destination: 4 },
        { OptionIndex: 2.0, Text: "Business.", Destination: 5 },
      ],
    },
    {
      Index: 3,
      CharacterState: "JpNeut",
      Text: "Interesting. Let's see you prove it.",
      Background: "Meeting",
      Destination: 6,
    },
    {
      Index: 4,
      CharacterState: "JpAgit",
      Text: "Get out of my sight.",
      Background: "Meeting",
      Destination: -1,
    },
    {
      Index: 5,
      CharacterState: "JpRizz",
      Text: "Ah yes, a fellow man of business. We love to see it.",
      Background: "Meeting",
      Destination: 6,
    },
    {
      Index: 6,
      CharacterState: "JpNeut",
      Text: "Anwyays. We're gonna ask you a few questions to get a read on your business vibe.",
      Background: "Meeting",
      Destination: 7,
    },
    { Index: 7, CharacterState: "JpRizz", Text: "First.", Background: "Meeting", Destination: 8 },
    {
      Index: 8,
      CharacterState: "JpNeut",
      Text: "What is the most important number that you value in a partner?",
      Background: "Meeting",
      Destination: -1,
      Options: [
        { OptionIndex: 3.0, Text: "Body count", Destination: 9 },
        { OptionIndex: 4.0, Text: "Net worth", Destination: 10 },
        { OptionIndex: 5.0, Text: "Follicle count", Destination: 9 },
      ],
    },
    {
      Index: 9,
      CharacterState: "JpAgit",
      Text: "These are definitely some of the numbers ever.",
      Background: "Meeting",
      Destination: 11,
    },
    {
      Index: 10,
      CharacterState: "JpRizz",
      Text: "Extremely true of you.",
      Background: "Meeting",
      Destination: 11,
    },
    {
      Index: 11,
      CharacterState: "JpNeut",
      Text: "Second question.",
      Background: "Meeting",
      Destination: 12,
    },
    {
      Index: 12,
      CharacterState: "JpNeut",
      Text: "How much do you value money?",
      Background: "Meeting",
      Destination: -1,
      Options: [
        { OptionIndex: 6.0, Text: "More than my own life.", Destination: 13 },
        { OptionIndex: 7.0, Text: "It's just ok.", Destination: 14 },
        { OptionIndex: 8.0, Text: "The world runs on it.", Destination: 14 },
      ],
    },
    {
      Index: 13,
      CharacterState: "JpRizz",
      Text: "As you should.",
      Background: "Meeting",
      Destination: 15,
    },
    {
      Index: 14,
      CharacterState: "JpNeut",
      Text: "That's alright. Other things do definitely exist.",
      Background: "Meeting",
      Destination: 15,
    },
    {
      Index: 15,
      CharacterState: "JpTrade",
      Text: "Final question: Why Computer Science? Why, in fact, choose anythign but business?",
      Background: "Meeting",
      Destination: -1,
      Options: [
        { OptionIndex: 9.0, Text: "Because it can be imrpoved.", Destination: 16 },
        { OptionIndex: 10.0, Text: "For the money.", Destination: 16 },
        { OptionIndex: 11.0, Text: "Because it's fun.", Destination: 16 },
      ],
    },
    {
      Index: 16,
      CharacterState: "JpNeut",
      Text: "Interesting response.",
      Background: "Meeting",
      Destination: 17,
    },
    {
      Index: 17,
      CharacterState: "JpNeut",
      Text: "Well thank you for coming out today. If you continue to dedicate yourself to business, we may meet again.",
      Background: "Meeting",
      Destination: 18,
    },
    {
      Index: 18,
      CharacterState: "JpRizz",
      Text: "And remember. Avarice is Awesome.",
      Background: "Meeting",
      Destination: -1,
    },
  ],
  [
    {
      Index: 0,
      CharacterState: "JpRizz",
      Text: "Greetings, child! So we meet again. Was it fate that the ebbing and flowing of the stock markets pushed us together? ",
      Background: "Meeting",
      Destination: 1,
    },
    {
      Index: 1,
      CharacterState: "JpNeut",
      Text: "Haha, I jest.",
      Background: "Meeting",
      Destination: 2,
    },
    {
      Index: 2,
      CharacterState: "JpNeut",
      Text: " I'm here, not by chance, but because I see you as a connection- a valuable connection even.",
      Background: "Meeting",
      Destination: 3,
    },
    {
      Index: 3,
      CharacterState: "JpNeut",
      Text: "I'm interested in deepening our relationship.",
      Background: "Meeting",
      Destination: -1,
      Options: [
        { OptionIndex: 0.0, Text: "I too wish to network with you!", Destination: 5 },
        { OptionIndex: 1.0, Text: "The world revolves around connections. ", Destination: 4 },
        { OptionIndex: 2.0, Text: "*blushing* u- uwu???", Destination: 6 },
      ],
    },
    {
      Index: 4,
      CharacterState: "JpNeut",
      Text: "As it does!",
      Background: "Meeting",
      Destination: -1,
    },
    {
      Index: 5,
      CharacterState: "JpNeut",
      Text: "You learn quickly! I'm always happy to see the growth of young business people!",
      Background: "Meeting",
      Destination: -1,
    },
    {
      Index: 6,
      CharacterState: "JpNeut",
      Text: 'What is "uwu"... Is that a new company perhaps? I\'m interested to see what opportunities it may offer us.',
      Background: "Meeting",
      Destination: -1,
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
    },
    {
      Index: 1,
      CharacterState: "Empty",
      Text: "Shoot, it’s already almost noon! I need to get going soon or I’m dead meat!",
      Background: "Room",
      Destination: -1,
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
    },
    {
      Index: 3,
      CharacterState: "MartinMyst",
      Text: "My company Raylock specializes in the development of new technology, for the sake of protecting our dear home nation, Web.Landia!",
      Background: "Table",
      Destination: 4,
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
    },
    {
      Index: 6,
      CharacterState: "EdnaNeut",
      Text: "Hello, my name is Edna Tonne, and I am a Junior Researcher at the Ungulate Institute of Technology.",
      Background: "Table",
      Destination: 7,
    },
    {
      Index: 7,
      CharacterState: "EdnaNeut",
      Text: "My lab here studies the depths of advanced computer science. Our work isn't easy; you really have to know what you're doing to get far in this field.",
      Background: "Table",
      Destination: 8,
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
    },
    {
      Index: 10,
      CharacterState: "JpRizz",
      Text: "Hey kid, how're doing? Good? Good. I'm doing good too. My name is JP Silverbags, by the way, and I'm a consultant for the Castle Avenue Bank. ",
      Background: "Table",
      Destination: 11,
    },
    {
      Index: 11,
      CharacterState: "JpNeut",
      Text: 'We have a motto here:  "avarice is awesome". You know the right people, push the right buttons, you can go far.',
      Background: "Table",
      Destination: 12,
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
    },
    {
      Index: 14,
      CharacterState: "SylviaNeut",
      Text: "Welcome welcome, one and all, to the tablke of Sylvia Besk, CEO of Nile Technologies! Now come on, hurry it up, I haven't got all day.",
      Background: "Table",
      Destination: 15,
    },
    {
      Index: 15,
      CharacterState: "SylviaAgit",
      Text: "You know, you're lucky I'm even still here. This is the future of tech, and you think it's acceptable to show up 5 minutes before closing?",
      Background: "Table",
      Destination: 16,
    },
    {
      Index: 16,
      CharacterState: "SylviaNeut",
      Text: "Well whatever. You still came, so you're willing to work. Take this and go already, I'm starving here. ",
      Background: "Table",
      Destination: 17,
    },
    {
      Index: 17,
      CharacterState: "Empty",
      Text: "That was definitely an experience... it looks like all of these cards have times for other meetings on the back. I wonder if I can fit those into my schedule?",
      Background: "Conference",
      Destination: 18,
    },
    {
      Index: 18,
      CharacterState: "Empty",
      Text: "Honestly though with how underqualified they made me out to be, maybe I should take some time to grind first. I'll just head home for the day.",
      Background: "Conference",
      Destination: -1,
    },
    {
      Index: 19,
      CharacterState: "Empty",
      Text: "Oh no! This is a dead end. Maybe the other way instead?",
      Background: "Corridor",
      Destination: 0,
    },
  ],
  [
    {
      Index: 0,
      CharacterState: "Empty",
      Text: "Oh Jesus Christ, oh God, oh man. Why do I suddenly feel so tired? My body refuses to move. What is this?",
      Background: "Room",
      Destination: 1,
    },
    {
      Index: 1,
      CharacterState: "Empty",
      Text: "Wait, that's right! I did so much last week... maybe too much. I'm feeling faint...",
      Background: "Room",
      Destination: 2,
    },
    {
      Index: 2,
      CharacterState: "Empty",
      Text: "You find yourself passing out onto the nearest soft object. You do not wake up for the next 2 days.",
      Background: "Room",
      Destination: -1,
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

export { ResettiTestySpaghetti, clickthroughTest, IntroSegment, Martin, Edna, Jp, Sylvia };
