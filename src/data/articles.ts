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
  section: "Currently Reading" | "Recently Finished" | "Favourites";
}

export const BOOKS: Book[] = [
  { title: "The Death of Ivan Ilyich", author: "Leo Tolstoy", section: "Currently Reading" },
  { title: "Gödel, Escher, Bach", author: "Douglas Hofstadter", section: "Currently Reading" },
  { title: "The Revolt of the Public", author: "Martin Gurri", section: "Currently Reading" },
  { title: "The Structure of Scientific Revolutions", author: "Thomas Kuhn", section: "Recently Finished" },
  { title: "Permutation City", author: "Greg Egan", section: "Recently Finished" },
  { title: "Middlemarch", author: "George Eliot", section: "Recently Finished" },
  { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", section: "Favourites" },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", section: "Favourites" },
  { title: "Infinite Jest", author: "David Foster Wallace", section: "Favourites" },
];
