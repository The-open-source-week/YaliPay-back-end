import { Test, TestingModule } from '@nestjs/testing';
import { LoginController } from './login.controller';
import { LoginService } from '../../services/login/login.service';
import { JwtService } from '@nestjs/jwt';
import { LocalStrategy } from '../../services/jwt-strategy/local-jwt.strategy.service';
import { CreateUserRepository } from '../../repositories/CreateUserRepository';
import { PrismaCreateUserRepository } from '../../repositories/implementations/PrismaCreateUserRepository';
import { ICardsRepository } from '../../../../modules/cards/repositories/cardsRepository';
import { PrismaCardsRepository } from '../../../../modules/cards/repositories/implementations/prismaCardsRepository';
import { PrismaModule } from '../../../../modules/prisma/prisma.module';

describe('LoginController', () => {
  let controller: LoginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoginController],
      providers: [
        LoginService,
        JwtService,
        LocalStrategy,
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

    controller = module.get<LoginController>(LoginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
