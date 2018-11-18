import { Repository } from './Repository';
import { User } from 'models/User.model';
import { injectable } from 'inversify';

@injectable()
export class UserRepository implements Repository<User> {
  find(): User[] {
    return [
      new User({
        email: 'test@mail.com',
        password: '123',
      }),
    ];
  }
  findById(): User {
    throw new Error('Method not implemented.');
  }

  create<User>(user: User) {
    return user;
  }
}
