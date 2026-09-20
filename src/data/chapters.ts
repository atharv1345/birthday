export type ChapterType =
  | 'story'
  | 'scrapbook'
  | 'polaroid-hero'
  | 'cards'
  | 'notes'
  | 'timeline'
  | 'chat-feel'
  | 'lily'
  | 'letter'
  | 'transition'
  | 'finale'

export interface PersonalityCard {
  id: string
  title: string
  line: string
  icon?: string
}

export interface TimelineStep {
  label: string
  detail?: string
}

export interface ChatBubble {
  text: string
  side: 'left' | 'right'
  time?: string
}

export interface Chapter {
  id: number
  number: string
  title: string
  shortTitle: string
  description: string
  subtitle?: string
  type: ChapterType
  leftContent: string[]
  rightContent: string[]
  images?: string[]
  cards?: PersonalityCard[]
  timeline?: TimelineStep[]
  bubbles?: ChatBubble[]
  notes?: string[]
  leftNote?: string
  rightNote?: string
  rightHeading?: string
  horizontalTimeline?: string[]
  bullets?: string[]
  stickyNotes?: string[]
  closingNote?: string
}

export const CHAPTERS: Chapter[] = [
  {
    id: 1,
    number: '01',
    title: 'The Beginning',
    shortTitle: 'The Beginning',
    description: 'How our story really started',
    type: 'story',
    leftContent: [
      'We were not always this close.',
      "In school, we existed in the same world — but not really in each other's orbit.",
      "We knew of each other, shared the same place, the same days… but there wasn't really a story between us.",
      'Then school ended.',
      'Life moved forward, and somehow, we never really got the chance to meet again.',
    ],
    leftNote: "Funny how some stories don't begin when you expect them to.",
    rightHeading: 'And then life had other plans...',
    rightContent: [
      'Later, during college, a different situation brought our conversations to life.',
      'At first, it was simple.',
      'Normal friendship.',
      'Ordinary messages.',
      'Random conversations.',
      'Nothing that seemed like the beginning of anything.',
      'But slowly, talking became easier.',
      'A few conversations became more.',
      'And somehow, something that started so normally became a part of everyday life.',
      "Maybe that's how some of the best stories begin.",
      'Quietly. Unexpectedly.',
    ],
    horizontalTimeline: ['SCHOOL', 'COLLEGE', 'CONVERSATIONS', 'FRIENDSHIP'],
    rightNote:
      "I didn't know it then... but this was going to become one of my favourite little chapters.",
  },
  {
    id: 2,
    number: '02',
    title: 'And Then...',
    shortTitle: 'And Then...',
    description: 'Things started to change',
    type: 'scrapbook',
    leftContent: [
      'Somewhere between random conversations and late replies, things got easier.',
      'Jokes landed. Silences felt comfortable. Daily messages became a rhythm.',
      'Nothing dramatic happened overnight. It just… became meaningful.',
    ],
    leftNote:
      "The best stories don't always begin with fireworks. Sometimes they start with small conversations.",
    stickyNotes: [
      'Random chats',
      'Jokes & replies',
      'More conversations',
      'Something meaningful',
    ],
    rightContent: [
      'Familiarity grew quietly.',
      'You became someone I looked forward to talking to.',
      'Not because of big moments — because of the little ones.',
      'Comfort settled in without either of us announcing it.',
    ],
    bullets: [
      'Talking became easier.',
      'Replies started mattering.',
      'Silences felt comfortable.',
      'Daily messages became a habit.',
      'Ordinary chats started feeling special.',
    ],
    closingNote: "It wasn't planned. It wasn't expected. But it was real.",
    rightNote: 'What changed?',
  },
  {
    id: 3,
    number: '03',
    title: 'That Picture',
    shortTitle: 'That Picture',
    description: "A moment I'll never forget",
    subtitle: 'A moment I’ll never forget.',
    type: 'polaroid-hero',
    leftContent: [
      'You probably sent it like it was just another photo.',
      "But you probably don't know how important that moment was for me.",
      "Maybe you didn't think much of it.",
      'I did.',
    ],
    leftNote: "Maybe you didn't think much of it. I did.",
    bullets: [
      'Because it felt unexpected.',
      'Because it felt personal.',
      'Because it stayed with me.',
      'Because ordinary suddenly felt special.',
    ],
    stickyNotes: [
      'Some photos are just photos. Some become memories. This one became mine.',
    ],
    rightContent: [
      'Fresher party...',
      'A new place.',
      'New people.',
      'One simple picture.',
    ],
    rightNote:
      'A simple photo. A simple moment. Somehow, it became something I go back to — again and again.',
    images: ['fresher-party.png'],
    closingNote: 'You looked like a memory waiting to happen.',
  },
  {
    id: 4,
    number: '04',
    title: "That's So You",
    shortTitle: "That's So You",
    description: 'All the things that define you',
    subtitle: 'Some people have many sides... You have a collection of the best ones.',
    type: 'cards',
    leftContent: [],
    rightContent: [
      "What makes you, you... It's not just one thing.",
      "It's all these little things together.",
      "And that's what makes you so incredibly special.",
    ],
    cards: [
      { id: 'topper', title: 'TOPPER', line: 'Career first. Always. Determined and focused.', icon: '🎓' },
      { id: 'caring', title: 'CARING', line: "You care, even when you don't always say it.", icon: '♡' },
      { id: 'cute', title: 'CUTE', line: 'No explanation required.', icon: '✦' },
      { id: 'introvert', title: 'INTROVERT', line: "Quiet outside. Different once you're comfortable.", icon: '☁' },
      { id: 'serious', title: 'SERIOUS', line: 'Serious about your future.', icon: '☆' },
      { id: 'naughty', title: 'NAUGHTY', line: 'Only occasionally... allegedly.', icon: '☺' },
      { id: 'kitkat', title: 'KITKAT', line: 'Happiness can be broken into four fingers.', icon: '🍫' },
    ],
    leftNote: "Every little side of you has a story. And honestly... they're all my favourite.",
    rightNote: "Be whatever you are. Just don't ever stop being you.",
    closingNote: 'Break. Smile. Repeat.',
    images: ['kitkat.png'],
  },
  {
    id: 5,
    number: '05',
    title: 'Things I Notice',
    shortTitle: 'Things I Notice',
    description: 'Little things that mean a lot',
    subtitle: 'Little things that mean a lot.',
    type: 'notes',
    leftContent: [
      'The way you laugh in messages.',
      'The way you care without announcing it.',
    ],
    rightContent: [],
    notes: ['Your kindness.', 'The way you care.', 'Your little cute moments.'],
    stickyNotes: ['Same Chats Different Happiness ♡', "The fact that you're simply you."],
    bullets: [
      'The words you choose.',
      'The honesty in your texts.',
      'Your “Yrr” moments.',
      'The way you tease.',
      'Your quiet kindness.',
      'Your Topper energy.',
      'Your random replies.',
      'Your soft seriousness.',
    ],
    bubbles: [
      { text: 'Good morning', side: 'left', time: '9:12 AM' },
      { text: 'Hiiii good morning jii', side: 'right', time: '9:13 AM' },
      { text: 'Good morning', side: 'left', time: '9:14 AM' },
      { text: 'Kaiso ho?', side: 'right', time: '9:14 AM' },
      { text: 'Mai thik hu, tum batao', side: 'left', time: '9:15 AM' },
      { text: 'Mai bhi thik hu. Pata hai aaj mere sath kya hua?', side: 'right', time: '9:16 AM' },
      { text: 'Kya hua batao', side: 'left', time: '9:16 AM' },
    ],
    leftNote:
      "It's not one big thing. It's all these little things together that make you, you. And honestly… I love that.",
    rightNote: 'You may not notice how special you are. But I do. Every single day.',
    closingNote: 'All these little chats… They mean a lot.',
  },
  {
    id: 6,
    number: '06',
    title: 'One Year',
    shortTitle: 'One Year',
    description: 'Our little timeline so far',
    subtitle: 'Around one year of conversations — not measured in dates, but in becoming familiar.',
    type: 'timeline',
    leftContent: [
      'One year of little talks.',
      'One year of becoming comfortable.',
      'One year of something quiet and real.',
    ],
    rightContent: [],
    timeline: [
      { label: 'Then', detail: 'Just two people in the same world.' },
      { label: 'Normal Friends', detail: 'Simple talks. Nothing heavy.' },
      { label: 'Conversations Started', detail: 'College brought us into messages.' },
      { label: 'More Conversations', detail: 'Talking became easier.' },
      { label: 'Daily Talks', detail: 'A rhythm. A habit. A comfort.' },
      { label: 'One Year', detail: 'Not dates — familiarity.' },
      { label: 'Now', detail: 'Still talking. Still important.' },
    ],
    bullets: [
      'random chats',
      'late replies',
      'jokes',
      'check-ins',
      'comfort',
      'care',
    ],
    leftNote: 'Little moments. Big meaning.',
    rightNote: 'Not just One year of talks, but two years of growing — together.',
    stickyNotes: ['One year of becoming familiar — quietly.'],
  },
  {
    id: 7,
    number: '07',
    title: 'Our Little Universe',
    shortTitle: 'Our Universe',
    description: 'Our daily talks, our vibe',
    subtitle: 'Most of our world lives inside messages.',
    type: 'chat-feel',
    leftContent: [
      'Instagram.',
      'WhatsApp.',
      'Random texts.',
      'Late replies.',
      '“Yrr...”',
      '“Jii...”',
      '“Topper...”',
    ],
    rightContent: ['A normal day in our little universe...'],
    bubbles: [
      { text: 'Haa yaar 🌷', side: 'left', time: '10:14 AM' },
      { text: 'jii haa bilkul waise kya kar rahi hai aap 😂', side: 'right', time: '10:15 AM' },
      { text: 'kuch nahi', side: 'left', time: '10:16 AM' },
      { text: 'accha to phir Padhai kar lo, Topper to ho hi aap .', side: 'right', time: '10:17 AM' },
      { text: 'Haa haa topper mat bola karo', side: 'left', time: '10:18 AM' },
      { text: 'kyu na bolu 😂😂', side: 'right', time: '10:19 AM' },
    ],
    leftNote: 'And conversations that somehow became part of everyday life.',
    rightNote: 'Some friendships are built in places you can’t photograph.',
    closingNote: 'Two people. One little universe. Built one conversation at a time.',
  },
  {
    id: 8,
    number: '08',
    title: 'Pink Lily',
    shortTitle: 'Pink Lily',
    description: 'A flower that reminds me of you',
    subtitle: "Maybe it's just a flower. Maybe not.",
    type: 'lily',
    leftContent: [
      "I don't know when the pink lily became your thing.",
      "Maybe it's just a flower.",
      'Maybe you simply like it.',
      'But now whenever I see one...',
      'I think of you.',
    ],
    rightContent: ['soft', 'pretty', 'a little rare', 'quietly beautiful'],
    images: ['pink-lily.png'],
    leftNote: 'Little things sometimes leave the biggest impressions.',
    rightNote: 'Now whenever I see one, I think of you.',
    stickyNotes: ['Oh... Sumeet.', 'Touch the flower'],
    closingNote:
      "Maybe that's what happens when someone becomes a little more important than they realize.",
  },
  {
    id: 9,
    number: '09',
    title: 'One Thing I Never Said',
    shortTitle: 'One Thing',
    description: 'A little truth that deserved a page',
    subtitle: 'One quiet truth — said carefully.',
    type: 'letter',
    leftContent: [
      "There is something I've never really known how to say.",
      'Somewhere along the way, you became more than just another person I talk to every day.',
      'I started caring about your happiness.',
      'I started remembering the little things.',
      'I started looking forward to your messages.',
      'And somewhere in between all of that...',
      'I started liking you.',
    ],
    rightContent: [
      "But don't worry, Jii.",
      "This isn't a question.",
      "It's not a confession that expects anything from you.",
      "It's simply a little truth that deserved a page in this book.",
      "I'm not going anywhere.",
      'Same talks. Same jokes. Same “Yrr”.',
      'No pressure. No expectations.',
    ],
    leftNote: "Some feelings don't follow rules.",
    rightNote: "Some feelings don't need an ending. Sometimes you just let them exist quietly.",
    stickyNotes: ['I still care. Quietly. Respectfully.'],
    closingNote: 'Some things are not meant to be perfect. Some are just meant to be real.',
  },
  {
    id: 10,
    number: '10',
    title: "Today Isn't About That",
    shortTitle: "Today Isn't About That",
    description: 'Today is about YOU',
    type: 'transition',
    leftContent: [
      "Today isn't about what I feel.",
      "Today isn't about expectations.",
      "Today isn't about answers.",
      "Today isn't about the past.",
      'Today is about YOU.',
    ],
    rightContent: [
      "Let's forget complicated feelings.",
      "Let's forget overthinking.",
      "Let's forget pressure.",
      "Let's forget everything heavy.",
      "Let's just keep it simple.",
      "Let's just celebrate YOU.",
      'The girl who deserves to have one day where she feels genuinely special.',
    ],
    bullets: [
      'cares about everyone so easily',
      'remembers little things',
      'gets serious about her dreams',
      'works hard without making a big deal out of it',
      'still makes people laugh with her random chats',
      'is cute, innocent, irritating, amazing...',
      'and absolutely irreplaceable.',
    ],
    leftNote: 'Because today is your day, Jii.',
    rightNote: "No expectations. No questions. No “what ifs”. Just this moment.",
    stickyNotes: ['Happy Birthday, Jii.', "You don't need a reason to be celebrated. You just need to be YOU."],
    closingNote: "Here's to you, today and always.",
  },
  {
    id: 11,
    number: '11',
    title: 'For You, Jii',
    shortTitle: 'For You, Jii',
    description: 'Happy Birthday — 21 September',
    type: 'finale',
    leftContent: [
      'I hope this little book made you smile.',
      'I hope you laughed at least once.',
      'And I hope, even for a little while, you felt how special you actually are.',
    ],
    rightContent: [
      'Keep being caring.',
      'Keep being cute.',
      'Keep being serious about your dreams.',
      'Keep being that annoying little Topper.',
      "And please... don't change the person you are.",
      'Happy Birthday, Jii.',
    ],
    leftNote: 'Thank you for being a part of these two years. You mean a lot.',
    rightNote: "You don't need a reason to be celebrated. You just need to be YOU.",
    closingNote: '21 September',
  },
]

export const TOTAL_CHAPTERS = CHAPTERS.length

export function getChapter(id: number): Chapter {
  const chapter = CHAPTERS.find((c) => c.id === id)
  return chapter ?? CHAPTERS[0]
}

export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL || '/'
  const clean = path.replace(/^\//, '')
  return `${base}${clean}`
}
