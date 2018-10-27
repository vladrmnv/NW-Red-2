import 'tsconfig-paths/register';
import { main } from './main';

if (process.argv.includes('--run')) {
  console.time('App started');
  main();
  console.timeEnd('App started');
}
