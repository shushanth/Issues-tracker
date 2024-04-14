import { USERS_REPO } from './../../core/constants';
import { User } from './users.entity';
import { Inject, Injectable } from '@nestjs/common';
import { UsersDTO } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(@Inject(USERS_REPO) private readonly usersRepo) {}

  async users(): Promise<User[]> {
    return await this.usersRepo.findAll();
  }

  async user(email: string): Promise<User> {
    return await this.usersRepo.findOne({
      where: {
        email,
      },
    });
  }

  async create(user: UsersDTO): Promise<User> {
    return await this.usersRepo.create(user);
  }
}
