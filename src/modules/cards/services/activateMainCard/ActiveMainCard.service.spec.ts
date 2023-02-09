import { Test, TestingModule } from '@nestjs/testing';
import { ActiveMainCardService } from './ActiveMainCard.service';
import { PrismaModule } from '../../../../modules/prisma/prisma.module';
import { ICardsRepository } from '../../repositories/cardsRepository';
import { PrismaCardsRepository } from '../../repositories/implementations/prismaCardsRepository';

describe('ActiveMainCardService', () => {
  let service: ActiveMainCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ActiveMainCardService,
        {
          provide: ICardsRepository,
          useClass: PrismaCardsRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    service = module.get<ActiveMainCardService>(ActiveMainCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
