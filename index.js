const { join } = require("path");
const { fileListFromPath } = require("filelist-utils");

const path = join(__dirname, "./data/");
const fileList = fileListFromPath(path);

const getList = () => fileList.map((d) => d.name);

const getFileList = (name) => {
  const result = fileList.filter((d) => d.name === name);

  if (result.length < 1) {
    throw new Error(`There is not a file with name: ${name}`);
  }

  return result[0];
};

const getData = (name) => {
  return getFileList(name).arrayBuffer();
};

module.exports = {
  getList,
  getData,
  getFileList,
};
