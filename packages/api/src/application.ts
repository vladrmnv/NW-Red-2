import { InversifyExpressServer } from 'inversify-express-utils';
import { NwApiRestServer } from './rest-server';

interface NwApiServers {
  rest: InversifyExpressServer | null;
}

export class NwApiApplication {
  private servers: NwApiServers;
  constructor() {
    this.servers = {
      rest: null,
    };
  }
  public start() {
    this.initServers();
  }

  private initServers() {
    const restServer = new NwApiRestServer();
    this.servers.rest = restServer.start(3000);
  }
}
