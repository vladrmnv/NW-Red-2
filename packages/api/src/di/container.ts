import { Container } from 'inversify';
import { UserRepository } from 'repositories/user.repository';

export const diContainer = new Container();
diContainer.bind<UserRepository>(UserRepository).to(UserRepository);
