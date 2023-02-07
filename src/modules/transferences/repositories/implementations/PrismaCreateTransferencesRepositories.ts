import { PrismaService } from '../../../../modules/prisma/prisma.service';
import { CreateTransferenceDto } from '../../dtos/create-transference.dto';
import { CreateTransferenceRepository } from '../CreateTransferenceRepositories';
import { Injectable } from '@nestjs/common';
import { Transference } from '@prisma/client';

@Injectable()
export class PrismaCreateTransferenceRepository
  implements CreateTransferenceRepository
{
  constructor(private readonly Prisma: PrismaService) {}

  async create(transferenceDTO: CreateTransferenceDto): Promise<Transference> {
    const transference = await this.Prisma.transference.create({
      data: {
        amount: transferenceDTO.amount,
        phoneNumber: transferenceDTO.phoneNumber,
        accountId: transferenceDTO.accountId,
        cardId: transferenceDTO.cardID,
      },
    });

    return transference;
  }
}
