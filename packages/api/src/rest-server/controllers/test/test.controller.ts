import { controller, httpGet } from 'inversify-express-utils';

@controller('/')
export class TestController {
  @httpGet('/')
  public get(): string {
    return 'Home sweet home';
  }
}
