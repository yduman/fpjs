// either is a functor and a monad
// has map, chain, fold method
// respects function purity and is effectively an if-else but inverted

const fs = require("fs");
// const { tryCatch } = require("ramda");

const Right = (x) => ({
  chain: (f) => f(x),
  map: (f) => Right(f(x)),
  fold: (f, g) => g(x),
  toString: `Right(${x})`,
});

const Left = (x) => ({
  chain: (f) => Left(x),
  map: (f) => Left(f(x)),
  fold: (f, g) => f(x),
  toString: `Left(${x})`,
});

const tryCatch = (f) => {
  try {
    return Right(f());
  } catch (e) {
    return Left(e);
  }
};

const fromNullable = (x) => (x !== null ? Right(x) : Left());

const findColor = (name) =>
  fromNullable(
    {
      red: "#ff4444",
      blue: "#3b5998",
      yellow: "#fff68f",
    }[name]
  );

const res = findColor("red")
  .map((x) => x.toUpperCase())
  .fold(
    () => "no color",
    (color) => color
  );
// const res = findColor("redd").map(x => x.toUpperCase()) does not blow up
console.log(res);

const getPort_ = () => {
  try {
    const str = fs.readFileSync("config.json");
    const config = JSON.parse(str);
    return config.port;
  } catch (error) {
    return 3000;
  }
};

const readFileSync = (path) => tryCatch(() => fs.readFileSync(path));

const parseJSON = contents => tryCatch(() => JSON.parse(contents)):

const getPort = () =>
  readFileSync("config.json")
    .chain((contents) => parseJSON(contents))
    .map((config) => config.port)
    .fold(
      () => 8080,
      (x) => x
    );

const result = getPort();

console.log(result);
