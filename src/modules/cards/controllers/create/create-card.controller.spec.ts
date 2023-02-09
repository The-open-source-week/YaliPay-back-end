import { Test, TestingModule } from '@nestjs/testing';
import { ICardsRepository } from '../../../../modules/cards/repositories/cardsRepository';
import { PrismaCardsRepository } from '../../../../modules/cards/repositories/implementations/prismaCardsRepository';
import { PrismaModule } from '../../../../modules/prisma/prisma.module';
import { CreateCardController } from './create-card.controller';
import { CreateCardService } from '../../services/create/createCard.service';

describe('CreateCardController', () => {
  let controller: CreateCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateCardController],
      providers: [
        CreateCardService,
        {
          provide: ICardsRepository,
          useClass: PrismaCardsRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<CreateCardController>(CreateCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
