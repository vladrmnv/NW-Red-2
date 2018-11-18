import { createConnection } from 'typeorm';
import { UserEntity } from 'models/User.entity';

export class MemoryDatasource {
  public createConnection() {
    return createConnection({
      type: 'sqljs',
      entities: [UserEntity],
    });
  }
}
