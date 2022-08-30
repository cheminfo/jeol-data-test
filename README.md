# jeol-data-test

provides JEOL NMR data files for testing purposes.

## usage

```js
import { getData, getFileList, getList } from "jeol-data-test";
const listOfFilenames = await getList();

const filename = "Rutin_3080ug200uL_DMSOd6_qHNMR_400MHz_Jeol.jdf";

const file = await getFile(filename);
const jeolBuffer = await file.arrayBuffer();
//or
const buffer = await getData(filename);

```
## acknowledgements
The original data were found [here](https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/ZAZDNM) thanks to Jonathan and Guido.
