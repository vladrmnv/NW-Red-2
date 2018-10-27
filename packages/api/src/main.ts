import 'reflect-metadata';
import { NwApiApplication } from './application';

export function main() {
  const app = new NwApiApplication();
  app.start();
  return app;
}
