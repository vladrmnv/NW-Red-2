import 'tsconfig-paths/register';
import * as logger from 'signale';

import { main } from './main';

if (process.argv.includes('--run')) {
  const start = Date.now();
  logger.await('Starting app');
  main();
  logger.success(`App started in ${Date.now() - start} ms.`);
}
