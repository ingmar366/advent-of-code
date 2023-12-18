const { readFile } = require("fs");

readFile("./input.txt", "utf-8", (err, data) => {
  const rows = data.split("\n");
  const symbols = rows.map((line, ind) => {
    console.log(line.match(/\$/g));
    // match all symbols excluding .
  });
  rows.map((r, ind) => {
    const res = r.matchAll(/\d/g);

    const splitten = r.split("").map((el, index) => {});
  });
});

//  match all symbols in line and index
// match all digits and get the indexes.
// span of the numbers (0-3)
