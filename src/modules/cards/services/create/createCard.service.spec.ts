import { Test, TestingModule } from '@nestjs/testing';
import { CreateCardService } from './createCard.service';
import { PrismaModule } from '../../../../modules/prisma/prisma.module';
import { ICardsRepository } from '../../repositories/cardsRepository';
import { PrismaCardsRepository } from '../../repositories/implementations/prismaCardsRepository';

describe('CreateCardService', () => {
  let service: CreateCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateCardService,
        {
          provide: ICardsRepository,
          useClass: PrismaCardsRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    service = module.get<CreateCardService>(CreateCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
