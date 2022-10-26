// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"Who goes there?",
"Halt citizen, state your business!",
];

var elizaFinals = [
"Better watch yourself, we don't want any funny business.",
"I've got my eye on you.",
"As long as you don't make trouble, then you won't have any trouble from me."
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "What's that supposed to mean ?",
     "I don't wanna hear none of that.",
     "Explain, before I put the dogs on ye!",
     "Keep your thoughts to yourself!",
     "Why do you say that ?",
     "This ain't a therapy session."
  ]]
]],
["sorry", 0, [
 ["*", [
     "You better be sorry!",
     "Ah it's nothing, just doing my job.",
     "Just be careful next time."
  ]]
]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["remember", 5, [
 ["* i remember *", [
     "What else do you recollect ?",
     "What made you think of that ?",
     "What else does (2) remind you of ?"
  ]],
 ["* do you remember *", [
     "Did you think I would forget (2) ?",
     "Why do you think I should recall (2) now ?",
     "What about (2) ?",
     "goto what",
     "You mentioned (2) ?"
  ]],
 ["* you remember *", [
     "How could I forget (2) ?",
     "What about (2) should I remember ?",
     "goto you"
  ]]
]],
["forget", 5, [
 ["* i forget *", [
     "Why can't you remember (2) ?",
     "Do you usually forget such simple things ?",
  ]],
 ["* did you forget *", [
     "Why do you ask ?",
     "Are you sure you told me ?",
     "Why should I recall (2) just now ?",
     "goto what",
     "Enlighten me."
  ]]
]],
["if", 3, [
 ["* if *", [
     "Do you think it's likely that (2) ?",
     "Do you wish that (2) ?",
     "What do you know about (2) ?",
     "Really, if (2) ?",
     "What would you do if (2) ?",
     "But what are the chances that (2) ?",
     "What does this speculation lead to ?"
  ]]
]],
["dreamed", 4, [
 ["* i dreamed *", [
     "Really, (2) ?",
     "Have you ever fantasized (2) while you were awake ?",
     "Have you ever dreamed (2) before ?",
     "goto dream"
  ]]
]],
["dream", 3, [
 ["*", [
     "What does that dream suggest to you ?",
     "Do you dream often ?",
     "What persons appear in your dreams ?",
     "Do you believe that dreams have something to do with your problem ?"
  ]]
]],
["perhaps", 0, [
 ["*", [
     "You don't seem quite certain.",
     "Why the uncertainty ?",
     "You aren't sure ?",
     "Don't you know ?",
     "How likely, would you estimate ?"
  ]]
]],
["name", 15, [
 ["*", [
     "I am not interested in names, I want answers!"
  ]]
]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand German."
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand French."
  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand Italian."
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand Spanish."
  ]]
]],
["xforeign", 0, [
 ["*", [
     "I speak only English."
  ]]
]],
["hello", 0, [
 ["*", [
     "How do you do.  Please state your name and purpose.",
     "Hi.  What seems to be the matter ?",
     "If you don't have anything useful to say, then don't bother me"
  ]]
]],
["computer", 50, [
 ["*", [
     "What's a computer?",
     "Never heard of it."
  ]]
]],
["am", 0, [
 ["* am i *", [
     "Do you believe you are (2) ?",
     "Would you want to be (2) ?",
     "goto what"
  ]],
 ["* i am *", [
     "goto i"
  ]],
 ["*", [
     "Why do you say 'am' ?",
     "I don't understand that.",
     "Cat got your tongue?"
  ]]
]],
["are", 0, [
 ["* are you *", [
     "Why are you interested in whether I am (2) or not ?",
     "Perhaps I am (2) in your fantasies.",
     "goto what",
     "Who's asking ?",
     "What if I were (2) ?"
  ]],
 ["* you are *", [
     "goto you"
  ]],
 ["* are *", [
     "Did you think they might not be (2) ?",
     "What's it matter?",
     "Are they always (2) ?",
     "Possibly they are (2).",
     "Are you positive they are (2) ?"
  ]]
]],
["your", 0, [
 ["* your *", [
     "Why are you concerned over my (2) ?",
     "What about your own (2) ?",
     "Really, my (2) ?",
     "why would you ask about my (2) ?",
     "Do you want my (2) ?"
  ]]
]],
["was", 2, [
 ["* was i *", [
     "What if you were (2) ?",
     "Do you think you were (2) ?",
     "Were you (2) ?",
     "What would it matter if you were (2) ?",
     "goto what"
  ]],
 ["* i was *", [
     "Were you really ?",
     "Why didn't you tell me that sooner ?",
     "Perhaps I already know you were (2)."
  ]],
 ["* was you *", [
     "What do you think ?",
     "Perhaps I was (2).",
     "What if I had been (2) ?"
  ]]
]],
["i", 0, [
 ["* i @desire *", [
     "Why do you want (3) ?",
     "What does wanting (3) have to do with this discussion ?"
  ]],
 ["* i am* @sad *", [
     "Aren't we all?",
     "Do you think coming here will help you not to be (3) ?",
     "Sorry to hear that.",
  ]],
 ["* i am* @happy *", [
     "Good for you!",
     "What made you want to tell me ?",
  ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
     "Do you really think so ?",
     "But you are not sure you (3).",
     "Do you really doubt you (3) ?"
  ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],
 ["* i am *", [
     "Is it because you are (2) that you came to me ?",
     "How long have you been (2) ?",
     "Do you know anyone else who is (2) ?"
  ]],
 ["* i @cannot *", [
     "How do you know that you can't (3) ?",
     "Have you tried ?",
     "Do you really want to be able to (3) ?",
     "What if you could (3) ?",
     "Do you expect me to do something about it ?"
  ]],
 ["* i don't *", [
     "Don't you really (2) ?",
     "Why don't you (2) ?",
     "So what?"
  ]],
 ["* i feel *", [
     "I don't need to know about your feelings."
  ]],
 ["* i * you *", [
     "Perhaps in your fantasies we (2) each other.",
     "Do you wish to (2) me ?",
     "Don't bother, I'm on duty."
  ]],
 ["*", [
     "You say (1) ?",
     "Can you elaborate on that ?",
     "Is there a reason you say (1) ?",
     "Interesting.",
     "Strange, you sure you aren't pulling my leg ?",
     "What're you talking about ?"
  ]]
]],
["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
 ["* you are *", [
     "What makes you think I am (2) ?",
     "What's it to ya?"
  ]],
 ["* you* me *", [
     "You like to think I (2) you -- don't you ?",
     "What makes you think I (2) you ?",
     "Really, I (2) you ?",
     "Suppose I did (2) you -- what of it ?",
  ]],
 ["* you *", [
     "We were discussing you -- not me.",
     "Oh, I (2) ?",
     "I'm the one asking questions!"
  ]]
]],
["yes", 0, [
 ["*", [
     "You seem to be quite positive.",
     "You are sure.",
     "I see.",
     "I understand."
  ]]
]],
["no", 0, [
 ["* no one *", [
     "Are you sure, no one (2) ?",
     "Surely someone (2) .",
     "Can you think of anyone at all ?",
     "Who, may I ask ?",
     "You have a particular person in mind, don't you ?",
  ]],
 ["*", [
     "You'd better not be trying to get on my bad side?",
     "I see.",
     "Why not ?",
  ]]
]],
["my", 2, [
 ["$ * my *", [
     "Does that have anything to do with the fact that your (2) ?",
     "Earlier you said your (2).",
     "But your (2)."
  ]],
 ["* my* @family *", [
     "Your (3) ?",
     "What've they got to do with this?"
  ]],
 ["* my *", [
     "Your (2) ?",
     "What does your (2) have to do with this ?",
  ]]
]],
["can", 0, [
 ["* can you *", [
     "You believe I can (2) don't you ?",
     "goto what",
     "You want me to be able to (2), what are you willing to pay ?",
     "Take care of it yourself, I'm busy."
  ]],
 ["* can i *", [
     "Whether or not you can (2) depends on you more than on me.",
     "Do you want to be able to (2) ?",
     "No",
     "Sure, why not",
     "goto what"
  ]]
]],
["what", 0, [
 ["*", [
     "Why do you ask ?",
     "Does that question interest you ?",
     "What is it you really want to know ?",
     "Are such questions much on your mind ?",
     "What answer would please you most ?",
     "What do you think ?",
     "What comes to mind when you ask that ?",
     "Have you asked such questions before ?",
     "Have you asked anyone else ?"
  ]]
]],
["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
     "Is that the real reason ?",
     "Don't any other reasons come to mind ?",
     "What other reasons might there be ?",
     "How could that be?"
  ]]
]],
["why", 0, [
 ["* why don't you *", [
     "Do you believe I don't (2) ?",
     "Perhaps I will (2) in good time.",
     "Should you (2) yourself ?",
     "You want me to (2) ?",
     "goto what"
  ]],
 ["* why can't i *", [
     "Do you want to be able to (2) ?",
     "Do you believe this will help you to (2) ?",
     "I can't be bothered with who can't take care of things themselves.",
     "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
     "Really, (2) ?",
     "Surely not (2).",
     "Can you think of anyone in particular ?",
     "Who, for example?",
     "Who, may I ask ?",
     "Someone special perhaps ?",
     "You have a particular person in mind, don't you ?",
  ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["always", 1, [
 ["*", [
     "Can you think of a specific example ?",
     "When ?",
     "What incident are you thinking of ?",
     "Really, always ?"
  ]]
]],
["alike", 10, [
 ["*", [
     "In what way ?",
     "What resemblence do you see ?",
     "What does that similarity suggest to you ?",
     "What other connections do you see ?",
     "What do you suppose that resemblence means ?",
     "What is the connection, do you suppose ?",
     "Could there really be some connection ?",
     "How ?"
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 0, [
 ["*", [
     "How is it different ?",
     "What differences do you see ?",
     "What does that difference suggest to you ?",
     "What other distinctions do you see ?",
     "What do you suppose that disparity means ?",
     "Could there be some connection, do you suppose ?",
     "How ?"
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof