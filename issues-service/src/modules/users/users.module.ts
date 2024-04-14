import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Module } from '@nestjs/common';
import { UsersProvider } from './users.provider';

@Module({
  providers: [UsersService, ...UsersProvider],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
