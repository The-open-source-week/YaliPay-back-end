import { Test, TestingModule } from '@nestjs/testing';
import { RemoveCardService } from './RemoveCard.service';
import { PrismaModule } from '../../../../modules/prisma/prisma.module';
import { PrismaCardsRepository } from '../../repositories/implementations/prismaCardsRepository';
import { ICardsRepository } from '../../repositories/cardsRepository';

describe('RemoveCardService', () => {
  let service: RemoveCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RemoveCardService,
        {
          provide: ICardsRepository,
          useClass: PrismaCardsRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    service = module.get<RemoveCardService>(RemoveCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
