import { IssuesService } from './issues.service';
import { Controller, Get, Post, Body, Param, Logger } from '@nestjs/common';
import { Issues } from './issues.entity';

@Controller('issues')
export class IssuesController {
  constructor(private issueService: IssuesService) {}

  @Get()
  async issues(): Promise<Issues[]> {
    return await this.issueService.getIssues();
  }

  @Get(':userId')
  async issuesByUser(@Param('userId') userId: number): Promise<Issues[]> {
    return await this.issueService.getIssuesByUser(userId);
  }

  @Post()
  async createIssue(@Body() issues: Issues): Promise<Issues> {
    return await this.issueService.createIssue(issues);
  }
}
