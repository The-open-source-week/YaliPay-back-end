import { Test, TestingModule } from '@nestjs/testing';
import { ICardsRepository } from '../../../../modules/cards/repositories/cardsRepository';
import { PrismaCardsRepository } from '../../../../modules/cards/repositories/implementations/prismaCardsRepository';
import { PrismaModule } from '../../../../modules/prisma/prisma.module';
import { ActiveCardController } from './activeCard.controller';
import { ActiveCardService } from '../../services/ActiveCard /activeCard.service';

describe('ActiveCardController', () => {
  let controller: ActiveCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActiveCardController],
      providers: [
        ActiveCardService,
        {
          provide: ICardsRepository,
          useClass: PrismaCardsRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<ActiveCardController>(ActiveCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
