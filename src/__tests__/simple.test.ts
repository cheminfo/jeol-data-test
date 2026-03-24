import { expect, test } from 'vitest';

import { jeolFiles } from '../index.ts';

const filename = '8PA_SynLK_5360u150uDMSO_snc1811_qH_spinOff-1-2.jdf';

test('check one name', async () => {
  await expect(jeolFiles.getFile(filename)).resolves.toMatchObject({
    name: filename,
    relativePath: filename,
  });
});

test('check getFile', async () => {
  const file = await jeolFiles.getFile(filename);
  expect(file.name).toBe(filename);
});

test('check files', async () => {
  const files = await jeolFiles.files();
  expect(files.map((f) => f.name)).toContain(filename);
});
