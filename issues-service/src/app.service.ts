import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  init(): string {
    return 'App listening on port 4000';
  }
}
