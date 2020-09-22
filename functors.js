const Box = (x) => ({
  map: (f) => Box(f(x)),
  fold: (f) => f(x),
  chain: (f) => f(x),
});

const nextCharFromNumberString_ = (str) => {
  const trimmed = str.trim();
  const number = parseInt(trimmed);
  const nextNumber = new Number(number + 1);
  return String.fromCharCode(nextNumber);
};

const nextCharFromNumberString = (str) =>
  Box(str)
    .map((x) => x.trim())
    .map((trimmed) => parseInt(trimmed, 10))
    .map((number) => new Number(number + 1))
    .fold(String.fromCharCode);

const first = (xs) => xs[0];

const halfTheFirstLargeNumber_ = (xs) => {
  const found = xs.filter((x) => x >= 20);
  const answer = first(found);
  return `The answer is ${answer}`;
};

const halfTheFirstLargeNumber = (xs) =>
  Box(xs)
    .map((xs) => xs.filter((x) => x >= 20))
    .map((found) => first(found) / 2)
    .fold((answer) => `The answer is ${answer}`);

const result = nextCharFromNumberString(" 64 ");
const result2 = halfTheFirstLargeNumber([1, 4, 50]);
console.log(result);
console.log(result2);
