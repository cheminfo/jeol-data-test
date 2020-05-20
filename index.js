const { readFileSync } = require("fs");
const { join } = require("path");

const toc = JSON.parse(readFileSync(join(__dirname, 'toc.json')));
let experiments = {};
for (let file of toc){
  let name = file.filename;
  experiments[name] = readFileSync(join(__dirname, file.url));
}
module.exports = {
  experiments,
};
