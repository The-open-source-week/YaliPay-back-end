import { Test, TestingModule } from '@nestjs/testing';
import { CreateTransferencesService } from './create-transferences.service';
import { CreateTransferenceRepository } from '../../repositories/CreateTransferenceRepositories';
import { PrismaCreateTransferenceRepository } from '../../repositories/implementations/PrismaCreateTransferencesRepositories';
import { ICardsRepository } from '../../../../modules/cards/repositories/cardsRepository';
import { PrismaCardsRepository } from '../../../../modules/cards/repositories/implementations/prismaCardsRepository';
import { CreateUserRepository } from '../../../../modules/accounts/repositories/CreateUserRepository';
import { PrismaCreateUserRepository } from '../../../../modules/accounts/repositories/implementations/PrismaCreateUserRepository';
import { PrismaModule } from '../../../../modules/prisma/prisma.module';

describe('TransferencesService', () => {
  let createTransferenceService: CreateTransferencesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateTransferencesService,
        {
          provide: CreateTransferenceRepository,
          useClass: PrismaCreateTransferenceRepository,
        },
        {
          provide: ICardsRepository,
          useClass: PrismaCardsRepository,
        },
        {
          provide: CreateUserRepository,
          useClass: PrismaCreateUserRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    createTransferenceService = module.get<CreateTransferencesService>(
      CreateTransferencesService,
    );
  });

  it('should be defined', () => {
    expect(createTransferenceService).toBeDefined();
  });
});
