import { ISSUES_REPO } from './../../core/constants';
import { Issues } from './issues.entity';
import { IssuesCreateDTO } from './dto/issues.dto';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class IssuesService {
  constructor(@Inject(ISSUES_REPO) private readonly issueRepo: typeof Issues) {}

  async getIssues(): Promise<Issues[]> {
    return await this.issueRepo.findAll();
  }

  async getIssuesByUser(userId: number): Promise<Issues[]> {
    return await this.issueRepo.findAll({
      where: {
        userId,
      },
    });
  }

  async createIssue(issue: IssuesCreateDTO): Promise<Issues> {
    return await this.issueRepo.create(issue);
  }
}
