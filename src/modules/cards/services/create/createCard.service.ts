import { Injectable } from '@nestjs/common';
import { CreateCardDTO } from '../../dtos/create-card.dto';
import { ICardsRepository } from '../../repositories/cardsRepository';
import { GenerateCVV } from '../../../../utils/GenerateCVV';

@Injectable()
export class CreateCardService {
  constructor(private readonly cardRepository: ICardsRepository) {}
  async execute(data: CreateCardDTO) {
    try {
      const expiretDate = new Date('2025-07-12T14:30:00Z');

      const card = await this.cardRepository.create({
        amount: 0,
        cardNumber: data.cardNumber,
        isActive: true,
        isMain: false,
        cvv: GenerateCVV(),
        accountId: data.accountId,
        expireAt: expiretDate,
      });

      return card;
    } catch (error) {
      throw new error();
    }
  }
}
