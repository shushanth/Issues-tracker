import { JwtService } from '@nestjs/jwt';
import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AccessTokenDTO, AccessTokenPayloadDTO } from './dto/auth.dto';
import { UserLoginDTO, UsersDTO } from './../users/dto/users.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
  ) {}

  async signIn(user: UserLoginDTO): Promise<AccessTokenDTO> {
    debugger;
    const existingUser = await this.userService.user(user.email);

    if (existingUser) {
      const passwordMatch = await bcrypt.compare(
        user.password,
        existingUser.password,
      );
      if (!passwordMatch) {
        throw new UnauthorizedException('password does not match');
      }
      return this.handleSignToken({
        id: existingUser.id,
        email: existingUser.email,
      });
    } else {
      throw new BadRequestException('users does not exists');
    }
  }

  async signUp(user: UsersDTO): Promise<AccessTokenDTO> {
    const userInRepo = await this.userService.user(user.email);
    if (userInRepo) {
      throw new BadRequestException('user already exists');
    }
    const passwordHash = await bcrypt.hash(user.password, 10);
    const newUser = { ...user, password: await passwordHash };
    const createdNewUser = await this.userService.create(newUser);
    return this.handleSignToken({
      id: createdNewUser.id,
      email: createdNewUser.email,
    });
  }

  private async handleSignToken(
    payload: AccessTokenPayloadDTO,
  ): Promise<AccessTokenDTO> {
    const accessToken = await this.jwtService.signAsync(payload);
    return {
      access_token: accessToken,
    };
  }
}
