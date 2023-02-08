import { Injectable } from '@nestjs/common';
import { ICardsRepository } from '../../repositories/cardsRepository';

@Injectable()
export class RemoveCardService {
  constructor(private readonly cardRepository: ICardsRepository) {}
  async execute(cardId: string) {
    try {
      await this.cardRepository.remove({ id: cardId });
    } catch (error) {
      throw error;
    }
  }
}
