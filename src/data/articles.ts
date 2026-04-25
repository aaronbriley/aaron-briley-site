export type Category = "All" | "Ideas" | "Philosophy" | "Technology" | "Projects" | "Books" | "Personal";

export interface Article {
  slug: string;
  category: Exclude<Category, "All">;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export const ARTICLES: Article[] = [
  {
    slug: "the-examined-life-in-the-age-of-algorithms",
    category: "Philosophy",
    title: "The Examined Life in the Age of Algorithms",
    excerpt: "Socrates told us the unexamined life is not worth living. But what happens when the tools we use to examine ourselves are owned by corporations whose interests diverge from ours? A meditation on self-knowledge, surveillance, and the examined life.",
    date: "April 8, 2026",
    readTime: "9 min read",
  },
  {
    slug: "why-colloquia-why-now",
    category: "Projects",
    title: "Why Colloquia, Why Now",
    excerpt: "Ideas don't spread through papers alone. They spread through conversations, lectures, debates — live encounters between minds. Colloquia is my attempt to make those encounters discoverable. Here's the thinking behind it.",
    date: "March 22, 2026",
    readTime: "6 min read",
  },
  {
    slug: "on-reading-books-slowly",
    category: "Books",
    title: "On Reading Books Slowly",
    excerpt: "I used to read fast, optimising for coverage. These days I read the same paragraph three times. I've come to think that slow reading is the only reading that actually changes you — that the measure of a book is what it leaves behind.",
    date: "March 5, 2026",
    readTime: "5 min read",
  },
  {
    slug: "intelligence-is-not-the-same-as-wisdom",
    category: "Ideas",
    title: "Intelligence Is Not the Same as Wisdom",
    excerpt: "We have built machines that can pass the bar exam and write sonnets, but we haven't built anything that knows when to stay silent. The conflation of intelligence with wisdom is one of the defining confusions of our technological moment.",
    date: "February 14, 2026",
    readTime: "7 min read",
  },
];

export const CATEGORIES: Category[] = [
  "All",
  "Ideas",
  "Philosophy",
  "Technology",
  "Projects",
  "Books",
  "Personal",
];

export interface Book {
  title: string;
  author: string;
  section: "Currently Reading" | "Recently Finished" | "Favorites";
}

export const BOOKS: Book[] = [
  { title: "Blood Meridian", author: "Cormac McCarthy", section: "Currently Reading" },
  { title: "Nietzsche: Philosopher Psychologist Antichrist", author: "Walter Kaufmann", section: "Currently Reading" },
  { title: "Existentialism: A Very Short Introduction", author: "Thomas R. Flynn", section: "Currently Reading" },
  { title: "Tenth of December", author: "George Saunders", section: "Recently Finished" },
  { title: "Irrational Man", author: "William Barrett", section: "Recently Finished" },
  { title: "The New Patricians: An Essay on Values and Consciousness", author: "RWK Paterson", section: "Recently Finished" },
  { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", section: "Favorites" },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", section: "Favorites" },
  { title: "Infinite Jest", author: "David Foster Wallace", section: "Favorites" },
];
export interface Encounter {
  title: string;
  author: string;
  type: string;
  reflection: string;
  themes: string[];
}

export const ENCOUNTERS: Encounter[] = [
  {
    title: "The Autobiography of Benjamin Franklin",
    author: "Benjamin Franklin",
    type: "Book",
    reflection: "Franklin wrote his autobiography in pieces, across decades, addressed to his son. What strikes me most is not the famous virtues project or the kite in the thunderstorm but the voice — curious, self-deprecating, endlessly interested in how things work. Franklin never distinguished between intellectual life and practical life. For him they were the same thing. Every idea was something to be tested and every failure was data. I think about this whenever I'm tempted to treat thinking as separate from doing.",
    themes: ["curiosity", "self-invention", "practical wisdom"],
  },
  {
    title: "Made in America",
    author: "Sam Walton",
    type: "Book",
    reflection: "Walton drove around in a pickup truck visiting his own stores because he genuinely wanted to know what was happening on the ground. That instinct — stay close to the thing itself, don't manage from a distance — is the most important lesson in the book and the one most executives forget. What I took from it wasn't the business strategy but the disposition: relentless curiosity, genuine humility about what you don't know, and the conviction that the person stocking shelves knows something you don't.",
    themes: ["entrepreneurship", "humility", "curiosity"],
  },
  {
    title: "Keep the Aspidistra Flying",
    author: "George Orwell",
    type: "Book",
    reflection: "Gordon Comstock, Orwell's protagonist, wages a private war against 'the money-god' — refusing a good job, letting his life collapse, insisting that his poetry matters more than his bank account. Orwell is pitiless with him. The novel isn't a celebration of the intellectual life; it's a warning about its vanities. What stays with me is the aspidistra itself — the unkillable houseplant that represents everything Gordon despises about respectable life and that he eventually, inevitably, surrenders to. Orwell understood that most rebellions against comfort end in exactly this way.",
    themes: ["idealism", "money", "intellectual life"],
  },
  {
    title: "Letters to a Young Poet",
    author: "Rainer Maria Rilke",
    type: "Book",
    reflection: "Rilke wrote these letters to a 19-year-old cadet who had sent him poems and asked whether they were any good. What followed was one of the great documents of consolation in the Western tradition. I came to this book during a difficult period and found in it something I hadn't expected: permission to be alone with uncertainty. Rilke's counsel to rely on things when there are no reliable people — to find steadiness in objects, seasons, solitude — struck me not as resignation but as a kind of discipline. The world is unreliable. Your inner life need not be.",
    themes: ["solitude", "consolation", "inner life"],
  },
  {
    title: "Courage",
    author: "J.M. Barrie",
    type: "Speech",
    reflection: "Barrie gave this rectorial address at St Andrews in 1922, the year after his close friend Robert Falcon Scott died in Antarctica. It is one of the great addresses in the English language and almost nobody has read it. His argument is simple and devastating: courage is not one virtue among others but the condition that makes all other virtues possible. Without it, kindness is merely convenience, honesty is merely agreement, and love is merely comfort. I return to this speech whenever I'm tempted to avoid something difficult and need reminding that avoidance is never neutral — it always costs something.",
    themes: ["courage", "virtue", "character"],
  },
  {
    title: "Poor Charlie's Almanack",
    author: "Charlie Munger",
    type: "Book",
    reflection: "Munger's great contribution is the idea of mental models — that the best thinkers don't reason from first principles every time but maintain a latticework of frameworks drawn from many disciplines that they apply to new situations. The one I use most is inversion: instead of asking how to succeed at something, ask what would guarantee failure and then avoid doing those things. It sounds simple. It is devastating in practice. Munger taught me that genuine intelligence is mostly a matter of having the right tools ready and knowing which one fits the problem in front of you.",
    themes: ["thinking", "mental models", "decision-making"],
  },
  {
    title: "The Public Debates of Christopher Hitchens",
    author: "Christopher Hitchens",
    type: "Debates",
    reflection: "Hitchens is the reason I believe that clarity is a moral virtue. He never hid behind jargon or hedged when he could be precise. Watching his debates — against religious apologists, against political opponents, against interviewers who underestimated him — I learned that a good argument is not just logically sound but emotionally inhabitable. People have to feel why it matters, not just understand that it's true. What I try to carry from Hitchens is not his conclusions, many of which I dispute, but his willingness to mean what he says and say what he means in public, in front of people who disagree, without a safety net.",
    themes: ["rhetoric", "debate", "intellectual courage"],
  },
  {
    title: "The Public Speeches of Stephen Fry",
    author: "Stephen Fry",
    type: "Speeches",
    reflection: "Fry taught me that warmth and precision are not opposites. His famous Intelligence Squared speech defending the Catholic Church — which he was arguing against — is the best model I know of how to steelman a position before dismantling it. He never condescends to his audience. He assumes they can follow him into complexity and rewards them for doing so. I return to his speeches not for the content but for the texture: the way he signals that ideas are pleasurable, that thinking together in a room is one of the great human experiences. That feeling is the whole reason I built Colloquia.",
    themes: ["communication", "warmth", "ideas"],
  },
  {
    title: "Uncommon Knowledge & The Charlie Rose Show",
    author: "Peter Robinson & Charlie Rose",
    type: "Interviews",
    reflection: "Robinson and Rose represent two versions of the same gift: the ability to disappear into the conversation. The best interviewers make you forget they're there — not because they're passive, but because their preparation is so thorough and their curiosity so genuine that the guest expands to fill the space. What I learned from watching hundreds of hours of both men is that the quality of a conversation is determined almost entirely in the preparation, not in the room. Robinson reads the books, challenges the premises, and refuses to let his guests off with comfortable generalities. Rose, at his best, did the same.",
    themes: ["conversation", "preparation", "curiosity"],
  },
  {
    title: "Jimmy Carr Live in Austin",
    author: "Jimmy Carr",
    type: "Live Comedy",
    reflection: "Austin is known for its music and its universities and its think tanks, but the intellectual life here also runs through its comedy clubs. I saw Jimmy Carr perform live here and he exceeded every expectation — not just because he was funny but because his set was so precisely constructed. Each joke was an argument in disguise: a premise, a misdirection, a conclusion that arrived from an unexpected angle. Carr understands something most public communicators don't — that surprise is the mechanism of insight, not just entertainment. A joke that lands is a mind that changed. Austin keeps reminding me that ideas live in more places than lecture halls.",
    themes: ["comedy", "Austin", "ideas"],
  },
];
