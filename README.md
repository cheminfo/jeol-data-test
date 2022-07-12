# jeol-data-test

provides JEOL NMR data files for testing purposes.

## usage

```js
import { jeol } from 'jeol-data-test';
const jeolData = jeol();
console.log(jeolData.list()); // to get a list of file names
console.log(jeolData.get('Rutin_3080ug200uL_DMSOd6_qHNMR_400MHz_Jeol.jdf')); // ol array of names to get the fileList.

```
## acknowledgements
The original data were found [here](https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/ZAZDNM) thanks to Jonathan and Guido.
