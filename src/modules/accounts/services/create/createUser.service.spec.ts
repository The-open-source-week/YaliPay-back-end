import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserService } from './createUser.service';
import { PrismaModule } from '../../../../modules/prisma/prisma.module';
import { CreateUserRepository } from '../../repositories/CreateUserRepository';
import { PrismaCreateUserRepository } from '../../repositories/implementations/PrismaCreateUserRepository';
import { ICardsRepository } from '../../../../modules/cards/repositories/cardsRepository';
import { PrismaCardsRepository } from '../../../../modules/cards/repositories/implementations/prismaCardsRepository';

describe('CreateService', () => {
  let service: CreateUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateUserService,
        {
          provide: CreateUserRepository,
          useClass: PrismaCreateUserRepository,
        },
        {
          provide: ICardsRepository,
          useClass: PrismaCardsRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    service = module.get<CreateUserService>(CreateUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
