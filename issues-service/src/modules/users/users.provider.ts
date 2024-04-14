import { User } from './users.entity';
import { USERS_REPO } from './../../core/constants';

export const UsersProvider = [
  {
    provide: USERS_REPO,
    useValue: User,
  },
];
