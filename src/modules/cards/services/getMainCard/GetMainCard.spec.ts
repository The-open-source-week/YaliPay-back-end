import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../../../../modules/prisma/prisma.module';
import { ICardsRepository } from '../../repositories/cardsRepository';
import { PrismaCardsRepository } from '../../repositories/implementations/prismaCardsRepository';
import { GetMainCardService } from './GetMainCard.service';

describe('GetMainCardService', () => {
  let service: GetMainCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetMainCardService,
        {
          provide: ICardsRepository,
          useClass: PrismaCardsRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    service = module.get<GetMainCardService>(GetMainCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
