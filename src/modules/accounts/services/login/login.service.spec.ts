import { Test, TestingModule } from '@nestjs/testing';
import { LoginService } from './login.service';
import { LocalStrategy } from '../jwt-strategy/local-jwt.strategy.service';
import { JwtStrategy } from '../jwt-strategy/jwt.strategy.service';
import { PrismaModule } from '../../../../modules/prisma/prisma.module';
import { CreateUserRepository } from '../../repositories/CreateUserRepository';
import { PrismaCreateUserRepository } from '../../repositories/implementations/PrismaCreateUserRepository';
import { ICardsRepository } from '../../../../modules/cards/repositories/cardsRepository';
import { PrismaCardsRepository } from '../../../../modules/cards/repositories/implementations/prismaCardsRepository';
import { JwtService } from '@nestjs/jwt';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LoginService,
        LocalStrategy,
        JwtStrategy,
        JwtService,
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

    service = module.get<LoginService>(LoginService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
