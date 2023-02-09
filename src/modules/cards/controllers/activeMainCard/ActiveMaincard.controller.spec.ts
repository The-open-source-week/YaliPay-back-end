import { Test, TestingModule } from '@nestjs/testing';
import { ICardsRepository } from '../../../../modules/cards/repositories/cardsRepository';
import { PrismaCardsRepository } from '../../../../modules/cards/repositories/implementations/prismaCardsRepository';
import { PrismaModule } from '../../../../modules/prisma/prisma.module';
import { ActiveMainCardController } from './ActiveMaincard.controller';
import { ActiveMainCardService } from '../../services/activateMainCard/ActiveMainCard.service';

describe('ActiveMainCardController', () => {
  let controller: ActiveMainCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActiveMainCardController],
      providers: [
        ActiveMainCardService,
        {
          provide: ICardsRepository,
          useClass: PrismaCardsRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<ActiveMainCardController>(ActiveMainCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
