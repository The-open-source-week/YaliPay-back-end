import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserRepository } from '../../repositories/CreateUserRepository';
import { CreateUserDTO } from '../../dtos/create-user.dto';
import * as bcrypt from 'bcrypt';
import { GenerateAccountNumber } from '../../../../utils/GenerateAccountsNumber';
import { GenerateConfirmationCode } from '../../../../utils/GenerateConfirmationCode';
import { ICardsRepository } from '../../../../modules/cards/repositories/cardsRepository';
import { GenerateCVV } from '../../../../utils/GenerateCVV';
import { Account } from '@prisma/client';

@Injectable()
export class CreateUserService {
  constructor(
    private userRepository: CreateUserRepository,
    private cardRepository: ICardsRepository,
  ) {}

  async execute(data: CreateUserDTO): Promise<Account> {
    try {
      const userAlready = await this.userRepository.findByEmail(data.email);

      if (userAlready) {
        throw new HttpException(
          {
            status: HttpStatus.CONFLICT,
            error: 'Usuário já existe',
          },
          HttpStatus.BAD_REQUEST,
        );
      }

      const passwordHash = (data.password = bcrypt.hashSync(data.password, 12));
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
        cardNumber: GenerateAccountNumber(),
        isActive: true,
        cvv: GenerateCVV(),
        accountId: user.id,
        expireAt: expiretDate,
      });

      return user;
    } catch (error) {
      throw error;
    }
  }
}
