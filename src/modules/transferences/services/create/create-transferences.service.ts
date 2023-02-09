import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTransferenceDto } from '../../dtos/create-transference.dto';
import { CreateTransferenceRepository } from '../../repositories/CreateTransferenceRepositories';
import { ICardsRepository } from '../../../../modules/cards/repositories/cardsRepository';
import { Transference } from '@prisma/client';
import { CreateUserRepository } from '../../../../modules/accounts/repositories/CreateUserRepository';

@Injectable()
export class CreateTransferencesService {
  constructor(
    private readonly transferceRepo: CreateTransferenceRepository,
    private readonly CardRepo: ICardsRepository,
    private readonly userRepo: CreateUserRepository,
  ) {}

  async create(data: CreateTransferenceDto): Promise<Transference> {
    try {
      // Obter o registro de cartão corresponde ao identificador fornecido
      const card = await this.CardRepo.findOne(data.cardID);
      if (!card) {
        throw new HttpException(
          {
            status: HttpStatus.CONFLICT,
            error: `Cartão não encontrado$.`,
          },
          HttpStatus.CONFLICT,
        );
      }

      const sender = await this.userRepo.findByPhone(data.phoneNumber);

      if (!sender) {
        throw new HttpException(
          {
            status: HttpStatus.CONFLICT,
            error: `Não existe usuário com o telefone ${data.phoneNumber}.`,
          },
          HttpStatus.CONFLICT,
        );
      }

      const transference = await this.transferceRepo.create({
        amount: data.amount,
        phoneNumber: data.phoneNumber,
        accountId: data.accountId,
        cardID: card.id,
      });

      await this.CardRepo.update(card.id, { amount: data.amount });

      return transference;
    } catch (error) {
      throw error;
    }
  }
}
