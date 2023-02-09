import { Test, TestingModule } from '@nestjs/testing';
import { ICardsRepository } from '../../../../modules/cards/repositories/cardsRepository';
import { PrismaCardsRepository } from '../../../../modules/cards/repositories/implementations/prismaCardsRepository';
import { PrismaModule } from '../../../../modules/prisma/prisma.module';
import { RemoveCardController } from './RemoveCard.controller';
import { RemoveCardService } from '../../services/removeCard/RemoveCard.service';

describe('RemoveCardController', () => {
  let controller: RemoveCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RemoveCardController],
      providers: [
        RemoveCardService,
        {
          provide: ICardsRepository,
          useClass: PrismaCardsRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<RemoveCardController>(RemoveCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
