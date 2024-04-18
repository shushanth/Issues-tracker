import { JwtService } from '@nestjs/jwt';
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements NestInterceptor {
  constructor(private jwtService: JwtService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    if (type === 'Bearer' && token) {
      try {
        const payload = this.jwtService.verifyAsync(token, {
          secret: process.env.ACCESS_TOKEN_SECRET,
        });
        request['user'] = payload;
        return next.handle().pipe();
      } catch (error) {
        throw new UnauthorizedException(error);
      }
    } else {
      throw new UnauthorizedException();
    }
  }
}
