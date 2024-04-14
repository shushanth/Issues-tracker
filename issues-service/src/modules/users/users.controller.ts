import { Controller, Get } from '@nestjs/common';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async users(): Promise<User[]> {
    return await this.usersService.users();
  }
}
