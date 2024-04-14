import { ISSUES_REPO } from './../../core/constants';
import { Issues } from './issues.entity';

export const IssuesProvider = [
  {
    provide: ISSUES_REPO,
    useValue: Issues,
  },
];
