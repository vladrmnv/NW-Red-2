import { injectable } from 'inversify';

@injectable()
export abstract class CrudRepository {
  constructor() {}
  public findAll() {
    throw new Error('Not implemented');
  }
  public findById() {
    throw new Error('Not implemented');
  }
  public create<Model>(user: Model): Model {
    return user;
  }
}
