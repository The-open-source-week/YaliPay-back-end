import { Module } from '@nestjs/common';
import { CreateTransferencesController } from './controllers/create/create-transferences.controller';
import { CreateTransferencesService } from './services/create/create-transferences.service';
import { CreateTransferenceRepository } from './repositories/CreateTransferenceRepositories';
import { PrismaCreateUserRepository } from '../accounts/repositories/implementations/PrismaCreateUserRepository';
import { PrismaModule } from '../prisma/prisma.module';
import { ICardsRepository } from '../cards/repositories/cardsRepository';
import { PrismaCardsRepository } from '../cards/repositories/implementations/prismaCardsRepository';
import { CreateUserRepository } from '../accounts/repositories/CreateUserRepository';
import { PrismaCreateTransferenceRepository } from './repositories/implementations/PrismaCreateTransferencesRepositories';

@Module({
  controllers: [CreateTransferencesController],
  providers: [
    CreateTransferencesService,

    {
      provide: CreateTransferenceRepository,
      useClass: PrismaCreateTransferenceRepository,
    },
    {
      provide: ICardsRepository,
      useClass: PrismaCardsRepository,
    },
    {
      provide: CreateUserRepository,
      useClass: PrismaCreateUserRepository,
    },
  ],

  imports: [PrismaModule],
})
export class TransferencesModule {}
