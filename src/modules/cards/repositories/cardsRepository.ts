import { Account, Card } from '@prisma/client';
import { CreateCardDTO } from '../dtos/create-card.dto';
import { UpdateCardDTO } from '../dtos/update-card.dto';

export abstract class ICardsRepository {
  abstract create(data: CreateCardDTO): Promise<Card>;
  abstract update(id: string, data: UpdateCardDTO): Promise<Card>;
  abstract show(id: string): Promise<Card>;
  abstract remove({ id }: { id: string }): Promise<Card>;
  abstract accountCards({ accountId }: { accountId: string }): Promise<Card[]>;
  abstract findOne(id: string): Promise<Card>;
}
