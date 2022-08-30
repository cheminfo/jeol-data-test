import { PartialFile } from 'filelist-utils';

export function getList(): Promise<string[]>;

export function getFileList(name: string): Promise<PartialFile>;

export function getData(name: string): Promise<ArrayBuffer>;
