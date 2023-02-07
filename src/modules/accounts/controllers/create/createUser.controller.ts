import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateUserService } from '../../services/create/createUser.service';
import { CreateUserDTO } from '../../dtos/create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

@Controller('user')
export class CreateUserController {
  constructor(private userService: CreateUserService) {}

  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  @ApiProperty()
  async create(@Body() createUserDTO: CreateUserDTO) {
    return this.userService.execute(createUserDTO);
  }
}
