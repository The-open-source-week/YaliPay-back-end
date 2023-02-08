import { Injectable, NotFoundException } from '@nestjs/common';
import { ICardsRepository } from '../../repositories/cardsRepository';

@Injectable()
export class DesactiveCardService {
  constructor(private readonly cardRepository: ICardsRepository) {}
  async execute(cardId: string) {
    try {
      const card = await this.cardRepository.findOne(cardId);

      if (!card) {
        throw new NotFoundException('Cartão não encontrado');
      }
      await this.cardRepository.deactivateCard(cardId);
    } catch (error) {
      throw error;
    }
  }
}
