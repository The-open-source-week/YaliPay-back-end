import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateUserService } from '../../services/create/createUser.service';
import { CreateUserDTO } from '../../dtos/create-user.dto';
import { CreateCardDTO } from 'src/modules/cards/dtos/create-card.dto';

@Controller('user')
export class CreateUserController {
  constructor(private userService: CreateUserService) {}

  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserDTO: CreateUserDTO, cardDTO: CreateCardDTO) {
    return this.userService.execute(createUserDTO, cardDTO);
  }
}
