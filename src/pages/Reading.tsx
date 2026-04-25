import { useEffect } from "react";

interface Encounter {
  title: string;
  author: string;
  type: string;
  reflection: string;
  themes: string[];
}

const encounters: Encounter[] = [
  {
    title: "The Autobiography of Benjamin Franklin",
    author: "Benjamin Franklin",
    type: "Book",
    reflection:
      "Franklin wrote his autobiography in pieces, across decades, addressed to his son. What strikes me most is not the famous virtues project or the kite in the thunderstorm but the voice — curious, self-deprecating, endlessly interested in how things work. Franklin never distinguished between intellectual life and practical life. For him they were the same thing. Every idea was something to be tested and every failure was data. I think about this whenever I'm tempted to treat thinking as separate from doing.",
    themes: ["curiosity", "self-invention", "practical wisdom"],
  },
  {
    title: "Made in America",
    author: "Sam Walton",
    type: "Book",
    reflection:
      "Walton drove around in a pickup truck visiting his own stores because he genuinely wanted to know what was happening on the ground. That instinct — stay close to the thing itself, don't manage from a distance — is the most important lesson in the book and the one most executives forget. What I took from it wasn't the business strategy but the disposition: relentless curiosity, genuine humility about what you don't know, and the conviction that the person stocking shelves knows something you don't.",
    themes: ["entrepreneurship", "humility", "curiosity"],
  },
  {
    title: "Keep the Aspidistra Flying",
    author: "George Orwell",
    type: "Book",
    reflection:
      "Gordon Comstock, Orwell's protagonist, wages a private war against 'the money-god' — refusing a good job, letting his life collapse, insisting that his poetry matters more than his bank account. Orwell is pitiless with him. The novel isn't a celebration of the intellectual life; it's a warning about its vanities. What stays with me is the aspidistra itself — the unkillable houseplant that represents everything Gordon despises about respectable life and that he eventually, inevitably, surrenders to. Orwell understood that most rebellions against comfort end in exactly this way.",
    themes: ["idealism", "money", "intellectual life"],
  },
  {
    title: "Letters to a Young Poet",
    author: "Rainer Maria Rilke",
    type: "Book",
    reflection:
      "Rilke wrote these letters to a 19-year-old cadet who had sent him poems and asked whether they were any good. What followed was one of the great documents of consolation in the Western tradition. I came to this book during a difficult period and found in it something I hadn't expected: permission to be alone with uncertainty. Rilke's counsel to rely on things when there are no reliable people — to find steadiness in objects, seasons, solitude — struck me not as resignation but as a kind of discipline. The world is unreliable. Your inner life need not be.",
    themes: ["solitude", "consolation", "inner life"],
  },
  {
    title: "Courage",
    author: "J.M. Barrie",
    type: "Speech",
    reflection:
      "Barrie gave this rectorial address at St Andrews in 1922, the year after his close friend Robert Falcon Scott died in Antarctica. It is one of the great addresses in the English language and almost nobody has read it. His argument is simple and devastating: courage is not one virtue among others but the condition that makes all other virtues possible. Without it, kindness is merely convenience, honesty is merely agreement, and love is merely comfort. I return to this speech whenever I'm tempted to avoid something difficult and need reminding that avoidance is never neutral — it always costs something.",
    themes: ["courage", "virtue", "character"],
  },
  {
    title: "Poor Charlie's Almanack",
    author: "Charlie Munger",
    type: "Book",
    reflection:
      "Munger's great contribution is the idea of mental models — that the best thinkers don't reason from first principles every time but maintain a latticework of frameworks drawn from many disciplines that they apply to new situations. The one I use most is inversion: instead of asking how to succeed at something, ask what would guarantee failure and then avoid doing those things. It sounds simple. It is devastating in practice. Munger taught me that genuine intelligence is mostly a matter of having the right tools ready and knowing which one fits the problem in front of you.",
    themes: ["thinking", "mental models", "decision-making"],
  },
  {
    title: "The Public Debates of Christopher Hitchens",
    author: "Christopher Hitchens",
    type: "Debates",
    reflection:
      "Hitchens is the reason I believe that clarity is a moral virtue. He never hid behind jargon or hedged when he could be precise. Watching his debates — against religious apologists, against political opponents, against interviewers who underestimated him — I learned that a good argument is not just logically sound but emotionally inhabitable. People have to feel why it matters, not just understand that it's true. What I try to carry from Hitchens is not his conclusions, many of which I dispute, but his willingness to mean what he says and say what he means in public, in front of people who disagree, without a safety net.",
    themes: ["rhetoric", "debate", "intellectual courage"],
  },
  {
    title: "The Public Speeches of Stephen Fry",
    author: "Stephen Fry",
    type: "Speeches",
    reflection:
      "Fry taught me that warmth and precision are not opposites. His famous Intelligence Squared speech defending the Catholic Church — which he was arguing against — is the best model I know of how to steelman a position before dismantling it. He never condescends to his audience. He assumes they can follow him into complexity and rewards them for doing so. I return to his speeches not for the content but for the texture: the way he signals that ideas are pleasurable, that thinking together in a room is one of the great human experiences. That feeling is the whole reason I built Colloquia.",
    themes: ["communication", "warmth", "ideas"],
  },
  {
    title: "Uncommon Knowledge & The Charlie Rose Show",
    author: "Peter Robinson & Charlie Rose",
    type: "Interviews",
    reflection:
      "Robinson and Rose represent two versions of the same gift: the ability to disappear into the conversation. The best interviewers make you forget they're there — not because they're passive, but because their preparation is so thorough and their curiosity so genuine that the guest expands to fill the space. What I learned from watching hundreds of hours of both men is that the quality of a conversation is determined almost entirely in the preparation, not in the room. Robinson reads the books, challenges the premises, and refuses to let his guests off with comfortable generalities. Rose, at his best, did the same.",
    themes: ["conversation", "preparation", "curiosity"],
  },
  {
    title: "Jimmy Carr Live in Austin",
    author: "Jimmy Carr",
    type: "Live Comedy",
    reflection:
      "Austin is known for its music and its universities and its think tanks, but the intellectual life here also runs through its comedy clubs. I saw Jimmy Carr perform live here and he exceeded every expectation — not just because he was funny but because his set was so precisely constructed. Each joke was an argument in disguise: a premise, a misdirection, a conclusion that arrived from an unexpected angle. Carr understands something most public communicators don't — that surprise is the mechanism of insight, not just entertainment. A joke that lands is a mind that changed. Austin keeps reminding me that ideas live in more places than lecture halls.",
    themes: ["comedy", "Austin", "ideas"],
  },
];

export default function Reading() {
  useEffect(() => {
    document.title = "Reading — Aaron Briley";
  }, []);

  return (
    <main>
      <div className="site-container">
        <section style={{ padding: "48px 0 32px" }}>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "36px",
              fontWeight: 700,
              color: "var(--color-text-primary)",
              marginBottom: "8px",
              letterSpacing: "-0.02em",
            }}
            className="page-h1"
          >
            Intellectual Encounters
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "15px",
              color: "var(--color-text-secondary)",
              lineHeight: 1.6,
              borderLeft: "3px solid var(--color-accent, #c8a96e)",
              paddingLeft: "14px",
              fontStyle: "italic",
            }}
          >
            A record of books, speeches, debates, and performances that changed
            how I see the world. Not a reading list — reflections.
          </p>
        </section>

        <section style={{ paddingBottom: "80px" }}>
          {encounters.map((encounter, index) => (
            <article
              key={index}
              style={{
                marginBottom: "60px",
                paddingBottom: "60px",
                borderBottom:
                  index < encounters.length - 1
                    ? "0.5px solid var(--color-border)"
                    : "none",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--color-text-tertiary)",
                  marginBottom: "8px",
                }}
              >
                {encounter.type}
              </span>

              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "22px",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "var(--color-text-primary)",
                  margin: "0 0 4px",
                  lineHeight: 1.3,
                }}
              >
                {encounter.title}
              </h2>

              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  color: "var(--color-text-tertiary)",
                  margin: "0 0 18px",
                }}
              >
                {encounter.author}
              </p>

              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "17px",
                  color: "var(--color-text-primary)",
                  lineHeight: 1.8,
                  margin: "0 0 18px",
                }}
              >
                {encounter.reflection}
              </p>

              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {encounter.themes.map((theme) => (
                  <span
                    key={theme}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "11px",
                      color: "var(--color-text-tertiary)",
                      background: "var(--color-surface-raised, #f5f2ec)",
                      padding: "3px 10px",
                      borderRadius: "12px",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "12px",
            color: "var(--color-text-tertiary)",
            fontStyle: "italic",
            paddingBottom: "48px",
          }}
        >
          Updated irregularly. Last entry added April 2026.
        </p>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .page-h1 { font-size: 28px !important; }
        }
      `}</style>
    </main>
  );
}
