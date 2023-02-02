import { Account } from '@prisma/client';
import { CreateUserDTO } from '../dtos/create-user.dto';
export abstract class CreateUserRepository {
  abstract create(userDto: CreateUserDTO): Promise<void>;
  abstract findByEmail(email: string): Promise<Account>;
}
