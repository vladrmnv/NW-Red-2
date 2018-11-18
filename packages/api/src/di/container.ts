import { Container } from 'inversify';
import { UserRepository } from 'repositories/User.repository';

export function bindDependencies(container: Container) {
  container.bind<UserRepository>(UserRepository).to(UserRepository);
  return container;
}
