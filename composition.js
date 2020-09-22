const {
  compose,
  map,
  filter,
  join,
  reverse,
  trim,
  split,
  toLower,
  curry,
} = require("ramda");

const toUpper = (str) => str.toUpperCase();

const exclaim = (str) => str + "!";

const first = (xs) => xs[0];

const shout = compose(first, exclaim, toUpper);

const log = curry((tag, x) => (console.log(tag, x), x));

const f = compose(
  join(""),
  filter((x) => x.length > 3),
  log("here"),
  reverse,
  map(trim),
  split(" "),
  toLower
);

/**
 * composition is dot chaining
 * @param {string} str
 */
const g = (str) =>
  str
    .toLowerCase()
    .split(" ")
    .map((c) => c.trim())
    .reverse()
    .filter((x) => x.length > 3)
    .join("");

console.log(shout("hey"));
console.log(f("This is funny"));
console.log(g("This is funny"));
