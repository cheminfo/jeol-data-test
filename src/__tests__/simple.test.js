import { getFile, getFileCollection, getList } from '../index';

describe('simple test', () => {
  const filename = '8PA_SynLK_5360u150uDMSO_snc1811_qH_spinOff-1-2.jdf';
  it('check one name', async () => {
    const list = await getList();

    expect(list).toContain(filename);
  });
  it('check getFile', async () => {
    const file = await getFile(filename);
    expect(file.name).toBe(filename);
  });
  it('check getFileCollection', async () => {
    const fileCollection = await getFileCollection();
    expect(fileCollection.files.map((f) => f.name)).toContain(filename);
  });
});
