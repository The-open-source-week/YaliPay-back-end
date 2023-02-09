import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserController } from './createUser.controller';
import { CreateUserRepository } from '../../repositories/CreateUserRepository';
import { PrismaCreateUserRepository } from '../../repositories/implementations/PrismaCreateUserRepository';
import { ICardsRepository } from '../../../../modules/cards/repositories/cardsRepository';
import { PrismaCardsRepository } from '../../../../modules/cards/repositories/implementations/prismaCardsRepository';
import { CreateUserService } from '../../services/create/createUser.service';
import { PrismaModule } from '../../../../modules/prisma/prisma.module';

describe('CreateController', () => {
  let controller: CreateUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateUserController],
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

    controller = module.get<CreateUserController>(CreateUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
