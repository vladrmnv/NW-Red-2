import * as logger from 'signale';
import { InversifyExpressServer } from 'inversify-express-utils';
import { diContainer } from 'di/container';

export class NwApiRestServer {
  public start(port: number) {
    let server = new InversifyExpressServer(diContainer);
    let serverInstance = server.build();
    serverInstance.listen(port);
    logger.success(`REST Server started on port ${port}`);
    return serverInstance;
  }
}
