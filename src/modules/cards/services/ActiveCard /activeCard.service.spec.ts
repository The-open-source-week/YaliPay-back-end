import { Test, TestingModule } from '@nestjs/testing';
import { ActiveCardService } from './activeCard.service';
import { PrismaModule } from '../../../../modules/prisma/prisma.module';
import { ICardsRepository } from '../../repositories/cardsRepository';
import { PrismaCardsRepository } from '../../repositories/implementations/prismaCardsRepository';

describe('ActiveCardService', () => {
  let service: ActiveCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ActiveCardService,
        {
          provide: ICardsRepository,
          useClass: PrismaCardsRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    service = module.get<ActiveCardService>(ActiveCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
