const { readFile } = require("fs");
const redMax = 12;
const greenMax = 13;
const blueMax = 14;

readFile("./input.txt", "utf-8", (err, data) => {
  const games = data.split("\n");
  const res = games.reduce((acc, game) => {
    const gameId = +game.slice(0, game.indexOf(":")).match(/\d+/g)[0];
    const possible = game
      .slice(game.indexOf(":") + 1)
      .split(";")
      .map(colorChecker);
    if (possible.includes(false)) return acc;

    const minGameValues = possible.reduce(
      (accu, cg) => {
        if (cg.g > accu.g) accu.g = cg.g;
        if (cg.b > accu.b) accu.b = cg.b;
        if (cg.r > accu.r) accu.r = cg.r;
        return accu;
      },
      { b: 1, g: 1, r: 1 }
    );
    const resp = minGameValues.b * minGameValues.g * minGameValues.r;
    acc = acc + resp;
    return acc;
  }, 0);

  console.log(res);
});

const colorChecker = (str) => {
  const v = str.split(",").map((color) => {
    const num = color.match(/\d+/g)[0];
    if (color.includes("red")) return { r: +num };
    if (color.includes("green")) return { g: +num };
    if (color.includes("blue")) return { b: +num };
    return false;
  });
  if (v.includes(false)) return false;
  return v.reduce((acc, value) => {
    return { ...acc, ...value };
  }, {});
};

// const colorChecker = (str) => {
//   const v = str.split(",").map((color) => {
//     const num = color.match(/\d+/g)[0];
//     if (color.includes("red") && num <= redMax) return { r: +num };
//     if (color.includes("green") && num <= greenMax) return { g: +num };
//     if (color.includes("blue") && num <= blueMax) return { b: +num };
//     return false;
//   });
//   if (v.includes(false)) return false;
//   return v.reduce((acc, value) => {
//     return { ...acc, ...value };
//   }, {});
// };
