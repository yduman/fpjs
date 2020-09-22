const { curry } = require("ramda");

const add = (x, y) => x + y;

const toPair = (f) => ([x, y]) => f(x, y);

const fromPair = (f) => (x, y) => f([x, y]);

const modulo = curry((x, y) => y % x);

const filter = curry((f, xs) => xs.filter(f));

const isOdd = modulo(2);

const getOdds = filter(isOdd);

const replace = curry((regex, replacement, str) =>
  str.replace(regex, replacement)
);

const replaceVowels = replace(/[AEIOU]/gi, "!");

console.log(replaceVowels("Hey I have words"));

const toPairResult = toPair(add)([1, 2]);
const fromPairResult = fromPair(toPair(add))(1, 2);
const curryResult = curry(add)(1)(2);
const oddsResult = getOdds([1, 2, 3, 4, 5]);
console.log("toPairResult = ", toPairResult);
console.log("fromPairResult = ", fromPairResult);
console.log("curryResult = ", curryResult);
console.log("oddsResult = ", oddsResult);
