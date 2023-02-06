import { Module } from '@nestjs/common';
import { ICardsRepository } from './repositories/cardsRepository';
import { PrismaCardsRepository } from './repositories/implementations/prismaCardsRepository';
import { PrismaModule } from '../prisma/prisma.module';
import { CreateCardService } from './services/create/createCard.service';
import { CreateCardController } from './controllers/create-card.controller';

@Module({
  controllers: [CreateCardController],
  providers: [
    CreateCardService,

    {
      provide: ICardsRepository,
      useClass: PrismaCardsRepository,
    },
  ],
  imports: [PrismaModule],
})
export class CardsModule {}
