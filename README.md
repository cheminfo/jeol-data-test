# jeol-data-test

provides JEOL NMR data files for testing purposes.

## usage

```js
import { experiments } from 'jeol-data-test';
console.log(experiment); // to get a list
console.log(experiments['Rutin_3080ug200uL_DMSOd6_qHNMR_400MHz_Jeol.jdf']); // to get a buffer with proton data

```
## acknowledgements
The original data were found [here](https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/ZAZDNM) thanks to Jonathan and Guido.
