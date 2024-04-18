import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { UserLoginDTO, UsersDTO } from './../users/dto/users.dto';
import { AccessTokenDTO, RegisterSuccessDTO } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() user: UserLoginDTO): Promise<AccessTokenDTO> {
    return await this.authService.signIn(user);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  async signup(@Body() user: UsersDTO): Promise<RegisterSuccessDTO> {
    return await this.authService.signUp(user);
  }
}
