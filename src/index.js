import { join } from 'path';

import { fileCollectionFromPath } from 'filelist-utils';

const path = join(__dirname, '../data/');

const cache = {};

async function loadFileCollection(path) {
  if (cache[path]) {
    return cache[path];
  }

  cache[path] = await fileCollectionFromPath(path, {
    unzip: { zipExtensions: [] },
    ungzip: { gzipExtensions: [] },
  });

  return cache[path];
}

export function getFileCollection() {
  return loadFileCollection(path);
}

export async function getList() {
  const fileCollection = await getFileCollection();
  return fileCollection.files.map((file) => file.name);
}

export async function getFile(name) {
  const fileCollection = await getFileCollection();
  const file = fileCollection.files.find((d) => d.name === name);

  if (!file) {
    throw new Error(`There is not a file with name: ${name}`);
  }

  return file;
}

export async function getData(name) {
  return (await getFile(name)).arrayBuffer();
}
