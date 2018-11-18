import { GenericRepository } from './GenericRepository';
import { IUser } from 'models/User.model';
import { injectable, inject } from 'inversify';
import { Repository, Connection } from 'typeorm';
import { MEMORY_DB } from 'data-sources/memory';
import { UserEntity } from 'models/User.entity';

@injectable()
export class UserRepository implements GenericRepository<IUser> {
  private typeOrmRepository: Repository<IUser>;

  constructor(@inject(MEMORY_DB) connection: Connection) {
    this.typeOrmRepository = connection.getRepository(UserEntity);
  }
  find(): Promise<IUser[]> {
    return this.typeOrmRepository.find();
  }
  findById(): Promise<IUser> {
    throw new Error('Method not implemented.');
  }

  create<IUser>(user: IUser) {
    return this.typeOrmRepository.save(user);
  }
}
