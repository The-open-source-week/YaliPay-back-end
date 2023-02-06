import { Injectable } from '@nestjs/common';
import { CreateUserRepository } from '../../repositories/CreateUserRepository';
import { CreateUserDTO } from '../../dtos/create-user.dto';
import * as bcrypt from 'bcrypt';
import { GenerateAccountNumber } from '../../../../utils/GenerateAccountsNumber';
import { GenerateConfirmationCode } from '../../../../utils/GenerateConfirmationCode';
import { ICardsRepository } from 'src/modules/cards/repositories/cardsRepository';
import { CreateCardDTO } from 'src/modules/cards/dtos/create-card.dto';
import { GenerateCVV } from 'src/utils/GenerateCVV';
import { Account } from '@prisma/client';

@Injectable()
export class CreateUserService {
  constructor(
    private userRepository: CreateUserRepository,
    private cardRepository: ICardsRepository,
  ) {}

  async execute(data: CreateUserDTO, cardDTO: CreateCardDTO): Promise<Account> {
    const passwordHash = (data.password = bcrypt.hashSync(data.password, 12));
    const cardNumber = Math.random().toString(36).substr(2, 9);
    const expiretDate = new Date('2025-07-12T14:30:00Z');

    const user = await this.userRepository.create({
      username: data.username,
      accountNumber: GenerateAccountNumber(),
      code: GenerateConfirmationCode(),
      password: passwordHash,
      email: data.email,
      phoneNumber: data.phoneNumber,
    });

    await this.cardRepository.create({
      amount: 0,
      cardNumber: Number(cardNumber),
      isActive: true,
      cvv: GenerateCVV(),
      accountId: user.id,
      expireAt: expiretDate,
    });

    return user;
  }
}
