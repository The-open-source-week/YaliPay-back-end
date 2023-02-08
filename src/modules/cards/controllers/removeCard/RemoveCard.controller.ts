import {
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { AuthUserGuard } from '../../../accounts/guards/auth.guard';
import { RemoveCardService } from '../../services/removeCard/RemoveCard.service';

@Controller('card')
export class RemoveCardController {
  constructor(private removeCardService: RemoveCardService) {}

  @UseGuards(AuthUserGuard)
  @Delete('/remove/:id')
  @ApiProperty()
  @HttpCode(HttpStatus.OK)
  handle(@Param('id') cardID: string) {
    return this.removeCardService.execute(cardID);
  }
}
