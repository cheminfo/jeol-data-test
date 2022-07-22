# jeol-data-test

provides JEOL NMR data files for testing purposes.

## usage

```js
import { getData, getFileList, getNameList } from 'jeol-data-test';
console.log(getNameList()); // to get a list of file names
console.log(getFileList('Rutin_3080ug200uL_DMSOd6_qHNMR_400MHz_Jeol.jdf')) // to get an array of fileList
console.log(
  getData('Rutin_3080ug200uL_DMSOd6_qHNMR_400MHz_Jeol.jdf')
); // to get a promise of the arrayBuffer of the file.

```
## acknowledgements
The original data were found [here](https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/ZAZDNM) thanks to Jonathan and Guido.
