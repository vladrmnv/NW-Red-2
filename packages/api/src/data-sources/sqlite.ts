import { createConnection } from 'typeorm';
import { UserEntity } from 'models/User.entity';

export const SQLITE: symbol = Symbol('SQLITE');

export class SqliteDatasource {
  public createConnection() {
    return createConnection({
      type: 'sqlite',
      entities: [UserEntity],
      synchronize: true,
      database: 'test.db',
    });
  }
}
