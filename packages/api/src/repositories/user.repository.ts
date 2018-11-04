import { CrudRepository } from './repository';
import { User } from 'models/user.model';
import { injectable } from 'inversify';

@injectable()
export class UserRepository extends CrudRepository {
  create<User>(user: User) {
    return user;
  }
  findAll() {
    return [
      new User({
        email: 'test@mail.com',
        password: '123',
      }),
    ];
  }
}
