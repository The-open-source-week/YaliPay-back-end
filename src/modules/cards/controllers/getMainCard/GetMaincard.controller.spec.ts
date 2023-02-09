import { Test, TestingModule } from '@nestjs/testing';
import { ICardsRepository } from '../../../../modules/cards/repositories/cardsRepository';
import { PrismaCardsRepository } from '../../../../modules/cards/repositories/implementations/prismaCardsRepository';
import { PrismaModule } from '../../../../modules/prisma/prisma.module';
import { GetMainCardController } from './GetMaincard.controller';
import { GetMainCardService } from '../../services/getMainCard/GetMainCard.service';

describe('GetMainCardController', () => {
  let controller: GetMainCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetMainCardController],
      providers: [
        GetMainCardService,
        {
          provide: ICardsRepository,
          useClass: PrismaCardsRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<GetMainCardController>(GetMainCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
