import { Account } from '@prisma/client';
import { CreateUserDTO } from '../dtos/create-user.dto';
export abstract class CreateUserRepository {
  abstract create(userDto: CreateUserDTO): Promise<Account>;
  abstract findByEmail(email: string): Promise<Account>;
  abstract findByPhone(phone: string): Promise<Account>;
  abstract findById(id: string): Promise<Account>;
}
