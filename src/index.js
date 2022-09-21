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

export function getFileList() {
  return loadFileList(path);
}

export async function getList() {
  const fileList = await getFileList();
  return fileList.map((file) => file.name);
}

export async function getFile(name) {
  const fileList = await getFileList();
  const file = fileList.find((d) => d.name === name);

  if (!file) {
    throw new Error(`There is not a file with name: ${name}`);
  }

  return file;
}

export async function getData(name) {
  return (await getFile(name)).arrayBuffer();
}
