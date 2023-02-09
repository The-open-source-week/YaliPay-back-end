import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../../../../modules/prisma/prisma.module';
import { ICardsRepository } from '../../repositories/cardsRepository';
import { PrismaCardsRepository } from '../../repositories/implementations/prismaCardsRepository';
import { ListAllCardService } from './ListaAllCard.service';

describe('ListAllCardService', () => {
  let service: ListAllCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ListAllCardService,
        {
          provide: ICardsRepository,
          useClass: PrismaCardsRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    service = module.get<ListAllCardService>(ListAllCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
