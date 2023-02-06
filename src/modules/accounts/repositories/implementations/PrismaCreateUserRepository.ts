import { PrismaService } from '../../../../modules/prisma/prisma.service';
import { CreateUserDTO } from '../../dtos/create-user.dto';
import { CreateUserRepository } from '../CreateUserRepository';
import { Injectable } from '@nestjs/common';
import { Account } from '@prisma/client';

@Injectable()
export class PrismaCreateUserRepository implements CreateUserRepository {
  constructor(private readonly Prisma: PrismaService) {}

  async create(userDto: CreateUserDTO): Promise<Account> {
    const user = await this.Prisma.account.create({
      data: {
        username: userDto.username,
        email: userDto.email,
        phoneNumber: userDto.phoneNumber,
        password: userDto.password,
        code: userDto.code,
        accountNumber: userDto.accountNumber,
      },
    });

    return user;
  }

  async findByEmail(email: string): Promise<Account> {
    const user = await this.Prisma.account.findFirst({
      where: {
        email: email,
      },
    });

    return user;
  }
}
