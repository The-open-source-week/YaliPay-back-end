import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ICardsRepository } from '../../repositories/cardsRepository';

@Injectable()
export class ShowCardService {
  constructor(private readonly cardRepository: ICardsRepository) {}
  async execute(accountId: string) {
    try {
      const card = await this.cardRepository.show(accountId);

      if (!card) {
        throw new HttpException(
          {
            status: HttpStatus.CONFLICT,
            error: `Cartão não encontrado.`,
          },
          HttpStatus.NOT_FOUND,
        );
      }
      return card;
    } catch (error) {
      throw error;
    }
  }
}
