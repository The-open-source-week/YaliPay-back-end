import { Injectable } from '@nestjs/common';
import { ICardsRepository } from '../../repositories/cardsRepository';

@Injectable()
export class ShowCardService {
  constructor(private readonly cardRepository: ICardsRepository) {}
  async execute(accountId: string) {
    try {
      const card = await this.cardRepository.show({ id: accountId });
      return card;
    } catch (error) {
      throw error;
    }
  }
}
