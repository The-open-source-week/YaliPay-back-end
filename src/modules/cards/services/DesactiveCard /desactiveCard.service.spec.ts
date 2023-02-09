import { Test, TestingModule } from '@nestjs/testing';
import { DesactiveCardService } from './desactiveCard.service';
import { PrismaModule } from '../../../../modules/prisma/prisma.module';
import { ICardsRepository } from '../../repositories/cardsRepository';
import { PrismaCardsRepository } from '../../repositories/implementations/prismaCardsRepository';

describe('DesactiveCardService', () => {
  let service: DesactiveCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DesactiveCardService,
        {
          provide: ICardsRepository,
          useClass: PrismaCardsRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    service = module.get<DesactiveCardService>(DesactiveCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
