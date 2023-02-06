import { Module } from '@nestjs/common';
import { ICardsRepository } from './repositories/cardsRepository';
import { PrismaCardsRepository } from './repositories/implementations/prismaCardsRepository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [],
  providers: [
    {
      provide: ICardsRepository,
      useClass: PrismaCardsRepository,
    },
  ],
  imports: [PrismaModule],
})
export class CardsModule {}
