# jeol-data-test

provides JEOL NMR data files for testing purposes.

## usage

```js
import { jeolFiles } from 'jeol-data-test';

const file = await jeolFiles.getFile(
  'Rutin_3080ug200uL_DMSOd6_qHNMR_400MHz_Jeol.jdf',
);
const jeolBuffer = await file.buffer();
//or
const jeolBuffer = await jeolFiles.getData(
  'Rutin_3080ug200uL_DMSOd6_qHNMR_400MHz_Jeol.jdf',
);
```

## acknowledgements

The original data were found [here](https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/ZAZDNM) thanks to Jonathan and Guido.

```console
% tree data
data
├── 11_pm033220_400JEOL_278Kcarbon_.jdf
├── 12_pm033236_400JEOL_278k carbon_C.jdf
├── 13_pm032839_400JEOL_278k carbon_C.jdf
├── 14_400JEOL_PM033228 278K_C.jdf
├── 16_pm031642_400JEOL_278k_C.jdf
├── 8PA_SynLK_5360u150uDMSO_snc1811_qH_SpinOn-1-2.jdf
├── 8PA_SynLK_5360u150uDMSO_snc1811_qH_spinOff-1-2.jdf
├── EC=8C_5m200u_MeOD_bzhou21_20190228_HMBCabs-1-1.jdf
├── EC=8C_5m200u_MeOD_bzhou21_20190228__HSQC-1-1.jdf
├── EC=8C_5m200u_MeOD_bzhou21_20190228_qCarbon-1-1.jdf
├── EC=8C_5m200u_MeOD_bzhou21_20190228_qH-1-1.jdf
├── EC=8EC_2m200u_MeOD_bzhou21_20190328_HMBC-ABS-1-1.jdf
├── EC=8EC_2m200u_MeOD_bzhou21_20190328_HSQC-1-1.jdf
├── EC=8EC_2m200u_MeOD_bzhou21_20190328_qC-1-1.jdf
├── EC=8EC_2m200u_MeOD_bzhou21_20190328_qH-1-1.jdf
├── EC=8eC_10m150u_MeOD_bzhou21_qH-1-1.jdf
├── EC=8eC_2m150u_MeOD_bzhou21_20190328_HMBC-ABS-2-1.jdf
├── EC=8eC_2m150u_MeOD_bzhou21_20190328_HSQC-3-1.jdf
├── EC=8eC_2m150u_MeOD_bzhou21_20190328_qC-2-1.jdf
├── EC=8eEC_10m150u_MeOD_bzhou21_201802_qH-1-1.jdf
├── EC=8eEC_10m150u_MeOD_bzhou21_HMBC-ABS-1-1.jdf
├── EC=8eEC_10m150u_MeOD_bzhou21_HSQC-2-1.jdf
├── EC=8eEC_10m150u_MeOD_bzhou21_qC-1-1.jdf
├── EC_10m200u_400_298K_bzhou_qH-1-1.jdf
├── PM031528 255K_400JEOL_C.jdf
├── PM032109_5000u200u_01172018bzhou_qH-1-1.jdf
├── PM032220_3000U200U_Bin_180218_qH-1-1.jdf
├── PM032220_3000U200U_Bin_180218_qH-1-4.jdf
├── PM032220_3000U200U_MeOD_18224Bin_HSQC-2-1.jdf
├── PM032220_3000U200U_MeOD_18224Bin_qC-2-1.jdf
├── Resveratrol1_11280u600u_MeOD.jdf
├── Rutin_3080ug200uL_DMSOd6_13CNMR_400MHz_Jeol.jdf
├── Rutin_3080ug200uL_DMSOd6_COSY_400MHz_Jeol.jdf
├── Rutin_3080ug200uL_DMSOd6_HMBC_400MHz_Jeol.jdf
├── Rutin_3080ug200uL_DMSOd6_HSQC_400MHz_Jeol.jdf
├── Rutin_3080ug200uL_DMSOd6_qHNMR_400MHz_Jeol.jdf
├── fluorine.jdf
└── phosphorus.jdf

1 directory, 38 files
```

NB: `data` folder is `jeolFiles.root`.
