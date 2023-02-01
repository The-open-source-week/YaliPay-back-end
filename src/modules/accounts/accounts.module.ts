import { Module } from '@nestjs/common';

import { CreateUserService } from './services/create/createUser.service';
import { CreateUserController } from './controllers/create/createUser.controller';
import { CreateUserRepository } from './repositories/CreateUserRepository';
import { PrismaCreateUserRepository } from './repositories/implementations/PrismaCreateUserRepository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [CreateUserController],
  providers: [
    CreateUserService,

    {
      provide: CreateUserRepository,
      useClass: PrismaCreateUserRepository
    }
  
  ],
  imports: [
    PrismaModule
  ]
})
export class AccountsModule {}
