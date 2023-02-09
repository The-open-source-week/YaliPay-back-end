import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateCardDTO } from '../../../../modules/cards/dtos/create-card.dto';
import { ApiProperty } from '@nestjs/swagger';
import { CreateCardService } from '../../services/create/createCard.service';
import { AuthUserGuard } from '../../../../modules/accounts/guards/auth.guard';
import { Me } from '../../../../modules/accounts/guards/current-user.guard';

@Controller('card')
export class CreateCardController {
  constructor(private cardService: CreateCardService) {}

  @UseGuards(AuthUserGuard)
  @Post('/create')
  @ApiProperty()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() cardDTO: CreateCardDTO, @Me() user: any) {
    cardDTO.accountId = user.sub.sub;
    return this.cardService.execute(cardDTO);
  }
}
