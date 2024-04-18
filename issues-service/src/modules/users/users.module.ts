import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Module, Logger } from '@nestjs/common';
import { UsersProvider } from './users.provider';

@Module({
  providers: [UsersService, ...UsersProvider, Logger],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
