import { GenericRepository } from './GenericRepository';
import { IUser } from 'models/User.model';
import { injectable, inject } from 'inversify';
import { Repository, Connection } from 'typeorm';
import { SQLITE } from 'data-sources/sqlite';
import { UserEntity } from 'models/User.entity';

@injectable()
export class UserRepository implements GenericRepository<IUser> {
  private typeOrmRepository: Repository<IUser>;

  constructor(@inject(SQLITE) connection: Connection) {
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
