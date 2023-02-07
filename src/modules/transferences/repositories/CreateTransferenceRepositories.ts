import { Transference } from '@prisma/client';
import { CreateTransferenceDto } from '../dtos/create-transference.dto';

export abstract class CreateTransferenceRepository {
  abstract create(userDto: CreateTransferenceDto): Promise<Transference>;
}
