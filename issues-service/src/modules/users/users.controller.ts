import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { User } from './users.entity';
import { TokenInterceptor } from './../../interceptors/token.interceptor';
import { UsersService } from './users.service';

@UseInterceptors(TokenInterceptor)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async users(): Promise<User[]> {
    return await this.usersService.users();
  }
}
