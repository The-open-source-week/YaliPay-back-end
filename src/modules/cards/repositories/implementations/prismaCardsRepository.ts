import { Injectable } from '@nestjs/common';
import { Card } from '@prisma/client';
import { PrismaService } from '../../../../modules/prisma/prisma.service';
import { CreateCardDTO } from '../../dtos/create-card.dto';
import { UpdateCardDTO } from '../../dtos/update-card.dto';
import { ICardsRepository } from '../cardsRepository';

@Injectable()
export class PrismaCardsRepository implements ICardsRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(cardDto: CreateCardDTO): Promise<Card> {
    return this.prisma.card.create({
      data: cardDto,
    });
  }
  async update(id: string, data: UpdateCardDTO): Promise<Card> {
    const card = await this.prisma.card.findUnique({ where: { id } });

    if (!card) return null;

    return this.prisma.card.update({
      where: { id },
      data: {
        accountId: data.accountId,
        amount: data.amount,
        expireAt: data.expireAt,
        isActive: data.isActive,
      },
    });
  }

  show(id: string): Promise<Card> {
    return this.prisma.card.findUnique({
      where: { id },
      include: {
        accounts: true,
      },
    });
  }

  remove({ id }: { id: string }): Promise<Card> {
    return this.prisma.card.delete({ where: { id } });
  }
  accountCards({ accountId }: { accountId: string }): Promise<Card[]> {
    return this.prisma.card.findMany({
      where: { accountId },
      include: {
        accounts: true,
      },
    });
  }

  async findOne(id: string): Promise<Card> {
    const data = await this.prisma.card.findFirst({
      where: { id: id },
    });

    return data;
  }
}
