import { PrismaService } from "src/modules/prisma/prisma.service";
import { CreateUserDTO } from "../../dtos/create-user.dto";
import { CreateUserRepository } from "../CreateUserRepository";
import { Injectable } from '@nestjs/common';
import { randomUUID } from "crypto";


@Injectable()
export class PrismaCreateUserRepository implements CreateUserRepository{
    constructor(private readonly Prisma: PrismaService){}
  
 async create(userDto: CreateUserDTO): Promise<void> {
     await this.Prisma.account.create({
      data: {
        username: userDto.username,
        email:   userDto.email,
        phoneNumber: userDto.phoneNumber,
        password:  userDto.password,
        code:     userDto.code
      }
    })
  }
  
}