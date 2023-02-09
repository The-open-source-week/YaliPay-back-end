import { Test, TestingModule } from '@nestjs/testing';
import { ICardsRepository } from '../../../../modules/cards/repositories/cardsRepository';
import { PrismaCardsRepository } from '../../../../modules/cards/repositories/implementations/prismaCardsRepository';
import { PrismaModule } from '../../../../modules/prisma/prisma.module';
import { DesactiveCardController } from './desactiveCard.controller';
import { DesactiveCardService } from '../../services/DesactiveCard /desactiveCard.service';

describe('DesactiveCardController', () => {
  let controller: DesactiveCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DesactiveCardController],
      providers: [
        DesactiveCardService,
        {
          provide: ICardsRepository,
          useClass: PrismaCardsRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<DesactiveCardController>(DesactiveCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
