const { readFile } = require("fs");

readFile("./input.txt", "utf-8", (err, data) => {
  const splittedData = data.split("\n");
  const res = splittedData.reduce((acc, row) => {
    const [code, lucky] = row.slice(row.indexOf(":") + 1).split("|");
    const codeArray = code.split(" ").filter((v) => v);
    const luckyArray = lucky.split(" ").filter((v) => v);
    const matches = codeArray.reduce((acc, value) => {
      if (luckyArray.includes(value)) {
        if (acc == 0) acc = 1;
        else acc = acc + acc;
      }
      return acc;
    }, 0);
    acc = acc + matches;
    return acc;
  }, 0);
  console.log(res);
});
