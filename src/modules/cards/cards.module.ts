import { Module } from '@nestjs/common';
import { ICardsRepository } from './repositories/cardsRepository';
import { PrismaCardsRepository } from './repositories/implementations/prismaCardsRepository';
import { PrismaModule } from '../prisma/prisma.module';
import { CreateCardService } from './services/create/createCard.service';
import { CreateCardController } from './controllers/create/create-card.controller';
import { ListAllCardService } from './services/listAll/ListaAllCard.service';
import { ListAllCardController } from './controllers/listAll/findAll-card.controller';
import { GetMainCardService } from './services/getMainCard/GetMainCard.service';
import { GetMainCardController } from './controllers/getMainCard/GetMaincard.controller';
import { ActiveMainCardController } from './controllers/activeMainCard/ActiveMaincard.controller';
import { ActiveMainCardService } from './services/activateMainCard/ActiveMainCard.service';
import { RemoveCardService } from './services/removeCard/RemoveCard.service';
import { RemoveCardController } from './controllers/removeCard/RemoveCard.controller';
import { ActiveCardService } from './services/ActiveCard /activeCard.service';
import { DesactiveCardService } from './services/DesactiveCard /desactiveCard.service';
import { DesactiveCardController } from './controllers/desactiveCard/desactiveCard.controller';
import { ActiveCardController } from './controllers/activeCard /activeCard.controller';

@Module({
  controllers: [
    CreateCardController,
    ListAllCardController,
    GetMainCardController,
    ActiveMainCardController,
    RemoveCardController,
    DesactiveCardController,
    ActiveCardController,
  ],
  providers: [
    CreateCardService,
    ListAllCardService,
    GetMainCardService,
    ActiveMainCardService,
    RemoveCardService,
    ActiveCardService,
    DesactiveCardService,

    {
      provide: ICardsRepository,
      useClass: PrismaCardsRepository,
    },
  ],
  imports: [PrismaModule],
})
export class CardsModule {}
