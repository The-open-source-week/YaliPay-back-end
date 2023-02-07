import { Module } from '@nestjs/common';
import { ICardsRepository } from './repositories/cardsRepository';
import { PrismaCardsRepository } from './repositories/implementations/prismaCardsRepository';
import { PrismaModule } from '../prisma/prisma.module';
import { CreateCardService } from './services/create/createCard.service';
import { CreateCardController } from './controllers/create/create-card.controller';
import { ListAllCardService } from './services/listAll/ListaAllCard.service';
import { ListAllCardController } from './controllers/listAll/findAll-card.controller';
import { ShowCardController } from './controllers/ShowCard/show-card.controller';
import { ShowCardService } from './services/ShowCard/ShowCard.service';

@Module({
  controllers: [
    CreateCardController,
    ListAllCardController,
    ShowCardController,
  ],
  providers: [
    CreateCardService,
    ListAllCardService,
    ShowCardService,

    {
      provide: ICardsRepository,
      useClass: PrismaCardsRepository,
    },
  ],
  imports: [PrismaModule],
})
export class CardsModule {}
