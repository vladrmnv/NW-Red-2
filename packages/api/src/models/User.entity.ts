import { EntitySchema } from 'typeorm';
import { IUser } from './user.model';

export const UserEntity = new EntitySchema<IUser>({
  name: 'user',
  columns: {
    id: {
      type: String,
      primary: true,
      generated: 'uuid',
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
});
