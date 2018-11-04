import { InversifyExpressServer } from 'inversify-express-utils';
import { diContainer } from 'di/container';

export class NwApiRestServer {
  public start(port: number) {
    let server = new InversifyExpressServer(diContainer);
    let serverInstance = server.build();
    serverInstance.listen(port);
    console.log(`REST Server started on port ${port}`);
    return serverInstance;
  }
}
