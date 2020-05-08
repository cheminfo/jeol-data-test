# jeol-data-test

provides JEOL NMR data files for testing purposes.

## usage

```js
import { Rutin } from 'jeol-data-test';
console.log(Rutin.experiment); // to get a list
console.log(Rutin.experiment.proton); // to get a buffer with proton data
```
## acknowledgements
The original data were found [here](https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/ZAZDNM) thanks to Jonathan and Guido.
