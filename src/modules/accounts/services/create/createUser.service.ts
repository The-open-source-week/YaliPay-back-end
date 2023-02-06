import { Injectable } from '@nestjs/common';
import { CreateUserRepository } from '../../repositories/CreateUserRepository';
import { CreateUserDTO } from '../../dtos/create-user.dto';
import * as bcrypt from 'bcrypt';
import { GenerateAccountNumber } from '../../../../utils/GenerateAccountsNumber';
import { GenerateConfirmationCode } from '../../../../utils/GenerateConfirmationCode';

@Injectable()
export class CreateUserService {
  constructor(private userRepository: CreateUserRepository) {}

  async execute(data: CreateUserDTO): Promise<void> {
    const passwordHash = (data.password = bcrypt.hashSync(data.password, 12));

    await this.userRepository.create({
      username: data.username,
      accountNumber: GenerateAccountNumber(),
      code: GenerateConfirmationCode(),
      password: passwordHash,
      email: data.email,
      phoneNumber: data.phoneNumber,
    });
  }
}
