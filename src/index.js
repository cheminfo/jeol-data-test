import { resolve } from 'path';

import { fileListFromPath } from 'filelist-utils';

const path = resolve('../data/');
const fileList = fileListFromPath(path);

export const getList = () => fileList.map((d) => d.name);

export const getFileList = (name) => {
  const result = fileList.filter((d) => d.name === name);

  if (result.length < 1) {
    throw new Error(`There is not a file with name: ${name}`);
  }

  return result[0];
};

export const getData = (name) => {
  return getFileList(name).arrayBuffer();
};
