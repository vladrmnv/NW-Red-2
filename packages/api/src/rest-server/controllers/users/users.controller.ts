import { controller, httpGet } from 'inversify-express-utils';
import { UserRepository } from 'repositories/user.repository';
import { inject } from 'inversify';

@controller('/users')
export class UsersController {
  @inject(UserRepository)
  protected userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }
  @httpGet('/')
  public async get() {
    return this.userRepository.findAll();
  }
}
