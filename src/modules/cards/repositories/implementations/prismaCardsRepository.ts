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
        isMain: data.isMain,
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

  async remove({ id }: { id: string }): Promise<Card> {
    return await this.prisma.card.delete({ where: { id } });
  }
  async accountCards({ accountId }: { accountId: string }): Promise<Card[]> {
    return await this.prisma.card.findMany({
      where: { accountId },
    });
  }

  async GetMainCard({ accountId }: { accountId: string }): Promise<Card> {
    const card = await this.prisma.card.findFirst({
      where: {
        accounts: {
          id: accountId,
        },
        isMain: true,
      },
    });

    return card;
  }

  async findOne(id: string): Promise<Card> {
    const data = await this.prisma.card.findUnique({
      where: { id: id },
    });

    return data;
  }

  async activateCard(cardId: string): Promise<void> {
    await this.prisma.card.update({
      where: { id: cardId },
      data: { isActive: true },
    });
  }

  async deactivateCard(cardId: string): Promise<void> {
    await this.prisma.card.update({
      where: { id: cardId },
      data: { isActive: false },
    });
  }
}
