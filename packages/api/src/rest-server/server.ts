import { InversifyExpressServer } from 'inversify-express-utils';
import { Container } from 'inversify';

export class NwApiRestServer {
  public start(port: number) {
    const container = this.createContainer();
    let server = new InversifyExpressServer(container);
    let serverInstance = server.build();
    serverInstance.listen(port);
    console.log(`REST Server started on port ${port}`);
    return serverInstance;
  }

  private createContainer() {
    // load everything needed to the Container
    let container = new Container();
    // container.bind<UserService>(TYPES.UserService).to(UserService);

    return container;
  }
}
