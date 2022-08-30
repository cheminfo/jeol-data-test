import { getList } from '../index';

describe('simple test', () => {
  it('check one name', async () => {
    const list = await getList();

    expect(list).toContain(
      '8PA_SynLK_5360u150uDMSO_snc1811_qH_spinOff-1-2.jdf',
    );
  });
});
