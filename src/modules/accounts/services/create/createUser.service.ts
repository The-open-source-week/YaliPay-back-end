import { Injectable } from '@nestjs/common';
import { CreateUserRepository } from '../../repositories/CreateUserRepository';
import { CreateUserDTO } from '../../dtos/create-user.dto';

@Injectable()
export class CreateUserService {
    constructor(private userRepository: CreateUserRepository) { }

    async execute(data: CreateUserDTO): Promise<void> {
        await this.userRepository.create(data);
    }
}
