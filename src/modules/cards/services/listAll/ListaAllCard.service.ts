import { Injectable } from '@nestjs/common';
import { ICardsRepository } from '../../repositories/cardsRepository';

@Injectable()
export class ListAllCardService {
  constructor(private readonly cardRepository: ICardsRepository) {}
  async execute(accountId: string) {
    try {
      const cards = await this.cardRepository.accountCards({
        accountId: accountId,
      });

      return cards;
    } catch (error) {
      throw error;
    }
  }
}
