import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { UserLoginDTO, UsersDTO } from './../users/dto/users.dto';
import { AccessTokenDTO } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() user: UserLoginDTO): Promise<AccessTokenDTO> {
    return await this.authService.signIn(user);
  }

  @Post('Register')
  async signup(@Body() user: UsersDTO): Promise<AccessTokenDTO> {
    return await this.authService.signUp(user);
  }
}
