import { createConnection } from 'typeorm';
import { UserEntity } from 'models/User.entity';

export class MemoryDatasource {
  public createConnection() {
    return createConnection({
      type: 'sqlite',
      entities: [UserEntity],
      synchronize: true,
      database: 'test.db',
    });
  }
}

export const MEMORY_DB: symbol = Symbol('MEMORY_DB');
