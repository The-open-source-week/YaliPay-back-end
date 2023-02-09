import { Test, TestingModule } from '@nestjs/testing';
import { CreateTransferencesController } from './create-transferences.controller';
import { CreateTransferencesService } from '../../services/create/create-transferences.service';
import { CreateTransferenceRepository } from '../../repositories/CreateTransferenceRepositories';
import { PrismaCreateTransferenceRepository } from '../../repositories/implementations/PrismaCreateTransferencesRepositories';
import { ICardsRepository } from '../../../../modules/cards/repositories/cardsRepository';
import { PrismaCardsRepository } from '../../../../modules/cards/repositories/implementations/prismaCardsRepository';
import { CreateUserRepository } from '../../../../modules/accounts/repositories/CreateUserRepository';
import { PrismaCreateUserRepository } from '../../../../modules/accounts/repositories/implementations/PrismaCreateUserRepository';
import { PrismaModule } from '../../../../modules/prisma/prisma.module';

describe('TransferencesController', () => {
  let controller: CreateTransferencesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateTransferencesController],
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

    controller = module.get<CreateTransferencesController>(
      CreateTransferencesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
