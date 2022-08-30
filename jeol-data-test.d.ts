import { PartialFile } from 'filelist-utils';

export function getList(): Promise<string[]>;

export function getFile(name: string): Promise<PartialFile>;

export function getFileList(name: string): Promise<PartialFileList>;

export function getData(name: string): Promise<ArrayBuffer>;
