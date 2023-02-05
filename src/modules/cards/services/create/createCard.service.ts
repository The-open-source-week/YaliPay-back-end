import { Injectable } from '@nestjs/common';
import { CreateCardDTO } from '../../dtos/create-card.dto';
import { ICardsRepository } from '../../repositories/cardsRepository';

@Injectable()
export class CreateCardService {
  constructor(private readonly _repository: ICardsRepository) {}
  async execute(data: CreateCardDTO) {}
}
