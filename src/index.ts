import { join } from 'node:path';

import type { AbsolutePath } from 'data-test-api';
import { DataTestApi } from 'data-test-api';

const path = join(import.meta.dirname, '../data') as AbsolutePath;

export const jeolFiles = new DataTestApi(path);
