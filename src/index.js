import { join } from 'path';

import { fileListFromPath } from 'filelist-utils';

const path = join(__dirname, '../data/');

const cache = {};

async function loadFileList(path) {
  if (cache[path]) {
    return cache[path];
  }

  cache[path] = await fileListFromPath(path, {
    unzip: { zipExtensions: [] },
    ungzip: { gzipExtensions: [] },
  });

  return cache[path];
}

export async function getList() {
  const fileList = await loadFileList(path);
  return fileList.map((d) => d.name);
}

export async function getFileList(name) {
  const fileList = await loadFileList(path);
  const result = fileList.filter((d) => d.name === name);

  if (result.length < 1) {
    throw new Error(`There is not a file with name: ${name}`);
  }

  return result[0];
}

export function getData(name) {
  return getFileList(name).arrayBuffer();
}
