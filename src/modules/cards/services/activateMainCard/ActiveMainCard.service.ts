import { Injectable, NotFoundException } from '@nestjs/common';
import { ICardsRepository } from '../../repositories/cardsRepository';
import { UpdateCardDTO } from '../../dtos/update-card.dto';

@Injectable()
export class ActiveMainCardService {
  constructor(private readonly cardRepository: ICardsRepository) {}
  async execute(cardId: string, data: UpdateCardDTO) {
    try {
      const card = await this.cardRepository.update(cardId, data);

      if (!card) {
        throw new NotFoundException('Cartão não encontrado');
      }
      return card;
    } catch (error) {
      throw error;
    }
  }
}
