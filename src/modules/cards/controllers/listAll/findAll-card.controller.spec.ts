import { Test, TestingModule } from '@nestjs/testing';
import { ICardsRepository } from '../../../../modules/cards/repositories/cardsRepository';
import { PrismaCardsRepository } from '../../../../modules/cards/repositories/implementations/prismaCardsRepository';
import { PrismaModule } from '../../../../modules/prisma/prisma.module';
import { ListAllCardController } from './findAll-card.controller';
import { ListAllCardService } from '../../services/listAll/ListaAllCard.service';

describe('ListAllCardController', () => {
  let controller: ListAllCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListAllCardController],
      providers: [
        ListAllCardService,
        {
          provide: ICardsRepository,
          useClass: PrismaCardsRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<ListAllCardController>(ListAllCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
