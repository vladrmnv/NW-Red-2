import { InversifyExpressServer } from 'inversify-express-utils';
import { NwApiRestServer } from 'rest-server';
import 'di/container';

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
    this.initDi();
    this.initServers();
  }

  private initDi() {}

  private initServers() {
    const restServer = new NwApiRestServer();
    this.servers.rest = restServer.start(3000);
  }
}
