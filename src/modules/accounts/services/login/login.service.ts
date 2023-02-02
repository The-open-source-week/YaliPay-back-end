import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserRepository } from '../../repositories/CreateUserRepository';

@Injectable()
export class LoginService {
  constructor(
    private jwtService: JwtService,
    private readonly userRepository: CreateUserRepository,
  ) {}

  async login(user) {
    const payload = { sub: user.id, email: user.email };

    return {
      token: this.jwtService.sign(payload, {
        secret: process.env.JWT_KEY,
        expiresIn: '3d',
      }),
    };
  }

  async validateUser(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) return null;

    return user;
  }
}
