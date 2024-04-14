import { IssuesController } from './issues.controller';
import { IssuesService } from './issues.service';
import { Module } from '@nestjs/common';
import { IssuesProvider } from './issues.provider';

@Module({
  providers: [IssuesService, ...IssuesProvider],
  controllers: [IssuesController],
  exports: [IssuesService],
})
export class IssuesModule {}
