import {
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  UseGuards,
  Patch,
} from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { AuthUserGuard } from '../../../accounts/guards/auth.guard';
import { DesactiveCardService } from '../../services/DesactiveCard /desactiveCard.service';

@Controller('card')
export class DesactiveCardController {
  constructor(private desactiveCard: DesactiveCardService) {}

  @UseGuards(AuthUserGuard)
  @Patch('/desactive/:id')
  @ApiProperty()
  @HttpCode(HttpStatus.OK)
  handle(@Param('id') cardID: string) {
    return this.desactiveCard.execute(cardID);
  }
}
