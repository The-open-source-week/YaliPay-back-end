import { Module } from '@nestjs/common';

import { CreateUserService } from './services/create/createUser.service';
import { CreateUserController } from './controllers/create/createUser.controller';
import { CreateUserRepository } from './repositories/CreateUserRepository';
import { PrismaCreateUserRepository } from './repositories/implementations/PrismaCreateUserRepository';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { LoginService } from './services/login/login.service';
import { JwtStrategy } from './services/jwt-strategy/jwt.strategy.service';
import { LocalStrategy } from './services/jwt-strategy/local-jwt.strategy.service';
import { LoginController } from './controllers/login/login.controller';
import { ProfileController } from './controllers/profile/profile.controller';
import { ICardsRepository } from '../cards/repositories/cardsRepository';
import { PrismaCardsRepository } from '../cards/repositories/implementations/prismaCardsRepository';

@Module({
  controllers: [CreateUserController, LoginController, ProfileController],
  providers: [
    CreateUserService,
    LoginService,
    JwtStrategy,
    LocalStrategy,

    {
      provide: CreateUserRepository,
      useClass: PrismaCreateUserRepository,
    },
    {
      provide: ICardsRepository,
      useClass: PrismaCardsRepository,
    },
  ],
  imports: [
    PrismaModule,
    JwtModule.register({
      signOptions: {
        expiresIn: '30d',
      },
    }),
  ],
})
export class AccountsModule {}
