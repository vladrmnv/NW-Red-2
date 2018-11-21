import { InversifyExpressServer } from 'inversify-express-utils';
import { NwApiRestServer } from 'rest-server';
import { SqliteDatasource, SQLITE } from 'data-sources/sqlite';
import { Connection } from 'typeorm';
import { bindDependencies } from 'di/container';
import { Container } from 'inversify';

interface NwApiServers {
  rest: InversifyExpressServer | null;
}

interface NwApiDataSources {
  memory: Connection | null;
}

export class NwApiApplication {
  private servers: NwApiServers;
  private dbs: NwApiDataSources;
  private diContainer: Container;
  constructor() {
    this.servers = {
      rest: null,
    };
    this.dbs = {
      memory: null,
    };
    this.diContainer = new Container();
  }
  public async start() {
    this.diContainer = bindDependencies(this.diContainer);
    await this.initDataSources();
    this.initServers();
  }

  private async initDataSources() {
    const memoryDb = new SqliteDatasource();
    this.dbs.memory = await memoryDb.createConnection();
    this.diContainer.bind(SQLITE).toConstantValue(this.dbs.memory);
  }
  private initServers() {
    const restServer = new NwApiRestServer();
    this.servers.rest = restServer.start({
      port: 3000,
      diContainer: this.diContainer,
    });
  }
}
