import { Injectable } from '@nestjs/common';
import { CreateUserRepository } from '../../repositories/CreateUserRepository';
import { CreateUserDTO } from '../../dtos/create-user.dto';
import * as bcrypt from 'bcrypt';
import { GenerateAccountNumber } from 'src/utils/GenerateAccountsNumber';
import { GenerateConfirmationCode } from 'src/utils/GenerateConfirmationCode';

@Injectable()
export class CreateUserService {
  constructor(private userRepository: CreateUserRepository) {}

  async execute(data: CreateUserDTO): Promise<void> {
    const findUser = await this.userRepository.findByEmail(data.email);

    if (findUser) {
      throw new Error('Usuário já existe');
    }
    const passwordHash = (data.password = bcrypt.hashSync(data.password, 12));

    await this.userRepository.create({
      username: data.username,
      email: data.email,
      phoneNumber: data.phoneNumber,
      password: passwordHash,
      code: GenerateConfirmationCode(),
      accountNumber: GenerateAccountNumber(),
    });
  }
}
