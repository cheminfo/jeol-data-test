const { readFileSync } = require("fs");
const { join } = require("path");

let path = join(__dirname, "./data/Rutin_NMRdata_400MHz_DMSOd6_Jeol/");

exports.Rutin = {
  path: path,
  experiment: {
    proton: readFileSync(
      join(path, "Rutin_3080ug200uL_DMSOd6_qHNMR_400MHz_Jeol.jdf")
    ),
    processedProton: readFileSync(
      join(__dirname, "data", "8PA_SynLK_5360u150uDMSO_snc1811_qH_SpinOn-1-2.jdf")
    ),
    carbon: readFileSync(
      join(path, "Rutin_3080ug200uL_DMSOd6_13CNMR_400MHz_Jeol.jdf")
    ),
    cosy: readFileSync(
      join(path, "Rutin_3080ug200uL_DMSOd6_COSY_400MHz_Jeol.jdf")
    ),
    hsqc: readFileSync(
      join(path, "Rutin_3080ug200uL_DMSOd6_HSQC_400MHz_Jeol.jdf")
    ),
    hmbc: readFileSync(
      join(path, "Rutin_3080ug200uL_DMSOd6_HMBC_400MHz_Jeol.jdf")
    ),
  },
};

