import { Module } from '@nestjs/common';
import { ICardsRepository } from './repositories/cardsRepository';
import { PrismaCardsRepository } from './repositories/implementations/prismaCardsRepository';

@Module({
  controllers: [],
  providers: [
    {
      provide: ICardsRepository,
      useClass: PrismaCardsRepository,
    },
  ],
  imports: [],
})
export class CardsModule {}
