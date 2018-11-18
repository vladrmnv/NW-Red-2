import { InversifyExpressServer } from 'inversify-express-utils';
import { NwApiRestServer } from 'rest-server';
import { MemoryDatasource } from 'data-sources/memory';
import { Connection } from 'typeorm';

interface NwApiServers {
  rest: InversifyExpressServer | null;
}

interface NwApiDataSources {
  memory: Connection | null;
}

export class NwApiApplication {
  private servers: NwApiServers;
  private dbs: NwApiDataSources;
  constructor() {
    this.servers = {
      rest: null,
    };
    this.dbs = {
      memory: null,
    };
  }
  public async start() {
    await this.initDataSources();
    this.initServers();
  }

  private async initDataSources() {
    const memoryDb = new MemoryDatasource();
    this.dbs.memory = await memoryDb.createConnection();
  }
  private initServers() {
    const restServer = new NwApiRestServer();
    this.servers.rest = restServer.start(3000);
  }
}
