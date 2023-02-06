import { Injectable } from '@nestjs/common';
import { CreateCardDTO } from '../../dtos/create-card.dto';
import { ICardsRepository } from '../../repositories/cardsRepository';
import { GenerateCVV } from '../../../../utils/GenerateCVV';

@Injectable()
export class CreateCardService {
  constructor(private readonly cardRepository: ICardsRepository) {}
  async execute(data: CreateCardDTO) {
    const cardNumber = Math.random().toString(36).substr(2, 9);
    const expiretDate = new Date('2025-07-12T14:30:00Z');

    const card = await this.cardRepository.create({
      amount: 0,
      cardNumber: Number(cardNumber),
      cardHolderName: data.cardHolderName,
      isActive: true,
      cvv: GenerateCVV(),
      accountId: data.accountId,
      expireAt: expiretDate,
    });

    return card;
  }
}
