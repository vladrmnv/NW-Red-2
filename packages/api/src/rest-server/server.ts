import * as logger from 'signale';
import * as bodyParser from 'body-parser';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Container } from 'inversify';

interface INwApiRestServerOptions {
  port: number;
  diContainer: Container;
}

export class NwApiRestServer {
  public start({ port, diContainer }: INwApiRestServerOptions) {
    let server = new InversifyExpressServer(diContainer);
    server.setConfig(app => {
      app.use(bodyParser.json());
    });
    let serverInstance = server.build();
    serverInstance.listen(port);
    logger.success(`REST Server started on port ${port}`);
    return serverInstance;
  }
}
