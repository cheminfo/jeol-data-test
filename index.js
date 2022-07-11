const { join } = require("path");

const { fileListFromPath } = require("filelist-utils");

function getData() {
  return fileListFromPath(join(__dirname, "./data/"));
}
module.exports = {
  getData,
};
