import 'reflect-metadata';
import { NwApiApplication } from 'application';

export async function main() {
  const app = new NwApiApplication();
  await app.start();
  return app;
}
