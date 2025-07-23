import { describe, expect, it } from 'vitest';

import { jeolFiles } from '../index.js';

describe('simple test', () => {
  const filename = '8PA_SynLK_5360u150uDMSO_snc1811_qH_spinOff-1-2.jdf';
  it('check one name', async () => {
    await expect(jeolFiles.getFile(filename)).resolves.toMatchObject({
      name: filename,
      relativePath: filename,
    });
  });
  it('check getFile', async () => {
    const file = await jeolFiles.getFile(filename);
    expect(file.name).toBe(filename);
  });
  it('check files', async () => {
    const files = await jeolFiles.files();
    expect(files.map((f) => f.name)).toContain(filename);
  });
});
