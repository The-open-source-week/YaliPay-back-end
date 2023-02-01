import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateUserService } from '../../services/create/createUser.service';
import { CreateUserDTO } from '../../dtos/create-user.dto';

@Controller('user')
export class CreateUserController {
  constructor(private userService: CreateUserService){}

  @Post("/create")
  @HttpCode(HttpStatus.CREATED)
  create(@Body() CreateUserDTO ){
   return this.userService.execute(CreateUserDTO)
  }
}
