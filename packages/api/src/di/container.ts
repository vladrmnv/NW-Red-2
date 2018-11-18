import { Container } from 'inversify';
import { UserRepository } from 'repositories/User.repository';

export const diContainer = new Container();
diContainer.bind<UserRepository>(UserRepository).to(UserRepository);
