import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateCardDTO } from 'src/modules/cards/dtos/create-card.dto';
import { CreateCardService } from '../services/create/createCard.service';
import { ApiProperty } from '@nestjs/swagger';

@Controller('card')
export class CreateCardController {
  constructor(private cardService: CreateCardService) {}

  @Post('/create')
  @ApiProperty()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() cardDTO: CreateCardDTO) {
    return this.cardService.execute(cardDTO);
  }
}
