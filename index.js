const { join } = require("path");

const { fileListFromPath } = require("filelist-utils");

const path = join(__dirname, "./data/");

function jeol() {
  const fileList = fileListFromPath(path);

  const list = () => fileList.map((d) => d.name);

  const get = async (names) => {
    const arrayNames = !Array.isArray(names) ? [names] : names;
    const result = [];
    for (let name of arrayNames) {
      result.push(
        ...fileList
        .filter((d) => d.name === name)
      )
    }
    return result;
  }

  return { list, get, fileList };
}

module.exports = {
  jeol
};
