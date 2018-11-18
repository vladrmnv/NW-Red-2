import {
  controller,
  httpGet,
  httpPost,
  requestBody,
} from 'inversify-express-utils';
import { UserRepository } from 'repositories/User.repository';
import { inject } from 'inversify';
import { IUser } from 'models/User.model';

@controller('/users')
export class UsersController {
  @inject(UserRepository)
  protected userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }
  @httpGet('/')
  public async find() {
    return this.userRepository.find();
  }
  @httpPost('/')
  public async create(@requestBody() user: IUser) {
    return this.userRepository.create(user);
  }
}
